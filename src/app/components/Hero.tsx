import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center text-center overflow-hidden"  id="home">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Waggoner-hero-img.jpg"
          alt="City buildings background"
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#1a1a1a]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-16 pb-12">
        {/* Main Title */}
        <h2 className="text-[#2dd4a0] font-extrabold text-5xl md:text-7xl tracking-wide mb-2 mt-6">
          WAGGONER
        </h2>
        <p className="text-white text-xl md:text-2xl tracking-[0.3em] font-light mb-3">
          ACCOUNTING LLC
        </p>
        <p className="text-white text-base md:text-lg font-semibold mb-5">
          Licensed CPA in Texas
        </p>

        {/* Intuit ProAdvisor Gold Badge */}
        <div className="mb-8">
          <Image
            src="/images/intuit-proadvisor-badge-tier-gold.png"
            alt="Intuit ProAdvisor Gold Badge"
            width={80}
            height={80}
            className="mx-auto"
          />
        </div>

        {/* Hero Tagline */}
        <h2 className="text-white font-bold text-3xl md:text-5xl leading-tight mb-2">
          Expert Bookkeeping Solutions
        </h2>
        <h2 className="text-[#2dd4a0] font-bold text-3xl md:text-5xl leading-tight mb-6">
          For Your Business Success
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl">
          45+ Years of CPA Excellence | QuickBooks ProAdvisor Gold | Nationwide Service
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-[#2dd4a0] hover:bg-[#25bb8c] text-white font-semibold px-7 py-3.5 rounded transition-colors text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book a Free Consultation
          </a>
          <a
            href="#services"
            className="flex items-center justify-center border border-[#2dd4a0] text-[#2dd4a0] hover:bg-[#2dd4a0] hover:text-white font-semibold px-7 py-3.5 rounded transition-colors text-sm"
          >
            View Our Services
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 mt-2">
          <div className="flex flex-col items-center">
            <span className="text-[#2dd4a0] font-bold text-4xl">45+</span>
            <span className="text-gray-300 text-sm mt-1">Years Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#2dd4a0] font-bold text-4xl">500+</span>
            <span className="text-gray-300 text-sm mt-1">Clients Served</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#2dd4a0] font-bold text-4xl">100%</span>
            <span className="text-gray-300 text-sm mt-1">Satisfaction Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}