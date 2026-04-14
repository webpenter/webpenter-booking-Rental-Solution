"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/* ── Animated counter ──────────────────────────────────── */
function useCountUp(target: number, duration = 1800, triggered = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    const start = performance.now();
    const frame = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setValue(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(frame);
      else setValue(target);
    };
    requestAnimationFrame(frame);
  }, [triggered, target, duration]);
  return value;
}

function MetricCard({
  value,
  suffix,
  label,
  icon,
  triggered,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  triggered: boolean;
}) {
  const count = useCountUp(value, 1800, triggered);
  const displayValue = value % 1 !== 0 ? (triggered ? value.toFixed(1) : "0.0") : count;

  return (
    <div className="metric-card text-center">
      <div className="w-14 h-14 rounded-2xl bg-[#EAF2EC] flex items-center justify-center text-[#1C3320] mx-auto mb-4">
        {icon}
      </div>
      <div className="text-5xl lg:text-6xl font-black text-[#1C3320] leading-none mb-2">
        {displayValue}{suffix}
      </div>
      <p className="text-sm font-medium text-[#7A7A77]">{label}</p>
    </div>
  );
}

const metrics = [
  {
    value: 500,
    suffix: "+",
    label: "Active Booking Platforms",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
  {
    value: 2.5,
    suffix: "M+",
    label: "Bookings Processed Monthly",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    value: 15,
    suffix: "+",
    label: "Countries & Growing",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    value: 99,
    suffix: ".9%",
    label: "Platform Uptime Guarantee",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];


export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const [metricsTriggered, setMetricsTriggered] = useState(false);

  useGSAP(
    () => {
      // Trigger counters
      ScrollTrigger.create({
        trigger: ".metrics-strip",
        start: "top 80%",
        once: true,
        onEnter: () => setMetricsTriggered(true),
      });

      gsap.from(".metric-card", {
        scrollTrigger: { trigger: ".metrics-strip", start: "top 85%", once: true },
        y: 30, duration: 0.6, stagger: 0.1, ease: "power3.out",
      });

      gsap.from(".result-card", {
        scrollTrigger: { trigger: ".results-grid", start: "top 85%", once: true },
        y: 40, duration: 0.6, stagger: 0.15, ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="overflow-hidden">

      {/* ── Metrics strip ── */}
      <div className="metrics-strip py-16 lg:py-20 border-y border-[#2a2a28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {metrics.map((m, i) => (
              <MetricCard key={i} {...m} triggered={metricsTriggered} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Case Studies ── */}
      <div className="bg-[#F4F3EF] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section label + heading */}
          <div className="mb-10 lg:mb-12">
            <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#1C3320] bg-[#EAF2EC] border border-[#C8DDD0] rounded-full mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111110] leading-tight">
              Real results from<br className="hidden sm:block" />
              <span className="text-[#1C3320]"> real businesses</span>
            </h2>
          </div>

          {/* Bento grid */}
          <div className="results-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-4">

            {/* Card 1 featured dark, spans 1 col but taller on lg */}
            <div className="result-card row-span-2 relative flex flex-col justify-between bg-[#1C3320] rounded-2xl p-6 lg:p-7 overflow-hidden min-h-[240px] lg:min-h-0">
              {/* Top */}
              <div>
                <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/10 text-[#8DB89A] border border-white/10 mb-5">
                  Revenue
                </span>
                <div className="text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-2">
                  127%
                </div>
                <p className="text-sm font-semibold text-[#C8DDD0] leading-snug">
                  more direct bookings in 90 days
                </p>
              </div>
              {/* Bottom */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold text-white/80">Luxury Hotel Group</p>
                  <p className="text-[10px] text-white/40">Dubai, UAE · Hospitality</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#8DB89A]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/[0.03] pointer-events-none" />
            </div>

            {/* Card 2 white */}
            <div className="result-card flex flex-col justify-between bg-white rounded-2xl p-6 border border-[#ECEAE4] min-h-[160px]">
              <div>
                <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#EAF2EC] text-[#1C3320] border border-[#C8DDD0] mb-4">
                  Efficiency
                </span>
                <div className="text-5xl font-black text-[#1C3320] leading-none tracking-tight mb-1.5">
                  43 hrs
                </div>
                <p className="text-sm text-[#7A7A77] font-medium">saved per week on admin</p>
              </div>
              <div className="mt-6 pt-3.5 border-t border-[#ECEAE4]">
                <p className="text-[11px] font-bold text-[#3A3A38]">Car Rental Chain</p>
                <p className="text-[10px] text-[#BFBDB7]">8 Locations, Europe · Mobility</p>
              </div>
            </div>

            {/* Card 3 sage green */}
            <div className="result-card flex flex-col justify-between bg-[#EAF2EC] rounded-2xl p-6 border border-[#C8DDD0] min-h-[160px]">
              <div>
                <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#1C3320]/10 text-[#1C3320] border border-[#1C3320]/10 mb-4">
                  Reliability
                </span>
                <div className="text-5xl font-black text-[#1C3320] leading-none tracking-tight mb-1.5">
                  94%
                </div>
                <p className="text-sm text-[#4A7C59] font-medium">fewer double-bookings</p>
              </div>
              <div className="mt-6 pt-3.5 border-t border-[#C8DDD0]">
                <p className="text-[11px] font-bold text-[#1C3320]">Event Space Network</p>
                <p className="text-[10px] text-[#4A7C59]/70">Australia · Events</p>
              </div>
            </div>

          </div>

          {/* CTA strip */}
          <div className="result-card bg-[#111110] rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-base leading-snug">Ready to see results like these?</p>
              <p className="text-[#7A7A77] text-sm mt-0.5">Free Consultation No Commitment</p>
            </div>
            <a
              href="#contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#111110] text-sm font-bold hover:bg-[#EAF2EC] transition-colors"
            >
              Book Free Call
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
