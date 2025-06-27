import React from "react";
import { motion } from "framer-motion";
import i1 from "../images/i1.png";
import i2 from "../images/i2.png";
import i3 from "../images/i3.png";
import i4 from "../images/i4.png";
import i5 from "../images/i5.png";

const offerData = [
  {
    image: i1,
    title: "Connect with Neighbors",
    description:
      "Join groups, participate in discussions, and stay informed about local events and news.",
  },
  {
    image: i2,
    title: "Find Local Services",
    description:
      "Easy-to-find and book trusted service providers in your area, from plumbers to tutors.",
  },
  {
    image: i3,
    title: "Support Local Businesses",
    description:
      "Discover local shops and businesses, and enjoy exclusive offers and promotions.",
  },
  {
    image: i4,
    title: "Neighborhood Updates",
    description:
      "Stay up-to-date with the latest news, events, and alerts in your neighborhood.",
  },
  {
    image: i5,
    title: "Local Marketplace",
    description:
      "Buy, sell, and trade items with your neighbors in a trusted local marketplace.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

function WhatWeOffer() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-pink-50 via-white to-blue-50 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        What LocalVibez Offers
      </h2>
      <p className="text-lg font-medium mb-12 max-w-2xl mx-auto text-gray-600">
        LocalVibez connects you with your community in meaningful ways.
      </p>
    <div className="flex flex-col items-center gap-10">
  {/* Row 1 – 3 cards */}
  <div className="flex flex-wrap justify-center gap-6 md:gap-10">
    {offerData.slice(0, 3).map((offer, index) => (
      <motion.div
        key={index}
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        className="w-64 bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-transform hover:scale-105"
      >
        <motion.img
          src={offer.image}
          alt={offer.title}
          className="h-28 mx-auto mb-4 rounded-lg"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <h3 className="font-semibold text-xl text-gray-800 mb-2">
          {offer.title}
        </h3>
        <p className="text-gray-600 text-sm">{offer.description}</p>
      </motion.div>
    ))}
  </div>

  {/* Row 2 – 2 cards centered */}
  <div className="flex justify-center gap-6 md:gap-10">
    {offerData.slice(3).map((offer, index) => (
      <motion.div
        key={index + 3}
        custom={index + 3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        className="w-64 bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-transform hover:scale-105"
      >
        <motion.img
          src={offer.image}
          alt={offer.title}
          className="h-28 mx-auto mb-4 rounded-lg"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <h3 className="font-semibold text-xl text-gray-800 mb-2">
          {offer.title}
        </h3>
        <p className="text-gray-600 text-sm">{offer.description}</p>
      </motion.div>
    ))}
  </div>
</div>

    </section>
  );
}

export default WhatWeOffer;
