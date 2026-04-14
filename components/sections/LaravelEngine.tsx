"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  "Multi-location inventory & availability management",
  "Complex pricing rules (seasonal, last-minute, bulk)",
  "Secure multi-currency payment processing",
  "Owner portals & customer management dashboards",
  "Third-party integrations (Stripe, PayPal, OTAs)",
  "Real-time analytics & revenue reporting",
];

export default function LaravelEngine() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });

      tl.from(".custom-content > *", {
        x: -20, duration: 0.6, stagger: 0.08, ease: "power3.out",
      }).from(".custom-visual", {
        x: 30, duration: 0.8, ease: "power3.out",
      }, "-=0.6");
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-[#F4F3EF] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="custom-content flex flex-col gap-0">

            <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1C3320] bg-[#EAF2EC] border border-[#C8DDD0] rounded-full mb-6">
              Custom Platform Development
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-black text-[#111110] leading-tight mb-5">
              Enterprise Booking Platforms
              <span className="block text-[#4A7C59]">Built for Your Business</span>
            </h2>

            <p className="text-lg text-[#7A7A77] leading-relaxed mb-6">
              When off-the-shelf solutions can't handle your complexity, we build exactly what you need. Multi-location, custom pricing rules, owner portals, channel management all in one unified platform.
            </p>

            <blockquote className="bg-[#EAF2EC] border-l-4 border-[#1C3320] p-4 rounded-r-xl mb-7">
              <p className="text-[15px] font-semibold text-[#1C3320] italic leading-relaxed">
                "We don't deliver features we deliver systems that transform your operations, reduce manual work, and grow revenue from day one."
              </p>
            </blockquote>

            {/* Capabilities */}
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {capabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#3A3A38] font-medium">
                  <svg className="w-4 h-4 text-[#4A7C59] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {cap}
                </li>
              ))}
            </ul>

            {/* Proof bar */}
            <div className="bg-white rounded-2xl p-5 border border-[#ECEAE4] shadow-sm mb-8 grid grid-cols-3 divide-x divide-[#ECEAE4]">
              {[
                { v: "15+", l: "Platform Engineers" },
                { v: "100%", l: "Production-Ready" },
                { v: "50+", l: "Platforms Shipped" },
              ].map(({ v, l }) => (
                <div key={l} className="text-center px-4 first:pl-0 last:pr-0">
                  <div className="text-2xl font-black text-[#1C3320]">{v}</div>
                  <div className="text-[10px] font-bold text-[#7A7A77] uppercase tracking-wider mt-0.5">{l}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex justify-center items-center gap-2 py-3.5 px-7 rounded-full text-sm font-bold text-white bg-[#1C3320] hover:bg-[#2B5038] shadow-md transition-all hover:-translate-y-px">
                Get Your Custom Demo
              </a>
              <a href="#contact" className="inline-flex justify-center items-center gap-2 py-3.5 px-7 rounded-full text-sm font-bold text-[#1C3320] border-2 border-[#1C3320] hover:bg-[#EAF2EC] transition-all">
                Calculate Your ROI
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="custom-visual relative">
            {/* Main dashboard image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#ECEAE4]"
              style={{ transform: "perspective(1200px) rotateY(-6deg) rotateX(3deg)" }}
            >
              {/* Browser bar */}
              <div className="bg-[#1a1a18] px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 mx-3 bg-[#2a2a28] rounded px-3 py-1 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#4A7C59]" />
                  <span className="text-[10px] text-[#7A7A77] font-mono">admin.yourbookingplatform.com</span>
                </div>
              </div>
              <div className="relative h-[360px]">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Booking platform analytics dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating badge: API performance */}
            <div className="absolute -bottom-5 -left-5 lg:-left-8 bg-[#1C3320] text-white rounded-2xl p-4 shadow-2xl border border-[#2B5038] z-10">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#2B5038]">
                <svg className="w-3.5 h-3.5 text-[#8DB89A]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-[10px] font-bold tracking-wider text-[#C8DDD0] uppercase">System Status</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center gap-6 text-[11px]">
                  <span className="text-[#8DB89A]">Response Time</span>
                  <span className="font-mono font-bold">42ms</span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-[#8DB89A]">Uptime</span>
                  <span className="font-mono font-bold text-green-400">99.9% ✓</span>
                </div>
              </div>
            </div>

            {/* Floating badge: live bookings */}
            <div className="absolute -top-4 -right-4 lg:-right-6 bg-white rounded-2xl px-4 py-3 shadow-xl border border-[#ECEAE4] z-10 animate-float">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#EAF2EC] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#1C3320]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#111110]">New Booking</p>
                  <p className="text-[9px] text-[#4A7C59] font-semibold">+$680 · Just now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
