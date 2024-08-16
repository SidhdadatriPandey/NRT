import React from 'react'
import { FaYoutube } from "react-icons/fa";


const WhyChoose = () => {
    return (
        <div className='mx-32 flex relative my-24 h-[800px]'>
            <div className='WhyChoose w-[540px] h-[618px]  relative'>
                <div className='flex justify-center items-center cursor-pointer w-24 p-1 h-24 text-4xl border-solid border-2 border-black-900 rounded-full text-red-700 bg-white hover:bg-black hover:text-white absolute top-[500px]'>
                    <FaYoutube />
                </div>
            </div>
            <div>
                <div className='py-12 ml-8'>
                    <h4>Why Choose Us</h4>
                    <h3 className='text-[44px] w-[570px]'>WE EXECUTE YOUR IDEAS FROM START TO FINISH</h3>
                </div>
                <div className='bg-[#040021] flex flex-col gap-y-8 w-[685px] rounded-lg absolute top-60 left-[480px]'>
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
