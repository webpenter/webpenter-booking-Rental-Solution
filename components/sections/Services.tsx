"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    badge: "Most Popular",
    badgeColor: "bg-[#1C3320] text-white",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 4.5h3" />
      </svg>
    ),
    title: "Mobile Booking App",
    subtitle: "BookHere Product",
    description:
      "Get a fully branded iOS & Android booking app live in weeks. Your customers book on the go, you manage everything from one dashboard.",
    benefits: [
      "Real-time availability & instant confirmations",
      "Automated reminders & push notifications",
      "Integrated payments in 50+ currencies",
      "Customer management & analytics",
    ],
    cta: { text: "Explore BookHere →", href: "https://bookhere.tech" },
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    imageAlt: "Mobile booking app",
    stat: { value: "< 4 weeks", label: "to launch" },
    bg: "bg-white",
  },
  {
    badge: null,
    badgeColor: "",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Custom Web Platform",
    subtitle: "Tailored to Your Business",
    description:
      "A fully bespoke booking system built around your exact workflows. Handles multi-location, complex pricing, owner portals, and anything your business needs.",
    benefits: [
      "Built for your unique business rules",
      "Scalable from startup to enterprise",
      "White-label & fully brandable",
      "Advanced automation & integrations",
    ],
    cta: { text: "Get a Custom Demo →", href: "#contact" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    imageAlt: "Booking dashboard analytics",
    stat: { value: "100%", label: "custom-built" },
    bg: "bg-[#F4F3EF]",
  },
  {
    badge: null,
    badgeColor: "",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: "Complete Ecosystem",
    subtitle: "Web + Mobile + Backend",
    description:
      "Unify your website, mobile app, and channel manager into a single, seamless system. One source of truth for every booking, across every platform.",
    benefits: [
      "Synchronized across web, iOS & Android",
      "Channel manager (Airbnb, Booking.com, Vrbo)",
      "Single admin dashboard for everything",
      "Real-time analytics & revenue reporting",
    ],
    cta: { text: "Learn More →", href: "#contact" },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    imageAlt: "Multi-platform booking ecosystem",
    stat: { value: "All-in-One", label: "platform" },
    bg: "bg-white",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".services-header", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
        y: 30, duration: 0.7, ease: "power3.out",
      });

      gsap.from(".service-card", {
        scrollTrigger: { trigger: ".services-grid", start: "top 85%", once: true },
        y: 50, duration: 0.7, stagger: 0.12, ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#F4F3EF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="services-header text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1C3320] bg-[#EAF2EC] border border-[#C8DDD0] rounded-full mb-5">
            Our Solutions
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111110] tracking-tight mb-4">
            Everything You Need to Scale
            <span className="block text-[#1C3320]">Your Booking Business</span>
          </h2>
          <p className="text-lg text-[#7A7A77] max-w-2xl mx-auto">
            From ready-made apps to fully custom platforms we deliver the solution that fits your business, your budget, and your timeline.
          </p>
        </div>

        {/* Cards */}
        <div className="services-grid grid lg:grid-cols-3 gap-6 xl:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service-card relative ${service.bg} rounded-3xl border border-[#ECEAE4] overflow-hidden group hover:shadow-2xl hover:shadow-[#1C3320]/10 transition-all duration-500 hover:-translate-y-1 flex flex-col`}
            >
              {/* Badge */}
              {service.badge && (
                <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${service.badgeColor}`}>
                  {service.badge}
                </div>
              )}

              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C3320]/60 via-transparent to-transparent" />

                {/* Stat overlay */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-lg font-black text-[#1C3320] leading-none">{service.stat.value}</p>
                  <p className="text-[10px] text-[#7A7A77] font-medium">{service.stat.label}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                {/* Icon + title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#EAF2EC] flex items-center justify-center text-[#1C3320] shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#7A7A77] mb-0.5">{service.subtitle}</p>
                    <h3 className="text-xl font-black text-[#111110] leading-tight">{service.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-[#7A7A77] leading-relaxed mb-5">{service.description}</p>

                {/* Benefits */}
                <ul className="space-y-2.5 mb-7 flex-1">
                  {service.benefits.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-[#3A3A38]">
                      <svg className="w-4 h-4 text-[#4A7C59] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={service.cta.href}
                  target={service.cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={service.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1 text-sm font-bold text-[#1C3320] hover:text-[#4A7C59] transition-colors group/cta mt-auto"
                >
                  {service.cta.text}
                  <svg className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-[#7A7A77] mt-20">
          Not sure which solution fits you?{" "}
          <a href="#contact" className="text-[#1C3320] font-semibold hover:underline">
            Book a free discovery call
          </a>{" "}
          and we&apos;ll recommend the right path.
        </p>
      </div>
    </section>
  );
}
