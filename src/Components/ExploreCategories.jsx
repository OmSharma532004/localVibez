import React from 'react';
import i6 from '../images/i6.png';
import i7 from '../images/i7.png';
import i8 from '../images/i8.png';
function ExploreCategories() {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Top Curve */}
      <div className="absolute top-[-40px] left-0 w-full h-20 bg-black rounded-b-[100%_100%]"></div>

      {/* Main Section */}
      <div className="relative z-10 bg-blue-800 py-24 px-6 md:px-12 text-center rounded-[0_0_100px_100px]">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Explore Service Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            {
              title: "Home Services",
              desc: "Cleaning, plumbing, electrical, and more.",
              image: `${i6}`,
            },
            {
              title: "Personal Care",
              desc: "Hair styling, fitness training, massage therapy, and more.",
              image: `${i7}`,
            },
            {
              title: "Pet Services",
              desc: "Grooming, walking, pet-sitting, and more.",
              image: `${i8}`,
            },
            {
              title: "Automotive",
              desc: "Repair, detailing, towing, and more.",
              image: "/images/automotive.png",
            },
            {
              title: "Other Services",
              desc: "Tutoring, event planning, photography, and more.",
              image: "/images/other-services.png",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all p-5 rounded-2xl text-white hover:scale-105 transform duration-300 shadow-lg"
            >
              <div className=" bg-white rounded-lg shadow-inner mb-4 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className=""
                />
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-blue-100 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-[-40px] left-0 w-full h-20 bg-[#11235A] rounded-t-[100%_100%]"></div>
    </section>
  );
}
export default ExploreCategories;