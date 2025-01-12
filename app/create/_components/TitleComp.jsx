import React from 'react'
import CommonComp from './CommonComp'
import Lookup from '@/app/_data/Lookup'
import { useSearchParams } from 'next/navigation'

function TitleComp({ onHandleInputChange, formData }) {
    const searchParams = useSearchParams();
    const logoTitle = searchParams?.get("title") || "";
    // const [logoTitle, setLogoTitle] = useState();
    return (
        <div className='mb-10'>
            <CommonComp title={Lookup.createCompStep1Title} description={Lookup.createCompStep1Description} />
            <input
                type="text"
                name='title'
                placeholder={Lookup.HeroInputPlaceholder}
                className='mt-6 p-3 w-full border border-gray-300 outline-gray-300 rounded-lg'
                defaultValue={logoTitle}
                // onChange={(e) => setLogoTitle(e.target.value)}
                onChange={(e) => onHandleInputChange(e.target)}
            />
        </div>
    )
}

export default TitleComp