import React from 'react'
import { useSiteData } from '../context/SiteDataContext'
import Information from './Information';
import Future from './Future';


function Security() {
    const { security } = useSiteData();
    return (
        <>
            <section className='bg-[#111323] px-6 py-20 mx-auto grid grid-cols-2'>
                <div className=''>
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
                    <div className=' px-6 flex gap-8 pt-16'>
                        {security.logos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo.image}
                                alt="" />
                        ))}
                    </div>
                    <div className='flex py-16'>
                        {security.achievements.map((item, index) => (
                            <div key={index} className="p-4">
                                <h3 className="text-4xl font-bold text-white">{item.title}</h3>
                                <p className="pt-2 text-gray-300">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <img src={security.image} alt="" className='h-screen object-contain' />
                </div>
            </section>
            <Future />



        </>
    )
}

export default Security
