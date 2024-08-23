import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Experience, HomeExperienceData } from './HomeExperienceData';
import ClientExperience from './HomeExperience/ClientExperience';


const HomeExperience = () => {
  return (
    <div className='relative  lg:h-[1650px] xl:h-[1450px] xl:mb-14 max-[1024px]:mb-14'>
      <div className='max-[1024px]:hidden HomeExperience h-96'>

      </div>
      <div className='flex flex-col m-6 gap-y-12 xl:mx-11 min-[1430px]:mx-32  lg:z-10 lg:absolute lg:top-20'>
        <div className='flex flex-col lg:flex-row justify-between p-4 lg:pr-11 max-[1024px]:bg-slate-600'>
          <h4 className=' text-[30px] lg:text-[44px] text-white lg:text-blue-600 font-medium '>HAVE AN IDEA? LET'S TALK & WORK TOGETHER.</h4>
          <button className='h-12 w-40 flex justify-center items-center bg-black text-white p-1 rounded'>Contect us <FaArrowRight /></button>
        </div>
        <div className='flex flex-col gap-y-6 xl:flex-row bg-white'>
          <div className='xl:w-1/2 lg:p-3 xl:p-14 m-0'>
            <h4 className='text-[30px] lg:text-[44px]'>We Achieved Honor Experiences in Last 14+ Years</h4>
            <div className='flex flex-col flex-wrap gap-x-8 gap-y-1 mt-5 lg:flex-row'>
              {
                HomeExperienceData.map((itm: Experience, index: number) => {
                  return <div key={index} className='w-[218px] h-[128px] flex gap-x-8 m-auto'>
                    <div className='text-4xl'><itm.icon /></div>
                    <div className='flex flex-col gap-x-6'>
                      <h4 className='text-[30px] font-semibold'>{itm.exp}</h4>
                      <p className='text-[#8F98AB]'>{itm.description}</p>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
          <div className='xl:w-1/2 flex justify-end'>
            <div className='bg-[url(/home-experience-2.png)] bg-contain bg-no-repeat h-[300px] w-[330px] lg:w-[585px] lg:h-[457px] relative '>
              <div className='flex flex-col justify-center items-center cursor-pointer w-32 p-1 h-32 border-solid border-2 border-black-900 rounded-full text-black bg-white absolute top-32 lg:top-64 right-3'>
                <h5 className='text-4xl'>14+</h5>
                <p className='text-sm'>Years</p>
                <p className='text-sm'>Experiences</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ClientExperience />
        </div>
      </div>

    </div>
  )
}

export default HomeExperience
