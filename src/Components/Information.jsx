import React from 'react'

function Information({ tag, title, description }) {
    return (
        <>
            <section className=' container px-6 py-2 mx-auto'>
                <div className=''>
                    <p className='text-blue-500'>{tag}</p>
                    <p className='pt-8 text-white font-semibold  w-xl text-5xl'>{title}</p>
                    <p className='pt-5 text-gray-400 w-xl  text-xl'>{description}</p>
                </div>
            </section>
        </>
    )
}

export default Information
