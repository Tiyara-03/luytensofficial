import React from 'react'
import Marque from '../components/Marque'
import 'remixicon/fonts/remixicon.css'


export default function Header() {
  return (
    <>
     <div className='bg-LightBlack w-full'>
     <div>
          <div className='flex flex-row justify-center items-center py-2 md:py-3 font-sans relative'>
            <div className='flex flex-row justify-center items-center gap-2 px-6'>
              <div className='text-xs text-[#d9d9d9]'><i class="ri-circle-fill"></i></div>
              <div className='md:text-base text-sm font-extrabold text-[#d9d9d9] font-sans w-[7rem] relative'><h1>Coming Soon</h1></div>
            </div>
            <div className='scroller '>
              <Marque />
            </div>
            <div className='text-[#d9d9d9] border-2 rounded-lg hidden lg:flex justify-center items-center mx-6 w-[24rem] relative'>
              <a href="/">Job Genee</a>
            </div>
          </div>
        </div>
        </div> 
    </>
  )
}
