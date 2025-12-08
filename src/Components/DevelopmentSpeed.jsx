import React from 'react'
import { useSiteData } from "../context/SiteDataContext";
import InfoCard from './InfoCard';
import Information from './Information';
import CodeCard from './CodeCard';

function DevelopmentSpeed() {
    const { DevelopmentSpeed } = useSiteData();

    return (
        <>
        <div className='bg-[#111323]'>
        <div className="container px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 space-x-3 space-y-5 pt-10 ">
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

                <div>
                    <CodeCard />
                </div>

            </div>
        </div>
        </div>
        </>
    );
}

export default DevelopmentSpeed;
