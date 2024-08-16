import React from 'react'
import Image from 'next/image'

const Logo = () => {
    return (
        <div className='half-circle flex justify-center items-start ml-36 logo '>
            <Image src="/nrt-logo.webp" height="50" width="130" alt='logo-of-nrt' className='bg-white'></Image>
        </div>
    )
}

export default Logo
