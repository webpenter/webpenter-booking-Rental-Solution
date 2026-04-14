"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: "Discovery Call",
    description: "We learn about your business, your customers, and your goals. 30 minutes that shape your entire platform.",
    detail: "Free · No commitment",
    color: "from-[#EAF2EC] to-[#C8DDD0]",
    textColor: "text-[#1C3320]",
  },
  {
    number: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Custom Proposal",
    description: "You receive a tailored solution design with timeline, costs, and exact features within 48 hours.",
    detail: "Within 48 hours",
    color: "from-[#C8DDD0] to-[#8DB89A]",
    textColor: "text-[#2B5038]",
  },
  {
    number: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "We Build It",
    description: "Our team builds your platform with weekly check-ins, live previews, and zero surprises. You see progress every step.",
    detail: "2–8 weeks depending on scope",
    color: "from-[#4A7C59] to-[#2B5038]",
    textColor: "text-white",
  },
  {
    number: "04",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: "Launch & Grow",
    description: "Go live with confidence. We handle deployment, training, and 90-day post-launch support to ensure success.",
    detail: "90-day support included",
    color: "from-[#1C3320] to-[#111110]",
    textColor: "text-white",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".hiw-header", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
        y: 30, duration: 0.7, ease: "power3.out",
      });

      gsap.from(".hiw-step", {
        scrollTrigger: { trigger: ".hiw-steps", start: "top 85%", once: true },
        y: 40, duration: 0.6, stagger: 0.12, ease: "power3.out",
      });

      gsap.from(".hiw-connector", {
        scrollTrigger: { trigger: ".hiw-steps", start: "top 85%", once: true },
        scaleX: 0, duration: 1.2, ease: "power2.out", transformOrigin: "left center",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="hiw-header text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1C3320] bg-[#EAF2EC] border border-[#C8DDD0] rounded-full mb-5">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111110] tracking-tight mb-4">
            From Idea to Live Platform
            <span className="block text-[#1C3320]">in 4 Simple Steps</span>
          </h2>
          <p className="text-lg text-[#7A7A77] max-w-2xl mx-auto">
            No lengthy contracts, no hidden surprises. Just a clear, fast path from where you are to where you want to be.
          </p>
        </div>

        {/* Steps Desktop: horizontal, Mobile: vertical */}
        <div className="hiw-steps relative">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="hiw-connector hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-[#EAF2EC] via-[#4A7C59] to-[#1C3320]"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div key={i} className="hiw-step relative flex flex-col items-center text-center lg:items-start lg:text-left">

                {/* Number bubble */}
                <div
                  className={`relative z-10 w-[104px] h-[104px] rounded-3xl bg-gradient-to-br ${step.color} flex flex-col items-center justify-center mb-6 shadow-lg`}
                >
                  <div className={step.textColor}>{step.icon}</div>
                  <span className={`text-xs font-black mt-1 opacity-60 ${step.textColor}`}>{step.number}</span>
                </div>

                <h3 className="text-lg font-black text-[#111110] mb-2">{step.title}</h3>
                <p className="text-sm text-[#7A7A77] leading-relaxed mb-3">{step.description}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4A7C59] bg-[#EAF2EC] px-3 py-1 rounded-full">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {step.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-[#1C3320] hover:bg-[#2B5038] transition-all duration-200 shadow-lg shadow-[#1C3320]/20 hover:shadow-xl hover:-translate-y-0.5"
          >
            Start with a Free Discovery Call
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
