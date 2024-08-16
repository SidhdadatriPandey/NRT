'use client';
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";


const Info = () => {
    return (
        <div className=' bg-white '>
            <div className='flex justify-between  py-4 pl-36 pr-16'>
                <div className='flex gap-x-10'>
                    <div className='flex gap-x-3 items-center'>
                        <div className='flex justify-center items-center w-9 p-1 h-9 border-solid border-2 border-black-900 rounded-full text-[#8F98A8] text-[18px]'>
                            <FaPhoneAlt />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[#8F98A8] font-robo'>Call us</span>
                            <a className='font-bold cursor-pointer'>(+91) 9981047124</a>
                        </div>
                    </div>
                    <div className='flex gap-x-3 items-center'>
                        <div className='flex justify-center items-center w-9 p-1 h-9 border-solid border-2 border-black-900 rounded-full text-[#8F98A8] text-[18px]'>
                            <MdEmail />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[#8F98A8]'>Mail us</span>
                            <a className='font-bold cursor-pointer'>info@nrt.co.in</a>
                        </div>
                    </div>
                </div>
                <div className='flex gap-x-4'>
                    <div className='flex justify-center items-center cursor-pointer w-9 p-1 h-9 border-solid border-2 border-black-900 rounded-full text-black hover:bg-black hover:text-white'>
                        <FaFacebookF />
                    </div>
                    <div className='flex justify-center items-center cursor-pointer w-9 p-1 h-9 border-solid border-2 border-black-900 rounded-full text-red-600 hover:bg-black hover:text-white'>
                        <IoLogoInstagram />
                    </div>
                    <div className='flex justify-center items-center cursor-pointer w-9 p-1 h-9 border-solid border-2 border-black-900 rounded-full text-black hover:bg-black hover:text-white'>
                        <FaLinkedin />
                    </div>
                    <div className='flex justify-center items-center cursor-pointer w-9 p-1 h-9 border-solid border-2 border-black-900 rounded-full text-black hover:bg-black hover:text-white'>
                        <FaYoutube />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
