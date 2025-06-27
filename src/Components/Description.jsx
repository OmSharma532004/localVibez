import React from 'react';
import vibezImage from '../images/logo.png'; // Replace with your actual image path

const Description = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between">
      {/* Left content */}
      <div className="md:w-1/2 md:pr-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-6 leading-tight">
          Connecting Communities, <br /> Empowering Local Lives
        </h1>
        <p className="text-gray-700 font-light text-lg mb-6">
          Welcome to <span className="font-semibold text-blue-600">LocalVibez</span>, your go-to platform for discovering trusted services, connecting with neighbors, and supporting local businesses. Whether you're booking a home service, finding a pet sitter, or buying from a nearby shop, LocalVibez makes it all seamless and local-first.
        </p>
        <button className="bg-blue-600 hover:bg-blue-300 text-white font-bold py-3 px-6 rounded-xl transition">
          Explore Services
        </button>
        <p className="text-gray-700 font-light text-md mt-6">
          At <span className="font-semibold text-blue-600">LocalVibez</span>, we believe strong neighborhoods build stronger cities. Our platform fosters real connections, promotes trust, and brings convenience to your fingertips—whether it's finding help or lending a hand.
        </p>
      </div>

      {/* Right image */}
      <div className="md:w-[40%]  mt-10 md:mt-0">
        <img
          src={vibezImage}
          alt="LocalVibez in action"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Description;
