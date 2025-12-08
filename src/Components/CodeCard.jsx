import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-java";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import { FaGithub } from "react-icons/fa";
import { useSiteData } from "../context/SiteDataContext";

const languageMap = {
    "Node.js": "js",
    Ruby: "ruby",
    Python: "python",
    Java: "java",
    Curl: "bash",
    Response: "json",
};

function CodeCard() {
    const { codeSnippet } = useSiteData();
    if (!codeSnippet) return null;
    if (!Array.isArray(codeSnippet.code)) return null;
    if (!Array.isArray(codeSnippet.titles)) return null;
    if (codeSnippet.code.length === 0) return null;

    const { titles, code, text } = codeSnippet;

    const [selectedTitle, setSelectedTitle] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        Prism.highlightAll();
    }, [activeIndex, selectedTitle]);

    const active = code[activeIndex] || code[0];

    return (
        <>
            <div className="bg-[#1a2340]">
                <div className=" text-white p-8 rounded-2xl shadow-xl w-full max-w-5xl mx-auto">
                    <div className="flex justify-between items-center mb-6">

                        <select
                            className="bg-transparent border border-gray-500 rounded-md px-3 py-1 text-lg"
                            value={selectedTitle}
                            onChange={(e) => setSelectedTitle(Number(e.target.value))}
                        >
                            {titles.map((title, i) => (
                                <option key={i} value={i} className="text-black">
                                    {title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center gap-8 mt-6 mb-2">
                        {code.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`flex items-center justify-center w-15 h-20 rounded-xl transition-all ${activeIndex === i
                                    ? "bg-[#32407a] shadow-xl"
                                    : "bg-transparent opacity-60 hover:opacity-100"
                                    }`}
                            >
                                <img src={item.image} alt={item.title} className="h-12" />
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-14 mb-6">
                        {code.map((item, i) => (
                            <p
                                key={i}
                                className={`text-sm font-medium cursor-pointer ${activeIndex === i ? "text-white" : "text-gray-400 hover:text-white"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            >
                                {item.title}
                            </p>
                        ))}
                    </div>
                    <div className="h-[400px] overflow-y-auto rounded-xl bg-[#1a2340]">
                        <pre className="p-6 text-sm leading-7  min-h-full">
                            <code className={`language-${languageMap[active.title] || "js"}`}>
                                {active.lines ? active.lines.join("\n") : ""}
                            </code>
                        </pre>
                    </div>
                    <div className="flex justify-end items-center gap-2 mt-5 text-gray-300 hover:text-white cursor-pointer">
                        <FaGithub className="text-lg" />
                        {text}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CodeCard;
