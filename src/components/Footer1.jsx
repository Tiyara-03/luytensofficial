import React from 'react'
import Luylogo from '../assets/Luylogo.png'
import { Link } from 'react-router-dom'
import img1 from '../assets/linkedin.png'
import img2 from '../assets/twitter.png'

export default function Footer1() {
  return (
    <div>
      <section>
        <div className='bg-OffWhite'>
          <div className='px-8 mx-auto'>
            <div className='rounded-[2rem] bg-LightBlack min-h-[500px] w-full py-6 px-2 sm:px-8 sm:pt-8 sm:pb-0'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10'>
                {/* Left Section */}
                <div className="flex flex-col gap-6 mx-6 my-5">
                  <div className='w-[3rem] md:w-[5rem] h-auto'>
                    <img src={Luylogo} alt="/" />
                  </div>
                  <div className='text-purple-300 text-xs flex flex-row items-center gap-3'>
                    <i class="ri-attachment-fill"></i>
                    <h1 className='text-[#d9d9d9] font-bold text-lg'>Promise we deliver just the best</h1>
                  </div>
                  <div className='text-purple-300 font-medium text-sm w-full max-w-[400px]'>
                    For any inquiries or Business-related information, connect with us. Be part of us, and recieve updates and insights by agreeging to our privacy policy and terms&conditions.
                  </div>
                  <div className='md:text-lg text-base font-medium text-lightblack p-3 bg-white rounded-xl w-full max-w-[8rem]'>
                    <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact Us</Link>
                  </div>
                </div>

                {/* Right Section */}
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 '>
                  <div className='text-[#d9d9d9] flex flex-col gap-4'>
                    <p className='text-[#d9d9d9] font-bold'>Services</p>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scrolls to the top on navigation
                      to='/services' className='hover:text-purple-500'>Staffing</Link>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scrolls to the top on navigation
                      to="/services" className='hover:text-purple-500'>Mobility</Link>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scrolls to the top on navigation
                      to="/services" className='hover:text-purple-500'>Web and Clouds</Link>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scrolls to the top on navigation
                      to="/services" className='hover:text-purple-500'>Digital Marketing</Link>
                  </div>
                  <div className='text-[#d9d9d9] flex flex-col gap-4'>
                    <p className='text-[#d9d9d9] font-bold'>Company</p>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scrolls to the top on navigation
                      to="/about" className='hover:text-purple-500'>About Us</Link>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scrolls to the top on navigation
                      to="/services" className='hover:text-purple-500'>Services</Link>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scrolls to the top on navigation
                      to="/career" className='hover:text-purple-500'>Career</Link>
                  </div>
                  <div className='text-[#d9d9d9] flex flex-col gap-4'>
                    <p className='text-[#d9d9d9] font-bold'>Location</p>
                    <a className='cursor-pointer' target="_blank" href='https://www.google.com/maps/place/West+Windsor+Township,+NJ,+USA/@40.2924137,-74.7084155,12z/data=!3m1!4b1!4m6!3m5!1s0x89c3e0f72f41d053:0xec810e272f35aec7!8m2!3d40.3312702!4d-74.638181!16zL20vMHhwOGg?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D'>
                      <h1>West Windsor,</h1>
                      <h1>New Jersey, USA.</h1>
                    </a>
                    <div>
                      <h1>Noida, UP</h1>
                      <h1>India</h1>
                    </div>
                    <h1>+1 609-316-0709</h1>
                    <h1>+91 1203507027</h1>
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className='flex flex-row justify-end items-center gap-6 pr-20'>
                <h1 className='text-base text-[#d9d9d9] font-medium'>Our Social Links</h1>
                <a href='https://www.linkedin.com/company/luytens-technology-solutions/posts/?feedView=all' className='w-[2rem]'>
                  <img src={img1} alt="na" className='w-full cursor-pointer' />
                </a>
                <div className='w-[2rem]'>
                  <img src={img2} alt="na" className='w-full cursor-pointer' />
                </div>
              </div>
              <div className='px-8 pt-10 flex flex-row gap-8 justify-center items-center'>
                <h1 className='text-white'><span>©</span>2025 Luytens Technology Solution.</h1>
                <h1 className='text-white'>All rights reserved</h1>
                <Link to="/" className='text-white'>Privacy Policy | Terms of service</Link>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scrolls to the top on navigation
                >
                  <i class="ri-arrow-up-s-line text-black bg-OffWhite p-2 rounded-xl"></i>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
