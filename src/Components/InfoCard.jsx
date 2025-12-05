import React from "react";

function InfoCard({ image, title, description }) {
    return (
        <div className="p-4">
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="object-contain rounded-lg mb-4"
                />
            )}

            <h3 className="text-2xl font-semibold mb-2">
                {title}
            </h3>

            <p className=" text-blue-900  leading-relaxed">
                {description}
            </p>
        </div>
    );
}

export default InfoCard;
