import React from "react";
import qrPhone from "../images/qr.png"; // Use the phone+QR image here

const AppDownloadSection = () => {
  return (
    <section className="bg-gradient-to-r from-white via-blue-100 to-blue-50 rounded-3xl p-8 sm:p-12 md:p-16 shadow-lg my-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12">

        {/* Left Text Block */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            Download the app now!
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            Experience seamless online ordering <br className="hidden sm:inline-block" />
            only on the <span className="text-blue-600 font-medium">LocalVibez</span> app
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-14"
              />
            </a>
            <a
              href="https://www.apple.com/in/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-14"
              />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-full max-w-sm">
          <p className="text-gray-700 font-semibold mb-4">
            Scan the QR code to<br />download the app
          </p>
          <img
            src={qrPhone}
            alt="QR in Phone"
            className="w-48 sm:w-56 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
