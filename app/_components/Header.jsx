import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className='px-6 lg:px-12 xl:px-28 2xl:px-38 p-3 bg-[#101720] flex justify-between items-center shadow-sm'>
            <Link href="/" className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white" style={{
                fontFamily: "Dancing Script",
            }}>
                Nimbus Arc
            </Link>
            <Button className="text-black">Get Started</Button>
        </div>
    )
}

export default Header