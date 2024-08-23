import React from 'react'
import { FaYoutube } from "react-icons/fa";


const WhyChoose = () => {
    return (
        <div className='lg:mx-12 xl:mx-32 flex flex-col items-center lg:flex-row relative my-24 lg:h-[1000px]'>
            <div className='WhyChoose w-[315px] h-[361px] sm:w-[540px] sm:h-[618px]  relative'>
                <div className='flex justify-center items-center cursor-pointer w-24 p-1 h-24 text-4xl border-solid border-2 border-black-900 rounded-full text-red-700 bg-white top-64 hover:bg-black hover:text-white absolute sm:top-[500px]'>
                    <FaYoutube />
                </div>
            </div>
            <div>
                <div className=' mx-6 lg:py-12 lg:ml-8 lg:absolute lg:top-28 lg:left-[530px] my-9'>
                    <h4 className='font-semibold'>Why Choose Us</h4>
                    <h3 className='text-4xl xl:text-[44px]  xl:w-[570px] mt-4'>WE EXECUTE YOUR IDEAS FROM START TO FINISH</h3>
                </div>
                <div className='bg-[#040021] flex flex-col gap-y-8 lg:w-[500px] xl:w-[685px] rounded-lg mx-6 lg:absolute lg:top-96 lg:left-[460px]'>
                    <div className='p-7 flex gap-x-5'>
                        <div className='flex justify-center items-center cursor-pointer w-20 p-1 h-20 text-xl border-solid border-2 border-white rounded-full text-white bg-black'>
                            <div className='flex justify-center items-center cursor-pointer w-16 p-1 h-16 text-xl border-solid border-2 border-white rounded-full text-white bg-black'>
                                01
                            </div>
                        </div>
                        <div className=''>
                            <h5 className='text-white text-[22px] font-semibold'>Expertise</h5>
                            <p className='text-white mt-3'>Our team comprises seasoned professionals with years of experience in their respective fields, ensuring you receive top-notch service and advice.</p>
                        </div>
                    </div>
                    <div className='p-7 flex gap-x-5'>
                        <div className='flex justify-center items-center cursor-pointer w-20 p-1 h-20 text-xl border-solid border-2 border-white rounded-full text-white bg-black'>
                            <div className='flex justify-center items-center cursor-pointer w-16 p-1 h-16 text-xl border-solid border-2 border-white rounded-full text-white bg-black'>
                                02
                            </div>
                        </div>
                        <div className=''>

                            <h5 className='text-white text-[22px] font-semibold'>Innovation</h5>
                            <p className='text-white mt-3'>We constantly strive to push the boundaries of what's possible, delivering creative solutions and staying ahead of industry trends.</p>
                        </div>
                    </div>
                    <div className='p-7 flex gap-x-5'>
                        <div className='flex justify-center items-center cursor-pointer w-20 p-1 h-20 text-xl border-solid border-2 border-white rounded-full text-white bg-black'>
                            <div className='flex justify-center items-center cursor-pointer w-16 p-1 h-16 text-xl border-solid border-2 border-white rounded-full text-white bg-black'>
                                03
                            </div>
                        </div>
                        <div className=''>
                            <h5 className='text-white text-[22px] font-semibold'>Commitment to Quality</h5>
                            <p className='text-white mt-3'>We don't just meet standards; we set them. Quality control is integral to everything we do, guaranteeing excellence.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhyChoose
