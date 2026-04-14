"use client";

import { useState } from "react";

const contactMethods = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M16 3H4a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1z"
          stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 5l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Email Us",
    value: "hello@webpenter.com",
    href: "mailto:hello@webpenter.com",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 5a2 2 0 012-2h1.6a1 1 0 01.97.757l.824 3.295a1 1 0 01-.27.988L6.94 9.232a11.06 11.06 0 005.828 5.83l1.192-1.184a1 1 0 01.988-.271l3.295.824A1 1 0 0119 15.4V17a2 2 0 01-2 2H15C8.373 19 3 13.627 3 7V5z"
          stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    label: "Call/WhatsApp",
    value: "+92 300 000 0000",
    href: "tel:+923000000000",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C7.24 2 5 4.24 5 7c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5z"
          stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    label: "Location",
    value: "Karachi, Pakistan",
    href: "#",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", project: "", budget: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-[#F4F3EF] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#1C3320]
                           bg-[#EAF2EC] border border-[#C8DDD0] rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111110] tracking-tight mb-4">
            Schedule Your
            <span className="block text-[#1C3320]">Discovery Call</span>
          </h2>
          <p className="text-lg text-[#7A7A77] max-w-xl mx-auto">
            Tell us about your business and goals we&apos;ll respond within 24 hours with a tailored plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* ── Left: Contact Info ── */}
          <div className="space-y-4">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-[#ECEAE4]
                           hover:border-[#C8DDD0] hover:shadow-md transition-all duration-200 card-hover group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAF2EC] flex items-center justify-center
                                text-[#1C3320] shrink-0 group-hover:bg-[#1C3320] group-hover:text-white
                                transition-colors">
                  {method.icon}
                </div>
                <div>
                  <p className="text-xs text-[#7A7A77] mb-0.5">{method.label}</p>
                  <p className="text-sm font-semibold text-[#111110]">{method.value}</p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="bg-[#1C3320] rounded-2xl p-5">
              <p className="text-xs font-semibold text-[#C8DDD0] uppercase tracking-wider mb-3">
                Response Time
              </p>
              <p className="text-white text-sm leading-relaxed">
                We typically respond within{" "}
                <strong className="text-[#8DB89A]">24 business hours</strong>. For urgent
                enquiries, WhatsApp us directly.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#4A7C59] animate-pulse" />
                <span className="text-xs text-[#8DB89A] font-medium">Available Now</span>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-[#ECEAE4] shadow-sm">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#EAF2EC] flex items-center justify-center mb-5">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 14l7 7L23 7" stroke="#1C3320" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#111110] mb-2">Message Sent! 🎉</h3>
                <p className="text-[#7A7A77] text-sm">
                  Thank you we&apos;ll be in touch within 24 hours to discuss your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3A3A38] mb-1.5" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="James Thornton"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#ECEAE4] bg-[#F4F3EF]
                                 text-[#111110] placeholder:text-[#B8B7B3] outline-none
                                 focus:border-[#1C3320] focus:ring-2 focus:ring-[#EAF2EC] transition-all"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3A3A38] mb-1.5" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="james@company.com"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#ECEAE4] bg-[#F4F3EF]
                                 text-[#111110] placeholder:text-[#B8B7B3] outline-none
                                 focus:border-[#1C3320] focus:ring-2 focus:ring-[#EAF2EC] transition-all"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-xs font-semibold text-[#3A3A38] mb-1.5" htmlFor="project">
                    Project Type *
                  </label>
                  <select
                    id="project"
                    name="project"
                    required
                    value={form.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-[#ECEAE4] bg-[#F4F3EF]
                               text-[#111110] outline-none focus:border-[#1C3320] focus:ring-2
                               focus:ring-[#EAF2EC] transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a solution...</option>
                    <option>Mobile Booking App (BookHere)</option>
                    <option>Custom Web Booking Platform</option>
                    <option>Fast-Launch Booking Website</option>
                    <option>Web + Mobile App Integration</option>
                    <option>Complete Booking Ecosystem</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-semibold text-[#3A3A38] mb-1.5" htmlFor="budget">
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-[#ECEAE4] bg-[#F4F3EF]
                               text-[#111110] outline-none focus:border-[#1C3320] focus:ring-2
                               focus:ring-[#EAF2EC] transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a budget range...</option>
                    <option>Under $2,000</option>
                    <option>$2,000 – $5,000</option>
                    <option>$5,000 – $15,000</option>
                    <option>$15,000 – $50,000</option>
                    <option>$50,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#3A3A38] mb-1.5" htmlFor="message">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business, target customers, key challenges, and goals..."
                    className="w-full px-4 py-3 text-sm rounded-xl border border-[#ECEAE4] bg-[#F4F3EF]
                               text-[#111110] placeholder:text-[#B8B7B3] outline-none resize-none
                               focus:border-[#1C3320] focus:ring-2 focus:ring-[#EAF2EC] transition-all"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-sm font-semibold text-white
                             bg-[#1C3320] hover:bg-[#2B5038] transition-all duration-200
                             shadow-md hover:shadow-lg hover:-translate-y-px"
                >
                  Book Discovery Call We&apos;ll Reply in 24h
                </button>

                <p className="text-center text-xs text-[#B8B7B3]">
                  No spam. No pressure. Just a friendly conversation about your project.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
