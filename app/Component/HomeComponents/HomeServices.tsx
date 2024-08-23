import React from 'react';
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { HomeServicesData, Service } from './HomeServicesData';




const HomeServices = () => {
    return (
        <div className='flex px-32 flex-col  py-[125px] justify-center items-center bg-[#F6F5FA] max-[670px]:px-7'>
            <h3 className='font-medium'>OUR SERVICES</h3>
            <h2 className='text-[44px] font-medium max-[670px]:text-[30px]'>OUR BEST SERVICES</h2>
            <div className=' flex flex-wrap gap-8 rounded justify-center items-center mt-7'>
            {
             HomeServicesData.map((data:Service,index:number)=>{
               return <div key={index} className='bg-white flex flex-col w-[370px] h-[440px] rounded justify-center items-center p-12 max-[400px]:p-6 max-[400px]:w-[325px] max-[400px]:h-[440px]'>
                    <div className='bg-white flex flex-col gap-y-4 justify-center items-center'>
                        <div className='flex justify-center items-center cursor-pointer w-24 p-1 h-24 text-4xl border-solid border-2 border-black-900 rounded-full text-black hover:bg-black hover:text-white'>
                            <data.icon />
                        </div>
                        <h4 className='text-[22px] font-medium'>{data.title}</h4>
                        <p className='text-center text-[#8F98A8]'>{data.description}</p>
                        <div className='flex justify-center items-center cursor-pointer px-6 py-4 text-4 font-medium border-solid border-2 border-black-900 text-black hover:bg-black hover:text-white'>
                           {data.btn}
                        </div>
                    </div>
                </div>
             })
           }
            </div>
            {/* <div className=' flex flex-wrap gap-8 rounded justify-center items-center'>
                <div className='bg-white flex flex-col w-[370px] h-[440px] rounded justify-center items-center p-12'>
                    <div className='bg-white flex flex-col gap-y-4 justify-center items-center'>
                        <div className='flex justify-center items-center cursor-pointer w-24 p-1 h-24 text-4xl border-solid border-2 border-black-900 rounded-full text-black hover:bg-black hover:text-white'>
                            <FaPeopleGroup />
                        </div>
                        <h4 className='text-[22px] font-medium'>E-Commerce</h4>
                        <p className='text-center text-[#8F98A8]'>E-commerce is a rapidly growing industry, with global e-commerce sales expected to reach $6.5 trilli...</p>
                        <div className='flex justify-center items-center cursor-pointer px-6 py-4 text-4 font-medium border-solid border-2 border-black-900 text-black hover:bg-black hover:text-white'>
                            + E-COMMERERCE
                        </div>
                    </div>
                </div>
                <div className='bg-white flex flex-col w-[370px] h-[440px] rounded justify-center items-center p-12'>
                    <div className='bg-white flex flex-col gap-y-4 justify-center items-center'>
                        <div className='flex justify-center items-center cursor-pointer w-24 p-1 h-24 text-4xl border-solid border-2 border-black-900 rounded-full text-black hover:bg-black hover:text-white'>
                            <FaLaptopCode />
                        </div>
                        <h4 className='text-[22px] font-medium'>Mobile App Development</h4>
                        <p className='text-center text-[#8F98A8]'>Mobile app development is the process of creating software applications that run on mobile devices, ...</p>
                        <div className='flex justify-center items-center cursor-pointer px-6 py-4 text-4 font-medium border-solid border-2 border-black-900 text-black hover:bg-black hover:text-white'>
                            + MOBILE APP
                        </div>
                    </div>
                </div>
                <div className='bg-white flex flex-col w-[370px] h-[440px] rounded justify-center items-center p-12'>
                    <div className='bg-white flex flex-col gap-y-4 justify-center items-center'>
                        <div className='flex justify-center items-center cursor-pointer w-24 p-1 h-24 text-4xl border-solid border-2 border-black-900 rounded-full text-black hover:bg-black hover:text-white'>
                            <FaLaptopCode />
                        </div>
                        <h4 className='text-[22px] font-medium'>Web Development</h4>
                        <p className='text-center text-[#8F98A8]'>Web development involves using various programming languages and frameworks, such as HTML, CSS, Java...</p>
                        <div className='flex justify-center items-center cursor-pointer px-6 py-4 text-4 font-medium border-solid border-2 border-black-900 text-black hover:bg-black hover:text-white'>
                            + WEB
                        </div>
                    </div>
                </div>
                <div className='bg-white flex flex-col w-[370px] h-[440px] rounded justify-center items-center p-12'>
                    <div className='bg-white flex flex-col gap-y-4 justify-center items-center'>
                        <div className='flex justify-center items-center cursor-pointer w-24 p-1 h-24 text-4xl border-solid border-2 border-black-900 rounded-full text-black hover:bg-black hover:text-white'>
                            <TbWorld />
                        </div>
                        <h4 className='text-[22px] font-medium'>SEO</h4>
                        <p className='text-center text-[#8F98A8]'>At Newrise Technosys, we understand the importance of having a strong online presence, and Search En...</p>
                        <div className='flex justify-center items-center cursor-pointer px-6 py-4 text-4 font-medium border-solid border-2 border-black-900 text-black hover:bg-black hover:text-white'>
                            + SEO
                        </div>
                    </div>
                </div>
                <div className='bg-white flex flex-col w-[370px] h-[440px] rounded justify-center items-center p-12'>
                    <div className='bg-white flex flex-col gap-y-4 justify-center items-center'>
                        <div className='flex justify-center items-center cursor-pointer w-24 p-1 h-24 text-4xl border-solid border-2 border-black-900 rounded-full text-black hover:bg-black hover:text-white'>
                            <FaPeopleGroup />
                        </div>
                        E-commerce is a rapidly growing industry, with global e-commerce sales expected to reach $6.5 trilli...

                        +E-COMMERERCE
                        <h4 className='text-[22px] font-medium'>E-Commerce</h4>
                        <p className='text-center text-[#8F98A8]'>E-commerce is a rapidly growing industry, with global e-commerce sales expected to reach $6.5 trilli...</p>
                        <div className='flex justify-center items-center cursor-pointer px-6 py-4 text-4 font-medium border-solid border-2 border-black-900 text-black hover:bg-black hover:text-white'>
                            +E-COMMERERCE
                        </div>
                    </div>
                </div>
                <div className='bg-white flex flex-col w-[370px] h-[440px] rounded justify-center items-center p-12'>
                    <div className='bg-white flex flex-col gap-y-4 justify-center items-center'>
                        <div className='flex justify-center items-center cursor-pointer w-24 p-1 h-24 text-4xl border-solid border-2 border-black-900 rounded-full text-black hover:bg-black hover:text-white'>
                            <FaPeopleGroup />
                        </div>
                        <h4 className='text-[22px] font-medium'>E-Commerce</h4>
                        <p className='text-center text-[#8F98A8]'>E-commerce is a rapidly growing industry, with global e-commerce sales expected to reach $6.5 trilli...</p>
                        <div className='flex justify-center items-center cursor-pointer px-6 py-4 text-4 font-medium border-solid border-2 border-black-900 text-black hover:bg-black hover:text-white'>
                            +E-COMMERERCE
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default HomeServices
