"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L13.5 8H20L15 12L17 18L11 14.5L5 18L7 12L2 8H8.5L11 2Z"
          stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
    title: "Results-Driven",
    desc: "Every platform we build is optimized to increase bookings and grow revenue not just look good.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="white" strokeWidth="1.6" />
        <path d="M11 6v5l3 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "On-Time Delivery",
    desc: "100% of our projects delivered on schedule. We respect your launch dates and business timelines.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 11c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"
          stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M3 11h5M7 15l-4-4 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Full Transparency",
    desc: "Regular progress updates, clear communication, and zero surprises you're always in control.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2C6 2 2 6 2 11s4 9 9 9 9-4 9-9"
          stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M15 2l5 5-7 7-4-4 6-8z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
    title: "Long-Term Partnership",
    desc: "We don't disappear after launch. 90-day support included, with retainer options for ongoing growth.",
  },
];

const team = [
  {
    name: "Ali Khan",
    role: "Lead Platform Architect",
    specialty: "Custom Platforms & Mobile Apps",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    name: "Sara Baig",
    role: "UI/UX Designer",
    specialty: "Product Design & User Experience",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Usman Raza",
    role: "Solutions Engineer",
    specialty: "Booking Systems & Integrations",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Naila Ahmed",
    role: "Project Manager",
    specialty: "Agile & International Delivery",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-story > *", {
        scrollTrigger: { trigger: ".about-story", start: "top 85%", once: true },
        y: 25, duration: 0.6, stagger: 0.08, ease: "power3.out",
      });
      gsap.from(".about-image", {
        scrollTrigger: { trigger: ".about-story", start: "top 85%", once: true },
        scale: 0.97, duration: 0.8, ease: "power3.out",
      });
      gsap.from(".team-card", {
        scrollTrigger: { trigger: ".team-grid", start: "top 85%", once: true },
        y: 25, duration: 0.5, stagger: 0.1, ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="about" ref={sectionRef} className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Story Row ── */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

          {/* Left */}
          <div className="about-story">
            <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1C3320] bg-[#EAF2EC] border border-[#C8DDD0] rounded-full mb-5">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#111110] tracking-tight mb-6 leading-tight">
              The Team Behind
              <span className="block text-[#1C3320]">Webpenter Solution</span>
            </h2>
            <p className="text-[#7A7A77] leading-relaxed mb-5">
              Founded in 2020, Webpenter Solution is a boutique team of booking & rental specialists laser-focused on one mission:{" "}
              <strong className="text-[#3A3A38]">helping businesses grow their booking revenue.</strong> We don't do everything we do this one thing exceptionally well.
            </p>
            <p className="text-[#7A7A77] leading-relaxed mb-8">
              We've helped 50+ businesses across 12+ countries increase online bookings, eliminate manual processes, and scale their operations from independent hotel owners to multi-location equipment rental chains.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "📍", label: "Headquarters", value: "Karachi, Pakistan" },
                { icon: "🌍", label: "Clients In", value: "12+ Countries" },
                { icon: "🚀", label: "Founded", value: "2020" },
                { icon: "👥", label: "Team Size", value: "12 Specialists" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="bg-[#F4F3EF] rounded-2xl p-4 flex items-start gap-3">
                  <span className="text-xl">{icon}</span>
                  <div>
                    <p className="text-xs text-[#7A7A77]">{label}</p>
                    <p className="text-sm font-bold text-[#111110]">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="bg-[#F4F3EF] rounded-2xl p-5 border border-[#ECEAE4] hover:border-[#C8DDD0] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#1C3320] flex items-center justify-center mb-3">
                    {v.icon}
                  </div>
                  <h3 className="text-sm font-black text-[#111110] mb-1.5">{v.title}</h3>
                  <p className="text-xs text-[#7A7A77] leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Photo */}
          <div className="about-image relative rounded-3xl overflow-hidden h-[520px] shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
              alt="Webpenter Solution team at work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C3320]/80 via-transparent to-transparent" />

            {/* Overlay content */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/70 text-xs uppercase tracking-widest font-bold mb-1">Our Mission</p>
              <p className="text-white text-base font-semibold leading-snug">
                "Turn every rental business into a seamless, revenue-generating booking machine."
              </p>
            </div>

            {/* Stats badge */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-2xl font-black text-[#1C3320]">50+</div>
              <div className="text-xs text-[#7A7A77] font-medium">Platforms Shipped</div>
            </div>
          </div>
        </div>

        {/* ── Team Row ── */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-black text-[#111110] tracking-tight mb-2">Meet the Core Team</h3>
            <p className="text-[#7A7A77]">Senior specialists dedicated to your booking platform success.</p>
          </div>

          <div className="team-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="team-card bg-[#F4F3EF] rounded-3xl p-6 text-center border border-[#ECEAE4] hover:border-[#C8DDD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
              >
                {/* Avatar */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#EAF2EC] shadow-md group-hover:border-[#C8DDD0] transition-colors">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-black text-[#111110] mb-0.5">{member.name}</p>
                <p className="text-xs text-[#4A7C59] font-bold mb-1.5">{member.role}</p>
                <p className="text-xs text-[#7A7A77]">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
