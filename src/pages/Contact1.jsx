import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';

function onChange(value) {
  console.log("Captcha value:", value);
}




export default function Contact1() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ecw9b9g', 'template_y25c7wl', form.current, {
        publicKey: 'q3AhWb7N8zG0zkGpK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Form submitted:", formData);
    // Reset the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };



  return (
    <div className="bg-OffWhite w-full h-full">
      <div className="px-6 md:px-8 mx-auto pt-[6rem] pb-4">
        <div className="bg-LightBlack rounded-3xl min-h-[600px] flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="flex-1 mx-auto px-14 md:px-24 md:pr-36 w-[100%] max-w-[84rem] pt-4">
            <div className="flex flex-col gap-4 mt-16">
              <div className="text-purple-300 text-base flex flex-row items-center gap-3">
                <i class="ri-attachment-fill"></i>
                <h1 className="text-white font-bold text-lg">Want to know more About Us</h1>
              </div>
              {/* Heading */}
              <div className="text-4xl md:text-6xl text-TextWhite font-light">
                <h1>Let's connect</h1>
              </div>
              {/* Para */}
              <div className="max-w-[32rem] text-[#d9d9d9] text-base md:text-[18px] font-normal mt-2">
                <p>
                  Contact us to discuss business opportunities, or if you are stuck trying to find the right solution. Or, if YK, just to say hello!
                </p>
              </div>

              <div className='flex flex-col gap-1'>
                <div className='text-[#d9d9d9] text-base md:text-[18px] font-normal mt-2'>
                  <h1 className='font-semibold'>Email Us</h1>
                  <div className="flex flex-row gap-2 mb-2">

                    <div className="text-LightBlack text-xl p-2 bg-white rounded-xl group-hover:order-2 transition-all duration-700">
                      <i className="ri-arrow-right-up-line"></i>
                    </div>
                    <div className="md:text-lg text-base font-medium text-lightblack p-3 bg-white rounded-xl group-hover:order-1 transition-all duration-700 cursor-pointer">
                      <a href="mailto:info@Luytens.com" className="">
                        info@Luytens.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className='text-[#d9d9d9] text-base md:text-[18px] font-normal mt-2 '>
                  <h1 className='font-semibold'>Call Us on</h1>
                  <p>+91 1203507027,</p>
                  <p> +1 6093160709</p>
                </div>
              </div>


            </div>
          </div>

          {/* Right Section (Contact Form) */}
          <div className="flex-1 mx-auto px-14 md:px-24 md:pr-36 w-[100%] max-w-[84rem] pt-4 justify-center items-center flex">
            {/* <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h2> */}
            <div className='w-full' onSubmit={handleSubmit}>
              <form ref={form} onSubmit={sendEmail}
               className="space-y-4">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border text-TextWhite rounded-xl focus:outline-none focus:ring-1 focus:ring-purple-500 bg-lightblack"
                  />
                </div>
                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border text-TextWhite rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-lightblack"
                  />
                </div>
                {/* Message Input */}
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here"
                    className="w-full px-4 py-3 border text-TextWhite rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-lightblack"
                  ></textarea>
                </div>

                <ReCAPTCHA
                  sitekey="6LeAi68qAAAAAKrRI71kPcyvpu439_PSQG48YKjC"
                  onChange={onChange}
                />,

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="circleCheckbox"
                    name="checkboxGroup"
                    className="appearance-none w-5 h-5 rounded-full bg-LightBlack border border-gray-500 checked:bg-purple-500 checked:border-purple-500 focus:outline-none cursor-pointer"
                  />
                  <label
                    htmlFor="circleCheckbox"
                    className="text-[#d9d9d9] font-semibold ml-2">
                    I Agree to Privacy and Terms&Conditions
                  </label>
                </div>

                <button
                  type="submit"
                  className="md:text-lg w-[10rem] text-base font-medium text-lightblack p-3 bg-white rounded-xl group-hover:order-1 transition-all duration-700"
                >
                  Send Message
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
