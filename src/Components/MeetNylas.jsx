import React from 'react'
import { MdArrowForward } from "react-icons/md";
import { useSiteData } from "../context/SiteDataContext";
function MeetNylas() {
    const { MeetNylas } = useSiteData()
    return (
        <>
            <section className='container px-10 py-16 mx-auto'>
                <div >
                    <div className='px-8'>
                        <p className='text-blue-700 font-semibold'>{MeetNylas.tag}</p>
                        <p className=' pt-10 text-3xl  md:w-2xl lg:w-3xl font-semibold'>{MeetNylas.title}</p>
                        <p className="pt-5 w-full text-blue-900 text-lg">
                            {MeetNylas.description}
                        </p>

                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-8 pt-8">
                        {MeetNylas.images.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl   p-5  transition-all"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full md:h-screen lg:h-64 object-cover shadow-xl rounded-2xl"
                                />
                                <h3 className="text-xl font-semibold mt-12">{item.title}</h3>
                                <p className="text-blue-900  md:w-full lg:w-72 text-lg  mt-2">
                                    {item.description}
                                </p>
                                <div className="flex items-center gap-2 text-blue-600 font-medium cursor-pointer mt-4">
                                    {item.caption}
                                    <MdArrowForward size={20} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default MeetNylas
