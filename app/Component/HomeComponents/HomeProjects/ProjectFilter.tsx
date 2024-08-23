'use client';
import React from 'react'
import HomeProjectData from './HomeProjectData'

interface Props {
  setProj:React.Dispatch<React.SetStateAction<string>>
}
const ProjectFilter: React.FC<Props> = ({setProj}) => {
  return (
    <div className='flex flex-wrap gap-y-4 justify-evenly mt-12'>
      {
        HomeProjectData.map((itm:string,index:number)=>{
          return <div key={index} onClick={()=>setProj(itm)} className='cursor-pointer p-1 w-[105px] text-[#8F98A8] font-medium flex items-center justify-center hover:bg-black hover:font-bold hover:text-white'>
            {itm}
          </div>
        })
      }
    </div>
  )
}

export default ProjectFilter

