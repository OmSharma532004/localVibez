import React from 'react';
import vibezImage from '../images/logo.png';

const Description = () => {
  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-24 flex flex-col md:flex-row items-center justify-between">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 md:pr-12 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-blue-900 mb-6 leading-snug">
          Connecting Communities, <br /> Empowering Local Lives
        </h1>

        <p className="text-gray-700 font-light text-base sm:text-lg mb-6">
          Welcome to <span className="font-semibold text-blue-600">LocalVibez</span>, your go-to platform for discovering trusted services, connecting with neighbors, and supporting local businesses. Whether you're booking a home service, finding a pet sitter, or buying from a nearby shop, LocalVibez makes it all seamless and local-first.
        </p>

        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
          Explore Services
        </button>

        <p className="text-gray-700 font-light text-base sm:text-md mt-6">
          At <span className="font-semibold text-blue-600">LocalVibez</span>, we believe strong neighborhoods build stronger cities. Our platform fosters real connections, promotes trust, and brings convenience to your fingertips—whether it's finding help or lending a hand.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[40%] mt-10 md:mt-0 flex justify-center">
        <img
          src={vibezImage}
          alt="LocalVibez in action"
          className="rounded-xl shadow-lg w-full max-w-md md:max-w-full object-contain"
        />
      </div>
    </section>
  );
};

export default Description;
