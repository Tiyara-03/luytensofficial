import React from 'react';
import { useParams } from 'react-router-dom';
// import { servicesData } from './servicesData'; // Import services data

export const servicesData = {
    1: {
        title: 'Staffing Services',
        details: `
        We At Luyten’s Technology Solutions offers a range of recruitment systems that are tailored to ensure the specific needs of your businesses.
        Our staffing services allow us to bring in skilled and talented professionals who are experts in delivering results and effective solutions. We have the following recruitment systems to fulfill your every need:
      `,
        subservices: [
            {
                title: 'Short Term',
                description: 'Short Term Staffing offers businesses the ability to quickly find professionals without the hassle of signing a long-term contract.',
                description2: 'Allowing the business to ensure that their operations are smooth during the execution of a ongoing project.'
            },
            {
                title: 'Long Term',
                description: 'Our long term strategic staffing solutions empowers organizations to pursue their business goals by aligning the talent pool with the long term goals of the organization.'
            },
            {
                title: 'Payroll Services',
                description: 'Our focus has always been to provide you with a comprehensive service that is accurate and compliant.',
                description2: 'We want your HR department to spend more time and energy on outlining the strategy of the organization as opposed to being occupied with payroll compliance.'
            },
            {
                title: 'Direct Hire',
                description: 'Direct hire services ensure that your business hires high quality candidates and in turn streamlines the recruitment process.',
                description2: 'It makes it easy from selecting a candidate to ensuring that they are hired on a permanent basis.'
            }
        ]
    },
    2: {
        title: 'Web and Cloud',
        details: `
        Luyten’s Technology Solutions offers comprehensive Web and Cloud Based solution to help business and organization in digital technology and cloud services. Our solutions go a long way in ensuring that the customers’ businesses are more agile, scalable, and enhanced in a cloud setting.Therefore, we provide innovative services that are highly custom designed for the specific web that clients want.
        `,
        subservices: [
            {
                title: 'Web Development',
                description: 'We specialize in websites that are business oriented and web applications design. On top of that we also create websites that have high scalability so they can be used by multiple devices without compromising on page speed.'
            },
            {
                title: 'Cloud Solutions',
                description: ' Want to reach high availability? Want to reach greater scalability? No problem we have got you, without over complicating the operational levels we help businesses get cost efficiency too.'
            },
            {
                title: 'Cloud Migration',
                description: 'Our Cloud Integration Services connect existing applications across systems with cloud-based platforms. This operational efficiency facilitates application integration and drives collaboration and innovation through the use of cloud-based applications.'
            },
            {
                title: 'Digital Transformation',
                description: 'We help businesses optimize operations and innovate through technology integration with out excellent skill in digital world and digital Marketing.'
            }
        ]
    },
    3: {
        title: 'Consulting Services',
        details: `
        The consulting services we offer at Luyten’s Technology Solutions assist companies in improving their performancess,being innovative, and especially making sure they stay competitive. Our consultants assist in a broad range of strategic recommendations, allowing your organization to remain agile and prepared for ongoing change. Our staff comprises highly skilled consultants in the following areas:
        `,
        subservices: [
            {
                title: 'HR Consulting',
                description: 'Our services are tailor made to strengthen human resource functions such as recruitment, training, organizational development and performance management. '
            },
            {
                title: 'IT Consulting',
                description: 'We assist businesses with implementing the best technological solutions as well as assistance with restructuring their IT processes through our consulting services. Among others, we advise on systems integration, use of cloud technology and cybersecurity measures.'
            },
            {
                title: 'Project Management',
                description: 'To assist organizations to successfully finish intricate projects, we assist them in developing appropriate management strategies and ensures our project management services are robust enough to meet project deadlines, budget constraints and quality specifications.'
            },
            {
                title: 'Career Consulting',
                description: 'We provide experts advice, backed by years of experience, in matters of career transitions and growth to professionals wishing to seek assistance in shaping their own career paths or wish to grow.'
            }
        ]
    },
    4: {
        title: 'Digital Marketing',
        details: `
         In the modern market, dominated by the digital world, not having a strong online presence can mean death to a business. The team at Luyten’s Technology Solutions works around the clock to assist our clients with their Digital Marketing needs. We always strive to improve our service quality.Our approach includes:
        `,
        subservices: [
            {
                title: 'SEO Services',
                description: 'We aim to improve the visibility of our clients’ websites through on-page and off-page SEO, and help them rank better in search engine results.',
            },
            {
                title: 'Social Media Marketing',
                description: 'We formulate specific social media strategies for your brand engagement, to help establish, your connections with your target audience.'
            },
            {
                title: 'Content Marketing',
                description: 'We meticulously craft and create content that resonates with your targeted audiences. This encourages them to engage with the brand and leads expansion.'
            },
            {
                title: 'PPC Advertising',
                description: 'PPC campaigns Maximizes ROI. We adjust ad spending to ensure each dollar spend created monetized benefits.'
            },
            {
                title: 'Email Marketing',
                description: 'Email Marketing is a powerful tool to connect with audience. We ensure every email resonates with your target audience. Sending personalized and strategic email campaigns to engage customers.'
            }
        ]
    },
};


export default function ServiceDetail() {
    const { id } = useParams();
    const service = servicesData[id];

    if (!service) {
        return (
            <div className="flex items-center justify-center h-screen text-center">
                <h1 className="text-3xl font-semibold text-gray-700">Service not found</h1>
            </div>
        );
    }

    return (
        <div className="bg-OffWhite py-12">
            <div className="py-10 text-center text-black">
                <h1 className="text-5xl font-extrabold">{service.title}</h1>
                <p className="mt-3 text-lg italic">Solutions designed for your success</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 bg-LightBlack shadow-lg rounded-md mt-8">
                <h2 className="text-3xl font-semibold text-white mb-6">{service.title}</h2>
                <p className="text-lg text-white whitespace-pre-line leading-relaxed">{service.details}</p>

                {service.subservices && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                        {service.subservices.map((subservice, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{subservice.title}</h3>
                                <p className="text-gray-600">{subservice.description}</p>
                                <p className='text-gray-600'>{subservice.description2}</p>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
