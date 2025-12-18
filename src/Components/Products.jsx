import React from 'react'
import { useSiteData } from '../context/SiteDataContext'
import { Disclosure } from "@headlessui/react";
import { HiPlus, HiMinus } from 'react-icons/hi';
import ImageCard from './ImageCard';
import InfoCard from './InfoCard2';
import Button from './Button';

function Products() {
    const { products } = useSiteData();
    return (
        <>
            <section className='bg-white py-20'>
                <div className='container px-8 mx-auto'>
                    <div>
                        <p className='  text-5xl max-w-2xl text-center m-auto leading-tight  font-medium'>{products.title}</p>
                        <p className=' text-lg pt-6 lg:w-4xl text-center m-auto  leading-normal '>{products.description}</p>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-4 py-20">
                        {products.ImageCard.map((item, index) => (
                            <ImageCard
                                key={index}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                caption={item.caption}
                            />
                        ))}
                    </div>
                    <div className='px-8'>
                        <p className='text-blue-700 font-medium'>{products.tag}</p>
                        <p className=' pt-8 text-3xl  md:w-2xl lg:w-3xl font-semibold'>{products.subtitle}</p>
                        <p className="pt-5 w-full text-blue-900 text-lg">
                            {products.subdescription}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4  space-y-5 pt-10 pb-20 ">
                        {products.infoCards2.map((item, index) => (
                            <InfoCard
                                key={index}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                number={item.number}
                                caption={item.caption}
                            />
                        ))}
                    </div>
                </div>

                <div className='bg-[#213571] '>
                    <div className='container px-6 py-20 mx-auto'>
                        <p className='text-white text-4xl lg:text-5xl font-medium mx-auto lg:w-3xl ' >{products.suggession.title}</p>
                        <p className='text-white  py-6  text-lg lg:text-center lg:w-4xl mx-auto lg:pr-11  '>{products.suggession.description}</p>
                        <div className=" md:flex md:flex-col lg:flex lg:flex-row justify-center   gap-3 space-y-3  md:space-y-0 lg:space-y-0   mt-4">
                            {products.suggession.buttons.map((btn, i) => (
                                <Button key={i} variant={btn.variant} >
                                    {btn.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='container px-6 mx-auto'>
                    <p className='text-5xl w-10 font-medium'>{products.Faq.title}</p>
                    <p className='pt-3'>{products.Faq.caption} <span className='text-blue-600 hover:text-black'>{products.Faq.contact}</span></p>
                    
                </div>
            </section>
        </>
    )
}

export default Products
