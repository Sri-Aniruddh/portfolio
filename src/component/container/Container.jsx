import React from 'react'

export default function Container({ children }) {


    return (
        <div className="container-fluid shadow-sm mx-auto  dark:bg-gray-900  dark:border-black">
            {children}
        </div>



    )
}
