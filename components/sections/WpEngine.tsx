"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const deliverables = [
  "Booking & availability system with real-time calendar",
  "Secure payment gateway (multi-currency, multi-method)",
  "Custom brand design that matches your identity",
  "SEO-optimized structure for global discoverability",
  "Mobile-first, blazing-fast performance",
  "Seamless connection to your mobile app (if needed)",
];

const industries = ["Hotels & Villas", "Car Rentals", "Event Spaces", "Equipment Hire"];

export default function WpEngine() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });

      tl.from(".fast-visual", {
        x: -30, duration: 0.8, ease: "power3.out",
      }).from(".fast-content > *", {
        x: 20, duration: 0.6, stagger: 0.08, ease: "power3.out",
      }, "-=0.5");
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-white py-24 lg:py-32 overflow-hidden border-t border-[#ECEAE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left Visual */}
          <div className="fast-visual relative order-2 lg:order-1">

            {/* Main website mockup */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#ECEAE4]"
              style={{ transform: "perspective(1200px) rotateY(6deg) rotateX(3deg)" }}
            >
              {/* Browser bar */}
              <div className="bg-[#F4F3EF] px-4 py-2.5 flex items-center gap-3 border-b border-[#ECEAE4]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 max-w-[220px] mx-auto bg-white rounded px-3 py-1 flex items-center gap-2 border border-[#ECEAE4]">
                  <div className="w-2 h-2 rounded-full bg-[#C8DDD0]" />
                  <span className="text-[10px] text-[#7A7A77] font-mono">yourvilla-rentals.com</span>
                </div>
              </div>
              <div className="relative h-[360px]">
                <Image
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
                  alt="Luxury property rental website"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111110]/50" />

                {/* Booking widget overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white">
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[
                      { label: "Check-In", value: "Jul 10" },
                      { label: "Check-Out", value: "Jul 17" },
                      { label: "Guests", value: "2 Adults" },
                    ].map(({ label, value }) => (
                      <div key={label} className="text-center">
                        <p className="text-[8px] text-[#7A7A77] font-semibold uppercase">{label}</p>
                        <p className="text-[11px] font-bold text-[#111110]">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-base font-black text-[#111110]">$1,540</span>
                      <span className="text-[10px] text-[#7A7A77] ml-1">/ 7 nights</span>
                    </div>
                    <button className="bg-[#1C3320] text-white text-[10px] font-bold px-4 py-1.5 rounded-lg">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating: launch time */}
            <div className="absolute -bottom-4 -right-4 lg:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-[#ECEAE4] z-10 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-4 border-[#EAF2EC] flex items-center justify-center">
                  <span className="text-[#1C3320] text-xs font-black">2wk</span>
                </div>
                <div>
                  <p className="text-xs font-black text-[#111110]">Average Launch</p>
                  <p className="text-[10px] text-[#7A7A77]">From deposit to live</p>
                </div>
              </div>
            </div>

            {/* Floating: SEO */}
            <div className="absolute -top-4 left-4 lg:-left-6 bg-[#1C3320] text-white rounded-2xl px-4 py-2.5 shadow-xl z-10">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#8DB89A]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
                <div>
                  <p className="text-[10px] font-bold">Organic Traffic</p>
                  <p className="text-[10px] text-[#8DB89A] font-bold">+180% in 3 months</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="fast-content flex flex-col gap-0 order-1 lg:order-2">

            <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1C3320] bg-[#EAF2EC] border border-[#C8DDD0] rounded-full mb-6">
              Fast-Launch Website
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-black text-[#111110] leading-tight mb-5">
              Launch Your Booking Website
              <span className="block text-[#4A7C59]">in Weeks, Not Months</span>
            </h2>

            <p className="text-lg text-[#7A7A77] leading-relaxed mb-5">
              Get a professional, fully functional booking website fast without compromising on quality, branding, or features. Perfect for businesses ready to start taking online bookings immediately.
            </p>

            {/* Industry pills */}
            <div className="flex flex-wrap gap-2 mb-7">
              <span className="text-sm font-semibold text-[#3A3A38] mr-1">Perfect for:</span>
              {industries.map((ind) => (
                <span key={ind} className="px-3 py-1 bg-[#F4F3EF] border border-[#ECEAE4] text-[#111110] text-sm font-medium rounded-lg hover:border-[#C8DDD0] transition-colors">
                  {ind}
                </span>
              ))}
            </div>

            {/* Deliverables */}
            <ul className="grid gap-3 mb-8">
              {deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#111110] font-medium">
                  <svg className="w-4 h-4 text-[#4A7C59] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* Web + Mobile callout */}
            <div className="bg-[#F4F3EF] border border-[#ECEAE4] p-5 rounded-2xl mb-8 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-[#EAF2EC] border border-[#C8DDD0] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#1C3320]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
                </svg>
              </div>
              <div>
                <h4 className="font-black text-[#111110] mb-1 text-sm">Upgrade to Web + Mobile Anytime</h4>
                <p className="text-sm text-[#7A7A77] leading-relaxed">
                  Start with a fast-launch website and seamlessly add a mobile app later no rebuilding required. Your platform grows with your business.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex justify-center items-center gap-2 py-3.5 px-7 rounded-full text-sm font-bold text-white bg-[#1C3320] hover:bg-[#2B5038] shadow-md transition-all hover:-translate-y-px">
                Launch Your Website
              </a>
              <a href="#contact" className="inline-flex justify-center items-center gap-2 py-3.5 px-7 rounded-full text-sm font-bold text-[#1C3320] border-2 border-[#1C3320] hover:bg-[#EAF2EC] transition-all">
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
