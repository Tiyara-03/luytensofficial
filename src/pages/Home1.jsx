import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Client from './Client'
import bgimg from '../assets/Luy2.png'
import { Link } from 'react-router-dom'


const services = [
  {
    id: 1,
    title: 'Staffing',
    description: 'Matching Top Talent with the perfect opportunity, our staffing solutions drive success for both businesses and professionals.',
  },
  {
    id: 2,
    title: 'Web and Cloud',
    description: 'Transforming businesses with innovative web and cloud solutions, empowering them to thrive in the digital era.',
  },
  {
    id: 3,
    title: 'Consulting Service',
    description: 'Unleashing the potential of companies performances by consulting, our solutions drive innovation and efficiency on the go.',
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Amplify your brand\'s presence and engage your audience with our data-driven digital marketing strategies.',
  },
];


export default function Home1() {
  return (
    <>
      <div className='bg-OffWhite w-full'>
        <div className='px-6 md:px-8 mx-auto  pt-[6rem]'>
          <div className='rounded-3xl bg-LightBlack min-h-[650px]  md:min-h-[750px] w-full mb-20'>
            {/* Navbar */}
            {/* <Navbar/> */}

            {/* Hero Section */}

            <div className='mx-auto px-14 md:px-24 md:pr-36 w-[100%] max-w-[84rem] pt-4'>
              <div className='flex flex-col gap-4 mt-16'>
                <div className='text-purple-300 text-xs flex flex-row items-center gap-3'>
                  <i class="ri-attachment-fill"></i>
                  <h1 className='text-white font-extrabold text-sm'>The Hub for IT excellence and consulting</h1>
                </div>
                {/* Heading */}
                <div className='text-4xl md:text-6xl lg:text-8xl text-TextWhite font-light '>
                  <h1>We connect you with exceptional talent and tailor IT solutions</h1>
                </div>
                {/* Para */}
                <div className='max-w-[32rem] text-[#d9d9d9] text-base md:text-[18px ] font-normal mt-2'>
                  <p>Leading IT solutions and consulting services that empower businesses to achieve  a competitive advantage. We aim at simplifying technology for you, make your processes effective and help you deliver sustainable growth.</p>
                </div>
                {/* learn More */}

                <div className='flex flex-row gap-2 mb-10'>  {/**group will added for hover effect */}
                  <div className='text-Lightblack text-xl p-2 bg-white rounded-xl group-hover:order-2 transition-all duration-700'>
                    <i class="ri-arrow-right-up-line"></i>
                  </div>
                  <Link to="/about" className='md:text-lg text-base font-medium text-lightblack p-3 bg-white rounded-xl group-hover:order-1 transition-all duration-700'>
                    <p className=''>Discover More</p>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Services */}

        <div className='mx-auto px-6 md:px-24 bg-LightBlack min-h-[600px]'>
          <div className='ml-15 text-purple-300 text-xs flex flex-row items-center gap-3 absolute mt-[-1rem] p-4 bg-LightBlack rounded-lg'>
            <i class="ri-attachment-fill"></i>
            <h1 className='text-TextWhite font-extrabold text-sm'>Services</h1>
          </div>

          <div className='pt-20 text-TextWhite relative'>
            <h1 className='text-[30px] md:text-[45px] md:leading-[50px] font-medium max-w-[40rem]'>Driving Business values by providing Talant-Pool, seamless Resource and Solution.</h1>
            {/* <img src="https://cdn.prod.website-files.com/6554adf723d82cf38df7e63b/6575c78729004f0811d494e2_img_arr.svg" alt="" className='text-blue-200'/> */}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 py-10 gap-10'>
            {services.map((service) => (
              <Link
                to={`/service/${service.id}`}
                key={service.id}
                className="group"
                onClick={() => window.scrollTo({ top: 0, behavior: 'fast' })} // Scrolls to the top on navigation
              >
                <div className='text-TextWhite border-r-[1px] rounded-2xl px-5 hover:border-b-[1px] duration-200 hover:bg-gradient-l from-transparent to-black'>
                  <h1 className='text-3xl mb-8'>{service.title}</h1>
                  <p className='text-[#d9d9d9] pb-2'>{service.description}</p>
                  <div className='group-hover:rotate-180 text-[#d9d9d9] text-xl inline-flex items-end justify-end p-2 rounded-full bg-gradient-to-r from-transparent to-lightblack transform duration-500'>
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

        {/* Leading Brand */}
        <div className='mx-auto py-6 px-6 md:px-8 mt-4'>

          <div>
            <div className=' text-purple-300 text-xs flex flex-row items-center justify-start gap-3 p-4 md:mx-16'>
              <i class="ri-attachment-fill"></i>
              <h1 className='text-LightBlack font-extrabold text-sm'>How We Work</h1>
            </div>
              <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-12 px-4 xl:px-20 my-16'>
                <h1 className='text-[30px] lg:text-[45px] text-LightBlack lg:leading-[50px] font-medium max-w-[30rem]'>We Transform Ideas into Outcomes <img src="https://cdn.prod.website-files.com/6554adf723d82cf38df7e63b/65573975f41bab6db39f635b_Va-2.svg" alt="na" /></h1>
                <p className='text-LightBlack max-w-[30rem]'>For each task in Luyten's, we come up with a vision to craft unique ideas and set clear goals to face challanges and provide solution for not one but many and alike. We are not in the business of simply providing answers—we seek to provoke change, foster advancement, and generate impacts that are greater than the sum of its parts.</p>
              </div>
            <div className=' flex justify-center items-center text-center text-black py-10 px-[2rem] lg:px-[12rem] xl:px-[22rem]'>
              <h1 className='text-[30px] md:text-[40px] md:leading-[50px] font-normal'>We Bring <span className='font-medium'>Brand </span> + <span className='font-medium'> Talant</span> + <span className='font-medium'>Product</span> under one Roof</h1>
            </div>
            <div className='bg-LightBlack rounded-3xl p-5 md:px-10 md:py-16 flex flex-col gap-20'>
              <div className='flex justify-center px-4 md:px-20'>
                <div className='flex flex-col lg:flex-row gap-16 md:gap-28'>
                  <div className='text-TextWhite max-w-[31rem]'>
                    <h1 className='text-[30px] lg:text-[45px] text-TextWhite lg:leading-[50px] font-medium pb-6'>Crafted a new solution</h1>
                    <p>We Build a future-ready digital platform that accelerate your Career transformation. A Platform as a one step solution, for meeting your goals. Now whether it is about landing your dream job or finding the right talent for your business, we ensure your goals are met immaculately with an efficient approach.</p>
                  </div>
                  <div className='rounded-3xl max-w-[31rem] max-h-[23rem]'>
                    <img src={bgimg} alt="" className='w-full h-full rounded-3xl' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <section>
          <div className='mx-auto px-6 md:px-24'>
            <div className=' text-purple-300 text-xs flex flex-row items-center justify-center gap-3 p-4 max-w-[8rem] bg-lightblack rounded-3xl'>
              <i class="ri-attachment-fill"></i>
              <h1 className='text-TextWhite font-extrabold text-sm'>Values</h1>
            </div>
            <div className='flex flex-col justify-center items-center text-start'>
              <div className='pt-12 text-black '>
                <h1 className='text-[30px] md:text-[45px] md:leading-[50px] font-medium pb-6'>Why Choose Us?</h1>
                <h1 className='text-2xl max-w-[40rem]'>We believe in growth as a whole, Our Focus is to bridge oppertunities with excellence. Every Solution we provide is a proof of our commitment to quality and innovation. Our goal is growth - empowering potential, changing norms, breaking barriers and achiving great outcomes. </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Our CLients */}
        <section className='mx-auto px-14 md:mx-16 py-32'>
          <div className='flex flex-col gap-10'>
            <div className='text-purple-600 text-xs flex flex-row items-center gap-3'>
              <i class="ri-attachment-fill"></i>
              <h1 className='text-black font-extrabold text-sm'>Our Clients</h1>
            </div>
            <div className='scroller'>
              <Client />
            </div>
          </div>

        </section>


      </div>

    </>
  )
}