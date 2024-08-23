import React from 'react'

const Achievement = () => {
  return (
    <div className='bg-black px-32 py-20 flex h-[320px] justify-between max-[1280px]:px-12 max-[900px]:flex-col max-[900px]:justify-center max-[900px]:h-[390px] max-[900px]:gap-y-4'>
      <div className='flex flex-col justify-center items-center text-white'>
        <h2 className='text-[30px] xl:text-[50px] font-bold'>1000+</h2>
        <h3 className='text-[19px] xl:text-[23px] '>HAPPY COUSTOMERS</h3>
      </div>
      <div className='flex flex-col justify-center items-center text-white'>
        <h2 className='text-[30px] xl:text-[50px] font-bold'>100K+</h2>
        <h3 className='text-[19px] xl:text-[23px] '>MAN-HOURS UTILIZED</h3>
      </div>
      <div className='flex flex-col justify-center items-center text-white'>
        <h2 className='text-[30px] xl:text-[50px] font-bold'>1000+</h2>
        <h3 className='text-[19px] xl:text-[23px] '>PROJECTS COMPLETED</h3>
      </div>
      <div className='flex flex-col justify-center items-center text-white'>
        <h2 className='text-[30px] xl:text-[50px] font-bold'>14+</h2>
        <h3 className='text-[19px] xl:text-[23px]'>YEARS EXPERIENCE</h3>
      </div>
    </div>
  )
}

export default Achievement
