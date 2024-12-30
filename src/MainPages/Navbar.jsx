import React from 'react';
import Luylogo from '../assets/Luylogo.png';

export default function Navbar() {
  return (
    <div className='flex flex-row justify-between items-center bg-[#141414]'>
      {/* Logo */}
      <div className='px-5 py-3 flex flex-row items-center'>
        <div className='w-[3rem] md:w-[5rem] h-auto'>
          <img src={Luylogo} alt="Luyten's Logo" />
        </div>
        <div className='font-bold text-white text-base md:text-lg'>
          <h1>Luyten's Technology Solution</h1>
        </div>
      </div>

      {/* Navigation Links */}
      <div className='hidden lg:flex flex-row gap-10 text-white px-10'>
        <a href="/">Services</a>
        <a href="/">About us</a>
        <a href="/">Contact</a>
        <a href="/">Career</a>
      </div>
    </div>
  );
}
