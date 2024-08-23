import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const HomeTechnologies = () => {
    const images = Array.from({ length: 11 }, (_, i) => `/Technologies-${i + 1}.png`);

    return (

        <div className='flex flex-col items-center justify-center lg:p-24 mx-4 lg:mx-12 xl:mx-32 gap-y-3'>
            <h3 className='text-[36px] font-semibold'>Technologies</h3>
            <h5 className='text-[14px] text-center'>Our team of web & app developers, UI/UX designers, frontend and backend developers, digital marketing consultants, and strategists have years of experience in their respective fields. With their expertise and skills</h5>
            <div className='mt-12'>
                <Marquee >
                    {images.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            height={148}
                            width={222}
                            alt='logo-of-nrt'
                            className='bg-white'
                        />
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default HomeTechnologies
