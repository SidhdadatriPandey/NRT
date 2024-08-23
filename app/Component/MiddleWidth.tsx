import React from 'react'
import Image from 'next/image'
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";


const MiddleWidth = () => {
    return (
        <div className='bg-white fixed top-0 left-0 right-0 z-50'>
            <div className='text-black bg-white flex justify-between px-16 items-center py-4 max-[640px]:pr-12 max-[640px]:pl-17'>
                <Image src="/nrt-logo.webp" height="50" width="130" alt='logo-of-nrt' className='bg-white'></Image>
                <div className='flex gap-x-4'>
                    <div className='flex justify-center items-center cursor-pointer w-10 p-1 h-10 text-xl border-solid border-2 border-black-500  rounded-full hover:bg-sky-100 max-[640px]:hidden'>
                        <CiSearch />
                    </div>
                    <div className='flex justify-center items-center cursor-pointer w-10 p-1 h-10 text-xl border-solid border-2 border-black-900 rounded-full hover:bg-sky-100'>
                        <IoIosMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleWidth
