// User Verification Policy Page
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
const VerificationPolicyPage = () => {
  return (
   <div className="flex">
    <Sidebar />
     <div className="max-w-4xl mx-auto px-6 py-12 font-sans">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">User Verification Policy</h1>
      <p className="text-gray-700 mb-6">
        User verification on LocalVibez helps build a more trustworthy, safe, and credible community. Verification is optional for general users but mandatory for service providers, merchants, or users applying for badges.
      </p>

      <ul className="list-disc list-inside space-y-2 text-sm text-gray-800">
        <li>Basic verification uses phone number and email confirmation.</li>
        <li>Badge verification requires ID proof or business documentation.</li>
        <li>Verified users get a checkmark next to their profile and priority moderation.</li>
        <li>False verification attempts may result in a ban or legal action.</li>
      </ul>

      <div className="mt-8">
        <FAQ
          question="How do I apply for verification?"
          answer="Go to Profile > Settings > Request Verification. Upload required documents as per the category."
        />
        <FAQ
          question="Is verification mandatory?"
          answer="No. But it is recommended for professionals, merchants, or users offering public services."
        />
        <FAQ
          question="How long does verification take?"
          answer="Usually within 48–72 hours. If delayed, contact verification@localvibez.in."
        />
        <FAQ
          question="Can verification be revoked?"
          answer="Yes. If we detect misuse or false identity, badges and access may be withdrawn permanently."
        />
      </div>

      <p className="mt-8 text-sm text-gray-700">
        This policy aligns with user protection goals under India’s IT Rules 2021 and voluntary verification standards for platforms. For support, contact verification@localvibez.in.
      </p>
    </div>
   </div>
  );
};

export default VerificationPolicyPage;
