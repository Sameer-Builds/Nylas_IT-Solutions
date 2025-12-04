import React from 'react'
import { useSiteData } from "../context/SiteDataContext";

function Logos() {
    const { logos } = useSiteData()

    return (
        <>
            <div className="container px-6 py-14 mx-auto">
                <div className="flex flex-wrap justify-center  gap-10">
                    {logos.map((logo, i) => (
                        <img
                            key={i}
                            src={logo.image}
                            alt={`logo-${i}`}
                            className="h-9 object-contain"
                        />
                    ))}
                </div>
            </div>

        </>
    )
}

export default Logos
