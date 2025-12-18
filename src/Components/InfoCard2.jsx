import React from "react";

function InfoCard({ image, title, description, number, caption }) {
    return (
        <div className="px-8">
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="object-contain rounded-lg"
                />
            )}

            <h3 className=" py-6 text-xl font-semibold">
                {title}
            </h3>

            <p className=" text-gray-700/80 font-semibold    leading-normal">
                {description}
            </p>
            <div className="  float-end lg:float-left">
                <p className="text-blue-600 text-3xl pt-10 font-semibold  "> {number} </p>
                <p className="text-gray-700/80 font-semibold    leading-relaxed  ">{caption}</p>
            </div>
        </div>
    );
}

export default InfoCard;
