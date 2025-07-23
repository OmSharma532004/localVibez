// Advertising Policy Page – Extended Version
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

const AdvertisingPolicyPage = () => {
  return (
   <div className="flex">
    <Sidebar />
     <div className="max-w-4xl mx-auto px-6 py-12 font-sans">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Advertising Policy</h1>
      <p className="text-gray-700 mb-4">
        LocalVibez welcomes ethical advertising that adds value to our community. All ads must comply with Indian laws (including ASCI Code and DPDPA), be truthful, safe, and transparent. Misleading or harmful ads will be removed immediately.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">What We Allow</h2>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
        <li>Promotions related to local services, events, or small businesses.</li>
        <li>Sponsored content clearly labeled as such.</li>
        <li>Contextual ads based on user location or category interests.</li>
        <li>Affiliate or influencer campaigns that disclose sponsorship.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">What We Don’t Allow</h2>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
        <li>Ads for alcohol, tobacco, betting, adult products, or illegal drugs.</li>
        <li>Political, religious, or communal promotions.</li>
        <li>Misleading claims, miracle cures, or unrealistic outcomes.</li>
        <li>Ads using hate, fear, or sexual content for attention.</li>
        <li>Tracking-based ads without user consent (per DPDPA).</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Ad Placement and Transparency</h2>
      <p className="text-sm text-gray-700">
        All advertisements must be clearly distinguishable from organic content. Paid promotions will be marked as "Sponsored". We do not allow dark patterns or hidden advertising that misleads users.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Influencer & Native Advertising</h2>
      <p className="text-sm text-gray-700">
        Influencers or local promoters must use #ad or #sponsored tags when posting paid content. Any violations may lead to content takedown and profile penalties.
      </p>

      <div className="mt-8">
        <FAQ
          question="Can I promote my local business on LocalVibez?"
          answer="Yes! As long as the content is safe, respectful, and not misleading, you can run targeted ads to reach nearby users."
        />
        <FAQ
          question="How can I get the 'Sponsored' label on my post?"
          answer="Use the Promote option when posting, or contact us for campaign setup. All promoted posts are reviewed before approval."
        />
        <FAQ
          question="What if a competitor reports my ad unfairly?"
          answer="We investigate every report and reinstate ads found compliant. False reporting may lead to user warnings."
        />
        <FAQ
          question="Do you use my personal data for ad targeting?"
          answer="No sensitive data is used. We only use category preferences and approximate location, in compliance with the DPDPA."
        />
        <FAQ
          question="Can I advertise political content before elections?"
          answer="No. We do not allow any political advertisements or endorsements, per our neutrality and content integrity standards."
        />
        <FAQ
          question="Who regulates your ad policy in India?"
          answer="We comply with ASCI (Advertising Standards Council of India) and relevant rules under the Consumer Protection Act."
        />
      </div>

      <p className="mt-10 text-sm text-gray-700">
        To advertise on LocalVibez, email us at <a className="text-indigo-600 underline" href="mailto:ads@localvibez.in">ads@localvibez.in</a>.
      </p>
    </div>
   </div>
  );
};

export default AdvertisingPolicyPage;