import React, { useState } from 'react';
import Luylogo from '../assets/Luylogo.png';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isAboutPage = location.pathname === '/about';
  const isServiceDetail = /^\/service\/\d+$/.test(location.pathname);
  const isService = location.pathname === '/services';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className='px-8 mx-auto'>
        <div className='w-[85%] md:w-[95%] absolute z-10'>
          <div className={`flex flex-row justify-between items-center ${isAboutPage || isServiceDetail || isService ? 'text-black' : 'text-black'}`}>
            {/* Logo */}
            <Link to="/">
              <div className='px-5 py-3 flex flex-row items-center'>
                <div className='w-[3rem] md:w-[5rem] h-auto'>
                  <img src={Luylogo} alt="Luyten's Logo" />
                </div>
                <div className='font-bold text-base md:text-lg'>
                  <h1>Luyten's Technology Solution</h1>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className='hidden lg:flex flex-row gap-10 px-10'>
              <Link to="/services">Services</Link>
              <Link to="/about">About us</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/career">Career</Link>
            </div>

            {/* Mobile Menu Icon */}
            <div className='lg:hidden'>
              <button onClick={toggleMenu} className='text-LightBlack'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`absolute lg:hidden top-8 z-50 right-0 w-[60%] h-[60vh] bg-LightBlack rounded-3xl text-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} ${isMenuOpen ? '' : 'hidden'} transition-all duration-300 ease-in-out`}
      >
        {/* Close Icon */}
        <div className='flex justify-end p-5'>
          <button onClick={toggleMenu} className='text-white text-3xl'>
            &times; {/* Cross symbol */}
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className='flex flex-col items-center mt-16'>
          <Link to="/services" onClick={toggleMenu} className='py-3 hover:underline text-lg font-semibold transition-all duration-300'>Services</Link>
          <Link to="/about" onClick={toggleMenu} className='py-3 hover:underline text-lg font-semibold transition-all duration-300'>About Us</Link>
          <Link to="/contact" onClick={toggleMenu} className='py-3 hover:underline text-lg font-semibold transition-all duration-300'>Contact</Link>
          <Link to="/career" onClick={toggleMenu} className='py-3 hover:underline text-lg font-semibold transition-all duration-300'>Career</Link>
        </div>
      </div>
    </>
  );
}
