"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    num: "01",
    title: "RentEasy",
    subtitle: "Multi-Property Platform",
    category: "Custom Platform",
    description:
      "Replaced manual spreadsheets with a real-time booking system handling 10,000+ reservations monthly with multi-currency payments, owner dashboards, and live availability.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85",
    imageAlt: "Luxury hotel pool RentEasy platform",
    heroStat: "10K+",
    heroStatLabel: "Bookings / Month",
    stats: [
      { label: "Uptime", value: "99.9%" },
      { label: "Countries", value: "12" },
      { label: "Revenue ↑", value: "+34%" },
    ],
    accentColor: "#1C3320",
    size: "large", // spans 2 rows on left
  },
  {
    num: "02",
    title: "BookHere",
    subtitle: "Mobile Booking App",
    category: "iOS & Android",
    description:
      "A cross-platform booking app cutting average reservation time to 3 minutes, with push alerts and a full owner management suite.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=85",
    imageAlt: "Mobile booking app",
    heroStat: "4.9★",
    heroStatLabel: "App Store Rating",
    stats: [
      { label: "Downloads", value: "25K+" },
      { label: "Avg Booking", value: "3 min" },
    ],
    accentColor: "#2B5038",
    size: "small",
  },
  {
    num: "03",
    title: "VillaHub",
    subtitle: "Luxury Booking Website",
    category: "Fast-Launch",
    description:
      "A villa rental site with dynamic pricing and seamless checkout that grew organic traffic 180% and hit 8.4% conversion within 3 months of launch.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=85",
    imageAlt: "Luxury beach villa",
    heroStat: "+180%",
    heroStatLabel: "Organic Traffic",
    stats: [
      { label: "Conversion", value: "8.4%" },
      { label: "Page Speed", value: "96/100" },
    ],
    accentColor: "#4A7C59",
    size: "small",
  },
  {
    num: "04",
    title: "CabinRoute",
    subtitle: "Channel Manager",
    category: "Platform Integration",
    description:
      "Eliminated double-bookings entirely by syncing 500+ listings across Airbnb, Booking.com, and Vrbo in under 2 seconds, in real time.",
    image: "https://images.unsplash.com/photo-1475087542963-13ab5e611954?w=1200&q=85",
    imageAlt: "Mountain cabin rental",
    heroStat: "<2s",
    heroStatLabel: "Cross-Platform Sync",
    stats: [
      { label: "Platforms", value: "6" },
      { label: "Listings", value: "500+" },
      { label: "Double-bookings", value: "0" },
    ],
    accentColor: "#1C3320",
    size: "wide", // full width
  },
];

