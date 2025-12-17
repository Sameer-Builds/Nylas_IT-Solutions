import React from "react";
import { MdArrowForward } from "react-icons/md";

function ImageCard({ image, title, description, caption }) {
    return (
        <div className="bg-white rounded-2xl p-5 transition-all">
            <img
                src={image}
                alt={title}
                className="w-full md:h-screen lg:h-76 object-cover shadow-xl rounded-2xl"
            />

            <h3 className="text-xl font-medium mt-12">{title}</h3>

            <p className="text-blue-900 md:w-full lg:w-80 mt-2">
                {description}
            </p>

            <div className="group flex items-center gap-2 text-blue-600 font-medium cursor-pointer mt-4">
                {caption}
                <MdArrowForward
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                />
            </div>
        </div>
    );
}

export default ImageCard;
