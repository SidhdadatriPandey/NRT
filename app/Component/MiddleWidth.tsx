import React from 'react'
import Image from 'next/image'
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";


const MiddleWidth = () => {
    return (
        <div className='bg-white'>
            <div className='text-black bg-white flex justify-between mx-16 items-center py-4 max-[640px]:mr-12 max-[640px]:ml-17'>
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
