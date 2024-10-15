import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import contact1 from '../assets/contact1.svg'

import ReCAPTCHA from "react-google-recaptcha";

import Slider from 'react-slick';


const imageList = [
  {
    id: 1,
    img: img1,
    title: "Feel Free to Connect",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo sed eum recusandae, quisquam corporis blanditiis nisi quis ex, voluptates sit aliquam suscipit eius veniam beatae soluta facilis reprehenderit. Recusandae, quasi!",
  },

  {
    id: 2,
    img: img2,
    title: "Discover your next career move",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo sed eum recusandae, quisquam corporis blanditiis nisi quis ex, voluptates sit aliquam suscipit eius veniam beatae soluta facilis reprehenderit. Recusandae, quasi!",
  },

  {
    id: 3,
    img: img3,
    title: "Be part of something bigger.",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo sed eum recusandae, quisquam corporis blanditiis nisi quis ex, voluptates sit aliquam suscipit eius veniam beatae soluta facilis reprehenderit. Recusandae, quasi!",
  },
]

const ContactData = [
  {
    id: 1,
    img: img4,
    title: "Call",
    subtitle: "+91 1203507027,",
    subtitle2: " +1 6093160709",
  },

  {
    id: 2,
    img: img5,
    title: "Email",
    subtitle: (
      <a href="mailto:info@Luytens.com" className="cursor-pointer">
        info@Luytens.com
      </a>
    ),
    subtitle2: "",


  },

  {

    id: 3,
    img: img6,
    title: "Visit us",
    // subtitle: "USA Office: West Windsor, New Jeresy USA",
    subtitle: (
      <a
        href="https://www.google.com/maps?q=West+Windsor,+NJ+08550,+USA"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        USA Office: West Windsor, New Jersey USA
      </a>
    ),

    subtitle2: (
      <a
        href="https://www.google.com/maps?q=Noida,+UP,+India"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        India OffShore: Noida, UP, India
      </a>
    )
  }

]


export default function Contact() {

  const onChange =() =>{}

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    SlideToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3600,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <>
      <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-primary2 flex justify-center items-center duration-200'>

        {/* background pattern */}
        <div className='h-[500px] w-[500px] bg-secondary2 absolute -top-1/3 right-10  rounded-3xl rotate-45 -z-9'></div>

        {/* hero section */}
        <div className='container mx-0 px-0 lg:mx-auto lg:container pb-8 sm:pb-0 text-btnColor font-serif'>
          <Slider {...settings}>
            {imageList.map((data) => (
              <div>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                  {/* text contant section */}
                  <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 lg:ml-12' >
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                    <p className='text-sm'>{data.discription}</p>
                    <div>
                      <button className='bg-btnColor hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                        Contact Now
                      </button>
                    </div>
                  </div>
                  {/* Image section */}
                  <div className='order-1 sm:order-2 '>
                    <div className='relative x-10 '>
                      <img src={data.img} alt="not available" className='w-[300px] h-[400px] sm:h-[400px] sm:w-[450px] sm:scale-105 lg:h-[450px] lg:w[400px] lg:scale-120 object-contain mx-auto' />
                    </div>
                  </div>
                </div>              
              </div>
            ))}
          </Slider>

        </div>
      </div>

      <div>
        <div className='container mt-12'>
          {/* header section */}
          <div className='text-center mb-24 max-w-[600px] mx-auto'>
            <h1 className='text-4xl text-secondary2'>Connects Us Through</h1>
            <p className='text-x5 text-btnColor/50'>We’re always here to listen and support your innovative ideas that can make the world a better place. Share your thoughts with us, and we’ll respond promptly to help you bring them to life</p>
          </div>
          {/* body section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-24 md:gap-24 lg:gap-5 place-items-center'>
            {
              ContactData.map((data) => (
                <div className='rounded-2xl bg-primary2 hover:bg-primary/70 hover:text-white relative shadow-xl duration-300 group max-w-[300px] w-[300px] h-44'>
                  {/* image section */}
                  <div className='h-[80px]'>
                    <img src={data.img} alt="not avail" className='max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 drop-shadow-md' />
                  </div>
                  {/* details section */}
                  <div className='p-4 text-center'>
                    {/* star rating */}
                    <div className='w-full flex-row items-center justify-center gap-1'>
                      <h1 className='text-xl font-bold'>{data.title}</h1>
                      <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.subtitle}</p>
                      <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.subtitle2}</p>

                    </div>
                  </div>

                </div>
              ))
            }
          </div>

        </div>
      </div>


      {/* Contact form */}
      <div data-aos="zoom-in" className='mb-20 bg-secondary2/100 text-btnColor mt-44'>
        <div className='container backdrop-blur-sm py-8 grid grid-cols-1 md:grid-cols-2 gap-24'>
          <img src={contact1} alt="not avail" className='block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 drop-shadow-md w-[432px] mt-36' />

          <div className='space-y-6 max-w-xl lg:ms-20 '>
            <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-bold'>Get in touch</h1>
            <div className=''>
              <label classname="">Name</label>
              <input type='text' name='name' data-aos="fade-up" className='w-full p-3' placeholder='Insert Your Name' />
            </div>

            <div className=''>
              <label classname="">Mail</label>
              <input type='email' name='email' data-aos="fade-up" className='w-full p-3' placeholder='Insert Your email' />
            </div>

            <div className=''>
              <label classname="">Message</label>
              <textarea name="Project" cols={30} rows={10} data-aos="fade-up" className="w-full p-3 resize-none h-32" placeholder='How can we help?'></textarea>
            </div>

            <ReCAPTCHA
                        sitekey="6LcYQCgqAAAAABUBvbdOIcGMAQDlxyHNAvE43_CI"
                        onChange={onChange}
                      />,
            <button className='bg-btnColor hover:scale-105 duration-100 text-white py-2 px-4 rounded-md'>Send Message</button>


          </div>
        </div>

      </div>
    </>
  )
}
