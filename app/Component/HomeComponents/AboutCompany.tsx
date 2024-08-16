'use client';
import React from 'react'
import Image from 'next/image'
import { FaEye } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";



const AboutCompany = () => {
    return (
        <div className='flex justify-between mx-32 gap-y-4 py-12'>
            <div className='w-[540px] h-[618px] AboutCompany relative '>
                <div className='w-[185px] h-[214px] rounded bg-white absolute left-80 flex justify-center items-center'>
                    <Image src="/ISO-IMG.webp" height="154" width="135" alt='logo-of-nrt' className='bg-white '></Image>
                </div>
            </div>
            <div className='flex flex-col w-[570px] gap-y-4'>
                <h3 className='text-black'>About Company</h3>
                <h2 className='text-[44px] font-medium'>Hire App Developers & Digital Marketers : Your Top-Notch Partner in IT Evolution</h2>
                <p className='text-slate-700'>Newrise Technosys Pvt. Ltd. is a registered and ISO 27001:2013-certified leading service provider company located in Bhopal (M.P.).</p>

                <p className='text-slate-700'>Our ISO 27001:2013 certification underscores our dedication to maintaining the highest standards of information security. This international standard equips us with a robust framework for establishing, implementing, and continuously improving our Information Security Management System (ISMS). Through this certification, we ensure that our clients' sensitive information is safeguarded, risks are managed effectively, and we comply with all relevant legal and regulatory requirements. Our adherence to this standard not only enhances our credibility but also reinforces our commitment to protecting our clients' data and fostering trust.</p>

                <p className='text-slate-700'> Newrise Technosys Pvt. Ltd. was founded in 2010 by visionary Rakesh Dwivedi, who believes in and relies on creativity. He firmly believes that for any organization to survive and succeed, reasonable beliefs must underlie all policies and procedures. The most important factor for business success is honest diligence. Businesses must be willing to give up their efforts to their utmost limits, except for trust, which is the basis of the company's life. NRT is a software and website design and development company providing customized services per your needs. We also offer cloud communications platforms (bulk SMS, voice, and WhatsApp business API) and digital marketing.</p>
                <div className='flex '>
                    {/* #8F98A8 */}
                    <div className='bg-[#F6F5FA] p-8 w-1/2 flex flex-col justify-start items-center rounded'>
                        <div className='flex items-center gap-x-4'>
                            <div className='flex justify-center items-center cursor-pointer w-14 p-1 h-14 text-xl border-solid border-2 border-black-900 rounded-full text-black hover:bg-black hover:text-white'>
                                <FaEye />
                            </div>
                            <p className='font-semibold'>Vision</p>
                        </div>
                        <p className='pt-4'>Pioneering new paths to happiness and freedom with boundless possibilities.</p>
                    </div>
                    <div className='bg-[#F6F5FA] p-8 w-1/2 flex flex-col justify-start items-center rounded'>
                    <div className='flex items-center gap-x-4'>
                            <div className='flex justify-center items-center cursor-pointer w-14 p-1 h-14 text-xl border-solid border-2 border-black-900 rounded-full text-black hover:bg-black hover:text-white'>
                                <FaPeopleGroup/>
                            </div>
                            <p className='font-semibold'>Mission</p>
                        </div>
                        <p className='pt-4'>Our mission is to fuel a trust-based technological revolution of excellence globally, through unwavering integrity, We deliver affordable innovative solutions and build a meaningful long- lasting relationships worldwide</p>
                    </div>
                </div>
                <div className='flex justify-center items-center cursor-pointer w-[130px] h-[60px] text-[16px] border-solid border-2 border-black-900 text-white bg-black font-semibold rounded'>
                    ABOUT US
                </div>
            </div>
        </div>
    )
}

export default AboutCompany
