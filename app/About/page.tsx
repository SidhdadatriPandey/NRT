import React from 'react'
import Header from '../Component/Header'
import Main from '../Component/Main'

const About = () => {
  return (
    <div className='head-main-container'>
       <div>
      <div className='relative'>
        <ul className='bg-white absolute left-1/3 flex flex-col gap-y-2 p-4 w-48'>
          <li className=''>About Us</li>
          <li className=''>SEO Story</li>
          <li className=''>Events</li>
        </ul>
      </div>
      <Main/>
      </div>
    </div>
  )
}

export default About
