import React from 'react'
import Hiring from '../assets/Hiring.jpg'
import web from '../assets/Web.jpg'
import mobility from '../assets/Mobility.jpg'
import digital from '../assets/Marketing.jpg'
import testing from '../assets/Testinf.png'
import security from '../assets/security.jpg'
import deve from '../assets/Development.jpg'
import cloud from '../assets/Cloud.jpg'
import eve from '../assets/Everest.jpg'
// import card from '../assets/Hcard.jpg'
// import card2 from '../assets/HAbout2.jpg'
// import AboutH from '../assets/AboutH.jpg'
import girl from '../assets/girl.png'
import man from '../assets/boy.svg'


const Cards1 = [
  {
    id: 1,
    img: Hiring,
    BgColor: "#092741",
    title: "Recruitment",
    subdescription: "Finding the reight talent ",
    description: "Matching top talent with the perfect opportunity, our staffing solutions drive success for both businesses and professionals. Experience the difference of a seamless and tailored hiring process with us."
  },

  {
    id: 2,
    img: web,
    BgColor: "#6a5359",
    title: "Web and Cloud Solutions",
    subdescription: "Web and CLoud Integration",
    description: "Transforming businesses with innovative web and cloud solutions, empowering them to thrive in the digital era. Experience the power of seamless integration and scalability for your online success."
  },

  {
    id: 3,
    img: mobility,
    BgColor: "#837d71",
    title: "Mobility Solutions",
    subdescription: "Innovative mobility for businesses.",
    description: "Unleashing the potential of mobility for businesses, our solutions drive innovation and efficiency on the go. Experience seamless connectivity and enhanced productivity with our mobility solutions."
  },

  {
    id: 4,
    img: digital,
    BgColor: "#196193",
    title: "Digital Marketing",
    subdescription: "Amplify your brand's presence.",
    description: "Amplify your brand's presence and engage your audience with our data-driven digital marketing strategies. Experience growth, visibility, and success in the digital landscape with our expert solutions."
  },

  {
    id: 5,
    img: testing,
    BgColor: "#0a171d",
    title: "Testing Services",
    subdescription: "Thorough testing for quality.",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader."
  },

  {
    id: 6,
    img: security,
    BgColor: "#20243d",
    title: "Security Services",
    subdescription: "Protect assets from cyber threats",
    description: "Everyday you come across data breaches and ransom news causing financial losses and assets loss. Our team is here to defend you from cyber attacks."
  },

  {
    id: 8,
    img: deve,
    BgColor: "#346a6a",
    title: "Development Services",
    subdescription: "Building and improving services ",
    description: "Development involves building and improving things. Services are tasks or activities provided to help others or fulfill needs."
  },

  {
    id: 9,
    img: cloud,
    BgColor: "#0b1521",
    title: "Cloud Services",
    subdescription: "Scalable cloud resources for business.",
    description: "Cloud services are infrastructure, platforms, or software that are hosted by third-party providers and made available to users through the internet."
  },

]


