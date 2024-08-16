'use client';
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image'
import Link from 'next/link';


const ScrollingNav = () => {
  return (
    <div className=' my-2  bg-white fixed top-0 left-0 right-0 z-50'>
      <div className='flex justify-between items-center px-36'>
        <Image src="/nrt-logo.webp" height="75" width="130" alt='logo-of-nrt' className='bg-white'></Image>
        <ul className='flex  gap-x-12 py-4'>
          <li className='cursor-pointer p-1 w-20 text-[#8F98A8] font-semibold flex items-center justify-center hover:bg-[#b5c1d7] hover:font-bold hover:text-black'>
            <Link href="/Home" className='link'>Home</Link>
          </li>
          <li className='cursor-pointer p-1 w-20 text-[#8F98A8] font-semibold flex items-center justify-center hover:bg-[#b5c1d7] hover:font-bold hover:text-black'>
            <Link href="/About" className='link'>About +</Link>
          </li>
          <li className='cursor-pointer p-1 w-24 text-[#8F98A8] font-semibold flex items-center justify-center hover:bg-[#b5c1d7] hover:font-bold hover:text-black'>
            <Link href="/Services" className='link'>Services +</Link>
          </li>
          <li className='cursor-pointer p-1 w-20 text-[#8F98A8] font-semibold flex items-center justify-center hover:bg-[#b5c1d7] hover:font-bold hover:text-black'>
            <Link href="/Portfolio" className='link'>Portfolio</Link>
          </li>
          <li className='cursor-pointer p-1 w-20 text-[#8F98A8] font-semibold flex items-center justify-center hover:bg-[#b5c1d7] hover:font-bold hover:text-black'>
            <Link href="/Blog" className='link'>Blog</Link>
          </li>
          <li className='cursor-pointer p-1 w-20 text-[#8F98A8] font-semibold flex items-center justify-center hover:bg-[#b5c1d7] hover:font-bold hover:text-black'>
            <Link href="/Career" className='link'>Career</Link>
          </li>
        </ul>
        {/* <ul className='flex gap-x-12 py-4'>
          <li className='cursor-pointer p-1 hover:bg-[#8f98a8] hover:font-bold'>Home</li>
          <li className='cursor-pointer p-1 hover:bg-[#8f98a8] hover:font-bold'>About +</li>
          <li className='cursor-pointer p-1 hover:bg-[#8f98a8] hover:font-bold'>Services +</li>
          <li className='cursor-pointer p-1 hover:bg-[#8f98a8] hover:font-bold'>Portfolio</li>
          <li className='cursor-pointer p-1 hover:bg-[#8f98a8] hover:font-bold'>Blog</li>
          <li className='cursor-pointer p-1 hover:bg-[#8f98a8] hover:font-bold'>Career</li>
        </ul> */}
        <div className='flex gap-x-5 justify-center items-center py-4'>
          <div className='flex justify-center items-center cursor-pointer w-9 p-1 h-9 border-solid border-2 border-black-900 rounded-full hover:bg-sky-100'>
            <FaSearch />
          </div>
          <button className='h-12 w-40 flex justify-center items-center bg-black text-white p-1 rounded font-medium'>Contect us <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ScrollingNav
