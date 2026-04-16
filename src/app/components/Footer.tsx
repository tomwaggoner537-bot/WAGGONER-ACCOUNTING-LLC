"use client";

import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Logo & Description */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-[#00A680]">
              WAGGONER
            </h3>
            <p className="text-xl font-light mb-2">ACCOUNTING LLC</p>
            <p className="text-gray-400 leading-relaxed">
              Expert bookkeeping solutions with 45+ years of CPA experience.
              Your trusted partner in financial success.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">

              {/* Facebook */}
              <a href="#" className="hover:text-[#50E3C2] transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.17 8.44 9.93v-7.03H7.9v-2.9h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.64.78-1.64 1.58v1.9h2.8l-.45 2.9h-2.35v7.03C18.34 21.24 22 17.09 22 12.07z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="hover:text-[#50E3C2] transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 
                  0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20.45H3.56V9h3.56v11.45zM5.34 
                  7.43c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 
                  2.06.92 2.06 2.06-.92 2.06-2.06 2.06zM20.45 
                  20.45h-3.56v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
                  0-2.16 1.46-2.16 2.97v5.7H9.3V9h3.42v1.56h.05c.48-.9 
                  1.65-1.87 3.4-1.87 3.63 0 4.3 2.39 4.3 
                  5.49v6.27z" />
                </svg>
              </a>

              {/* Email */}
              <a href="mailto:tom@waggoneraccountingllc.com" className="hover:text-[#50E3C2] transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 4h20v16H2V4zm10 9l10-7H2l10 7zm0 2L2 8v10h20V8l-10 7z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Services", id: "services" },
                { name: "Pricing", id: "packages" },
                { name: "Contact", id: "contact" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.id}`}
                    className="text-gray-400 hover:text-[#50E3C2] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>QuickBooks Online Bookkeeping</li>
              <li>QuickBooks Setup & Support</li>
              <li>Payroll Services</li>
              <li>Cleanup/Catch-Up Bookkeeping</li>
              <li>Monthly Bookkeeping Packages</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Waggoner Accounting LLC. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-[#50E3C2]">
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-[#50E3C2]">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;