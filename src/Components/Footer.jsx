import React, { useState } from 'react';
// import toast from 'react-hot-toast';
import logo2 from '../images/logo2.png';
import flag from '../images/flag.png';

import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    city: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    if (!formData.phone.trim() || !/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Valid 10-digit phone number is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
    //   toast.success('Thanks, Our team will contact you soon!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: ''
      });
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white -mb-[20px] text-black">
      <div className="mx-auto flex flex-col items-center flex-wrap justify-center">
        {/* <div className="w-full flex flex-col items-center justify-center md:w-1/2 px-4 mt-12 md:mt-0">
          {Object.keys(errors).length > 0 && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <ul>
                {Object.values(errors).map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          <h2 className="text-5xl font-light text-purple-800 text-center mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6 text-xl font-light md:w-[80vw] mb-[50px]">
            <div>
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email ID*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Mobile Number*</label>
              <input
                type="tel"
                id="mobile"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="city">City*</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Comment*</label>
              <textarea
                id="comment"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-purple-800 text-white text-2xl hover:bg-blue-300 py-2 px-4 rounded">
                Send us a Query
              </button>
            </div>
          </form>
        </div> */}

        <div className='flex flex-col gap-[40px] bg-zinc-900 p-8 text-white items-center justify-around flex-wrap w-full'>
          <div className='flex bg-zinc-900 gap-[40px] p-8 text-white items-center justify-around flex-wrap w-full'>
            <div className="flex flex-col items-center justify-center">
              <img src={logo2} alt="Logo" className='w-[200px] rounded-xl md:w-[500px]' />
              {/* <p className="text-lg mt-4">Contact us: 9818873918</p>
              <p className="text-lg">Email: <a href="mailto:om@localvibez.in" className="text-white hover:underline">om@localvibez.in</a></p> */}
            </div>

            <div className="md:flex md:flex-wrap justify-around md:w-[50%] gap-[20px] px-4">
              <div className='flex flex-col items-start justify-center'>
              

                <div className='mt-8 flex flex-col items-center justify-center md:w-[200px]'>
                  <h2 className="text-2xl font-bold text-white text-center mb-4">Get Connected</h2>
                  <ul className='flex flex-row'>
                    <Link to="/" className="hover:text-blue-300"><FaFacebook style={{ fontSize: "2rem" }} className="ml-4" /></Link>
                    <Link to="/" className="hover:text-blue-300"><FaInstagram style={{ fontSize: "2rem" }} className="ml-4" /></Link>
                    <Link to="/" className="hover:text-blue-300"><FaLinkedin style={{ fontSize: "2rem" }} className="ml-4" /></Link>
                    <Link to="/" className="hover:text-blue-300"><FaTwitter style={{ fontSize: "2rem" }} className="ml-4" /></Link>
                    <Link to="/" className="hover:text-blue-300"><FaYoutube style={{ fontSize: "2rem" }} className="ml-4" /></Link>
                  </ul>
                </div>
              </div>

              <div className='flex flex-col md:items-center md:justify-around'>
                <div className="mt-8 md:w-[200px]">
                  <h2 className="text-2xl font-bold text-white font-semibold mb-4">Our Services</h2>
                  <ul>
                    <li onClick={() => window.location.href = '/residential'} className="cursor-pointer mb-2 hover:text-blue-300">Home Services</li>
                    <li onClick={() => window.location.href = '/commercial'} className="cursor-pointer mb-2 hover:text-blue-300">Personal Care</li>
                    <li onClick={() => window.location.href = '/residential'} className="cursor-pointer mb-2 hover:text-blue-300">Pet Services</li>
                    <li onClick={() => window.location.href = '/supervisionPage'} className="cursor-pointer mb-2 hover:text-blue-300">Automotive</li>
                  </ul>
                </div>

                <div className="mt-8 md:w-[200px]">
                  <h2 className="text-2xl font-bold text-white font-semibold mb-4">Legal</h2>
                  <ul>
                    <li><a href="/privacy" target="_blank" className="hover:text-blue-300">Privacy Policy</a></li>
                    <li><a href="/disclaimer" target="_blank" className="hover:text-blue-300">Disclaimer Policy</a></li>
                    <li><a href="#" target="_blank" className="hover:text-blue-300">Affiliate Policy</a></li>
                    <li><a href="/faq" target="_blank" className="hover:text-blue-300">FAQs</a></li>

                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="w-full flex font-bold flex-col items-center justify-center bg-zinc-900 p-8 text-white">
            <h3 className="text-2xl font-bold text-white  mb-4">Disclaimer</h3>
            <p className='mb-4'>Copyright LocalVibez 2025, all rights reserved</p>
            {/* <p className="text-center">
              BuildWorX endeavors to ensure that the information and data in this section is correct and complete, but does not accept liability for any error made or omission from this section...
            </p> */}
            <p className='mt-4 flex items-center gap-2 text-lg'>Made In <img src={flag} width={40} alt="India" /> With Love</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
