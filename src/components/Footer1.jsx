import React from 'react'
import Luylogo from '../assets/Luylogo.png'
import { Link } from 'react-router-dom'

export default function Footer1() {
  return (
    <div>
      <section>
        <div className='bg-OffWhite'>
          <div className='px-8 mx-auto'>
            <div className='rounded-t-[2rem] bg-LightBlack min-h-[500px] w-full py-6 px-2 sm:p-8'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {/* Left Section */}
                <div className="flex flex-col gap-6 mx-6 my-5">
                  <div className='w-[3rem] md:w-[5rem] h-auto'>
                    <img src={Luylogo} alt="/" />
                  </div>
                  <div className='text-purple-300 text-xs flex flex-row items-center gap-3'>
                    <i class="ri-bubble-chart-fill"></i>
                    <h1 className='text-[#d9d9d9] font-extrabold text-lg'>Connect and Receive Updates from Luyten's</h1>
                  </div>
                  <div className="max-w-[400px] flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="bg-lightblack p-3 text-[#d9d9d9] font-semibold px-5 rounded-xl w-full"
                    />
                    <input
                      type="text"
                      placeholder="E-mail"
                      className="bg-lightblack p-3 text-[#d9d9d9] font-semibold px-5 rounded-xl w-full"
                    />
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="circleCheckbox"
                        name="checkboxGroup"
                        className="appearance-none w-5 h-5 rounded-full bg-LightBlack border border-gray-500 checked:bg-purple-500 checked:border-purple-500 focus:outline-none cursor-pointer"
                      />
                      <label
                        htmlFor="circleCheckbox"
                        className="text-[#d9d9d9] font-semibold ml-2">
                        I Agree to Privacy and Terms&Conditions
                      </label>
                    </div>
                    <div className='md:text-lg text-base font-medium text-lightblack p-3 bg-white rounded-xl group-hover:order-1 transition-all duration-700 max-w-[6rem]'>
                      <p className=''>Submit</p>
                    </div>
                  </div>
                </div>

                {/* Right Section */}
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 '>
                  <div className='text-[#d9d9d9] flex flex-col gap-4'>
                    <p className='text-[#d9d9d9] font-bold'>Services</p>
                    <Link to='/services'  className='hover:underline'>Staffing</Link>
                    <Link to="/services" className='hover:underline'>Mobility</Link>
                    <Link to="/services" className='hover:underline'>Web and Clouds</Link>
                    <Link to="/services" className='hover:underline'>Digital Marketing</Link>
                  </div>
                  <div className='text-[#d9d9d9] flex flex-col gap-4'>
                    <p className='text-[#d9d9d9] font-bold'>Company</p>
                    <Link to="/about" className='hover:underline'>About Us</Link>
                    <Link to="/project" className='hover:underline'>Project</Link>
                    <Link to="/contact" className='hover:underline'>Contact Us</Link>
                  </div>
                  <div className='text-[#d9d9d9] flex flex-col gap-4'>
                    <p className='text-[#d9d9d9] font-bold'>Location</p>
                    <div>
                      <h1>West Windsor,</h1>
                      <h1>New Jersey, USA.</h1>
                    </div>
                    <div>
                      <h1>Noida, UP</h1>
                      <h1>India</h1>
                    </div>
                    <h1>+1 609-316-0709</h1>
                    <h1>+91 1203507027</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
