// Full updated code with extended explanations and FAQ enhancements

import React, { useState } from "react";
import {
  FaUserShield,
  FaFingerprint,
  FaTools,
  FaShareAlt,
  FaLock,
  FaTrash,
  FaChild,
  FaGavel,
  FaSyncAlt,
  FaEnvelope,
} from "react-icons/fa";
import Sidebar from "./SidebarPolicies";

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
const AdditionalSections = () => (
  <>
    <Section number="8" icon={<FaGavel />} title="Content Moderation and Takedown">
      <p>
        We actively monitor and moderate all public content. Any content flagged by users or detected through automated tools is reviewed promptly. Objectionable, harmful, or illegal content is removed in line with Indian IT Rules.
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Reports reviewed within 24 hours</li>
        <li>Content takedown within 72 hours if found violative</li>
        <li>Repeat offenders may be banned permanently</li>
      </ul>
      <FAQ
        question="What type of content is not allowed?"
        answer="Hate speech, harassment, adult content, impersonation, misinformation, or anything violating Indian law."
      />
      <FAQ
        question="How can I report a post or user?"
        answer="Tap the 3-dot menu on any post or profile and choose 'Report'. Our team will review it quickly."
      />
    </Section>

    <Section number="9" icon={<FaLock />} title="Cookies and Tracking">
      <p>
        We use cookies and similar tracking technologies for analytics, performance monitoring, and to remember user preferences. No third-party advertising cookies are used.
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Only essential and analytics cookies are stored</li>
        <li>No intrusive third-party ads or trackers</li>
        <li>Users can disable cookies via phone/browser settings</li>
      </ul>
      <FAQ
        question="What kind of cookies do you use?"
        answer="We use cookies for analytics and app functionality, such as login persistence."
      />
      <FAQ
        question="Can I disable cookies?"
        answer="Yes. You can disable them through your device settings or browser configuration."
      />
    </Section>

    <Section number="10" icon={<FaShareAlt />} title="Advertising and Sponsorship">
      <p>
        Occasionally, LocalVibez may display promoted posts or sponsored content. Such content is clearly labeled and reviewed internally to ensure it adheres to our content and advertising policies.
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>All sponsored content is labeled as ‘Sponsored’</li>
        <li>Ads are non-intrusive and region-relevant</li>
        <li>We do not allow political or adult ads</li>
      </ul>
      <FAQ
        question="Can I sponsor a post on LocalVibez?"
        answer="Yes, please contact our business team. All promotions must be approved first."
      />
    </Section>

    <Section number="11" icon={<FaLock />} title="Data Breach Notification">
      <p>
        In the unlikely event of a data breach that compromises personal data, we will notify affected users and authorities within 72 hours and initiate remediation steps immediately.
      </p>
      <FAQ
        question="Will I be informed if my data is leaked?"
        answer="Yes. We’ll send you a breach alert via email or in-app notification, as per DPDPA requirements."
      />
    </Section>

    <Section number="12" icon={<FaShareAlt />} title="International Users">
      <p>
        If you access LocalVibez from outside India, your data will be stored on servers within India. By using our services, you consent to this international data transfer and handling.
      </p>
      <FAQ
        question="Do you comply with laws in other countries too?"
        answer="We comply primarily with Indian law. International users agree to Indian jurisdiction and terms by using the app."
      />
    </Section>
  </>
);

