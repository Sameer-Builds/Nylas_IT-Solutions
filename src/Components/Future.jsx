import React from 'react'
import { useSiteData } from '../context/SiteDataContext'

function Future() {
    const {future} = useSiteData();
    return (
        <>
        <div className='bg-[#111323]'>
<div className=" px-10 mx-auto  
                container flex items-center gap-40">
    <div className="max-w-xl">
        <p className="text-5xl font-semibold text-white">
            {future.title}
        </p>
        <p className="pt-5 text-xl text-gray-200">
            {future.caption}
        </p>
        <div className="pt-8 flex gap-4">
            <button className="bg-blue-400 text-white font-semibold px-5 py-3 rounded-xl transition">
                {future.button1}
            </button>

            <button className="text-white font-semibold hover:text-blue-400 px-6 py-3 rounded-md transition">
                {future.button2}
            </button>
        </div>
    </div>
    
    <div className="shrink-0 ">
        <div className='  absolute 
        w-[400px] 
        h-[450px] 
        bg-blue-500 
        rounded-full 
        blur-[120px] 
        opacity-40'></div>
        
        <img src={future.image} alt="" className="w-[420px] relative   "/>
        
    </div>
    
</div>

</div>
        </>
    )
}

export default Future
