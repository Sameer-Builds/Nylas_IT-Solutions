import React from "react";
import { useSiteData } from "../context/SiteDataContext";
import IntroSol from "./IntroSol";

function Solutions() {
    const { solutions } = useSiteData();

    return (
        <>
            {solutions.IntroSol.map((item, index) => (
                <IntroSol
                    key={index}
                    backgroundImage={item.backgroundImage}
                    title={item.title}
                    description={item.description}
                    buttons={item.buttons}
                />
            ))}
            <div className="container px-6 py-10 mx-auto">
                <div className="">
                    {solutions.comparison.leftLabels.map((item, index) => (
                        <p key={index} className="" >
                            {item}
                        </p>
            ))}
                </div>
            </div>

        </>
    );
}

export default Solutions;