export default function Home() {
  return (
    <>

      {/* Landing zsection */}
      <div className="min-h-screen bg-gradient-to-b from-purple-50 flex flex-col items-center pt-28 mb-16" >  {/*mb-20 has been removed */}
        <div className='container pb-20'> {/*pb-28 changed */}
          <div className='text-btnColor pt-32 pb-8 flex flex-col justify-center items-center text-center'>


            <div className='mb-8 font-semibold text-md px-3 py-2 bg-gradient-to-r from-purple-200 rounded-3xl'>
              <p>Over a thousand ready-to-work creatives!</p>
            </div>
            <h1 className='text-5xl md:text-7xl font-medium font-serif mb-6'>The <span className='text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-btnColor'>Hub</span> for IT excellence</h1>

            <p className='text-xl font-mona mb-16'>The world’s destination for <span className=''>innovative</span> IT services and consulting expertise.</p>

            <div className='flex flex-row justify-center items-center my-20 gap-28 mr-10 '>
              <div className='w-[15rem] lg:w-[18rem] ml-0'>
                <img src={girl} alt="na" />
              </div>
              <div className='bg-gradient-to-br from-purple-50 to-purple-100 p-8 w-[29rem] rounded-2xl font-sans font-semibold'>
                <div>
                  Our experts bring decades of engineering and technical experience, applying this knowledge to tackle everyday challenges with precision and innovation.</div>
                <br />


                <span className='bg-transparent rounded-3xl border p-2'>#GrowWithEase</span>

                <span className='bg-transparent rounded-3xl border p-2'>#BoostProductivity</span>

              </div>

              <div className='w-[10rem] lg:w-[15rem]'>
                <img src={man} alt="na" />
              </div>
            </div>
            <div className='flex flex-row gap-10'>

              <a href="#/" className='bg-gradient-to-r from-purple-400 to-purple-500 px-5 py-3 rounded-3xl text-white hover:scale-105 duration-300'>Learn More</a>

              <a href="#/" className='bg-gray-800 text-white px-5 py-3 rounded-3xl hover:scale-105 duration-300'>Contact US</a>


            </div>
          </div>
        </div>
      </div>

    {/* Cards  */}
      <div className='flex container mx-auto justify-start items-center max-w-screen-xl mb-20'>
        <div className='w-[30rem] font-serif lg:text-5xl text-4xl text-btnColor'>
          <h1>What We DO?</h1>
        </div>

        <div className='bg-btnColor text-white p-10 rounded-3xl shadow-md hover:scale-105 duration-500'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam porro voluptatum numquam assumenda nemo, ratione dolore voluptas repudiandae iusto ad deleniti harum, eius magnam laudantium. Quia eveniet rerum recusandae facere. <br /> <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quos illo perspiciatis quae facilis nulla fugiat odit corporis hic! Qui?
        </div>


      </div>


        {/* COmpany Section */}
      {/* <div className='flex justify-center items-center mb-20 pb-8 font-mona'>
              <h1 className='text-btnColor'>Trusted By Over <span className='bg-purple-700 px-2 rounded-lg'>100+</span> Companies</h1>
            </div> */}



      {/* Cards Section */}
      {/* <div className='flex justify-center items-center pb-16'>
        <h1 className='font-serif text-5xl text-btnColor font-medium'>Our Services</h1>
      </div> */}
      {/* <div className='overflow-x-auto grid grid-cols-8 gap-72 sm:grid-cols-2 lg:grid-cols-4 sm:gap-12 container mx-auto'>
        {
          Cards1.map((data) => (
            <div className="relative cursor-pointer w-72 rounded-lg h-96 overflow-hidden group hover:scale-105 duration-700" style={{ backgroundColor: data.BgColor }}>
              <h1 className='pt-6 pl-8 text-white text-base font-bold absolute z-50 '>{data.title}</h1>
              <p className='pt-16 pl-8 pr-6 text-white text-xl font-semibold absolute z-50'>{data.subdescription}</p>


              Background image with gradient overlay
              <div className='absolute inset-0'>
                Gradient
                <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent z-10 pointer-events-none"></div>

                Background Image
                <div
                  className='absolute inset-0 transition-transform duration-700 ease-in-out transform group-hover:translate-y-full group-hover:translate-x-full'
                  style={{ backgroundImage: `url(${data.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
              </div>

              Text content with plain background
              <div className="absolute inset-0 flex flex-col justify-center transform -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-0 z-50">
                <p className='text-white px-6 pt-24 text-md font-thin'>{data.description}</p>

                <a href="/Expand.jsx" target={'_blank'} className='text-white text-xl flex justify-end pt-7 pr-4 hover:text-orange-300 hover:scale-105 duration-100'>Expand &gt;</a>
              </div>
            </div>
          ))
        }



        <div>
        </div>
      </div> */}
      {/* Why choose us  */}
      <div className='bg-purple-200 min-h-[650px]'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='pt-20 font-serif lg:text-5xl text-4xl text-btnColor'>Why Choose Us ?</h1>

          <div className='grid grid-rows-2 gap-8 mx-auto container max-w-[950px] text-center pt-10 font-mona lg:text-lg md:text-base text-sm text-btnColor'>
            <p className=''>At Luytens Technology Solutions, we provide access to an extensive talent pool of pre-screened IT professionals, ensuring that our clients can connect with the best candidates in the industry. Our client-focused approach is built around a deep understanding of each organization’s unique needs, enabling us to deliver customized hiring solutions that are perfectly aligned with their business objectives.</p>


            <p>
              At the heart of our business is a commitment to building long-term partnerships, fostering strong, lasting relationships with both clients and candidates. We aim to cultivate connections that are not only successful today but stand the test of time.
            </p>
          </div>

          <div className='flex flex-row gap-10'>
            <button className='bg-btnColor px-5 py-3 rounded-3xl text-white hover:scale-105 duration-300'>Get Started Now</button>
            <button className='bg-white text-btnColor py-3 px-5 rounded-3xl hover:scale-105 duration-300'>Learn About Hiring</button>
          </div>



        </div>
      </div>

    </>
  )
}
