"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type Status = {
  type: string;
  message: string;
};

const ContactSection: React.FC = () => {
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
      await axios.post(`${API}/contact`, formData);

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
    } catch (error) {
      console.error("Form submission error:", error);

      setSubmitStatus({
        type: "error",
        message:
          "Oops! Something went wrong. Please try again or call us directly.",
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
                <div className="bg-[#00A680] text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl">
                  📞
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-gray-600">713-502-0753</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-[#00A680] text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-gray-600">
                    tom@waggoneraccountingllc.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <div className="bg-[#00A680] text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-lg">Service Area</h4>
                  <p className="text-gray-600">
                    Texas & Nationwide (Remote)
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Send Us a Message
              </h3>

              {submitStatus.message && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#00A680] outline-none"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#00A680] outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#00A680] outline-none"
                />

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company (Optional)"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#00A680] outline-none"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#00A680] outline-none resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00A680] text-white py-4 rounded-lg font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;