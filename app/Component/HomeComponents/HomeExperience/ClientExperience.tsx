'use client';
import React, { useState } from 'react'
import { Client, ClientExperienceData } from './ClientExperienceData'
import { IoMdArrowUp } from "react-icons/io";
import { IoArrowDownOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
<FaArrowRight />




const ClientExperience = () => {
    const [idx, setIdx] = useState<number>(0);

    function handleUpClick() {
        if (idx < 4) {
            setIdx(idx + 1);
        } else {
            setIdx(0);
        }
    }


    function handleDownClick() {
        if (idx > 0) {
            setIdx(idx - 1);
        } else {
            setIdx(4);
        }
    }

    return (
        <div className='flex flex-col gap-y-2 justify-center items-center p-3 bg-[#a4a8af] lg:py-10 rounded-lg lg:w-[1000px]' >
            <h3>Testimonials</h3>
            <h4 className='text-[30px] lg:text-[44px] font-semibold text-center'>Some Expressions Of Our Clients</h4>
            <div>
                <div className='flex flex-col lg:flex-row justify-between xl:w-[1000px] p:2 xl:p-9'>
                    <div>
                        <div className='flex flex-col items-center lg:w-[794px] lg:h-[205px] gap-y-9 bg-white lg:p-5 rounded-lg'>
                            <p className='text-center text-[#8F98A8]'>{ClientExperienceData[idx].exp}</p>
                            <div className='flex flex-col items-center'>
                                <h5 className='text-[20px] font-medium'>{ClientExperienceData[idx].fullName}</h5>
                                <h6 className='text-[#8F98A8]'>{ClientExperienceData[idx].position}</h6>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-5 justify-center max-[1024px]:hidden'>
                        <div onClick={handleUpClick} className='flex justify-center items-center cursor-pointer w-16 p-1 h-16 border-solid border-2 border-black-900 text-2xl rounded-full text-black hover:bg-black hover:text-white'>
                            <IoMdArrowUp />
                        </div>
                        <div onClick={handleDownClick} className='flex justify-center items-center cursor-pointer w-16 p-1 h-16 border-solid border-2 border-black-900 text-2xl rounded-full text-black hover:bg-black hover:text-white'>
                            <IoArrowDownOutline />
                        </div>
                    </div>
                    <div className='flex gap-x-5 justify-center lg:hidden mt-4'>
                        <div onClick={handleUpClick} className='flex justify-center items-center cursor-pointer w-16 p-1 h-16 border-solid border-2 border-black-900 text-2xl rounded-full text-black hover:bg-black hover:text-white'>
                        <FaArrowLeft />
                        </div>
                        <div onClick={handleDownClick} className='flex justify-center items-center cursor-pointer w-16 p-1 h-16 border-solid border-2 border-black-900 text-2xl rounded-full text-black hover:bg-black hover:text-white'>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className='flex gap-x-40 items-center justify-between w-1/2 relative px-9 left-[350px] max-[1024px]:hidden'>
                    <div className='flex gap-x-2'>
                        {Array.from({ length: 5 }, (_, index) => (
                            <FaStar key={index} className='text-yellow-400' />
                        ))}
                    </div>
                    <div onClick={handleUpClick} className='flex justify-center items-center cursor-pointer w-20 p-1 h-20 border-solid border-2 border-black-900 text-[40px] rounded-full text-black font-bold'>
                    <RiDoubleQuotesR />
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default ClientExperience
