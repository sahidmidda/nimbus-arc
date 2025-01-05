import React from 'react'
import Header from './_components/Header'

function Provider({ children }) {
    return (
        <div>
            <Header />
            <div className="px-6 lg:px-12 xl:px-28 2xl:px-38">
                {children}
            </div>
        </div>
    )
}

export default Provider