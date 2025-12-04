import React from "react";

function Button({
    children,
    className = "",
    variant = "default",
    onClick,
    type = "button",
}) {
    // Default styles + variant-specific styles
    const baseStyle =
        "rounded-xl px-5 py-2 font-medium transition-all duration-300";

    const variants = {
        default: "bg-black text-white  hover:text-blue-500",
        outline:
            "border border-white text-white  hover:bg-white hover:blue-500",
        primary: "bg-white text-white hover:text-blue-500",
        secondary: " px-7 py-2 border border-blue-500 bg-blue-500 hover:bg-white text-white",
        soft: " px-8 py-2 border border-blue-500 bg-white hover:bg-blue-500 hover:text-white text-blue",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
