import React, { useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image'
import Link from 'next/link';
import { userContext } from '../Context/AppContext';


const NavBar = () => {
  const {setBg}=useContext(userContext);
  function handleClick(arg:string){
    setBg(arg);
  }
  return (
    <div className=' my-2  bg-white rounded-lg '>
      <div className='flex justify-between items-center gap-x-8 mr-16 NavBar '>
        <ul className='flex items-center gap-x-4 py-4'>
          <li onClick={()=>handleClick("Home")} className='cursor-pointer p-1 w-20 flex items-center justify-center text-[#8F98A8] font-semibold hover:bg-[#b5c1d7] hover:font-bold hover:text-black'>
          <Link href="/Home" className='link'>Home</Link>
          </li>
          <li onClick={()=>handleClick("About")} className='cursor-pointer p-1 w-20 flex items-center justify-center text-[#8F98A8] font-semibold hover:bg-[#b5c1d7] hover:font-bold hover:text-black'>
          <Link href="/About" className='link'>About +</Link>
          </li>
          <li onClick={()=>handleClick("Services")} className='cursor-pointer p-1 w-24 flex items-center justify-center text-[#8F98A8] font-semibold hover:bg-[#b5c1d7] hover:font-bold hover:text-black'>
          <Link href="/Services" className='link'>Services +</Link>
            </li>
          <li onClick={()=>handleClick("Portfolio")} className='cursor-pointer p-1 w-20 flex items-center justify-center text-[#8F98A8] font-semibold hover:bg-[#b5c1d7] hover:font-bold hover:text-black'>
          <Link href="/Portfolio" className='link'>Portfolio</Link>
            </li>
          <li onClick={()=>handleClick("Blog")} className='cursor-pointer p-1 w-20 flex items-center justify-center text-[#8F98A8] font-semibold hover:bg-[#b5c1d7] hover:font-bold hover:text-black'>
          <Link href="/Blog" className='link'>Blog</Link>
            </li>
          <li onClick={()=>handleClick("Career")} className='cursor-pointer p-1 w-20 flex items-center justify-center text-[#8F98A8] font-semibold hover:bg-[#b5c1d7] hover:font-bold hover:text-black'>
          <Link href="/Career" className='link'>Career</Link>
            </li>
        </ul>
        <div className='flex gap-x-5 justify-center items-center py-4'>
          <div className='flex justify-center items-center cursor-pointer w-9 p-1 h-9 border-solid border-2 border-black-900 rounded-full hover:bg-sky-100'>
          <FaSearch />
          </div>
          <button className='h-12 w-40 flex justify-center items-center bg-black text-white p-1 rounded-md font-medium'>Contect us <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
