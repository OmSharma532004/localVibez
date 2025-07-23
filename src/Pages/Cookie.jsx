// Cookie Policy Page – Extended Version
import React, { useState } from "react";
import Sidebar from "./SidebarPolicies";

const FAQ = ({ question, answer }) => {
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

const CookiePolicyPage = () => {
  return (
   <div className="flex">
    <Sidebar />
     <div className="max-w-4xl mx-auto px-6 py-12 font-sans">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
      <p className="text-gray-700 mb-6">
        This Cookie Policy explains how LocalVibez uses cookies and similar technologies to recognize you when you visit our app or website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">What are Cookies?</h2>
      <p className="text-sm text-gray-700">
        Cookies are small data files placed on your device when you visit a website or app. These cookies are widely used to make platforms work efficiently and provide analytics and personalized content.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Types of Cookies We Use</h2>
      <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
        <li><strong>Essential Cookies:</strong> Enable core app functionalities like login and navigation.</li>
        <li><strong>Analytics Cookies:</strong> Track app usage, crash reports, and performance stats.</li>
        <li><strong>Preference Cookies:</strong> Save language or theme settings across sessions.</li>
        <li><strong>Advertising Cookies:</strong> Deliver relevant ads if you opt-in to sponsored content.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Managing Your Preferences</h2>
      <p className="text-sm text-gray-700">
        You can manage cookie preferences from within the app settings or by adjusting permissions in your browser. You can disable all non-essential cookies and still use the app.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Cookies and Indian Laws</h2>
      <p className="text-sm text-gray-700">
        We comply with the Digital Personal Data Protection Act (DPDPA) and IT Rules. Consent is required for any tracking cookie. No sensitive data is ever collected without user awareness.
      </p>

      <div className="mt-8">
        <FAQ
          question="Can I use the app without cookies?"
          answer="Yes, essential cookies will still be used, but analytics and advertising cookies can be turned off from settings."
        />
        <FAQ
          question="Are cookies used to track my location or identity?"
          answer="No. We use cookies for session continuity, not to track personal movement or identity beyond the app’s usage."
        />
        <FAQ
          question="Do third-party services also use cookies?"
          answer="Yes, for ads or crash reporting (e.g., Google Crashlytics). We require them to comply with strict Indian and global privacy laws."
        />
        <FAQ
          question="How do I withdraw cookie consent later?"
          answer="Just go to Settings → Privacy → Cookie Preferences and switch off optional cookie groups."
        />
        <FAQ
          question="Is my consent recorded and stored?"
          answer="Yes, we store a hashed version of your consent record as proof under DPDPA regulations."
        />
      </div>

      <p className="mt-10 text-sm text-gray-700">
        If you have questions about this Cookie Policy, email us at <a className="text-indigo-600 underline" href="mailto:privacy@localvibez.in">privacy@localvibez.in</a>
      </p>
    </div>
   </div>
  );
};

export default CookiePolicyPage;
