'use client';
import React, { useContext } from 'react'
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';
import { userContext } from './Context/AppContext';
import Home from './Home/page';

const page = () => {
  const { bg, setBg } = useContext(userContext);
  return (
    <div>
      <Home/>
    </div>
  )
}

export default page
