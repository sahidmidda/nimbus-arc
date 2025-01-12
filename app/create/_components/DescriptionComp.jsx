import React from 'react'
import CommonComp from './CommonComp'
import Lookup from '@/app/_data/Lookup'

function DescriptionComp({ onHandleInputChange, formData }) {
    return (
        <div className='mb-10'>
            <CommonComp title={Lookup.createCompStep2Title} description={Lookup.createCompStep2Description} />
            <input
                type="text"
                name='description'
                placeholder="Logo Description"
                className='mt-6 p-3 w-full border border-gray-300 outline-gray-300 rounded-lg'
                value={formData?.description}
                onChange={(e) => onHandleInputChange(e.target)}
            />
        </div>
    )
}

export default DescriptionComp