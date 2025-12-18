import React from 'react'
import { MdArrowForward } from "react-icons/md";
import { useSiteData } from "../context/SiteDataContext";
import ImageCard from './ImageCard';
function MeetNylas() {
    const { MeetNylas } = useSiteData()
    return (
        <>
            <section className='container px-10 py-16 mx-auto'>
                <div >
                    <div className='px-8'>
                        <p className='text-blue-700 font-medium'>{MeetNylas.tag}</p>
                        <p className=' pt-8 text-3xl  md:w-2xl lg:w-3xl font-semibold'>{MeetNylas.title}</p>
                        <p className="pt-5 w-full text-blue-900 text-lg">
                            {MeetNylas.description}
                        </p>

                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-4 pt-8">
                        {MeetNylas.ImageCard.map((item, index) => (
                            <ImageCard
                                key={index}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                caption={item.caption}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default MeetNylas
