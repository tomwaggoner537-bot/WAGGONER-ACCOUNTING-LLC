"use client";

import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            {/* LOGO — replaces WAGGONER / ACCOUNTING LLC text */}
            <div className="relative h-[120px] w-[350px] mb-4">
              <Image
                src="/images/logo.png"
                alt="Waggoner Accounting Logo"
                fill
                sizes="350px"
                className="object-contain object-left"
                priority
              />
            </div>

            <p className="text-gray-400 leading-relaxed mb-4">
              Expert bookkeeping solutions with 45+ years of CPA experience.
              Your trusted partner in financial success.
            </p>

            {/* Contact Info below logo */}
            <div className="space-y-2 mb-6">
              <a
                href="tel:+17135020753"
                className="flex items-center gap-2 text-gray-300 hover:text-[#50E3C2] transition-colors group"
              >
                <span className="text-[#00A680] group-hover:text-[#50E3C2] transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.39 21 3 14.61 3 6.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                <span className="text-sm font-medium">+1 713-502-0753</span>
              </a>

              <a
                href="mailto:tom@waggoneraccountingllc.com"
                className="flex items-center gap-2 text-gray-300 hover:text-[#50E3C2] transition-colors group"
              >
                <span className="text-[#00A680] group-hover:text-[#50E3C2] transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <span className="text-sm font-medium">
                  tom@waggoneraccountingllc.com
                </span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-2">
              {/* Facebook */}
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#00A680]/20 hover:text-[#50E3C2] flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.17 8.44 9.93v-7.03H7.9v-2.9h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.64.78-1.64 1.58v1.9h2.8l-.45 2.9h-2.35v7.03C18.34 21.24 22 17.09 22 12.07z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#00A680]/20 hover:text-[#50E3C2] flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7H9.3V9h3.42v1.56h.05c.48-.9 1.65-1.87 3.4-1.87 3.63 0 4.3 2.39 4.3 5.49v6.27z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#00A680]/20 hover:text-[#50E3C2] flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#00A680]/20 hover:text-[#50E3C2] flex items-center justify-center transition-all"
                aria-label="X / Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L2.25 2.25h6.898l4.248 5.618L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/17135020753"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#00A680]/20 hover:text-[#50E3C2] flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462.874 2.684 1.024 2.877.15.193 2.056 3.199 4.984 4.479.695.298 1.235.476 1.657.61.696.222 1.329.19 1.83.115.558-.083 1.717-.702 1.957-1.38.24-.678.24-1.259.168-1.38-.071-.121-.27-.192-.57-.336z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links </h4>

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
