import React from "react";

const SkewedComponent = () => {
  return (
    <div className="m-0 flex min-h-screen items-center justify-center flex-col bg-[#1f1f1f]">
      <div className="skewed w-[45rem] flex flex-col my-8 bg-[#111] text-[#f1f1f1] shadow-[0_0_15px_rgba(0,0,0,0.7)] lg:flex-row lg:w-[45rem]">
        <div className="text p-6 w-full flex justify-evenly items-start flex-col lg:w-1/2">
          <small className="text-[#8f8f8f]">lorem ispum dollar</small>
          <h1 className="m-0">Natural Beauty</h1>
          <p className="text-[#8f8f8f] text-[0.9rem] leading-[23px]">
            We here at Luytens Technology Solutions deliver innovative IT
            services. Our focus is on providing tailored solutions that meet
            your unique needs, helping you achieve your business goals with
            cutting-edge technology and expert support.
          </p>
          <a href="#/" className="text-blue-500">
            Read More &rarr;
          </a>
        </div>
        <div className="image w-full h-[17rem] relative overflow-hidden lg:w-1/2">
          <div className="before:content-[''] before:absolute before:left-[-6.1rem] before:top-1/2 before:translate-y-[-50%] before:rotate-[20deg] before:bg-[#111] before:w-[40%] before:h-[140%] before:shadow-[0_0_20px_rgba(0,0,0,0.7)] lg:before:w-[40%] lg:before:h-[140%] lg:before:top-1/2 lg:before:left-[-6.1rem] lg:before:translate-y-[-50%] lg:before:rotate-[20deg]">
            <img
              src="https://treenewal.com/wp-content/uploads/2020/11/oak-tree-care.png"
              alt="Oak Tree"
              className="object-cover lg:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkewedComponent;
