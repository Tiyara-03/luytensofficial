import React from "react";
import Marquee from "react-fast-marquee";
import Bs from '../assets/Bs.jpg';
import Go from '../assets/Go.jpg';
import Info from '../assets/Info.jpg';
import Tm from '../assets/Tm.jpg';
import Wp from '../assets/Wp.jpg';

const MarqueeExample = () => {
    const clients = [
        { id: 1, img: Go, name: "Google", description: "Innovating the future with AI and cloud technology." },
        { id: 2, img: Tm, name: "Tech Mahindra", description: "Driving digital transformation worldwide." },
        { id: 3, img: Info, name: "Infosys", description: "Empowering enterprises with IT solutions." },
        { id: 4, img: Bs, name: "BSNL", description: "Connecting India with reliable telecom services." },
        { id: 5, img: Wp, name: "Wipro", description: "Engineering next-gen digital experiences." },
        { id: 6, img: "https://luytenstech.vercel.app/static/media/tcs.cc235d959d8f15ca2733.png", name: "TCS", description: "Building sustainable IT ecosystems globally." },
        { id: 7, img: "https://luytenstech.vercel.app/static/media/zensar.be1d24c53104f4b7bc8c.png", name: "Zensar", description: "Redefining customer experiences with tech." },
    ];

    return (
        <Marquee
            speed={40} 
            direction="left" 
            pauseOnHover={true} 
            gradientColor={[255, 255, 255]} 
        >
            <div className="flex flex-row justify-center items-center gap-10 text-black font-sans text-sm">
                {clients.map((client) => (
                    <div 
                        key={client.id} 
                        className="w-[14rem] h-[10rem] p-5 bg-[#1a1a1a] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <img 
                            src={client.img} 
                            alt={client.name} 
                            className="w-full h-[6rem] object-contain mb-2" 
                        />
                        
                    </div>
                ))}
            </div>
        </Marquee>
    );
};

export default MarqueeExample;
