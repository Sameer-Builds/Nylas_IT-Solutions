import React from 'react'
import { useSiteData } from "../context/SiteDataContext";
import InfoCard from './InfoCard';
import Information from './Information';

function DevelopmentSpeed() {
    const { DevelopmentSpeed } = useSiteData();

    return (
        <>
            <div className='bg-zinc-900'>
                <div>
                    {DevelopmentSpeed.information.map((item, index) => (
                        <Information
                            key={index}
                            tag={item.tag}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
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
        </>
    )
}

export default DevelopmentSpeed
