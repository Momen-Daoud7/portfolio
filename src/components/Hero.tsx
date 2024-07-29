import React from "react";
import { Link } from "react-router-dom";


const Hero: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-18 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
            HI, I'M Momen
            <span className="text-3x ml-[1px] text-moxa-blue font-bold">
              .
            </span>
            <span className="block">A CREATIVE</span>
            <span className="block">
              <span className="text-moxa-blue">SOFTWARE ENGINEER</span>
              <span className="relative">
                <svg
                  className="absolute top-1/2 -right-12 transform -translate-y-1/2"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z"
                    fill="currentColor"
                    className="text-moxa-blue"
                  />
                </svg>
              </span>
            </span>
            <span className="block">BASED IN DUBAI</span>
          </h1>
          <p className="text-xl mb-8 text-gray-600 leading-relaxed">
            I'm a Software Engineer specializing in{" "}
            <span className="text-moxa-blue font-bold text-md">AI</span> &{" "}
            <span className="text-moxa-blue font-bold text-md">Frontend</span>{" "}
            Development.
          </p>
          <Link
            to="https://www.linkedin.com/in/momen-daoud"
            target="_blank"
            className="bg-black text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-moxa-blue transition-colors"
          >
            Let's talk
          </Link>
        </div>
        {/* <div className="md:w-1/2 relative">
          <img
            // src="/momen.png"
            alt="Momen"
            className="rounded-lg shadow-lg"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
