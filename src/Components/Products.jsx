import React from 'react'
import { useSiteData } from '../context/SiteDataContext'
import ImageCard from './ImageCard';

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
                </div>


            </section>
        </>
    )
}

export default Products
