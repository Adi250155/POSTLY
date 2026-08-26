import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from "./index"
import { useDispatch } from "react-redux"
import authService from "../appwrite/auth"
import { useForm } from "react-hook-form"
import logoBg from "../assets/login-bg.png";

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")

        try {
            const session = await authService.login(data)

            if (session) {
                const userData = await authService.getCurrentUser()

                if (userData) {
                    dispatch(authLogin({ userData }))
                }

                navigate("/")
            }

        } catch (error) {
            setError(error.message)
        }
    }

    return (
      <div 
    className="min-h-screen flex items-center justify-center w-full py-12 px-4 bg-cover bg-center bg-no-repeat" 
    style={{ backgroundImage: `url(${logoBg})` }} 
>
    
    <div className="
        mx-auto
        w-full
        max-w-lg
        bg-white
        rounded-2xl
        p-10
        border
        border-[#BB8ED0]
        shadow-lg
    ">

                {/* Logo */}
                 <div className="mb-6 flex justify-center">
                   <h1 className="text-3xl font-bold text-[#3291B6]">
                         Postly
                     </h1>
                  </div>

                {/* Heading */}
                <h2 className="text-center text-2xl font-bold leading-tight text-[#333333]">
                    Sign in to your account
                </h2>

                {/* Signup link */}
                <p className="mt-2 text-center text-base text-[#4A4A4A]">
                    Don't have any account?&nbsp;

                    <Link
                        to="/signup"
                        className="
                            font-medium
                            text-[#3291B6]
                            hover:text-[#BB8ED0]
                            transition-all
                            duration-200
                            hover:underline
                        "
                    >
                        Sign Up
                    </Link>
                </p>

                {/* Error */}
                {error && (
                    <p className="text-red-600 mt-8 text-center">
                        {error}
                    </p>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit(login)} className="mt-8">

                    <div className="space-y-5">

                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                            })}
                        />

                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />

                        <Button
                            type="submit"
                            className="
                                w-full
                                bg-[#3291B6]
                                hover:bg-[#BB8ED0]
                                text-white
                                transition-all
                                duration-200
                            "
                        >
                            Sign in
                        </Button>

                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login