"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type Status = {
  type: "success" | "error" | "";
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<Status>({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. We'll get back to you soon!",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-5xl font-bold mb-6">
              Get in <span className="text-[#00A680]">Touch</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to take control of your finances? Schedule a free consultation today.
            </p>

            <div className="space-y-6 mb-10">

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-[#00A680] text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl flex-shrink-0">
                  {"📞"}
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <a
                    href="tel:+17135020753"
                    className="text-gray-600 hover:text-[#00A680] transition-colors"
                  >
                    +1 713-502-0753
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-[#00A680] text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl flex-shrink-0">
                  {"✉️"}
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <a
                    href="mailto:tom@waggoneraccountingllc.com"
                    className="text-gray-600 hover:text-[#00A680] transition-colors break-all"
                  >
                    tom@waggoneraccountingllc.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <div className="bg-[#00A680] text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl flex-shrink-0">
                  {"📍"}
                </div>
                <div>
                  <h4 className="font-bold text-lg">Service Area</h4>
                  <p className="text-gray-600">Texas & Nationwide (Remote)</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Send Us a Message
              </h3>

              {/* Status Message */}
              {submitStatus.message && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 border border-green-200 text-green-700"
                      : "bg-red-50 border border-red-200 text-red-700"
                  }`}
                >
                  <span className="text-xl flex-shrink-0">
                    {submitStatus.type === "success" ? "✅" : "❌"}
                  </span>
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name *"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00A680] outline-none transition-colors text-gray-800 placeholder-gray-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email *"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00A680] outline-none transition-colors text-gray-800 placeholder-gray-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone *"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00A680] outline-none transition-colors text-gray-800 placeholder-gray-400"
                  />

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company (Optional)"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00A680] outline-none transition-colors text-gray-800 placeholder-gray-400"
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message... *"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00A680] outline-none transition-colors resize-none text-gray-800 placeholder-gray-400"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-white text-lg transition-all ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#00A680] hover:bg-[#008f6e] active:scale-95"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;