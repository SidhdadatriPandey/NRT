'use client';
import React, { useContext, useState } from 'react'
import Header from './Header'
import { userContext } from '../Context/AppContext';
import Hiring from '../HomeComponents/Hiring';

const TopComponet = () => {
const {bg,setBg}=useContext(userContext);   
function setingBg(){
  if(bg==="Home"){
    return <Hiring/>
  }
}
  return (
    <div>
        {
          bg==="Home"?<Hiring/> :<div/>
        }
    </div>
  )
}

export default TopComponet
