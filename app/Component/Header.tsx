'use client';
import React, { useState, useEffect } from 'react'
import NavBar from './NavBar';
import Info from './Info';
import Logo from './Logo';
import ScrollingNav from './ScrollingNav';
import MiddleWidth from './MiddleWidth';

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [width, setWidth] = useState(false);

  function changeBackground() {
    setScroll(window.scrollY > 150);
  }

  function handleResize() {
    setWidth(window.innerWidth > 1280);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('scroll', changeBackground);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {
        width ? (
          <div className=''>
            {
              scroll ? (
                <ScrollingNav />
              ) : (
                <div className='flex flex-col'>
                  <Info />
                  <div className='flex gap-x-6 justify-center'>
                    <Logo />
                    <NavBar />
                  </div>
                </div>
              )
            }
          </div>
        ) : (
          <MiddleWidth />
        )
      }
    </div>
  );
}

export default Header;
