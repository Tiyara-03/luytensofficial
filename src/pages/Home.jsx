import React from 'react'
import Hiring from '../assets/Hiring.jpg'
import web from '../assets/Web.jpg'
import mobility from '../assets/Mobility.jpg'
import digital from '../assets/Marketing.jpg'
import testing from '../assets/Testinf.png'
import security from '../assets/security.jpg'
import deve from '../assets/Development.jpg'
import cloud from '../assets/Cloud.jpg'


const Cards1 = [
  {
    id: 1,
    img: Hiring,
    BgColor: "#092741",
    title: "Recruitment",
    description: "Matching top talent with the perfect opportunity, our staffing solutions drive success for both businesses and professionals. Experience the difference of a seamless and tailored hiring process with us."
  },

  {
    id: 2,
    img: web,
    BgColor: "#6a5359",
    title: "Web and Cloud Solutions",
    description: "Transforming businesses with innovative web and cloud solutions, empowering them to thrive in the digital era. Experience the power of seamless integration and scalability for your online success."
  },

  {
    id: 3,
    img: mobility,
    BgColor: "#837d71",
    title: "Mobility Solutions",
    description: "Unleashing the potential of mobility for businesses, our solutions drive innovation and efficiency on the go. Experience seamless connectivity and enhanced productivity with our mobility solutions."
  },

  {
    id: 4,
    img: digital,
    BgColor: "#196193",
    title: "Digital Marketing",
    description: "Amplify your brand's presence and engage your audience with our data-driven digital marketing strategies. Experience growth, visibility, and success in the digital landscape with our expert solutions."
  },

  {
    id: 5,
    img: testing,
    BgColor: "#0a171d",
    title: "Testing Services",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader."
  },

  {
    id: 6,
    img: security,
    BgColor: "#20243d",
    title: "Security Services",
    description: "Everyday you come across data breaches and ransom news causing financial losses and assets loss. Our team is here to defend you from cyber attacks."
  },

  {
    id: 8,
    img: deve,
    BgColor: "#346a6a",
    title: "Development Services",
    description: "Development involves building and improving things. Services are tasks or activities provided to help others or fulfill needs."
  },

  {
    id: 9,
    img: cloud,
    BgColor: "#0b1521",
    title: "Cloud Services",
    description: "Cloud services are infrastructure, platforms, or software that are hosted by third-party providers and made available to users through the internet."
  },

]


export default function Home() {
  return (
    <>
      <div className="min-h-[650px] bg-primary2 mx-auto flex flex-col items-center">
        <div className='container pb-32'>
          <div className='text-btnColor pt-32 pb-8 flex flex-col justify-center items-center text-center'>
            <div className='mb-8 font-semibold text-md px-3 py-2 bg-yellow-200 rounded-3xl'>
              <p>Over a million ready-to-work creatives!</p>
            </div>
            <h1 className='text-5xl md:text-7xl font-medium font-serif mb-6'>The Hub for IT excellence</h1>

            <p className='text-xl font-mona mb-8'>The world’s destination for innovative IT services and consulting expertise.</p>

            <a href="#/" className='bg-btnColor px-5 py-3 rounded-3xl text-white'>Learn More</a>
          </div>
        </div>

        <div className='overflow-x-auto grid grid-cols-8 gap-72 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16'>
          {
            Cards1.map((data) => (
              <div className="relative cursor-pointer w-60 rounded-lg h-80 overflow-hidden group">

                {/* Background Image */}
                <div
                  className='absolute inset-0 transition-transform duration-700 ease-in-out transform group-hover:translate-y-full group-hover:translate-x-full '
                  style={{ backgroundImage: `url(${data.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h1 className='text-white text-xl font-bold '>{data.title}</h1>
                </div>

                {/* Text content with plain background */}
                <div className= "absolute inset-0 flex flex-col justify-center pl-6 transform -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-0" style={{ backgroundColor: data.BgColor }} >
                  <p className='text-white pt-4 text-md'>{data.description}</p>

                  <a href="/303" target= {'_blank'} className='text-white text-xl flex justify-end pt-7 pr-4 hover:text-orange-300'>Expand ></a>
                </div>
              </div>
            ))
          }

          <div>
          </div>
        </div>
      </div>

    </>
  )
}
