"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-md shadow-2xl h-20">

      {/* Container — pl-0 so logo hugs left edge */}
      <div className="max-w-7xl mx-auto pl-0 pr-4 sm:pl-0 sm:pr-6 lg:pl-0 lg:pr-8 h-full">

        {/* Flex Row */}
        <div className="flex items-center justify-between h-full">

          {/* LOGO — left-aligned, no centering */}
          <div
            className="flex items-center justify-start cursor-pointer flex-shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {/* Bigger logo: h-[68px], wider widths */}
            <div className="relative h-[90px] w-[330px] sm:w-[340px] md:w-[420px]">
              <Image
                src="/images/logo.png"
                alt="Waggoner Accounting Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {["home", "about", "services", "packages", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-white hover:text-[#50E3C2] transition-colors font-medium capitalize text-sm lg:text-base group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#50E3C2] group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}

          <a
              href="tel:+17135020753"
              className="flex items-center gap-2 bg-[#00A680] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#008f6e] hover:shadow-lg hover:shadow-[#00A680]/30 transition-all duration-200 whitespace-nowrap active:scale-95"
            >
              📅 Book a Call
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white text-2xl p-2 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1A1A1A]/98 backdrop-blur-md border-t border-gray-700/50">
          <div className="px-4 py-6 space-y-1">
            {["home", "about", "services", "packages", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="flex items-center gap-3 w-full text-left text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl capitalize font-medium transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A680]" />
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            <div className="pt-3">
              <a
                href="tel:+17135020753"
                className="flex flex-col items-center justify-center gap-1 w-full bg-[#00A680] hover:bg-[#008f6e] text-white py-3.5 rounded-xl font-semibold text-base transition-all active:scale-95"
              >
                📅 Book a Call
                <span className="text-xs font-normal opacity-80 tracking-wide">
                  +1 713-502-0753
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;