import React from "react";

function InfoCard({ image, title, description }) {
    return (
        <div className="px-8 py-4">
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="object-contain rounded-lg mb-4"
                />
            )}

            <h3 className=" text-white text-2xl font-semibold mb-2">
                {title}
            </h3>

            <p className=" text-gray-400 font-semibold    leading-relaxed">
                {description}
            </p>
        </div>
    );
}

export default InfoCard;
