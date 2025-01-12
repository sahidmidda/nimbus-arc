import React from 'react'

function CommonComp({ title, description }) {
    return (
        <div className=''>
            <h2 className='font-bold text-3xl text-darkprimary'>{title}</h2>
            <p className='text-gray-500 mt-2'>{description}</p>
        </div>
    )
}

export default CommonComp