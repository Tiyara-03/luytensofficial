import React from 'react'
// import footer from '../assets/footer.png'
import logo3 from '../assets/logo3.png'
import 'remixicon/fonts/remixicon.css'

const QuickLinks = [
    {
        title: "Home",
        link: "/#",
    },

    {
        title: "About",
        link: "/#About",
    },

    {
        title: "Contact",
        link: "/#Contact",
    },

    {
        title: "Services",
        link: "/#Services",
    },

    {
        title: "Experience",
        link: "/#Enperience",
    },
]

const Services = [
    {
        title: "Consulting",
        link: "/#Consulting",

    },

    {
        title: "Testing",
        link: "/#Tsting",

    },

    {
        title: "Development",
        link: "/#Development",

    },

    {
        title: "Security",
        link: "/#Security",

    },


]



export default function Footer() {
    return (
        <div className='bg-tertiary rounded-t-[64px]'>
            <div className='container'>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 pv-44 pt-5'>
                    {/* Company Details */}
                    <div className='pb-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify flex items-center gap-3'
                        ><img src={logo3} alt="" className='max-w-[250px]' /></h1>
                        <div className="flex items-center gap-3 mt-1 mb-2 ">
                            <a href="/#">
                                <i class="ri-twitter-x-fill text-3xl"></i>
                            </a>

                            <a href="/#">
                                <i class="ri-linkedin-box-fill text-3xl"></i>
                            </a>
                        </div>
                        <div className='flex-col'>
                            <p className='mb-1'>West Windsor, New Jersey, USA.</p>
                            <p className='mb-3'>Noida,UP,India.</p>
                            <p className='mb-1'>+91 1203507027</p>
                            <p className='mb-3'>+1 609-316-0709</p>

                            <p>info@Luytens.com</p>
                        </div>
                    </div>
                    {/* Footer details */}
                    <div className='grid grid-cols-2 col-span-2 md:pl-10'>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'> Services</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        Services.map((link) => (
                                            <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black/70' key={link.title}><span>{link.title}</span></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'> Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        QuickLinks.map((link) => (
                                            <li className='cursor-pointer hover:text-secondary2 hover:translate-x-1 duration-300 text-black/70' key={link.title}><span>{link.title}</span></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                    </div>
                    {/* Message box/ */}
                    <div className='py-8 px-4'>
                        <div className=''>
                            <div className='flex flex-col items-start gap-3 justify-start'>
                                <h1 className= 'sm:text-3xl text-xl font-bold sm:text-left mb-3 text-justify'>Our Newsletter</h1>
                                <p>
                                    Never miss out on our company's latest news, updates, and exclusive offers! Subscribe to our newsletter today and get the inside scoop delivered straight to your inbox.
                                </p>
                                <div className='w-full border-gray-400 border mt-4'>

                                    <input
                                        type="email"
                                        className="py-1 px-4 w-full"                                        
                                        placeholder="Email Address"
                                        
                                    />
                                </div>

                                <button className='py-1 px-4 bg-btnColor hover:scale-105 duration-100 text-white'>Subscribe</button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
