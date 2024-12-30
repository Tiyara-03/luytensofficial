import React from "react";
import Marquee from "react-fast-marquee";
import Bs from '../assets/Bs.jpg'
import Go from '../assets/Go.jpg'
import Info from '../assets/Info.jpg'
import Tm from '../assets/Tm.jpg'
import Wp from '../assets/Wp.jpg'

const MarqueeExample = () => {
    return (
        <Marquee
            speed={60}                // Adjusts the scrolling speed (higher = faster)
            direction="left"         // Changes the scroll direction (left or right)
            pauseOnHover={true}       // Pauses the marquee when you hover over it
            gradientColor={[255, 255, 255]} // Sets the gradient color; use [0, 0, 0] for black
        >
            {/* Example of a customizable marquee with react-fast-marquee! */}
            <div className="flex flex-row justify-center items-center gap-10 text-black font-sans text-sm">
                <div className="w-[12rem] h-[7rem] p-5 bg-[#141414] rounded-3xl shadow-lg">
                    <img src={Go} alt="" className='w-[10rem] h-[5rem]' />
                </div>
                <div className="w-[12rem] h-[7rem] p-5 bg-[#141414] rounded-3xl shadow-lg">
                    <img src={Tm} alt="" className='w-[10rem] h-[5rem]' />
                </div>

                <div className="w-[12rem] h-[7rem] p-5 bg-[#141414] rounded-3xl shadow-lg">
                    <img src={Info} alt="" className='w-[10rem] h-[5rem]' />
                </div>
                <div clas>
                    <img src={Bs} alt="" className='w-[10rem] h-[5rem]' />
                </div>
                <div className="w-[12rem] h-[7rem] p-5 bg-[#141414] rounded-3xl shadow-lg">
                    <img src={Wp} alt="" className='w-[10rem] h-[5rem]' />
                </div>
                <div className="w-[12rem] h-[7rem] p-5 bg-[#141414] rounded-3xl shadow-lg">
                    <img src="https://luytenstech.vercel.app/static/media/tcs.cc235d959d8f15ca2733.png" alt="" className="w-[8rem]" />
                </div>
                <div className="w-[12rem] h-[7rem] p-5 bg-[#141414] rounded-3xl shadow-lg">
                    <img src="https://luytenstech.vercel.app/static/media/zensar.be1d24c53104f4b7bc8c.png" alt="" className="w-[8rem]" />
                </div>
                <div className="w-[12rem] h-[7rem] p-5 bg-[#141414] rounded-3xl shadow-lg">
                    <img src="https://luytenstech.vercel.app/static/media/infosys.c332953ad945d31fb9be.png" alt="" className="w-[8rem]" />
                </div>
                <div className="w-[12rem] h-[7rem] p-5 bg-[#141414] rounded-3xl shadow-lg">
                    <img src="https://luytenstech.vercel.app/static/media/infosys.c332953ad945d31fb9be.png" alt="" className="w-[8rem]" />
                </div>
            </div>
        </Marquee>

    );
};

export default MarqueeExample;


