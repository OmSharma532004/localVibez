import React, { useState } from "react";
import {
  FaClipboardCheck,
  FaUserTimes,
  FaCommentAlt,
  FaShieldAlt,
  FaStore,
  FaExchangeAlt,
  FaGavel,
  FaSyncAlt,
  FaEnvelope,
} from "react-icons/fa";

const Section = ({ number, icon, title, children }) => (
  <section className="mb-12 px-6 py-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <div className="text-indigo-600 text-xl">{icon}</div>
      <h2 className="text-2xl font-bold text-gray-800">
        {number}. {title}
      </h2>
    </div>
    <div className="pl-1 text-gray-700 text-sm leading-relaxed">{children}</div>
  </section>
);

const FAQ = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-4 rounded-lg overflow-hidden shadow-md">
      <div
        className="bg-[rgb(30,64,175)] px-4 py-3 text-white flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-semibold">{question}</span>
        <span className="text-white">{open ? "−" : "+"}</span>
      </div>
      {open && (
        <div className="bg-white px-4 py-3 text-gray-700 text-sm border border-t-0 border-gray-200">
          {answer}
        </div>
      )}
    </div>
  );
};

const TermsAndConditionsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14 text-left font-sans bg-white">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
        <p className="text-md text-gray-600 mb-1">
          Please read these terms carefully before using the LocalVibez app.
        </p>
        <p className="text-sm text-gray-500">
          <strong>Effective Date:</strong> 20 July 2025
        </p>
      </header>

      <Section number="1" icon={<FaClipboardCheck />} title="Acceptance of Terms">
        <p>
          By using the LocalVibez mobile application (“App”), you agree to abide by these Terms and Conditions. If you do not accept any part of the terms, please do not use our services.
        </p>
        <FAQ
          question="Do I need to agree every time I open the app?"
          answer="No. Your continued use of the app after updates means you agree to the current version of the Terms."
        />
      </Section>

      <Section number="2" icon={<FaShieldAlt />} title="Eligibility and Account Responsibility">
        <p>
          You must be at least 13 years old to use LocalVibez. You are responsible for all activity on your account. Keep your login credentials confidential and secure.
        </p>
        <FAQ
          question="Can I share my account with someone else?"
          answer="No, accounts are for individual use only and should not be shared."
        />
        <FAQ
          question="What happens if I forget my password?"
          answer="You can reset your password using the 'Forgot Password' feature in the app."
        />
      </Section>

      <Section number="3" icon={<FaStore />} title="Community Guidelines & Platform Rules">
        <p>
          To keep the community safe and welcoming, we expect all users to follow certain rules while using the platform.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Users may list local services but must comply with applicable laws.</li>
          <li>You may not use the platform to sell illegal goods, drugs, or contraband.</li>
          <li>We allow user-to-user messaging but do not monitor chats unless reported.</li>
          <li>Do not post hate speech, adult content, or abuse community features.</li>
        </ul>
        <FAQ
          question="Are chats private?"
          answer="Yes, your chats are private. We only access them if flagged for abuse or reported."
        />
        <FAQ
          question="Can I promote my small business?"
          answer="Yes, as long as it follows local laws and does not violate community standards."
        />
      </Section>

      <Section number="4" icon={<FaUserTimes />} title="Suspension and Termination">
        <p>
          We may suspend or terminate your account if you violate these Terms, misuse platform features, or engage in unlawful behavior.
        </p>
        <FAQ
          question="Will I be warned before suspension?"
          answer="In most cases, yes — unless it’s a serious violation or urgent threat."
        />
        <FAQ
          question="Can I appeal a suspension?"
          answer="Yes. You can contact us via email to request a review of the action taken."
        />
      </Section>

      <Section number="5" icon={<FaExchangeAlt />} title="Modifications to Terms">
        <p>
          We reserve the right to update these terms periodically. You will be notified of any significant changes via the app or email.
        </p>
        <FAQ
          question="Will I be notified of updates?"
          answer="Yes, important updates will be clearly communicated through the app or email."
        />
      </Section>

      <Section number="6" icon={<FaCommentAlt />} title="User-Generated Content">
        <p>
          You are solely responsible for any content you post, including text, images, and listings. We may remove content that violates these terms or is reported by the community.
        </p>
        <FAQ
          question="Can my post be taken down?"
          answer="Yes, if it is reported and found to violate community rules or legal requirements."
        />
        <FAQ
          question="Who owns the content I post?"
          answer="You retain ownership, but by posting, you grant us a license to display it within the app."
        />
      </Section>

      <Section number="7" icon={<FaGavel />} title="Limitation of Liability">
        <p>
          LocalVibez LLP is not liable for user-generated content, third-party listings, or transactions between users. Use the platform at your own discretion.
        </p>
        <FAQ
          question="Is LocalVibez responsible for what other users post?"
          answer="No, we moderate reported content but are not responsible for what users choose to post or share."
        />
        <FAQ
          question="Are marketplace transactions guaranteed?"
          answer="No. Please verify listings and exercise caution when buying or selling."
        />
      </Section>

      <Section number="8" icon={<FaSyncAlt />} title="Governing Law">
        <p>
          These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be resolved by courts located in Delhi NCR jurisdiction.
        </p>
        <FAQ
          question="Can I raise a legal issue outside India?"
          answer="No, legal matters related to the app must be handled under Indian jurisdiction."
        />
      </Section>

      <Section number="9" icon={<FaEnvelope />} title="Contact and Grievance Redressal">
        <p>
          If you have any questions or complaints regarding these Terms, reach out to our Grievance Officer.
        </p>
        <p className="mt-2">
          <strong>Name:</strong> [To Be Appointed] <br />
          <strong>Email:</strong>{" "}
          <a href="mailto:contact@localvibez.in" className="text-indigo-600 underline">
            contact@localvibez.in
          </a>
          <br />
          <strong>Address:</strong> Plot No‑597, Sector‑4, Vaishali, Ghaziabad, UP – 201010
        </p>
        <FAQ
          question="How long does it take to get a response?"
          answer="We respond within 24 hours and aim to resolve issues in 15 working days."
        />
      </Section>

      <footer className="text-center text-sm text-gray-500 mt-16 pt-6 border-t">
        © {new Date().getFullYear()} LocalVibez LLP. All rights reserved.
      </footer>
    </div>
  );
};

export default TermsAndConditionsPage;
