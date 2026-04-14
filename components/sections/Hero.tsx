"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/* ── Floating badge ─────────────────────────────────────── */
function FloatingBadge({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`absolute z-20 bg-white/95 backdrop-blur-sm shadow-xl border border-white/60 rounded-2xl px-3 py-2.5 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

/* ── Hero Visual (right panel) ───────────────────────────── */
function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Green glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 60% 50%, rgba(28,51,32,0.12), transparent)",
        }}
      />

      {/* Main browser mockup card */}
      <div className="relative w-full max-w-[520px] rounded-2xl overflow-hidden shadow-2xl border border-[#ECEAE4]"
        style={{ transform: "perspective(1000px) rotateY(-4deg) rotateX(2deg)" }}
      >
        {/* Browser chrome */}
        <div className="bg-[#1a1a18] px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex-1 mx-3 bg-[#2a2a28] rounded-md px-3 py-1 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4A7C59]" />
            <span className="text-[10px] text-[#7A7A77] font-mono">your-booking-site.com</span>
          </div>
        </div>

        {/* Site hero area with real image */}
        <div className="relative h-[200px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80"
            alt="Luxury villa booking"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C3320]/50 to-[#1C3320]/80" />
          {/* Overlay heading */}
          <div className="absolute inset-0 flex flex-col justify-end p-5">
            <p className="text-white/70 text-xs mb-1 font-medium uppercase tracking-widest">Available Now</p>
            <h3 className="text-white text-lg font-bold leading-tight">
              Santorini Villa Sea View Suite
            </h3>
            <p className="text-white/80 text-sm mt-1">from <span className="font-bold text-[#8DB89A]">$320</span> / night</p>
          </div>

          {/* Live badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-2.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white text-[10px] font-semibold">LIVE</span>
          </div>
        </div>

        {/* Booking widget below image */}
        <div className="bg-white p-4">
          {/* Date pickers row */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            {[
              { label: "Check-In", value: "Jun 14, 2025" },
              { label: "Check-Out", value: "Jun 21, 2025" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[#F4F3EF] rounded-lg p-2.5">
                <p className="text-[8px] text-[#7A7A77] font-semibold uppercase tracking-wider">{label}</p>
                <p className="text-xs font-bold text-[#111110] mt-0.5">{value}</p>
              </div>
            ))}
          </div>

          {/* Availability row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4A7C59]" />
              <span className="text-xs font-semibold text-[#4A7C59]">Available · 3 units left</span>
            </div>
            <span className="text-xs text-[#7A7A77]">7 nights</span>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-[#111110]">$2,240</span>
              <span className="text-xs text-[#7A7A77] ml-1">total</span>
            </div>
            <button className="bg-[#1C3320] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#2B5038] transition-colors">
              Book Instantly
            </button>
          </div>
        </div>

        {/* Recent bookings strip */}
        <div className="bg-[#F4F3EF] px-4 py-2.5 flex items-center gap-3 border-t border-[#ECEAE4]">
          <div className="flex -space-x-2">
            {["#C8DDD0", "#8DB89A", "#4A7C59"].map((c, i) => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
            ))}
          </div>
          <span className="text-[10px] text-[#7A7A77]">
            <strong className="text-[#111110]">12 guests</strong> booked this week
          </span>
        </div>
      </div>

      {/* Floating: new booking notification */}
      <FloatingBadge className="-top-[-40px] -right-2 lg:-right-6 animate-float">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#EAF2EC] flex items-center justify-center text-base">🎉</div>
          <div>
            <p className="text-[10px] font-bold text-[#111110] leading-tight">New Booking!</p>
            <p className="text-[9px] text-[#4A7C59] font-semibold">+$480 · Just now</p>
          </div>
        </div>
      </FloatingBadge>

      {/* Floating: revenue card */}
      <FloatingBadge className="-bottom-2 -left-4 lg:-left-6 animate-float" style={{ animationDelay: "1.5s" } as React.CSSProperties}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#1C3320] flex items-center justify-center">
            <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <p className="text-[10px] text-[#7A7A77]">This Month</p>
            <p className="text-sm font-bold text-[#111110]">$48.2K Revenue</p>
            <p className="text-[9px] text-[#4A7C59] font-semibold">↑ 23% vs last month</p>
          </div>
        </div>
      </FloatingBadge>

      {/* Floating: rating badge */}
      <FloatingBadge className="bottom-1/3 -right-4 lg:-right-8">
        <div className="flex items-center gap-1.5">
          <span className="text-yellow-400 text-sm">★★★★★</span>
          <span className="text-[10px] font-bold text-[#111110]">4.9</span>
          <span className="text-[9px] text-[#7A7A77]">· 1,284 bookings</span>
        </div>
      </FloatingBadge>
    </div>
  );
}

/* ── Trust logos strip ────────────────────────────────────── */
const trustItems = [
  { label: "Hotels & Villas", icon: "🏨" },
  { label: "Car Rentals", icon: "🚗" },
  { label: "Event Spaces", icon: "🎪" },
  { label: "Equipment Hire", icon: "🔧" },
  { label: "Tour Operators", icon: "✈️" },
];

/* ── Main Hero ───────────────────────────────────────────── */
export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  useGSAP(
    () => {
      if (!ready) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { y: 20, duration: 0.5 })
        .from(".hero-headline .word", { y: 40, rotateX: -30, stagger: 0.08, duration: 0.6 }, "-=0.2")
        .from(".hero-sub", { y: 20, duration: 0.5 }, "-=0.3")
        .from(".hero-cta", { y: 16, scale: 0.95, stagger: 0.1, duration: 0.4 }, "-=0.2")
        .from(".hero-trust", { y: 12, duration: 0.4 }, "-=0.2")
        .from(".hero-visual", { x: 40, duration: 0.8 }, "-=0.7");

      // Scroll parallax on visual
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(".hero-visual", { y: self.progress * 60, ease: "none", duration: 0 });
        },
      });
    },
    { scope: containerRef, dependencies: [ready] }
  );

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Background grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ECEAE4 1px, transparent 1px), linear-gradient(to bottom, #ECEAE4 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.45,
        }}
      />

      {/* Gradient overlays on grid */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 10% 50%, rgba(255,255,255,0.98) 30%, transparent 80%)" }} />
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 80% at 90% 50%, rgba(234,242,236,0.7), transparent 80%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 lg:py-0">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 xl:gap-20 items-center min-h-screen">

          {/* ── LEFT: Content ── */}
          <div className="flex flex-col justify-center max-w-xl">

            {/* Eyebrow */}
            <div className="hero-eyebrow flex items-center gap-2 mb-6">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF2EC] border border-[#C8DDD0] text-[#1C3320] text-xs font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#1C3320] animate-pulse" />
                Enterprise Booking Solutions
              </span>
            </div>

            {/* Headline */}
            <div className="hero-headline mb-6" ref={headlineRef} style={{ perspective: "800px" }}>
              <h1 className="text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-black text-[#111110] leading-[1.05] tracking-tight">
                <span className="word inline-block mr-[0.2em]">Turn</span>
                <span className="word inline-block mr-[0.2em]">Every</span>
                <span className="word inline-block mr-[0.2em]">Visitor</span>
                <br />
                <span className="word inline-block mr-[0.2em]">Into</span>
                <span className="word inline-block" style={{
                  background: "linear-gradient(135deg, #1C3320 0%, #4A7C59 60%, #8DB89A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  a Booking
                </span>
              </h1>
            </div>

            {/* Sub */}
            <p className="hero-sub text-lg text-[#7A7A77] leading-relaxed mb-8 max-w-lg">
              We design and build complete booking & rental platforms from mobile apps
              to enterprise systems that grow revenue, eliminate manual work, and{" "}
              <strong className="text-[#3A3A38]">delight your customers.</strong>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#contact"
                className="hero-cta group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#1C3320] hover:bg-[#2B5038] transition-all duration-200 shadow-lg shadow-[#1C3320]/20 hover:shadow-xl hover:shadow-[#1C3320]/30 hover:-translate-y-0.5"
              >
                Schedule a Discovery Call
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://bookhere.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-[#1C3320] bg-white border-2 border-[#ECEAE4] hover:border-[#C8DDD0] hover:bg-[#F4F3EF] transition-all duration-200 hover:-translate-y-0.5"
              >
                See Live Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Trust bar */}
            <div className="hero-trust">
              {/* Star rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-[#111110]">4.9 / 5</span>
                <span className="text-sm text-[#7A7A77]">from 30+ clients worldwide</span>
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  { v: "50+", l: "Platforms Shipped" },
                  { v: "12+", l: "Countries" },
                  { v: "99.9%", l: "Uptime" },
                ].map(({ v, l }) => (
                  <div key={l} className="flex items-center gap-1.5 text-sm">
                    <span className="font-bold text-[#1C3320]">{v}</span>
                    <span className="text-[#7A7A77]">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Visual ── */}
          <div className="hero-visual hidden lg:flex items-center justify-center relative h-[580px]">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Industries ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#111110] border-t border-[#2a2a28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
            <span className="shrink-0 text-[10px] font-bold text-[#7A7A77] uppercase tracking-widest">
              We serve:
            </span>
            {trustItems.map((item, i) => (
              <span
                key={i}
                className="shrink-0 flex items-center gap-1.5 text-[11px] font-semibold text-[#B8B7B3]"
              >
                <span>{item.icon}</span>
                {item.label}
                {i < trustItems.length - 1 && <span className="ml-3 text-[#3A3A38]">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
