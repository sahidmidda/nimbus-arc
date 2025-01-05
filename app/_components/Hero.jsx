import React from 'react'
import Lookup from '../_data/Lookup'
import { Button } from '@/components/ui/button'

function Hero() {
    return (
        <div className='flex flex-col justify-center items-center mt-20 gap-6 text-center' >
            <h2 className='text-5xl font-[800]' style={{
                fontFamily: "Playfair Display",
            }}>
                {Lookup.HeroHeading}
            </h2>
            <h3 className='text-4xl font-semibold text-primary bg-black p-2 italic'>
                {Lookup.HeroSubheading}
            </h3>
            <p className='text-[16px] text-gray-700'>
                {Lookup.HeroDescription}
            </p>

            <div className="flex items-center justify-center gap-4 w-full max-w-2xl mt-10">
                <input type="text" placeholder={Lookup.HeroInputPlaceholder} className='p-3 w-full border border-gray-300 outline-gray-300 rounded-md shadow-md' />
                <Button className='text-black p-6 font-sans text-md' >
                    Generate
                </Button>
            </div>
        </div>
    )
}

export default Hero