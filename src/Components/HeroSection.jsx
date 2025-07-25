import { useEffect } from "react";
import { FaGooglePlay, FaApple, FaChevronDown } from "react-icons/fa";
import videoSrc from "../images/hero.mp4";

function HeroSection() {
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollBy({ top: 100, left: 0, behavior: "smooth" });
    }, 4000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4">LocalVibez</h1>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-light mb-6">
            Connect with Your Community
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-10">
            Discover local services, connect with neighbors, and support local businesses.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:bg-blue-50 transition flex items-center gap-2"
            >
              <FaApple className="text-xl sm:text-2xl" />
              App Store
            </a>

            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:bg-blue-50 transition flex items-center gap-2"
            >
              <FaGooglePlay className="text-xl sm:text-2xl" />
              Google Play
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Text + Arrow */}
     <div
  onClick={handleScroll}
  className="absolute bottom-6 left-1/2 z-30 cursor-pointer text-white text-center transform -translate-x-1/2 animate-bounce"
>
  <div className="flex flex-col items-center justify-center">
    {/* <p className="text-lg mb-1">Scroll Down</p> */}
    <FaChevronDown size={28} />
  </div>
</div>

    </section>
  );
}

export default HeroSection;
