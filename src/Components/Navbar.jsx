import React, { useState, useEffect } from "react";
import { useSiteData } from "../context/SiteDataContext";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";      // <-- Add hamburger & close icons
import Button from './Button';

function Navbar() {

    const { navbar } = useSiteData();

    const icons = {
        MdKeyboardArrowDown,
        MdKeyboardArrowRight
    };

    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);   // <-- Mobile menu state

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`sticky top-0 z-50 transition-all duration-300 
            ${isScrolled ? "bg-white shadow-md" : "bg-black/90"}`}
        >
            <div className="w-full overflow-x-hidden">
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <img src={navbar.logo} alt="logo" className="h-8 object-contain" />
                        <p className="text-blue-400/90 text-2xl font-serif">{navbar.name}</p>
                    </div>

                    {/* Desktop Links */}
                    <ul
                        className={`hidden md:flex items-center gap-6 text-sm transition-colors duration-300 
                        ${isScrolled ? "text-black" : "text-white"}`}
                    >
                        {navbar.navLinks.map((item, index) => {
                            const Icon = icons[item.icon];
                            return (
                                <li
                                    key={index}
                                    className={`inline-flex items-center p-3 rounded-md cursor-pointer transition duration-200
                                    ${isScrolled
                                            ? "hover:bg-black hover:text-white"
                                            : "hover:bg-white hover:text-blue-400"}`}
                                >
                                    {item.text}
                                    {Icon && <Icon size={14} />}
                                </li>
                            );
                        })}
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-5">
                        {navbar.buttons.map((btn, i) => (
                            <Button key={i} variant={btn.variant}>
                                {btn.label}
                            </Button>
                        ))}
                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        className="md:hidden text-white text-3xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <HiX /> : <HiMenu />}
                    </button>

                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div
                        className={`md:hidden px-6 pb-4 transition-all duration-300 
                        ${isScrolled ? "bg-white text-black" : "bg-black/90 text-white"}`}
                    >

                        {/* Mobile Nav Links */}
                        <ul className="flex flex-col gap-4 text-sm">
                            {navbar.navLinks.map((item, index) => {
                                const Icon = icons[item.icon];
                                return (
                                    <li
                                        key={index}
                                        className="flex items-center justify-between py-2 border-b border-gray-600/30"
                                    >
                                        {item.text}
                                        {Icon && <Icon size={16} />}
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Mobile Buttons */}
                        <div className="flex flex-col gap-3 mt-4">
                            {navbar.buttons.map((btn, i) => (
                                <Button key={i} variant={btn.variant}>
                                    {btn.label}
                                </Button>
                            ))}
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}

export default Navbar;
