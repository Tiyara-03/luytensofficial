import React from 'react'
// import bgimg from '../assets/landingbg.jpeg'
import bgimg2 from '../assets/landingbg2.jpg'

export default function Home1() {
    return (
        <>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none"></div>
            <div className=''>

                <div className='min-h-[650px] w-full'
                style={{ backgroundImage: `url(${bgimg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='mx-auto container'>
                        <div className='text-white pt-32 pb-8 flex flex-col justify-center items-center text-center relative z-40'>
                            <div className='mb-8 font-semibold text-md px-3 py-2 bg-purple-500 rounded-3xl'>
                                <p>Over a thousand ready-to-work creatives!</p>
                            </div>
                            <h1 className='text-5xl md:text-7xl font-medium font-serif mb-6'>The Hub for IT excellence</h1>

                            <p className='text-xl font-mona mb-8'>The world’s destination for innovative IT services and consulting expertise.</p>

                            <a href="#/" className='bg-purple-500 px-5 py-3 rounded-3xl text-btnColor hover:scale-105 duration-300'>Learn More</a>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}
