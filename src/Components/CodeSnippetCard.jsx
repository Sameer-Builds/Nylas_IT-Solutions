import React, { useState, useEffect, useRef } from "react";
import { useSiteData } from "../context/SiteDataContext";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-php";
import CarouselButtons from "./CrouselButtons";


function CodeSnippetCard() {
    const { codeSnippets } = useSiteData();
    const [index, setIndex] = useState(0);
    const codeRef = useRef(null);

    useEffect(() => {
        Prism.highlightAll();
    }, [index]);

    const snippet = codeSnippets[index];

    const next = () => {
        setIndex((prev) => (prev + 1) % codeSnippets.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + codeSnippets.length) % codeSnippets.length);
    };

    const handleLanguageChange = (e) => {
        const lang = e.target.value.toLowerCase();
        const newIndex = codeSnippets.findIndex(
            (item) => item.language.toLowerCase() === lang
        );
        if (newIndex !== -1) setIndex(newIndex);
    };

    return (
        <div className="pb-10">
            <div className="bg-[#0f1117] text-white border border-gray-800 rounded-2xl shadow-2xl px-6 sm:w-[90%] md:w-[75%] lg:w-[59%] mx-auto  hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] relative overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">{snippet.title}</h2>

                    <select
                        value={snippet.language}
                        onChange={handleLanguageChange}
                        className="bg-gray-800 px-3 py-2 mt-2 border border-gray-700 rounded-lg">
                        {codeSnippets.map((item, i) => (
                            <option key={i} value={item.language}>
                                {item.language}
                            </option>
                        ))}
                    </select>
                </div>
                <pre className="bg-[#1a1d23] overflow-x-auto
                p-4 rounded-xl overflow-auto text-sm leading-6 flex">
                    <div className="pr-7 border-gray-800 select-none text-gray-300 w-3 text-right shrink-0">
                        {snippet.lines.map((_, idx) => (
                            <div key={idx} className="leading-6">
                                {idx + 1}
                            </div>
                        ))}
                    </div>

                    <code
                        ref={codeRef}
                        className={`language-${snippet.language.toLowerCase()} whitespace-pre`} >
                        {snippet.lines.join("\n")}
                    </code>
                </pre>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-[#0f1117] to-transparent"></div>
            </div>
            <div className="mt-3 flex justify-center">
                <CarouselButtons onPrev={prev} onNext={next} />
            </div>
        </div>
    );
}
export default CodeSnippetCard;