/* ── Large card (left, spans 2 rows) ─────────────── */
function LargeCard({ p }: { p: (typeof projects)[0] }) {
  return (
    <div className="project-card relative rounded-3xl overflow-hidden group cursor-pointer h-full min-h-[520px]">
      {/* Image */}
      <Image
        src={p.image}
        alt={p.imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 55vw"
        priority
      />

      {/* Always-on gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

      {/* Top bar */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
        <span className="text-[11px] font-bold text-white/90 bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full uppercase tracking-widest">
          {p.category}
        </span>
        <span className="text-[11px] font-black text-white/50 tracking-widest">{p.num}</span>
      </div>

      {/* Bottom static content */}
      <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
        <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">{p.subtitle}</p>
        <h3 className="text-white text-3xl font-black leading-none mb-4">{p.title}</h3>

        {/* Hero stat */}
        <div className="flex items-end gap-3 mb-5">
          <span className="text-5xl font-black leading-none" style={{ color: "#8DB89A" }}>
            {p.heroStat}
          </span>
          <span className="text-white/60 text-sm mb-1 leading-tight">{p.heroStatLabel}</span>
        </div>

        {/* Mini stats row */}
        <div className="flex flex-wrap gap-2">
          {p.stats.map((s) => (
            <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-3 py-1.5">
              <span className="text-white font-black text-sm">{s.value}</span>
              <span className="text-white/50 text-xs ml-1.5">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hover overlay slides up */}
      <div className="absolute inset-0 bg-[#1C3320]/95 flex flex-col justify-end p-7 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
        <p className="text-[#8DB89A] text-xs font-bold uppercase tracking-widest mb-3">{p.category} · {p.subtitle}</p>
        <h3 className="text-white text-3xl font-black mb-4">{p.title}</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-6">{p.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {p.stats.map((s) => (
            <div key={s.label} className="bg-white/10 border border-white/15 rounded-xl px-3 py-2">
              <div className="text-white font-black text-lg leading-none">{s.value}</div>
              <div className="text-white/50 text-[10px] mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#8DB89A] hover:text-white transition-colors">
          Discuss a similar project
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ── Small card (stacked right) ──────────────────── */
function SmallCard({ p }: { p: (typeof projects)[0] }) {
  return (
    <div className="project-card relative rounded-3xl overflow-hidden group cursor-pointer min-h-[248px]">
      <Image
        src={p.image}
        alt={p.imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 35vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Top */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <span className="text-[10px] font-bold text-white/90 bg-white/15 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full uppercase tracking-widest">
          {p.category}
        </span>
        <span className="text-[11px] font-black text-white/40 tracking-widest">{p.num}</span>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <p className="text-white/55 text-[10px] font-semibold uppercase tracking-widest mb-0.5">{p.subtitle}</p>
        <h3 className="text-white text-xl font-black leading-tight mb-3">{p.title}</h3>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black" style={{ color: "#8DB89A" }}>{p.heroStat}</span>
          <span className="text-white/50 text-[11px] leading-tight">{p.heroStatLabel}</span>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#1C3320]/95 flex flex-col justify-end p-5 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
        <p className="text-[#8DB89A] text-[10px] font-bold uppercase tracking-widest mb-2">{p.subtitle}</p>
        <h3 className="text-white text-xl font-black mb-2">{p.title}</h3>
        <p className="text-white/65 text-xs leading-relaxed mb-4">{p.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.stats.map((s) => (
            <div key={s.label} className="bg-white/10 border border-white/15 rounded-lg px-2.5 py-1.5">
              <span className="text-white font-black text-sm">{s.value}</span>
              <span className="text-white/50 text-[9px] ml-1">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Wide card (full width, horizontal) ────────── */
function WideCard({ p }: { p: (typeof projects)[0] }) {
  return (
    <div className="project-card relative rounded-3xl overflow-hidden group cursor-pointer">
      <div className="grid md:grid-cols-[45%_55%] min-h-[280px]">

        {/* Image half */}
        <div className="relative min-h-[220px] md:min-h-0 overflow-hidden">
          <Image
            src={p.image}
            alt={p.imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111110] hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/80 to-transparent md:hidden" />

          {/* Category */}
          <div className="absolute top-5 left-5 z-10">
            <span className="text-[10px] font-bold text-white/90 bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full uppercase tracking-widest">
              {p.category}
            </span>
          </div>
        </div>

        {/* Content half */}
        <div className="bg-[#111110] flex flex-col justify-between p-8 lg:p-10">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1">{p.subtitle}</p>
              <h3 className="text-white text-3xl lg:text-4xl font-black">{p.title}</h3>
            </div>
            <span className="text-white/20 text-4xl font-black tracking-tighter shrink-0 ml-4">{p.num}</span>
          </div>

          <p className="text-white/60 text-sm leading-relaxed mb-8">{p.description}</p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3 mb-8">
            {p.stats.map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                <div className="text-2xl font-black text-white leading-none">{s.value}</div>
                <div className="text-white/40 text-[10px] mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Hero stat + CTA */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-end gap-2">
              <span className="text-5xl font-black leading-none" style={{ color: "#8DB89A" }}>
                {p.heroStat}
              </span>
              <span className="text-white/40 text-sm mb-1">{p.heroStatLabel}</span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C3320] hover:bg-[#2B5038] text-white text-xs font-bold transition-colors"
            >
              Similar project?
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main section ────────────────────────────────── */
export default function FeaturedListings() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".portfolio-header", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
        y: 30, duration: 0.7, ease: "power3.out",
      });
      gsap.from(".project-card", {
        scrollTrigger: { trigger: ".projects-bento", start: "top 85%", once: true },
        y: 40, duration: 0.7, stagger: 0.1, ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  const [large, s1, s2, wide] = projects;

  return (
    <section id="portfolio" ref={sectionRef} className="bg-[#0D0D0C] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="portfolio-header flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#8DB89A] bg-[#8DB89A]/10 border border-[#8DB89A]/20 rounded-full mb-5">
              Case Studies
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
              Real Results for
              <span className="block" style={{ color: "#8DB89A" }}>Real Businesses</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-xs text-sm leading-relaxed">
            Measured by outcomes and revenue not by code lines or tech stack.
          </p>
        </div>

        {/* Bento grid */}
        <div className="projects-bento flex flex-col gap-4">

          {/* Row 1: large left + 2 small right */}
          <div className="grid md:grid-cols-[1.55fr_1fr] gap-4">
            <LargeCard p={large} />
            <div className="flex flex-col gap-4">
              <SmallCard p={s1} />
              <SmallCard p={s2} />
            </div>
          </div>

          {/* Row 2: full-width horizontal */}
          <WideCard p={wide} />
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-[#111110] bg-white hover:bg-[#F4F3EF] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Start Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
