'use client';
import React from 'react'
import { FaPlay } from "react-icons/fa";

// background-image: url('/hero-s-1.png');
//     width: 520px;
//     height: 534px;
//     background-size: cover;
const Hiring = () => {
    return (
        <div className='head-main-container'>
            <div className='text-white w-6/12 mx-20 mb-8 Hiring pl-20 pt-32'>
                <div className='xl:w-[825px] md:w-[600px] '>
                    <h3 className='font-bold'>IT SERVICE AGENCY</h3>
                    <h1 className='text-5xl mt-8'>Hire App Developers & Digital Marketers</h1>
                    <div className='mt-3 flex gap-x-8'>
                        <button className='bg-white w-40 h-12 rounded text-black font-bold hover:bg-black hover:text-white'>Get started</button>
                        <div className='flex gap-x-4 items-center'>
                            <div className='flex bg-white justify-center items-center cursor-pointer w-14 p-1 h-14 border-solid border-2 border-black-900 rounded-full text-black hover:bg-black hover:text-white'>
                                <FaPlay />
                            </div>
                            <span className='font-bold'>Working Video</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hiring
