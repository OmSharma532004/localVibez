import React from "react";
import { NavLink } from "react-router-dom";
import logo2 from "../images/logo2.png"; // Adjust the path as necessary

const links = [
  { path: "/privacy-policy", label: "Privacy Policy" },
  { path: "/tnc", label: "Terms & Conditions" },
  { path: "/community-guidelines", label: "Community Guidelines" },
  { path: "/advertising-policy", label: "Advertising Policy" },
  { path: "/cookie-policy", label: "Cookie Policy" },
//   { path: "/accessibility-policy", label: "Accessibility Policy" },
  { path: "/verification-policy", label: "Verification Policy" },
  { path: "/faq", label: "FAQs" }
];

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 shadow-sm fixed top-0 left-0">
      <a href="/" className="block p-4">
        <div className="p-6 border-b border-gray-100">
        {/* Placeholder for Logo */}
        <div className="h-12 w-full rounded-lg flex items-center justify-center text-gray-500 font-bold text-xl">
            <h1 className="text-blue-700 text-3xl ">LocalVibez</h1>
        </div>
      </div>
      </a>
      <nav className="mt-4 px-4 text-sm font-medium space-y-1">
        {links.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md hover:bg-indigo-100 ${
                isActive ? "bg-indigo-100 text-[rgb(30,64,175)]" : "text-gray-700"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
        
      </nav>
       <footer className="text-center absolute bottom-10 text-sm text-gray-500 mt-16 pt-6 border-t">
        © {new Date().getFullYear()} LocalVibez LLP. All rights reserved.
      </footer>
    </div>
  );
};

export default Sidebar;
