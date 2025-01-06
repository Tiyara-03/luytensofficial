import React from 'react';
import { useLocation } from 'react-router-dom';
import Marque from './Marque';
import 'remixicon/fonts/remixicon.css';

export default function Header() {
  const location = useLocation();

  // Change styles dynamically based on the current route
  const isAboutPage = location.pathname === '/about'; // Adjust path based on your route

  return (
    <>
      <div
        className={`w-full ${
          isAboutPage ? 'bg-OffWhite' : 'bg-LightBlack'
        }`}
      >
        <div>
          <div
            className={`flex flex-row justify-center items-center py-2 md:py-3 font-sans relative ${
              isAboutPage ? 'text-black' : 'text-[#d9d9d9]'
            }`}
          >
            <div className='flex flex-row justify-center items-center gap-2 px-6'>
              <div className='text-xs'>
                <i class="ri-bubble-chart-fill"></i>
              </div>
              <div className='md:text-base text-sm font-extrabold font-sans w-[7rem] relative'>
                <h1>Coming Soon</h1>
              </div>
            </div>
            <div className='scroller'>
              <Marque />
            </div>
            <div
              className={`border-2 rounded-lg hidden lg:flex justify-center items-center mx-6 w-[24rem] relative ${
                isAboutPage ? 'text-black' : 'text-[#d9d9d9]'
              }`}
            >
              <a href="/">Job Genee</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
