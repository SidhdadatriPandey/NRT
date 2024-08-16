import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Experience, HomeExperienceData } from './HomeExperienceData';
import ClientExperience from './HomeExperience/ClientExperience';


const HomeExperience = () => {
  return (
    <div className='relative h-[1600px]'>
      <div className='HomeExperience h-96'>

      </div>
      <div className='flex flex-col gap-y-12 mx-32 z-10 absolute top-20 '>
        <div className='flex justify-between pr-11'>
          <h4 className='text-[44px] text-blue-600 font-bold w-[870px] '>HAVE AN IDEA? LET'S TALK & WORK TOGETHER.</h4>
          <button className='h-12 w-40 flex justify-center items-center bg-black text-white p-1 rounded'>Contect us <FaArrowRight /></button>
        </div>
        <div className='flex bg-white'>
          <div className='w-1/2 p-16'>
            <h4 className='text-[44px]'>We Achieved Honor Experiences in Last 14+ Years</h4>
            <div className='flex flex-wrap gap-x-8 gap-y-20'>
              {
                HomeExperienceData.map((itm: Experience, index: number) => {
                  return <div key={index} className='w-[218px] h-[115px] flex gap-x-8'>
                    <div className='text-4xl'><itm.icon /></div>
                    <div className='flex flex-col gap-x-6'>
                      <h4 className='text-[24px] font-semibold'>{itm.exp}</h4>
                      <p className='text-[#8F98AB]'>{itm.description}</p>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
          <div className='w-1/2 '>
            <div className='bg-[url(/home-experience-2.png)] w-[585px] h-[457px] relative'>
              <div className='flex flex-col justify-center items-center cursor-pointer w-32 p-1 h-32 border-solid border-2 border-black-900 rounded-full text-black bg-white absolute top-64 right-3'>
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
