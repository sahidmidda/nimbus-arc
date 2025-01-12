import React, { useState } from 'react'
import CommonComp from './CommonComp'
import Lookup from '@/app/_data/Lookup'
import Designs from '@/app/_data/Designs'
import Image from 'next/image'

function DesignStyleComp({ onHandleInputChange, formData }) {
    const [selectedDesign, setSelectedDesign] = useState(formData?.style);
    const handleDesignChange = (e, design) => {
        setSelectedDesign(design);
        onHandleInputChange({
            name: "style",
            value: design,
        });
    }
    return (
        <div className='mb-10'>
            <CommonComp title={Lookup.createCompStep4Title} description={Lookup.createCompStep4Description} />
            <div className="mt-10 grid grid-flow-row grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
                {
                    Designs.map((design, index) => {
                        return (
                            <div
                                key={index}
                                onClick={(e) => handleDesignChange(e, design)}
                                className={`p-1 cursor-pointer rounded-xl flex flex-col items-center justify-center gap-2 ${selectedDesign?.title === design?.title && 'border-2 border-darkprimary'}`}

                            >
                                <Image
                                    src={design.image} alt={design.title}
                                    width="148" height="148"
                                    className='rounded-xl' />
                                <div className="font-light text-xs sm:text-sm md:text-sm">{design.title}</div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default DesignStyleComp