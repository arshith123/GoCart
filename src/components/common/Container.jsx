import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='h-full p-8'>
            {children}
        </div>
    )
}

export default Container