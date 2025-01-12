import React, { useState } from 'react'
import CommonComp from './CommonComp'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'

function ColorPaletteComp({ onHandleInputChange, formData }) {
    const [selectedPalette, setSelectedPalette] = useState(formData?.palette);
    const handlePaletteChange = (e, palette) => {
        setSelectedPalette(palette);
        onHandleInputChange({
            name: "palette",
            value: palette,
        });
    }
    return (
        <div className='mb-10'>
            <CommonComp title={Lookup.createCompStep3Title} description={Lookup.createCompStep3Description} />
            <div className="mt-10 grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {
                    Colors.map((palette, index) => {
                        return (
                            <div key={index} className='flex flex-col'>
                                <div className="">{palette.name}</div>
                                <div
                                    onClick={(e) => handlePaletteChange(e, palette)}
                                    className={`p-1 flex flex-row cursor-pointer ${selectedPalette?.name === palette?.name && 'border-2 border-darkprimary rounded-lg'
                                        }`}
                                >
                                    {
                                        palette.colors.map((color, i) => (
                                            <div key={i} className=" h-24 w-full" style={{
                                                backgroundColor: color,
                                            }}></div>
                                        ))
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ColorPaletteComp