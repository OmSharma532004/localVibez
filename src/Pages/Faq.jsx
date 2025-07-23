import React, { useState } from "react";
import Sidebar from "./SidebarPolicies";

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-4 border border-[rgb(30,64,175)] rounded-md transition-all duration-200">
      <div
        className="px-4 py-3 flex justify-between items-center cursor-pointer bg-white hover:bg-[rgb(240,245,255)]"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-medium text-[rgb(30,64,175)]">{question}</span>
        <span className="text-[rgb(30,64,175)] font-bold">{open ? "−" : "+"}</span>
      </div>
      {open && (
        <div className="bg-white px-4 py-3 text-gray-700 text-sm border-t border-[rgb(30,64,175)]">
          {answer}
        </div>
      )}
    </div>
  );
};

const FaqPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="md:ml-64 w-full max-w-4xl mx-auto px-6 py-14 text-left font-sans bg-white">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>

        {/* Getting Started */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Getting Started</h2>
        <FaqItem question="How can I download the LocalVibez app?" answer="LocalVibez is available on the Google Play Store and Apple App Store. Just search for 'LocalVibez', tap install, and you're ready to go!" />
        <FaqItem question="Do I need to sign up to browse the app?" answer="Yes, a quick signup is required to personalize your neighborhood feed and connect you with nearby users." />
        <FaqItem question="How do I verify my location?" answer="Location is automatically detected during sign-up, or you can manually enter your city and area. We do not track GPS without permission." />

        {/* Using Features */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Using Features</h2>
        <FaqItem question="How do I create a post?" answer="Tap the '+' button on the home screen, select a category (Normal, Buy/Sell, Service, or Anonymous), add your content or media, and hit 'Post'." />
        <FaqItem question="Can I edit or delete a post?" answer="Yes. Visit your profile > My Posts > tap the 3-dot menu to edit or delete any post you’ve made." />
        <FaqItem question="How do I chat with someone?" answer="Open a post or profile and tap the chat icon to start a conversation. Only verified users can send messages." />
        <FaqItem question="Can I upload multiple photos?" answer="Yes, each post supports multiple images. Make sure you allow gallery access when prompted." />

        {/* Account & Profile */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Account & Profile</h2>
        <FaqItem question="How do I update my profile details?" answer="Go to Profile > Settings > Edit Profile. You can update your name, photo, phone number, and more." />
        <FaqItem question="How do I change my city or neighborhood?" answer="Go to Profile > Settings > Location and update your area manually. Your feed will be refreshed accordingly." />
        <FaqItem question="What if I forget my password?" answer="Use the 'Forgot Password' option on the login screen. A reset link will be sent to your registered email." />

        {/* Privacy & Legal */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Privacy & Legal</h2>
        <FaqItem question="Is my data safe?" answer="Yes. We use encrypted connections and secure cloud storage. Personal data is never sold and only shared with verified vendors under strict contracts." />
        <FaqItem question="Can I delete my account and data?" answer="Absolutely. Go to Settings > Delete Account. All your data will be erased within 15 days unless required by law." />
        <FaqItem question="How can I report abuse or misuse?" answer="Tap the three-dot menu on any post or profile and select 'Report'. Our moderation team reviews reports within 24 hours." />
        <FaqItem question="Who is your Grievance Officer?" answer="Please contact us at contact@localvibez.in. Our designated officer will respond within 24 hours and resolve the issue within 15 working days." />

        {/* General */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">General</h2>
        <FaqItem question="What are the different types of posts I can make?" answer="You can create Normal posts (general updates), Buy/Sell listings, Service offerings, or Anonymous posts if you want to stay hidden." />
        <FaqItem question="Do you support dark mode?" answer="Yes. LocalVibez auto-detects your system theme and supports both light and dark modes." />
        <FaqItem question="Can I block or mute someone?" answer="Yes. Visit the user's profile, tap the three-dot menu, and select Block or Mute. You won’t see their posts or messages again." />
        <FaqItem question="Is there a web version of LocalVibez?" answer="Currently, the app is mobile-only, but we are working on a web version soon." />

        <footer className="text-center text-sm text-gray-500 mt-16 pt-6 border-t">
          © {new Date().getFullYear()} LocalVibez LLP. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default FaqPage;
