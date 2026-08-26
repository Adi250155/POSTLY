import React from "react";
import logo from "../assets/logo.jpeg";

function Logo({ width = "60px" }) {
    return (
        <img
           src={logo}
           alt="Logo"
           style={{
           width: width,
           height: width,
           
           }}
           className="rounded-full border-2 border-gray-300  object-cover"
           />
    );
}

export default Logo;