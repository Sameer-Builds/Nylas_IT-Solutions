import React from 'react'
import { useSiteData } from '../context/SiteDataContext'
import Information from './Information';
import Future from './Future';

function Security() {
    const { security } = useSiteData();

    return (
        <>
            <section
                className="
                bg-[#111323] 
                px-6 py-30 mx-auto 
                grid grid-cols-1 lg:grid-cols-2
                gap-12 lg:gap-0
                " >
                <div className="flex flex-col justify-center">
                    <div>
                        {security.information.map((item, index) => (
                            <Information
                                key={index}
                                tag={item.tag}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                    <div className="px-0 lg:px-6 flex flex-wrap gap-8 pt-10 justify-center lg:justify-start">
                        {security.logos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo.image}
                                alt=""
                                className=" h-18 lg:h-15 object-contain"
                            />
                        ))}
                    </div>
                    <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-10 md:gap-0 py-12  text-center sm:text-left">
                        {security.achievements.map((item, index) => (
                            <div key={index} className="p-4">
                                <h3 className="text-4xl font-bold text-white">
                                    {item.title}
                                </h3>
                                <p className="pt-2  text-gray-300">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <img
                        src={security.image}
                        alt=""
                        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none 
                                h-auto object-contain"
                    />
                </div>
            </section>
            <Future />
        </>
    )
}

export default Security
