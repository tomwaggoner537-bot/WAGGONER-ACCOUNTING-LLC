"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1A1A1A] shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <div
            className="flex items-center cursor-pointer gap-3"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {/* 👉 Replace with your logo */}
            {/* <Image
              src="/images/logo.jpg" // put your logo in public folder
              alt="Waggoner Logo"
              width={40}
              height={40}
            /> */}

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#00A680]">
                WAGGONER
              </h1>
              <p className="text-xs text-gray-300">ACCOUNTING LLC</p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "about", "services", "packages", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-[#50E3C2] transition-colors font-medium"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#00A680] text-white px-6 py-2 rounded-lg text-sm hover:opacity-90"
            >
              📅 Book a Call
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-gray-700">
          <div className="px-4 py-6 space-y-4">
            {["Home","about", "services", "packages", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-white hover:text-[#50E3C2] py-2"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-[#00A680] text-white py-3 rounded-lg"
            >
              📅 Book a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;