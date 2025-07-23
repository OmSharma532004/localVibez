// Community Guidelines Page with extended content and FAQs
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

const CommunityGuidelinesPage = () => {
  return (
   <div className="flex">
    <Sidebar />
     <div className="max-w-4xl mx-auto px-6 py-12 font-sans">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Community Guidelines</h1>
      <p className="text-gray-700 mb-6">
        To keep LocalVibez safe, respectful, and enjoyable, all users are expected to follow these guidelines. These rules are aligned with Indian laws such as the IT Act, 2000 and the IT Rules, 2021. Violating them may result in warnings, content takedown, temporary suspension, permanent bans, or even legal escalation in serious cases.
      </p>

      <ul className="list-disc list-inside space-y-2 text-sm text-gray-800">
        <li>No hate speech, caste-based slurs, or targeted harassment.</li>
        <li>No nudity, pornography, or graphically violent content.</li>
        <li>No misinformation or manipulation of public interest (e.g., elections, health).</li>
        <li>No impersonation, deepfakes, or misleading identities.</li>
        <li>No spamming, link baiting, or irrelevant promotions.</li>
        <li>No sale or promotion of illegal goods or services (drugs, weapons, gambling, etc.).</li>
        <li>No communal or politically inflammatory content without verified context.</li>
        <li>Respect regional and religious sensitivities in posts and comments.</li>
        <li>Do not exploit tragedies or crises for attention or views.</li>
      </ul>

      <p className="mt-6 text-gray-700 text-sm">
        All reported content is reviewed within 24 hours. Content that violates the above rules will be removed within 72 hours as per the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.
      </p>

      <p className="mt-4 text-gray-700 text-sm">
        For repeat offenders or severe violations (e.g., threats to national security, child abuse, deepfakes), user data may be shared with legal authorities as mandated by Indian law.
      </p>

      <div className="mt-8">
        <FAQ
          question="Can I post political opinions?"
          answer="Yes, as long as they do not incite hate, defame individuals, or spread misinformation. Verified context and respectful language are expected."
        />
        <FAQ
          question="Is meme or satire content allowed?"
          answer="Yes, satire is welcome — but content that mocks communities, religions, or spreads hate will be taken down."
        />
        <FAQ
          question="What happens if my content is reported?"
          answer="Our moderators review reported content within 24 hours. If found in violation, it is removed. Repeat violations may lead to warnings, suspensions, or bans."
        />
        <FAQ
          question="Are anonymous posts monitored the same way?"
          answer="Yes, all posts including anonymous ones are reviewed and subject to moderation and takedown."
        />
        <FAQ
          question="Can I appeal a content takedown?"
          answer="Yes. You can email our grievance officer with justification. We aim to resolve appeals within 7 working days."
        />
        <FAQ
          question="How do I report offensive content or users?"
          answer="Tap the three-dot menu on the post or profile and select 'Report'. Provide a reason so we can investigate quickly."
        />
      </div>

      <p className="mt-10 text-sm text-gray-700">
        At LocalVibez, we believe in building a supportive and inclusive space. These guidelines help protect users and foster healthy, constructive engagement across communities.
      </p>
    </div>
   </div>
  );
};

export default CommunityGuidelinesPage;
