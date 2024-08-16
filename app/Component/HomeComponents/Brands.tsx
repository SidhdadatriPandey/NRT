import React from 'react'
import Image from 'next/image'

const data = ["Govt. MPMKVVCL", "Govt. M.P. Food Department", "Govt. Sarojini Naidu College", "Govt. WBSCVT","KPMG", "Eicher Tractor", "Paytm", "Amity Education Group","FIITJEE", "Ondoor", "ShopKirana", "Khatabook",
    "OkCredit", "Hyundai", "Adidas", "Satocci",
    "Teachinguide", "Ortmedica Digital System", "Dormicentro", "Student Store",
    "Aceuss", "Chai Ho Jaye", "JNCT University", "LNCT University",
    "Sage University", "Patel Group of Institutions", "Madhyanchal Professional University", "Maharana Pratap College",
    "Many more…"
]

const Brands = () => {
    return (
        <div className='bg-white flex flex-col items-center my-16 font-robo'>
            <h2 className='text-[44px] font-medium'>Brands</h2>
            <h3 className='font-medium text-xl'>That Rely on Our Expertise </h3>
            <div className='h-1 w-32 bg-orange-500 my-7'></div>
            <div className='mx-32 my-4 flex flex-wrap gap-x-8 gap-y-8 justify-start' >
                {
                    data.map((brand, index) => {
                        return <div key={index} className='w-[285px] h-[85px] flex flex-col justify-center items-center'>
                            <Image src={`/brand-${index + 1}.png`} height='78' width='200' alt='brand-img' />
                            <p className='text-[#8F98A8] font-medium'>{brand}</p>
                        </div>
                    })
                }
            </div>
            
        </div>
    )
}

export default Brands
