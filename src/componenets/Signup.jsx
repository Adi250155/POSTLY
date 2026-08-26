import React, { useState } from "react";

import authService from "../appwrite/auth";

import { Link, useNavigate } from "react-router-dom";

import { login } from "../store/authSlice";

import Button from "./Button";

import Input from "./Input";

import { useDispatch } from "react-redux";

import { useForm } from "react-hook-form";

import logoBg from "../assets/login-bg.png";

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError("");

        try {
            const userData = await authService.createAccount(data);

            if (userData) {
                const currentUser = await authService.getCurrentUser();

                if (currentUser) {
                    dispatch(login({ userData: currentUser }));
                }

                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden">

            {/* Full Screen Background */}
            <img
                src={logoBg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Signup Content */}
            <div className="relative z-10 min-h-screen w-full flex items-center justify-center px-4 py-12">

                <div
                    className="
                        mx-auto
                        w-full
                        max-w-lg
                        rounded-2xl
                        border
                        border-[#BB8ED0]
                        bg-white/95
                        p-10
                        shadow-xl
                    "
                >

                    {/* Postly Logo */}
                    <div className="mb-6 flex justify-center">
                        <h1 className="text-3xl font-bold text-[#3291B6]">
                            Postly
                        </h1>
                    </div>

                    {/* Heading */}
                    <h2 className="text-center text-2xl font-bold leading-tight text-[#333333]">
                        Sign up to create account
                    </h2>

                    {/* Login Link */}
                    <p className="mt-2 text-center text-base text-[#4A4A4A]">
                        Already have an account?{" "}

                        <Link
                            to="/login"
                            className="
                                font-medium
                                text-[#3291B6]
                                transition-all
                                duration-200
                                hover:text-[#BB8ED0]
                                hover:underline
                            "
                        >
                            Sign In
                        </Link>
                    </p>

                    {/* Error */}
                    {error && (
                        <p className="mt-8 text-center text-red-600">
                            {error}
                        </p>
                    )}

                    {/* Signup Form */}
                    <form
                        onSubmit={handleSubmit(create)}
                        className="mt-8"
                    >
                        <div className="space-y-5">

                            {/* Name */}
                            <Input
                                label="Full Name:"
                                placeholder="Enter your full name"
                                {...register("name", {
                                    required: true,
                                })}
                            />

                            {/* Email */}
                            <Input
                                label="Email:"
                                placeholder="Enter your email"
                                type="email"
                                {...register("email", {
                                    required: true,
                                    validate: {
                                        matchPattern: (value) =>
                                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                                                value
                                            ) ||
                                            "Email address must be a valid address",
                                    },
                                })}
                            />

                            {/* Password */}
                            <Input
                                label="Password:"
                                type="password"
                                placeholder="Enter your password"
                                {...register("password", {
                                    required: true,
                                })}
                            />

                            {/* Create Account Button */}
                            <Button
                                type="submit"
                                className="
                                    w-full
                                    bg-[#3291B6]
                                    text-white
                                    transition-all
                                    duration-200
                                    hover:bg-[#BB8ED0]
                                "
                            >
                                Create Account
                            </Button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;