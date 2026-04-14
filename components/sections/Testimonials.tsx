"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "James Thornton",
    role: "CEO, RentEasy UK",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    location: "United Kingdom",
    rating: 5,
    quote:
      "Webpenter Solution transformed our manual rental process into a fully automated platform. The booking system they built handles thousands of reservations monthly without breaking a sweat. Exceptional quality.",
  },
  {
    name: "Sofia Marquez",
    role: "Founder, VillaHub Spain",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    location: "Spain",
    rating: 5,
    quote:
      "Our new booking platform ranked on Google's first page within 3 months and our online bookings increased by 180%. The team's attention to detail and clear communication made it a pleasure to work with.",
  },
  {
    name: "Ahmad Khalil",
    role: "CTO, CabinRoute UAE",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    location: "UAE",
    rating: 5,
    quote:
      "The booking engine they built syncs all our listings across Airbnb, Booking.com, and Vrbo in under 2 seconds. Outstanding performance, great documentation, and delivered ahead of schedule.",
  },
  {
    name: "Priya Nair",
    role: "Product Manager, BookItNow India",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    location: "India",
    rating: 5,
    quote:
      "We had a complex multi-city cabin rental app vision Webpenter brought it to life beautifully. The app has 4.9 stars and our guests love it. Couldn't have asked for a better partner.",
  },
  {
    name: "Lara Jensen",
    role: "Owner, CoastalStay Denmark",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    location: "Denmark",
    rating: 5,
    quote:
      "Responsive, professional, and technically brilliant. They handled payment integrations, seasonal pricing, and an owner portal all within 8 weeks. Highly recommend to any rental business.",
  },
  {
    name: "Michael Osei",
    role: "Director, AfriStay Ghana",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    location: "Ghana",
    rating: 5,
    quote:
      "From initial scoping to go-live, Webpenter Solution exceeded every expectation. Our platform now serves 3,000+ listings across West Africa. Truly world-class partners.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".testimonials-header", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
        y: 30, duration: 0.7, ease: "power3.out",
      });
      gsap.from(".testimonial-card", {
        scrollTrigger: { trigger: ".testimonials-grid", start: "top 85%", once: true },
        y: 40, duration: 0.6, stagger: 0.1, ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="testimonials" ref={sectionRef} className="bg-[#F4F3EF] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="testimonials-header text-center mb-14">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1C3320] bg-[#EAF2EC] border border-[#C8DDD0] rounded-full mb-5">
            Client Love
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111110] tracking-tight mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-lg text-[#7A7A77] max-w-xl mx-auto">
            Booking and rental operators from 12+ countries share how we helped them grow.
          </p>
        </div>

        {/* Grid */}
        <div className="testimonials-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card bg-white rounded-3xl p-7 border border-[#ECEAE4] hover:shadow-xl hover:shadow-[#1C3320]/8 transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
            >
              {/* Rating */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <blockquote className="mt-4 text-sm text-[#3A3A38] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-[#ECEAE4]">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-[#EAF2EC]">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111110]">{t.name}</p>
                  <p className="text-xs text-[#7A7A77]">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-[10px] font-semibold text-[#7A7A77] bg-[#F4F3EF] px-2.5 py-1 rounded-full">
                    {t.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-14 bg-white rounded-3xl border border-[#ECEAE4] px-8 py-7
                        flex flex-wrap items-center justify-center gap-10 shadow-sm">
          {[
            { value: "50+", label: "Platforms Delivered" },
            { value: "30+", label: "Happy Clients" },
            { value: "12+", label: "Countries" },
            { value: "4.9★", label: "Average Rating" },
            { value: "100%", label: "On-Time Delivery" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-black text-[#1C3320]">{value}</p>
              <p className="text-xs text-[#7A7A77] mt-0.5 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
