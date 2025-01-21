import Lookup from '@/app/_data/Lookup';
import React, { useEffect, useState } from 'react'
import CommonComp from './CommonComp';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function PricingModelComp({ onHandleInputChange, formData }) {

    return (
        <div className='mb-10'>
            <CommonComp title={Lookup.createCompStep6Title} description={Lookup.createCompStep6Description} />
            <div className="flex justify-between gap-4 items-center mt-10">
                {
                    Lookup?.pricingOptions?.map((option, index) => (
                        <div
                            key={index}
                            className="w-full rounded-xl border border-1 border-gray-300 p-4 flex flex-col justify-around items-center "
                        >
                            <Image
                                src={option?.icon}
                                alt={option?.title}
                                width={52}
                                height={52}
                                className='mt-4'
                            />
                            <span className='font-bold text-xl mt-4'>
                                {option?.title}
                            </span>
                            <ul className='mt-8 space-y-4'>
                                {option?.features?.map((feature) => (
                                    <li className=''>▶️ {feature}</li>
                                ))}
                            </ul>
                            <Button className="text-black mt-8 mb-4">
                                {option?.button}
                            </Button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PricingModelComp