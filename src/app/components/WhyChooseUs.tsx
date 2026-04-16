"use client";

import React from "react";

type Reason = {
  icon: string;
  title: string;
  description: string;
};

const WhyChooseUs: React.FC = () => {
  const reasons: Reason[] = [
    {
      icon: "🎯",
      title: "Accuracy You Can Trust",
      description:
        "With 45+ years of CPA experience, we ensure your books are accurate, compliant, and audit-ready.",
    },
    {
      icon: "⏱️",
      title: "Save Time, Focus on Growth",
      description:
        "Let us handle the numbers while you focus on what matters—building and growing your business.",
    },
    {
      icon: "💻",
      title: "QuickBooks Experts",
      description:
        "We are certified QuickBooks Online specialists with extensive experience in setup, training, and support.",
    },
    {
      icon: "🌎",
      title: "Remote & Flexible",
      description:
        "Serving clients across Texas and nationwide. Work with us from anywhere, anytime.",
    },
    {
      icon: "💰",
      title: "Affordable Packages",
      description:
        "Transparent, competitive pricing with monthly packages designed for small businesses.",
    },
    {
      icon: "🤝",
      title: "Personalized Service",
      description:
        "You’re not just a number to us. We provide dedicated, personalized attention to every client.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="text-[#00A680]">Waggoner Accounting</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience, expertise, and dedication to your financial success
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <div className="text-6xl mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-20 bg-gradient-to-r from-[#00A680] to-[#50E3C2] rounded-2xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6">“</div>

            <blockquote className="text-2xl md:text-3xl font-light italic mb-8">
              Professional, reliable, and always available. Waggoner Accounting
              has transformed how we manage our finances. I highly recommend
              their services!
            </blockquote>

            <p className="text-xl font-semibold">— Mark Ramirez</p>
            <p className="text-lg opacity-90">
              Small Business Owner, Texas
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;