import React, { useState, useEffect } from "react";
import { useSiteData } from "../context/SiteDataContext";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar() {
    const { navbar } = useSiteData();

    const icons = {
        MdKeyboardArrowDown,
        MdKeyboardArrowRight,
    };

    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`sticky top-0 z-50 transition-all duration-300 
            ${isScrolled ? "bg-white shadow-md" : "bg-black/90"}`}
        >
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer">
                    <img src={navbar.logo} alt="logo" className="h-8" />
                    <p className="text-blue-500 text-2xl font-serif">{navbar.name}</p>
                </div>
                <ul
                    className={`hidden lg:flex items-center gap-5 text-sm transition-all duration-200 
                    ${isScrolled ? "text-black" : "text-white"}`}
                >
                    {navbar.navLinks.map((item, i) => {
                        const Icon = icons[item.icon];
                        return (
                            <li key={i} >
                                <Link
                                to={item.path}
                                className={`group inline-flex items-center gap-1 p-2 rounded-md cursor-pointer 
                                        transition duration-200
                                        ${isScrolled
                                        ? "hover:bg-black hover:text-white"
                                        : "hover:bg-white hover:text-blue-400"
                                    }`} >
                                {item.text}
                                {Icon && (
                                    <Icon
                                        size={20}
                                        className="transition-transform duration-300 group-hover:rotate-180"
                                    />
                                )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="hidden lg:flex items-center gap-3">
                    {navbar.buttons.map((btn, i) => (
                        <Button key={i} variant={btn.variant} isScrolled={isScrolled}>
                            {btn.label}
                        </Button>
                    ))}
                </div>
                <button
                    className={`lg:hidden text-3xl transition duration-200 ${isScrolled ? "text-black" : "text-white"
                        }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>
            {menuOpen && (
                <div
                    className={`lg:hidden px-6 pb-5 transition-all duration-300
                    ${isScrolled ? "bg-white text-black" : "bg-black/90 text-white"}`}
                >
                    <ul className="flex flex-col text-sm">
                        {navbar.navLinks.map((item, i) => {
                            const Icon = icons[item.icon];
                            return (
                                <li key={i} >
                                    <Link
                                    to={item.path}
                                    className="flex items-center justify-between py-3 border-b border-gray-500/20"
                                >
                                    {item.text}
                                    {Icon && <Icon size={16} />}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex flex-col gap-3 mt-4">
                        {navbar.buttons.map((btn, i) => (
                            <Button key={i} variant={btn.variant} isScrolled={isScrolled}>
                                {btn.label}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
