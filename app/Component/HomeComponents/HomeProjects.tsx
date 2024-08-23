'use client';
import React, { useState } from 'react'
import ProjectHeader from './HomeProjects/ProjectHeader'
import ProjectFilter from './HomeProjects/ProjectFilter'
import ProjectMain from './HomeProjects/ProjectMain'

const HomeProjects = () => {
  const [proj,setProj]=useState<string>("All");
  // console.log(proj);
  return (
    <div className='mx-auto lg:mx-32'>
      <ProjectHeader/>
      <ProjectFilter setProj={setProj}/>
      <ProjectMain proj={proj}/>
    </div>
  )
}

export default HomeProjects
