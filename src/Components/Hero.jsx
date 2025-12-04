import React from "react";
import { useSiteData } from "../context/SiteDataContext";
import CodeSnippetCard from "./CodeSnippetCard";

function Hero() {
    const { hero } = useSiteData();

    return (
        <section
            className="w-full min-h-screen text-white bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${hero.background})` }}>
            <div className="container mx-auto px-6 py-20 grid grid-cols-1 place-items-center text-center gap-6">
                <h1 className="
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                    font-semibold leading-tight max-w-4xl">
                    Integrate <span className="text-blue-500">inbox</span>,{" "}
                    <span className="text-blue-500">calendar</span> and{" "}
                    <span className="text-blue-500">meetings</span> into your app
                </h1>
                <p className="
                    text-base sm:text-lg md:text-xl 
                    text-gray-200 
                    max-w-2xl">
                    {hero.description}
                </p>
                <div className="
                    grid grid-cols-2 gap-4 
                    w-full max-w-md ">
                    <button className="
                        bg-white text-black 
                        hover:text-blue-400 
                        px-6 py-3 rounded-md 
                        transition ">
                        {hero.button1}
                    </button>
                    <button className="
                        text-white border border-white 
                        hover:text-blue-400 hover:bg-white 
                        px-6 py-3 rounded-md 
                        transition ">
                        {hero.button2}
                    </button>
                </div>
            </div>
            <CodeSnippetCard />
        </section>
    );
}

export default Hero;
