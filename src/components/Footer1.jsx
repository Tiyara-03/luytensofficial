import React from 'react'
import Luylogo from '../assets/Luylogo.png'
import { Link } from 'react-router-dom'

export default function Footer1() {
  return (
    <div>
       <section>
                <div className='bg-LightBlack'>
                  <div className='px-5 mx-auto'>
                    <div className='rounded-[2rem] bg-lightblack min-h-[500px] w-full p-8'>
                      <div className='grid grid-cols-2 '>
                        <div className="flex flex-col gap-6 mx-6 my-5">
                          <div className='w-[3rem] md:w-[5rem] h-auto'>
                            <img src={Luylogo} alt="/" />
                          </div>
                          <div className='text-purple-300 text-xs flex flex-row items-center gap-3'>
                            <i class="ri-circle-fill"></i>
                            <h1 className='text-[#d9d9d9] font-extrabold text-lg'>Connect and Recieve Updates from Luyten's</h1>
                          </div>
                          <div className="max-w-[400px] flex flex-col gap-4">
                            <input type="text" placeholder="Name" className="bg-LightBlack p-3 text-[#d9d9d9] font-semibold px-5 rounded-xl w-full" />
                            <input type="text" placeholder="E-mail" className="bg-LightBlack p-3 text-[#d9d9d9] font-semibold px-5 rounded-xl w-full" />
      
                            <div className="flex items-center">
                              <input type="radio" id="radio" name="radioGroup" className="text-purple-500 w-5 h-5 bg-LightBlack border-gray-500" />
                              <label htmlFor="radio" className="text-[#d9d9d9] font-semibold ml-2">I Agree to Privacy and Terms&Conditions</label>
                            </div>
                          </div>
                        </div>
                        <div className='grid grid-cols-3 gap-4 mt-24'>
                          <div className='text-[#d9d9d9] flex flex-col gap-4'>
                            <p className='text-[#d9d9d9] font-bold'>Services</p>
                            <p>Staffing</p>
                            <p>Mobility</p>
                            <p>Web and Clouds</p>
                            <p>Degital Marketing</p>
                          </div>
                          <div className='text-[#d9d9d9] flex flex-col gap-4'>
                            <p className='text-[#d9d9d9] font-bold'>Company</p>
                            <p>About Us</p>
                            <p>Project</p>
                            <p>Contact Us</p>
                            <p></p>
                          </div>
                          <div className='text-[#d9d9d9] flex flex-col gap-4'>
                            <p className='text-[#d9d9d9] font-bold'>Location</p>
                            {/* <p>Staffing</p>
                            <p>Mobility</p>
                            <p>Web and Clous</p>
                            <p>Degital Marketing</p>
                            <p></p> */}
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
