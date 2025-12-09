import React from "react";

function Button({
    children,
    className = "",
    variant = "default",
    isScrolled = false,
    onClick,
    type = "button",
}) {
    const base = "rounded-xl px-6 py-2 transition duration-200";

    // NORMAL (not scrolled) variants
    const normal = {
        default: "bg-black text-white border border-transparent hover:bg-white hover:text-blue-500",
        primary: "bg-transparent text-white hover:text-blue-400",
    };

    // SCROLLED variants
    const scrolled = {
        default: "bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white",
        primary: "bg-blue-500 text-white border border-blue-500 hover:bg-white hover:text-blue-500",
    };

    const styles = isScrolled ? scrolled[variant] : normal[variant];

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${base} ${styles} ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
