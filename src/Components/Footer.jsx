import React from "react";
import { useSiteData } from "../context/SiteDataContext";

import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

function Footer() {
    const { footer } = useSiteData();

    const iconMap = {
        FaGithub,
        FaLinkedin,
        FaYoutube,
        RiTwitterXLine,
    };

    return (
        <footer className="bg-[#0D1117] text-gray-300 py-12 px-6">
            <div className="max-w-7xl mx-auto">
            
                <div className="flex flex-col px-10 gap-6">
                    <div className="flex gap-3">
                    <img
                        src={footer.logo}
                        alt=''
                        className="w-15"
                    />
                    <p className="text-white text-4xl font-serif">{footer.name}</p>
                    </div>
                    <div className="flex items-center gap-6">
                        {footer.socialIcons.map((item, i) => {
                            const Icon = iconMap[item.icon.trim()];
                            if (!Icon) return null;
                            return (
                                <Icon
                                    key={i}
                                    className="text-2xl hover:text-white transition cursor-pointer"
                                />
                            );
                        })}
                    </div>
                </div>
                <div className=" grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-6  gap-16 mt-10 px-10 ">
                    {footer.sections.map((section, i) => (
                        <div key={i}>
                            <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link, idx) => (
                                    <li
                                        key={idx}
                                        className="cursor-pointer hover:text-white transition"
                                    >
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-700 mt-12 pt-6 px-10 ">
                    <p className="text-gray-400 mb-3">{footer.bottom.copyright}</p>

                    <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                        {footer.bottom.links.map((link, i) => (
                            <span key={i} className="hover:text-white cursor-pointer">
                                {link}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
