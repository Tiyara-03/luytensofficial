import React from 'react'
// import Everest from '../assets/Everest.jpg'
import york from '../assets/new3.jpg';
import About from '../assets/About.svg'

export default function Services() {
  return (
    <>

      <div className='flex flex-col bg-white items-end container lg:pr-28 justify-center mb-10 pb-10 pt-20 ' >
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <img src={About} alt="na" />

          {/* style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${About})`, backgroundSize: 'cover', backgroundPosition: 'center'}} */}
          <div className='flex flex-col justify-center items-center mx-auto mt-10 lg:mt-0'>
            <h1 className='text-btnColor text-5xl font-serif font-bold flex items-end text-center justify-center mb-5'>About Us</h1>
            <p className='text-btnColor lg:text-xl text-base flex items-end max-w-3xl text-center mb-8'>Welcome to Luytens Technology Solutions! We’re here to provide you with innovative IT services tailored to meet your unique needs. Whether you’re looking for top talent, cloud integration, or enhanced cybersecurity, our team is dedicated to delivering solutions that help your business thrive. Let us partner with you to unlock new opportunities and achieve your goals with cutting-edge technology and expert support.</p>

            <a href="#/" className=' bg-btnColor px-7 py-4 rounded-3xl text-white font-bold hover:scale-105 duration-300'>Contact Us</a>
          </div>

        </div>

      </div>

      <div className="m-0 flex items-center justify-center flex-col bg-primary2 min-h-[70vh]">
        <div className="skewed lg:flex my-8 mx-8 bg-btnColor text-[#f1f1f1] shadow-[0_0_15px_rgba(0,0,0,0.7)]">
          <div className="text w-full p-6 lg:w-1/2 flex justify-evenly items-start flex-col">
            <h1 className="m-0 font-bold text-3xl lg:text-4xl mb-4 lg:mb-0">Our Expertise</h1>
            <p className="text-[#8f8f8f] text-base lg:text-lg">
              At Luytens Technology Solutions, we believe in doing things differently. Every project we undertake is thoughtfully crafted and carefully curated by our team of experts. Our approach isn’t just about delivering solutions – it’s about providing a rewarding and educational experience for our clients.
            </p>
            {/* <a href="/#" className="text-blue-500">
            Read More &rarr;
          </a> */}
          </div>
          <div className="image w-full h-[14rem] lg:w-1/2 lg:h-[22rem] relative overflow-hidden">
            <div className="before:w-[120%] before:h-[40%] before:top-[-5rem] before:left-1/2 before:rotate-[10deg] before:content-[''] before:absolute lg:before:left-[-6.1rem] lg:before:top-1/2 before:translate-y-[-50%] lg:before:rotate-[20deg] before:bg-btnColor lg:before:w-[35%] lg:before:h-[140%] before:shadow-[0_0_20px_rgba(0,0,0,0.7)]">
              <img
                src={york}
                alt="Oak Tree"
                className="object-cover w-[160%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>


  )
}