const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="md:ml-64 w-full max-w-4xl mx-auto px-6 py-14 text-left font-sans bg-white">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-md text-gray-600 mb-1">
          Learn how LocalVibez LLP handles your personal data.
        </p>
        <p className="text-sm text-gray-500">
          <strong>Effective Date:</strong> 20 July 2025
        </p>
      </header>

      {/* Each section below has updated explanation and FAQs */}
      <Section number="1" icon={<FaUserShield />} title="Information We Collect">
        <p>
          We gather only the information that is necessary to provide a safe, personalized, and locally-relevant experience for users of our platform. This includes information you provide directly, as well as some technical data captured through app use. All data is collected transparently, with your consent, and for legitimate use only.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Name, phone number, email, username</li>
          <li>City, neighborhood, profile photo</li>
          <li>Posts, messages, media uploads</li>
          <li>Device info, OS version, IP address</li>
          <li>Location (only if allowed)</li>
          <li>Camera and gallery permissions (only if used)</li>
        </ul>
        <FAQ
          question="Do we track your real-time GPS location?"
          answer="No, we respect your privacy. We only use approximate city-level location to personalize content — and only if you’ve granted permission."
        />
        <FAQ
          question="Why do you ask for camera or gallery permissions?"
          answer="Permissions are required only if you want to upload images, take photos, or share media within posts or messages."
        />
        <FAQ
          question="Can I use the app without sharing my location?"
          answer="No, most features work with location, you will miss hyperlocal community content or alerts."
        />
      </Section>

      <Section number="2" icon={<FaTools />} title="How We Use Information">
        <p>
          The data you share helps us tailor your app experience. It powers core features such as neighborhood discovery, content filtering, safety alerts, and user recommendations. We also use information for technical and security purposes to ensure the platform works reliably for everyone.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>To build your user identity and neighborhood context</li>
          <li>To enable discovery of posts, people, or services nearby</li>
          <li>To prevent misuse and detect suspicious activity</li>
          <li>To send alerts, service updates, or community announcements</li>
        </ul>
        <FAQ
          question="Will you send me promotional messages?"
          answer="Only if you choose to opt-in. You can unsubscribe anytime from your notification preferences."
        />
        <FAQ
          question="What do you mean by 'detect misuse'?"
          answer="This refers to detecting fake profiles, spam accounts, harmful content, or usage patterns that violate our community guidelines."
        />
      </Section>

      <Section number="3" icon={<FaLock />} title="How We Store and Protect Data">
        <p>
          We take data security seriously. All information is encrypted during transmission and stored in secure environments. Access to your data is strictly limited to authorized personnel with a valid reason. We continually monitor systems to prevent breaches or unauthorized access.
        </p>
        <FAQ
          question="Is my data encrypted?"
          answer="Yes, all data is encrypted using HTTPS in transit and stored using secure servers with access restrictions."
        />
        <FAQ
          question="Can LocalVibez employees access my data?"
          answer="Only designated personnel can access it for moderation or legal requirements, and they are bound by confidentiality obligations."
        />
        <FAQ
          question="What kind of monitoring is in place?"
          answer="Our systems use automated firewalls and threat detection to prevent, detect, and respond to unauthorized access."
        />
      </Section>

      <Section number="4" icon={<FaShareAlt />} title="When We Share Information">
        <p>
          We do not sell your information. However, in order to operate smoothly and comply with legal frameworks, we may share limited data with trusted vendors or authorities. These entities are contractually bound to protect your privacy.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>With infrastructure vendors who store or transmit data</li>
          <li>With support service providers to handle issues or feedback</li>
          <li>With authorities when legally obligated to comply</li>
        </ul>
        <FAQ
          question="Who are your third-party vendors?"
          answer="We work with vetted services for hosting (like Hostinger), analytics, and customer support — all with strict data protection agreements."
        />
        <FAQ
          question="Can other users see my personal information?"
          answer="Only details you make public (like name, profile photo, posts) will be visible to other users."
        />
        <FAQ
          question="Is my contact number visible to others?"
          answer="No, your contact details are private unless you explicitly choose to share them in a post or message."
        />
      </Section>

      <Section number="5" icon={<FaFingerprint />} title="Your Rights and Choices">
        <p>
          You have complete control over your personal data. At any point, you can access, modify, or delete your information, or withdraw previously given permissions. We believe in user autonomy and provide easy ways for you to manage your preferences.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Change your account information anytime</li>
          <li>Delete your account with a single action</li>
          <li>Revoke camera, gallery, or location access via app settings</li>
        </ul>
        <p className="mt-2">
          Email us at:{" "}
          <a href="mailto:contact@localvibez.in" className="text-indigo-600 underline">
            contact@localvibez.in
          </a>
        </p>
        <FAQ
          question="How do I update my personal details?"
          answer="Tap on ‘Edit Profile’ in the app settings to modify your name, profile photo, or neighborhood info."
        />
        <FAQ
          question="Can I restrict access to certain data?"
          answer="Yes. Permissions can be toggled in your phone settings or from within the app settings."
        />
        <FAQ
          question="Can I request a copy of my data?"
          answer="Yes, just email us and we’ll share your stored data in a readable format."
        />
      </Section>

      <Section number="6" icon={<FaTrash />} title="Data Retention and Deletion">
        <p>
          We retain your personal data only while you actively use the app. Once you delete your account, your data is removed from our systems unless required to retain it for legal or audit purposes.
        </p>
        <FAQ
          question="Can I delete my data myself?"
          answer="Yes, simply go to the app settings and choose ‘Delete Account’ to remove your profile and associated data."
        />
        <FAQ
          question="What happens to my posts after deletion?"
          answer="Your posts are removed from public view and permanently deleted from our backend unless needed for legal reasons."
        />
      </Section>

      <Section number="7" icon={<FaChild />} title="Children’s Privacy">
        <p>
          Our platform is designed for users aged 13 and above. We do not knowingly collect or store data from children. Any such accounts found will be removed immediately.
        </p>
        <FAQ
          question="How do you verify user age?"
          answer="We use age declarations during signup and review suspicious activity patterns to identify underage users."
        />
        <FAQ
          question="What happens if a child registers anyway?"
          answer="Their account will be disabled and all data purged as soon as we become aware of it."
        />
      </Section>

      <AdditionalSections />

      <Section number="13" icon={<FaGavel />} title="Grievance Redressal">
        <p>
          We are committed to addressing your concerns transparently and fairly. You can contact our Grievance Officer for any privacy or data-related issues.
        </p>
        <p className="mt-2">
          <strong>Email:</strong>{" "}
          <a href="mailto:contact@localvibez.in" className="text-indigo-600 underline">
            contact@localvibez.in
          </a>
          <br />
          <strong>Address:</strong> Plot No‑597, Sector‑4, Vaishali, Ghaziabad, UP – 201010
        </p>
        <FAQ
          question="How quickly will my issue be resolved?"
          answer="We’ll acknowledge within 24 hours and resolve the issue within 15 working days."
        />
        <FAQ
          question="Can I escalate if not satisfied?"
          answer="Yes, you may escalate your complaint internally or to an external regulator depending on the issue."
        />
      </Section>

      <Section number="14" icon={<FaSyncAlt />} title="Changes to This Policy">
        <p>
          This policy may be updated periodically. We'll always notify you about significant changes and give you the option to review before continuing to use our services.
        </p>
        <FAQ
          question="How will I know if this policy changes?"
          answer="You’ll receive an in-app alert or email whenever major changes are made."
        />
      </Section>

      <Section number="15" icon={<FaLock />} title="Your Consent">
        <p>
          By using our app, you are agreeing to the practices described in this policy. You may withdraw your consent at any time by uninstalling the app or reaching out to us.
        </p>
        <FAQ
          question="What happens when I withdraw my consent?"
          answer="We will deactivate your account and permanently delete your data, unless required to retain it by law."
        />
      </Section>

      <Section number="16" icon={<FaEnvelope />} title="Contact Us">
        <p>
          Questions or concerns? Reach out to us at: <br />
          📧{" "}
          <a href="mailto:queries@localvibez.in" className="text-indigo-600 underline">
            queries@localvibez.in
          </a>
        </p>
        <FAQ
          question="Can I talk to someone directly?"
          answer="Yes, just email us with your issue and we’ll respond or arrange a callback if required."
        />
        <FAQ
          question="Do you offer phone support?"
          answer="Currently, we only offer email-based support to ensure proper documentation and accountability."
        />
      </Section>

      <footer className="text-center text-sm text-gray-500 mt-16 pt-6 border-t">
        © {new Date().getFullYear()} LocalVibez LLP. All rights reserved.
      </footer>
    </div>
    </div>
  );
};

export default PrivacyPolicyPage;
