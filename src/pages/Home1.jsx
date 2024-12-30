import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Luylogo from '../assets/Luylogo.png'
import { LayoutGridDemo } from './Test';
import Client from './Client'
import Navbar from '../MainPages/Navbar';


export default function Home1() {
  return (
    <>
      <div className='bg-LightBlack w-full'>
       

        <div className='px-8 mx-auto'>
          <div className='rounded-3xl bg-[#141414] min-h-[750px] w-full'>
            {/* Navbar */}
            <Navbar/>
            {/* <div className='flex flex-row justify-between items-center'>
              logo
              <div className='px-5 py-3 flex flex-row items-center'>
                <div className='w-[3rem] md:w-[5rem] h-auto'>
                  <img src={Luylogo} alt="/" />
                </div>
                <div className='font-bold text-white text-base md:text-lg'>
                  <h1>Luyten's Techology Solution</h1>
                </div>
              </div>
              <div className=''>
                <div className='hidden lg:flex flex-row gap-10 text-white px-10'>
                  <a href="/">Services</a>
                  <a href="/">About us</a>
                  <a href="/">Contact</a>
                  <a href="/">Career</a>
                </div>
              </div>
            </div> */}

            {/* Hero Section */}

            <div className='mx-auto px-14 md:px-24 md:pr-36 w-[100%] max-w-[84rem] mt-10'>
              <div className='flex flex-col gap-4'>
                <div className='text-purple-300 text-xs flex flex-row items-center gap-3'>
                  <i class="ri-circle-fill"></i>
                  <h1 className='text-white font-extrabold text-sm'>The Hub for IT excellence and consulting</h1>
                </div>
                {/* Heading */}
                <div className='text-4xl md:text-6xl lg:text-8xl text-[#f3efef] font-light'>
                  <h1>We connect you with exceptional talent and tailor IT solutions</h1>
                </div>
                {/* Para */}
                <div className='max-w-[32rem] text-[#d9d9d9] text-base md:text-[18px ] font-normal mt-2'>
                  <p>Leading IT solutions and consulting services that empower businesses to thrive in a digital-first world. We simplify technology, enhance efficiency, and drive sustainable growth.</p>
                </div>
                {/* learn More */}

                <div className='flex flex-row gap-2 mb-10'>  {/**group will added for hover effect */}
                  <div className='text-Lightblack text-xl p-2 bg-white rounded-xl group-hover:order-2 transition-all duration-700'>
                    <i class="ri-arrow-down-line"></i>
                  </div>
                  <div className='md:text-lg text-base font-medium text-lightblack p-3 bg-white rounded-xl group-hover:order-1 transition-all duration-700'>
                    <p className=''>Learn More</p>
                  </div>
                </div>            
              </div>

            </div>
          </div>
        </div>

        {/* Services */}

        <div className='mx-auto px-14 md:px-24 bg-LightBlack min-h-[600px]'>
          <div className='ml-15 text-purple-300 text-xs flex flex-row items-center gap-3 absolute mt-[-2rem] p-4 bg-LightBlack rounded-lg'>
            <i class="ri-circle-fill"></i>
            <h1 className='text-[#f3efef] font-extrabold text-sm'>Services</h1>
          </div>

          <div className='pt-20 text-[#f3efef] relative'>
            <h1 className='text-[45px] leading-[50px] font-medium max-w-[40rem]'>We Build future-ready digital platforms that accelerate your Career transformation.</h1>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 py-10 gap-10'>
            {/* First Service */}
            <div className='group text-[#f3efef] border-r-[1px] rounded-2xl px-5 hover:border-b-[1px] duration-200 hover:bg-gradient-l from-transparent to-black'>
              <h1 className='text-3xl mb-8'>Staffing</h1>
              <p className='text-[#d9d9d9]'>Matching Top Talent with the perfect opportunity, our staffing solutions drive success for both businesses and professionals.</p>
              <div className='group-hover:rotate-180 text-[#d9d9d9] text-xl inline-flex items-end justify-end p-2 rounded-full bg-gradient-to-r from-transparent to-lightblack transform duration-500'>
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>

            {/* Second Service */}
            <div className='group text-[#f3efef] border-r-[1px] rounded-2xl px-5 hover:border-b-[1px] duration-200 hover:bg-gradient-l from-transparent to-lightblack'>
              <h1 className='text-3xl mb-8'>Web and CLoud</h1>
              <p className='text-[#d9d9d9]'>Transforming businesses with innovative web and cloud solutions, empowering them to thrive in the digital era. </p>
              <div className='group-hover:rotate-180 text-[#d9d9d9] text-xl inline-flex justify-end p-2 rounded-full bg-gradient-to-r from-transparent to-lightblack transform duration-300'>
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>

            {/* Third Service */}
            <div className='group text-[#f3efef] border-r-[1px] rounded-2xl px-5 hover:border-b-[1px] duration-200 hover:bg-gradient-l from-transparent to-lightblack'>
              <h1 className='text-3xl mb-8'>Mobility Solution</h1>
              <p className='text-[#d9d9d9]'>Unleashing the potential of mobility for businesses, our solutions drive innovation and efficiency on the go. </p>
              <div className='group-hover:rotate-180 text-[#d9d9d9] text-xl inline-flex justify-end p-2 rounded-full bg-gradient-to-r from-transparent to-lightblack transform duration-300'>
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>

            {/* Fourth Service */}
            <div className='group text-[#f3efef] border-r-[1px] rounded-2xl px-5 hover:border-b-[1px] duration-200 hover:bg-gradient-l from-transparent to-lightblack'>
              <h1 className='text-3xl mb-8'>Digital Marketing</h1>
              <p className='text-[#d9d9d9]'>Amplify your brand's presence and engage your audience with our data-driven digital marketing strategies.</p>
              <div className='group-hover:rotate-180 text-[#d9d9d9] text-xl inline-flex justify-end p-2 rounded-full bg-gradient-to-r from-transparent to-lightblack transform duration-300'>
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>
          </div>
        </div>


        {/* New card */}
        <section>
          <div className='px-5 mx-auto mb-28'>
            <div className='rounded-[2rem] bg-[#ebebeb] min-h-[500px] w-full'>
              <div className='flex flex-col lg:flex-row gap-4'>
                <LayoutGridDemo />
                <div className='flex flex-col gap-12 justify-start pt-16 items-start p-4 xl:max-w-[600px] lg:max-w-[400px] w-full order-1'>
                  <div className='text-orange-600 text-xs flex flex-row items-center gap-3'>
                    <i class="ri-circle-fill"></i>
                    <h1 className='text-black font-extrabold text-sm'>Our Objective</h1>
                  </div>
                  <div className='flex flex-col gap-6 text-black relative'>
                    <h1 className='text-[45px] leading-[50px] font-medium'>Who We Are ?</h1>
                    <p className='text-black text-lg'>At Luytens Technology Solutions, we understand that finding the right talent is crucial for any organization's success. With our extensive network and in-depth industry expertise, we are committed to delivering tailored solutions that precisely match the unique requirements of our clients. Whether you are a multinational corporation seeking skilled professionals or a startup in search of dynamic talent, we have the expertise to fulfill your hiring needs.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Our CLients */}
        <section className='mx-auto px-14 md:mx-16 '>
          <div className='flex flex-col gap-10'>
            <div className='text-orange-600 text-xs flex flex-row items-center gap-3'>
              <i class="ri-circle-fill"></i>
              <h1 className='text-[#d9d9d9] font-extrabold text-sm'>Our Clients</h1>
            </div>
            <div className='scroller'>
              <Client />
            </div>
          </div>

        </section>

        {/* Footer  */}
        
      </div>

    </>
  )
}