"use client";

import React from "react";

type Service = {
  icon: string;
  title: string;
  description: string;
  features: string[];
};

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: "💼",
      title: "QuickBooks Online Bookkeeping",
      description:
        "Comprehensive bookkeeping services using QuickBooks Online. We manage your daily transactions, reconciliations, and financial records with precision.",
      features: [
        "Daily transaction recording",
        "Bank reconciliation",
        "Financial reporting",
        "Expense tracking",
      ],
    },
    {
      icon: "⚙️",
      title: "QuickBooks Online Setup & Support",
      description:
        "Expert setup and training for QuickBooks Online. We ensure your system is configured correctly and provide ongoing support to maximize efficiency.",
      features: [
        "Initial setup & configuration",
        "Chart of accounts setup",
        "User training",
        "Ongoing technical support",
      ],
    },
    {
      icon: "👥",
      title: "Payroll Services",
      description:
        "Complete payroll management including processing, tax filings, and compliance. We handle everything so you can focus on your team.",
      features: [
        "Payroll processing",
        "Tax calculations & filings",
        "Direct deposit setup",
        "W-2 and 1099 preparation",
      ],
    },
    {
      icon: "🧹",
      title: "Cleanup/Catch-Up Bookkeeping",
      description:
        "Behind on your books? We specialize in getting your financial records back on track, no matter how far behind you are.",
      features: [
        "Historical data entry",
        "Account reconciliation",
        "Error correction",
        "Financial statement preparation",
      ],
    },
    {
      icon: "📊",
      title: "Monthly Bookkeeping Packages",
      description:
        "Affordable monthly packages tailored to your business needs. Consistent, reliable bookkeeping that keeps you organized year-round.",
      features: [
        "Monthly financial statements",
        "Customized reporting",
        "Budget vs. actual analysis",
        "Tax-ready financials",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Our <span className="text-[#00A680]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive bookkeeping solutions designed to meet all your business needs
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>

              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#00A680] mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#00A680] text-white text-lg px-8 py-4 rounded-lg hover:opacity-90 transition"
          >
            Get Started Today
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;