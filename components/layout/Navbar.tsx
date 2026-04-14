"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedButton from "@/components/ui/AnimatedButton";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home",      href: "#home" },
  { label: "Services",  href: "#bookhere" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About",     href: "#about" },
  { label: "Contact",   href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  useGSAP(() => {
    const items = navRef.current?.querySelectorAll(".mac-dock-item");
    if (!items || items.length === 0) return;

    // Desktop only to prevent touch weirdness
    if (window.innerWidth < 1024) return;

    const baseScale = 1;
    const maxScale = 1.2;
    const hoverRadius = 120; // proximity radius

    const handleMouseMove = (e: MouseEvent) => {
      items.forEach((item) => {
        const _item = item as HTMLElement;
        const rect = _item.getBoundingClientRect();
        
        // Calculate the center of the item before transform (approximate)
        const itemCenterX = rect.left + rect.width / 2;
        const itemCenterY = rect.top + rect.height / 2;
        
        const distance = Math.hypot(e.clientX - itemCenterX, e.clientY - itemCenterY);
        
        if (distance < hoverRadius) {
          const factor = 1 - (distance / hoverRadius);
          const scale = baseScale + (maxScale - baseScale) * Math.pow(factor, 1.5);
          
          gsap.to(item, { 
            scale: scale, 
            y: -6 * factor, // slightly lift up
            duration: 0.15, 
            ease: "power2.out",
            transformOrigin: "bottom center"
          });
        } else {
          gsap.to(item, { scale: baseScale, y: 0, duration: 0.25, ease: "power2.out" });
        }
      });
    };

    const handleMouseLeave = () => {
      gsap.to(items, { scale: baseScale, y: 0, duration: 0.4, ease: "elastic.out(1, 0.4)" });
    };

    const nav = navRef.current;
    if (nav) {
      nav.addEventListener("mousemove", handleMouseMove);
      nav.addEventListener("mouseleave", handleMouseLeave);
      
      return () => {
        nav.removeEventListener("mousemove", handleMouseMove);
        nav.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, { scope: navRef });

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F4F3EF]/90 backdrop-blur-md shadow-sm py-3"
          : "bg-white/0 py-5"
      }`}
    >
      <nav ref={navRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">

        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0 mac-dock-item"
          onClick={closeMenu}
        >
          {/* Icon mark */}
          <span className="w-9 h-9 rounded-xl bg-[#1C3320] flex items-center justify-center shadow-md">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M9 2L16 7.5V16H2V7.5L9 2Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round"/>
              <rect x="6" y="10" width="2.2" height="3.5" rx="0.5" fill="#fff"/>
              <rect x="9.8" y="10" width="2.2" height="3.5" rx="0.5" fill="#fff"/>
              <circle cx="9" cy="6.5" r="1.2" fill="#C8DDD0"/>
            </svg>
          </span>
          <span className="text-[1.15rem] font-bold tracking-tight text-[#111110] leading-none">
            Webpenter<span className="text-[#1C3320]"> Solution</span>
          </span>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label} className="mac-dock-item will-change-transform">
              <a
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-[#3A3A38] hover:text-[#1C3320] rounded-lg
                           hover:bg-[#EAF2EC] transition-all duration-200 group inline-block"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#1C3320] rounded-full
                                 group-hover:w-4 transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:flex items-center gap-3">
          <AnimatedButton
            href="#contact"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-[#1C3320] rounded-full
                       hover:bg-[#2B5038] transition-all duration-200 shadow-sm hover:shadow-md
                       hover:-translate-y-px mac-dock-item will-change-transform"
          >
            Schedule a Call
          </AnimatedButton>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-[#EAF2EC] transition-colors text-[#111110]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            /* X icon */
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          ) : (
            /* Hamburger icon */
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M3 7h16M3 11h16M3 15h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="lg:hidden animate-slide-down border-t border-[#ECEAE4] bg-white px-4 pb-6 pt-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="px-4 py-3 text-base font-medium text-[#3A3A38] hover:text-[#1C3320]
                         hover:bg-[#EAF2EC] rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 pt-4 border-t border-[#ECEAE4]">
            <AnimatedButton
              href="#contact"
              onClick={closeMenu}
              className="w-full px-5 py-3 text-sm font-semibold text-white
                         bg-[#1C3320] rounded-full hover:bg-[#2B5038] transition-colors"
            >
              Schedule a Call
            </AnimatedButton>
          </div>
        </div>
      )}
    </header>
  );
}
