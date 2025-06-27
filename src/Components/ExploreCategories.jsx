import React, { useState } from 'react';
import { FaHome, FaUserAlt, FaPaw, FaCar, FaEllipsisH } from 'react-icons/fa';

const services = [
  {
    title: 'Home Services',
    desc: 'Get reliable help for your home with expert cleaning, plumbing repairs, electrical maintenance, pest control, appliance servicing, and handyman tasks—all at your convenience.',
    icon: <FaHome className="text-5xl text-blue-300 mx-auto mb-4" />,
  },
  {
    title: 'Personal Care',
    desc: 'Experience personalized wellness with our range of services including salon-quality hair styling, professional makeup, certified fitness training, relaxing massages, and home spa treatments.',
    icon: <FaUserAlt className="text-5xl text-blue-300 mx-auto mb-4" />,
  },
  {
    title: 'Pet Services',
    desc: 'Pamper your furry companions with grooming, pet walking, pet-sitting, vet visits, and customized care—all provided by trained pet lovers and professionals.',
    icon: <FaPaw className="text-5xl text-blue-300 mx-auto mb-4" />,
  },
  {
    title: 'Automotive',
    desc: 'Keep your vehicle in top shape with at-home car repair, detailing, emergency towing, battery checkups, tire replacements, and doorstep servicing options.',
    icon: <FaCar className="text-5xl text-blue-300 mx-auto mb-4" />,
  },
  {
    title: 'Other Services',
    desc: 'From tutoring and music lessons to event planning, photography, tech support, and custom requests—we connect you with local experts for almost any task.',
    icon: <FaEllipsisH className="text-5xl text-blue-300 mx-auto mb-4" />,
  },
];

const ExploreCategories = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-blue-800 w-[80%] items-center justify-center mx-auto rounded-xl border-4 border-blue-400 text-white text-center py-20 px-4">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-light mb-10">
        Explore Our <span className="text-blue-200 font-semibold">Services</span>
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`px-5 py-2 rounded-xl text-base font-medium transition-all ${
              active === index
                ? 'bg-blue-300 text-blue-900'
                : 'bg-blue-700 text-white hover:bg-blue-600'
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Icon */}
      {services[active].icon}

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-4">
        {services[active].title}
      </h3>

      {/* Description */}
      <div className="max-w-2xl mx-auto text-blue-100 px-4">
        <p className="text-base leading-relaxed">{services[active].desc}</p>
      </div>
    </section>
  );
};

export default ExploreCategories;
