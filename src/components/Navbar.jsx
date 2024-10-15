import React from 'react'
import logo3 from "../assets/logo3.png"

export default function Navbar() {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-40 relative' >
      <div className='bg-primary2 py-2'>
        <div className='container flex justify-between items-center'>
          <div>
            <a href="/" className='flex gap-2 flex-row justify-center items-center'>
              <img src={logo3} alt="img" className='w-40'/>
              <div className='flex flex-col justify-center '>
                <h1 className='text-xl font-bold'>Luytens Technology Solutions</h1>
                <p className='text-sm'>Promise We Deliver, Just The Best</p>
              </div>
            </a>
          </div>
          {/* Search bar and order button */}
          <div>
            <div className='relative group hidden sm:block'>
              <input type="text" placeholder='Search' className='w-[200px] sm:w-[200px] hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary' />
              <i class="ri-search-line text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"></i>
            </div>
          </div>
          {/* Order button */}
          <button onClick={() => alert("We will contact you soon")} className='bg-btnColor transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
            <span className='group-hover:block'>Contact Us</span>
          </button>
        </div>
      </div>
    </div>

  )
}
