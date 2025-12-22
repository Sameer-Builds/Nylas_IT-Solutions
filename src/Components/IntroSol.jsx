import React from "react";
import Button from "./Button";

function IntroSol({
    backgroundImage,
    title,
    description,
    buttons = [],
}) {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative container  px-4 sm:px-6 lg:px-10 py-20 lg:py-28 ">
                <div className=" lg:w-5xl text-center mx-auto text-white  ">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-semibold">
                        {title}
                    </h2>

                    <p className="mt-6  text-xl text-white/90">
                        {description}
                    </p>

                    {buttons.length > 0 && (
                        <div className="mt-15  ">
                            {buttons.map((btn, index) => (
                                <Button key={index} variant={btn.variant}>
                                    {btn.label}
                                </Button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
export default IntroSol;
