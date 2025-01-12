import React, { useState } from 'react';
import { servicesData } from '../components/ServicesDetails'; // Import servicesData for detailed information

const services = [
  {
    id: 1,
    title: 'STAFFING',
    description: 'Matching Top Talent with the perfect opportunity, our staffing solutions drive success for both businesses and professionals.',
  },
  {
    id: 2,
    title: 'WEB AND CLOUD',
    description: 'Transforming businesses with innovative web and cloud solutions, empowering them to thrive in the digital era.',
  },
  {
    id: 3,
    title: 'CONSULTING SERVICES',
    description: 'Unleashing the potential of mobility for businesses, our solutions drive innovation and efficiency on the go.',
  },
  {
    id: 4,
    title: 'DIGITAL MARKETING',
    description: 'Amplify your brand\'s presence and engage your audience with our data-driven digital marketing strategies.',
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null); // State to manage selected service for the pop-up

  const handleClick = (serviceId) => {
    setSelectedService(servicesData[serviceId]); // Set the selected service for the pop-up
  };

  const handleClosePopUp = () => {
    setSelectedService(null); // Close the pop-up
  };

  return (
    <div className="bg-OffWhite py-36">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-LightBlack">Our Services</h1>
        <p className="mt-3 text-lg italic text-gray-700">Explore our range of solutions designed to drive your success</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-12">
        {services.map((service) => (
          <div key={service.id} className="bg-LightBlack p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-[12rem]">
            <h2 className="text-2xl font-semibold text-white mb-10">{service.title}</h2>
            {/* <p className="mt-2 text-lg text-white">{service.description}</p> */}
            <button
              onClick={() => handleClick(service.id)}
              className="mt-4 inline-block text-lg font-medium text-purple-300 hover:text-purple-500"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      <div className='my-24 flex justify-end mx-auto px-4 sm:px-16'>
        <div className='max-w-2xl'>
          <h1 className='text-lg md:text-[22px] text-LightBlack leading-[33px] font-medium'>At Luyten's, we extend our expertise beyond the core services we offer. As a leading consulting and resource hiring firm, we're structured to excel with a holistic perspective. Our Strength is what we create and provide for your business and to an individual, ensuring every details to aligns with company's future vision and resonate with targeted audience.</h1>
        </div>
      </div>

      <div className='px-10'>
        <div className='bg-LightBlack p-8 rounded-lg shadow-lg'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0'>
            <div className='w-full flex items-center justify-center'>
              <div className='text-OffWhite max-w-[40rem]'>
                <h1 className='text-[30px] lg:text-[40px] lg:leading-[50px] font-medium max-w-[30rem] pb-4'>What more we offer ?</h1>
                <p className='pb-8 text-lg font-medium max-w-[50rem]'>Our core focus is on providing end-to-end resource hiring, and services. We expand to a diverse spectrum of IT areas, including:</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 text-base'>
                  <p className='p-2 bg-lightblack rounded-lg'>Software Development</p>
                  <p className='p-2 bg-lightblack rounded-lg'>Data Science & Analytics</p>
                  <p className='p-2 bg-lightblack rounded-lg'>Cybersecurity</p>
                  <p className='p-2 bg-lightblack rounded-lg'>IT Support & Networking</p>
                  <p className='p-2 bg-lightblack rounded-lg'>Web & Mobile Development</p>
                </div>
              </div>
            </div>
            <div className='w-full flex items-end justify-end'>
              <div className='w-[30rem] h-auto '>
                <img src="https://cdn.dribbble.com/userupload/16426142/file/original-82d4d237e3469ea3720a4df507d93055.jpg?resize=1200x900&vertical=center" alt="" className='rounded-lg' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-12 lg:gap-[10rem] px-4 xl:px-20 my-16'>
          <h1 className='text-[35px] lg:text-[45px] text-LightBlack lg:leading-[50px] font-medium max-w-[30rem]'>Commitment to clarity<img src="https://cdn.prod.website-files.com/6554adf723d82cf38df7e63b/65573975f41bab6db39f635b_Va-2.svg" alt="na" /></h1>
          <p className='text-LightBlack max-w-[30rem] text-base leading-[28px] font-medium'>We understand that each client has unique requirements and preferences when hiring IT resources.While building and expanding the project, we strictly adhere to the understanding of client's organizational culture, project needs, and technical specifications. This helps us in building a stronger bond and trust with our clients. </p>
        </div>
      </div>

      <div className='flex flex-col justify-start items-start px-4 sm:px-16 mt-20'>
        <div className='max-w-2xl'>
          <h1 className='text-lg md:text-[22px] text-LightBlack leading-[33px] font-medium pb-2'>The more we do, the better we become. We developed a new way to solve problems for many, we designed an innovative technique to help people find their right match in tech. Now whether it is about an individual or a young organization our work will service all.</h1>
          <h1 className='text-lg md:text-[22px] text-LightBlack leading-[33px] font-medium'>Our Project will launch soon. Stay tuned to recieve updates.</h1>
        
        </div>        
      </div>


      {/* Pop-up modal to display service details */}
      {/* Pop-up modal to display service details */}
      {selectedService && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 sm:p-8">
          <div className="bg-LightBlack p-8 rounded-lg shadow-lg max-w-full sm:max-w-4xl lg:max-w-6xl w-full max-h-full overflow-y-auto">
            <h2 className="text-xl md:text-3xl font-semibold text-white mb-4">{selectedService.title}</h2>

            {/* Subservice Cards */}
            {selectedService.subservices && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-6 mt-8">
                {selectedService.subservices.map((subservice, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">{subservice.title}</h3>
                    <p className="text-gray-600">{subservice.description}</p>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={handleClosePopUp}
              className="mt-4 text-lg font-medium text-white hover:text-purple-400"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
