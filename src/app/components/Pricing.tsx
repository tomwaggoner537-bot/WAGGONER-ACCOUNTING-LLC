"use client";
import React from "react";

const PricingPackages: React.FC = () => {
  const packages = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 50 monthly transactions",
        "Monthly bank reconciliation",
        "Basic financial reports",
        "Monthly Profit & Loss statement",
        "Balance sheet",
        "Email support",
        "QuickBooks Online access",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$499",
      period: "per month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 150 monthly transactions",
        "Weekly bank reconciliation",
        "Comprehensive financial reports",
        "Monthly P&L and Balance Sheet",
        "Cash flow statement",
        "Accounts Payable/Receivable tracking",
        "Priority email & phone support",
        "QuickBooks Online setup included",
        "Monthly financial review call",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "per month",
      description: "Complete solution for established businesses",
      features: [
        "Unlimited monthly transactions",
        "Daily bank reconciliation",
        "Advanced financial reporting",
        "Custom financial dashboards",
        "Budget vs. actual analysis",
        "Full AP/AR management",
        "Payroll processing included",
        "Dedicated bookkeeper",
        "Bi-weekly financial review calls",
        "Tax preparation assistance",
        "24/7 priority support",
      ],
      popular: false,
    },
    {
      name: "Custom",
      price: "Let's Talk",
      period: "tailored to you",
      description: "Customized solutions for unique needs",
      features: [
        "Cleanup/catch-up bookkeeping",
        "Multi-entity bookkeeping",
        "Industry-specific solutions",
        "Custom reporting",
        "CFO advisory services",
        "Audit preparation",
        "Flexible pricing structure",
        "Everything from Enterprise +",
        "Custom integrations",
      ],
      popular: false,
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      id="packages"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Monthly{" "}
            <span className="text-[#00A680]">Bookkeeping Packages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent, affordable pricing with no hidden fees. Choose the
            package that fits your business needs.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                pkg.popular ? "ring-2 ring-[#00A680] scale-105" : ""
              }`}
            >
              
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-[#00A680] text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                
                {/* Package Name */}
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-[#00A680]">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{pkg.period}</p>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 min-h-[48px]">
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#00A680] mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    pkg.popular
                      ? "bg-[#00A680] text-white hover:opacity-90"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {pkg.name === "Custom" ? "Contact Us" : "Get Started"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#00A680] to-[#50E3C2] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Not sure which package is right for you?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Schedule a free 30-minute consultation and we&apos;ll help you
              choose the perfect package for your business needs.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-[#00A680] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all"
            >
              📅 Schedule Free Consultation
            </button>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
          <div>
            <div className="text-4xl mb-3">✅</div>
            <h4 className="font-bold text-lg mb-2">No Setup Fees</h4>
            <p className="text-gray-600">
              Get started with zero upfront costs
            </p>
          </div>
          <div>
            <div className="text-4xl mb-3">🔒</div>
            <h4 className="font-bold text-lg mb-2">Cancel Anytime</h4>
            <p className="text-gray-600">
              No long-term contracts required
            </p>
          </div>
          <div>
            <div className="text-4xl mb-3">💯</div>
            <h4 className="font-bold text-lg mb-2">100% Satisfaction</h4>
            <p className="text-gray-600">
              30-day money-back guarantee
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingPackages;