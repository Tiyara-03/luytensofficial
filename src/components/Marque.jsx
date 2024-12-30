import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeExample = () => {
  return (
    <Marquee
      speed={60}                // Adjusts the scrolling speed (higher = faster)
      direction="left"         // Changes the scroll direction (left or right)
      pauseOnHover={true}       // Pauses the marquee when you hover over it
      gradientColor={[255, 255, 255]} // Sets the gradient color; use [0, 0, 0] for black
    >
      {/* Example of a customizable marquee with react-fast-marquee! */}
      <div className="flex flex-row text-gray-300 font-sans gap-6 text-sm">
        <div className="pl-6">
          <h1>Redefine job hunting  with <span className="text-white pl-1 font-semibold">Job Genee</span>.</h1>
        </div>
        <div>
          <h1>Empowering your ambitions through <span className="text-white pl-1 font-semibold">Job Genee</span>.</h1>
        </div>

        <div>
          <h1>Say goodbye to complex job searches with <span className="text-white pl-1 font-semibold">Job Genee</span>.</h1>
        </div>
        <div>
          <h1>Your career journey starts here with <span className="text-white pl-1 font-semibold">Job Genee</span>.</h1>
        </div>
        <div>
          <h1>Discover opportunities tailored to you, only on <span className="text-white pl-1 font-semibold">Job Genee</span>.</h1>
        </div>
      </div>
    </Marquee>

  );
};

export default MarqueeExample;


