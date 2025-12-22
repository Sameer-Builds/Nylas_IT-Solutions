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
            <div className="container px-6 py-10 mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-3"> 
                <div className="text-xl space-y-12 font-semibold">
                    {solutions.comparison.leftLabels.map((item, index) => (
                        <p key={index} className="" >
                            {item}
                        </p>
                    ))}
                </div>
                <div className="">
                    <img
                        src={solutions.comparison.nylas.logo} alt=""
                        className="h-10" />
                    <p>{solutions.comparison.nylas.name}</p>
                    {solutions.comparison.nylas.items.map((item, index) => (
                        <div key={index} className="flex">
                            <img
                                src={item.image}
                                alt=""
                                className="h-5 mt-1"
                            />
                            <p className="text-gray-800">{item.text}</p>
                        </div>
                    ))}
                    <div>
                        {solutions.comparison.buildYourself.items.map((item, index) => (
                            <div key={index} className="flex">
                                <img src={item.image} alt="" className="h-5 mt-1" />
                                <p className="text-gray-800">{item.text}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
</div>
        </>
    );
}

export default Solutions;
