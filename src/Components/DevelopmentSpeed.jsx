import React from 'react'
import { useSiteData } from "../context/SiteDataContext";
import InfoCard from './InfoCard';

function DevelopmentSpeed() {
    const { DevelopmentSpeed } = useSiteData();

    return (
        <>
            <section className=' container p-8 mx-auto'>
                <div className=' '>
                    <div className='py-20'>
                        <p className='text-blue-500'>{DevelopmentSpeed.tag}</p>
                        <p className='pt-10 font-semibold  w-2xl text-5xl'>{DevelopmentSpeed.title}</p>
                        <p className='pt-5 text-blue-900 w-2xl tracking-wide text-2xl'>{DevelopmentSpeed.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {DevelopmentSpeed.infoCards.map((item, index) => (
                            <InfoCard
                                key={index}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default DevelopmentSpeed
