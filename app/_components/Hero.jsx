'use client'

import React, { useState } from 'react'
import Lookup from '../_data/Lookup'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function Hero() {
    const router = useRouter();
    const [logoTitle, setLogoTitle] = useState("");

    const handleGenerateClick = () => {
        if (!logoTitle.trim()) {
            return;
        };
        // Navigate to CREATE route
        router.push(`/create?title=${logoTitle.trim()}`);
    };

    return (
        <div className='flex flex-col justify-center items-center mt-20 gap-6 text-center' >
            <h2 className='text-4xl xl:text-5xl font-[800]' style={{
                fontFamily: "Playfair Display",
            }}>
                {Lookup.HeroHeading}
            </h2>
            <h3 className='text-3xl xl:text-4xl font-semibold text-primary bg-black p-2 italic'>
                {Lookup.HeroSubheading}
            </h3>
            <p className='text-sm xl:text-[16px] text-gray-500'>
                {Lookup.HeroDescription}
            </p>

            <div className="flex items-center justify-center gap-4 w-full max-w-2xl mt-10">
                <input
                    type="text"
                    placeholder={Lookup.HeroInputPlaceholder} className='p-3 w-full border border-gray-300 outline-gray-300 rounded-md shadow-md'
                    onChange={(e) => setLogoTitle(e.target.value)}
                />
                <Button
                    className='text-black p-6 font-sans text-md'
                    onClick={handleGenerateClick}
                >
                    Generate
                </Button>
            </div>

            <div className="block mt-20">
                <Button className='p-6 text-md bg-yellow-300 text-black font-mono text-md font-[500]'>
                    Explore Other's Creations on the Market
                    {/* &nbsp; */}
                    <Image src={'./globe.svg'} width='24' height='24' alt='globe' className='ml-2' />
                </Button>
            </div>
        </div>
    )
}

export default Hero