import React from 'react'
import { useSiteData } from '../context/SiteDataContext'

function Future() {
    const { future } = useSiteData();

    return (
        <div className="bg-[#111323]">
            <div className="container mx-auto px-6  
                            flex  flex-col md:flex-col lg:flex-row 
                            items-center  lg:gap-40 ">
                <div className="max-w-xl text-center lg:text-left">
                    <p className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
                        {future.title}
                    </p>

                    <p className="pt-5 text-lg lg:text-xl text-gray-200">
                        {future.caption}
                    </p>

                    <div className="pt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <button className="bg-blue-400 text-white font-semibold px-6 py-3 rounded-xl transition">
                            {future.button1}
                        </button>

                        <button className="text-white font-semibold hover:text-blue-400 px-6 py-3 rounded-md transition">
                            {future.button2}
                        </button>
                    </div>
                </div>
                <div className="">
                    <img
                        src={future.image}
                        alt="future"
                        className=" sm:w-3/4 md:w-5/3 lg:w-[420px] object-contain"
                    />
                </div>

            </div>
        </div>
    );
}

export default Future;
