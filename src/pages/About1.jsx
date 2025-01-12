import React from 'react'
import { LayoutGridDemo } from './Test';

const services = [
    {
        id: 1,
        title: 'Seamless Resources',
        description: 'We bring vast resources as our asset to the table. Whether in development or marketing, we provide seamless resources of your needs.',
    },
    {
        id: 2,
        title: 'We Start from Scratch',
        description: 'No matter where you stand, we start our work from square 1. We approach with open mind, ensuring we understand, adapt, and push forward in everything we do.',
    },
    {
        id: 3,
        title: 'Transparency',
        description: 'We sincerely stick to open communication and mindful listening, maintaining faith and transperancy with our clients and works leading to lasting partnership. ',
    },
    {
        id: 4,
        title: 'Industry Innovation',
        description: 'All our work leads to one goal i.e. Innovation. We are inclined to lead the tech industry to innovate with upcoming generation, securly and sustainably.',
    },
];


export default function About1() {
    return (
        <>
            <div className='bg-OffWhite w-full px-4 sm:px-20'>
                <div className='flex flex-col lg:flex-row pt-32 sm:pt-44 gap-16 justify-center items-center mb-5'>
                    <h1 className='px-10 text-5xl sm:text-6xl font-bold max-w-[50rem] font-sans'>We Build A Hub For IT Excellence.</h1>
                    <h1 className=' px-10 lg:px-0 lg:max-w-[25rem] font-medium text-base leading-[28px]'><span className='text-[#c88bb8] font-semibold'>Luyten's</span> is a dynamic and innovative resource hiring firm commited to deliver top-tier It professionals to businesses of all sizes.We are a leading expert of providing solutions, resources, and consluting for a diverse range of IT clients.  </h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

                </div>
                <section>
                    <div className=' text-purple-300 text-xs flex flex-row items-center justify-start gap-3 p-4 md:mx-16'>
                        <i class="ri-attachment-fill"></i>
                        <h1 className='text-LightBlack font-extrabold text-sm'>What we lead to</h1>
                    </div>
                    <div className='px-5 mx-auto'>
                        <div className=''>
                            <div className='flex flex-col lg:flex-row gap-4'>
                                <LayoutGridDemo />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='flex flex-col md:flex-row gap-12 justify-between pt-16 items-start px-12 order-1 mb-20'>
                        <div className=' text-purple-300 text-xs flex flex-row items-center justify-start gap-3 p-4 '>
                            <i class="ri-attachment-fill"></i>
                            <h1 className='text-LightBlack font-extrabold text-sm'>Our Journey</h1>
                        </div>
                        <div className='flex flex-col gap-6 text-black xl:max-w-[600px] lg:max-w-[400px] w-full md:mr-24 md:pr-14'>
                            <h1 className='text-[45px] leading-[50px] font-medium font-mona'>From West Windsor to India <i class="ri-time-zone-fill text-[#cfa68e]"></i></h1>
                            <p className='text-black text-base leading-[25px] font-normal'>Founded in <span className='text-[#c88bb8] font-semibold'>2021</span>, we have created golbal brand of ourselves. Starting from a small firm to a leading IT Consulting and Service brand, we reached hights from our hard work and detremination. Our goal to bridge the gap and provide the best for young individuals and organization, crossing through both success and failures we paved the path for ourselves. </p>
                            <p className='text-black text-base font-normal'>We believe in hardwork and leading, by taking one step after another. Our determination to bring a change, to find solutions is what lead us to success.</p>
                        </div>
                    </div>

                </section>

                <section>
                    <div className='mx-auto px-12 mb-20'>
                        <div className=' text-purple-300 text-xs flex flex-row items-center justify-start gap-3 p-4'>
                            <i class="ri-attachment-fill"></i>
                            <h1 className='text-LightBlack font-extrabold text-sm'>Our Benefits</h1>
                        </div>


                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 py-10 gap-10'>
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                >
                                    <div className='text-LightBlack border-r-[1px] rounded-2xl border-LightBlack px-5 hover:border-b-[1px] duration-200 hover:bg-gradient-l from-transparent to-black'>
                                        <h1 className='text-3xl mb-8'>{service.title}</h1>
                                        <p className='text-LightBlack pb-2'>{service.description}</p>

                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                <section>
                    <div className='mx-auto px-12 pb-36'>
                        <div className=' text-purple-300 text-xs flex flex-row items-center justify-start gap-3 p-4'>
                            <i class="ri-attachment-fill"></i>
                            <h1 className='text-LightBlack font-extrabold text-sm'>Our Mission</h1>
                        </div>
                        <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-12 px-4 xl:px-20 mt-20'>
                            <h1 className='text-[30px] lg:text-[45px] text-LightBlack lg:leading-[50px] font-medium max-w-[30rem]'>Drive values with mutual growth <img src="https://cdn.prod.website-files.com/6554adf723d82cf38df7e63b/65573975f41bab6db39f635b_Va-2.svg" alt="na" /></h1>
                            <p className='text-LightBlack max-w-[30rem]'>Our mission is to craft unique ideas and develop solution to face challanges with clear goals. We are in this business with a mindset of bringing sustainable change, with mutual growth. A Growth - not alone but as a whole, leading to the ladder of success by taking each step together one after another.</p>
                        </div>


                    </div>

                </section>



            </div>
        </>
    )
}
