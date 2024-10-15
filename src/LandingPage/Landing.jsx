import React from 'react'
import man from './Assets/man.png'
import CountUp from 'react-countup';
import icon3 from './Assets/icon3.png'
import icon4 from './Assets/icon4.png'
import icon5 from './Assets/icon5.png'

export default function Landing() {
    return (
        <div className='min-h-screen bg-gray-200'>
            {/* Job Logo */}
            {/* <div className='absolute text-9xl font-bold text-blue-200 bottom-10 left-[35rem] justify-center items-center hidden lg:flex'>JOBS</div> */}
            {/* hero section */}
            <div className='mx-auto container grid grid-cols-1 lg:grid-cols-2 pt-10 lg:px-0 lg:mx-0 xl:mx-auto xl:container '>
                {/* find job portion */}
                <div className='flex flex-col justify-center items-start mt-10 lg:ml-20  mb-16 lg:mb-0'>
                    <div className='flex flex-row text-md font-bold mb-8'>
                        <p>We have <span className='text-blue-600'>208,000+</span>Live Jobs </p>
                    </div>
                    <div className='flex flex-row text-4xl lg:text-6xl font-bold mb-8'>
                        <h1>Find the <span className='text-blue-600'>Job</span> that fits <br /> your life </h1>
                    </div>

                    <p className='mb-10'>Type your keyword, then click search to find your perfect job</p>

                    <div className='bg-white py-2 px-2 rounded-lg border-gray-300 border-2 w-full'>
                        <form className='grid lg:grid-cols-4 gap-2'>
                            <div className='flex flex-col justify-center items-start'>
                                <label className='text-gray-500'>Jobs</label>
                                <select className='font-bold w-full py-1 lg:py-0'>
                                    <option value="">Job Title</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Marketing & Sales">Marketing & Sales</option>
                                    <option value="Testing">Testing</option>
                                    <option value="Manager">Manager</option>
                                    <option value="HR">HR</option>
                                </select>
                            </div>

                            <div className="form-box flex flex-col justify-center items-start">
                                <label className='text-gray-500'>TYPE</label>
                                <select className='font-bold w-full py-1 lg:py-0'>
                                    <option value="">Types</option>
                                    <option value="Work From Home">Work From Home</option>
                                    <option value="On-site">On-site</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>

                            <div className="form-box flex flex-col justify-center items-start">
                                <label className='text-gray-500'>LOCATIONS</label>
                                <input type="text" placeholder="Search..." className='font-bold text-black placeholder:text-black w-full py-1 lg:py-0' />
                            </div>
                            <div className="bg-blue-500 rounded-lg flex justify-center items-center py-2 lg:py-0">
                                <button>Find Job</button>
                            </div>
                        </form>
                    </div>

                    <p className='mt-8'> <span className='font-bold'>Popular searches:</span> Developer, Designer, Architect, Engineer...</p>
                </div>

                {/* image portion */}
                <div>
                    <div className='mx-auto lg:h-auto lg:w-[29rem] w-[20rem] h-auto'>
                        <img src={man} alt="na" className='w-full h-full' />
                    </div>
                    <div className='absolute bg-white px-4 py-2 flex flex-row justify-center items-center rounded-xl bottom-[-4rem] left-10 md:left-16 lg:bottom-auto lg:top-32 lg:right-[33rem] lg:left-auto'>
                        <img src={icon3} alt="na" className='w-[2rem]' />
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-2xl text-yellow-500 font-bold'>12K +</h1>
                            <p className='text-xs'>Companies Jobs</p>
                        </div>
                    </div>

                    <div className='absolute bg-white px-4 py-2 flex flex-row justify-center items-center rounded-xl bottom-[1rem] left-[21rem] sm:left-[26rem] md:left-[35rem] lg:bottom-auto lg:left-auto lg:right-[10rem] lg:top-16'>
                        <img src={icon4} alt="na" className='w-[2rem]' />
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-2xl text-red-500 font-bold'>3K +</h1>
                            <p className='text-xs'>Jobs Done</p>
                        </div>
                    </div>

                    <div className='absolute bg-white px-4 py-2 flex flex-row justify-center items-center rounded-xl bottom-[-24rem] left-[19rem] sm:left-[26rem] md:left-[35rem] lg:bottom-20 lg:left-auto lg:right-[10rem]'>
                        <img src={icon5} alt="na" className='w-[2rem]' />
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-2xl text-blue-500 font-bold'>98+</h1>
                            <p className='text-xs'>Jobs for Countries</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Stats section */}
            <div className='min-h-[120px] bg-statsPart pb-8 lg:pb-0'>
                <section className="stats-part pt-4">
                    <div className="stats grid grid-cols-2 lg:grid-cols-4 text-white gap-4">
                        <div className="stat flex flex-col justify-center items-center">
                            <h3 className='text-4xl font-bold pb-2'>
                                <CountUp end={25} duration={8} />
                                M+
                            </h3>
                            <p className='text-base text-gray-300'>Jobs Available</p>
                        </div>
                        <div className="stat flex flex-col justify-center items-center">
                            <h3 className='text-4xl font-bold pb-2'>
                                <CountUp end={177} duration={8} />
                                K+
                            </h3>
                            <p className='text-base text-gray-300'>New Jobs This Week!</p>
                        </div>
                        <div className="stat flex flex-col justify-center items-center">
                            <h3 className='text-4xl font-bold pb-2'>
                                <CountUp end={298} duration={8} />
                                K+
                            </h3>
                            <p className='text-xs lg:text-base text-gray-300'>Companies Hiring</p>
                        </div>
                        <div className="stat flex flex-col justify-center items-center">
                            <h3 className='text-4xl font-bold pb-2'>
                                <CountUp end={5} duration={5} />
                                M+
                            </h3>
                            <p className='text-base text-gray-300'>Candidates</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
