import { FaGooglePlay, FaApple } from "react-icons/fa";
import videoSrc from "../images/hero.mp4"; // Make sure to import your video file

function HeroSection() {
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
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-8xl  font-bold mb-4">LocalVibez</h1>
        <h2 className="text-3xl md:text-6xl font-light mb-6">
          Connect with Your Community
        </h2>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl">
          Discover local services, connect with neighbors, and support local businesses.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.apple.com/in/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-50 transition flex items-center gap-2"
          >
            <FaApple className="text-2xl" />
            App Store
          </a>

          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-50 transition flex items-center gap-2"
          >
            <FaGooglePlay className="text-2xl" />
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
