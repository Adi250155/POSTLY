import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            await authService.logout();

            dispatch(logout());

            navigate("/login");
        } catch (error) {
            console.log("Logout error:", error);
        }
    };

    return (
        <button
            onClick={logoutHandler}
            className="
                px-4
                py-2
                rounded-lg
                bg-[#3291B6]
                text-white
                hover:bg-[#e71616]
                transition-all
                duration-200
            "
        >
            Logout
        </button>
    );
}

export default LogoutBtn;