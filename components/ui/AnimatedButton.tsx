"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface AnimatedButtonProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
  fillClass?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  [key: string]: unknown;
}

export default function AnimatedButton({ href, className, children, fillClass, onClick, ...props }: AnimatedButtonProps) {
  const container = useRef<any>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  
  const { contextSafe } = useGSAP({ scope: container });

  const handleEnter = contextSafe(() => {
    gsap.killTweensOf(fillRef.current);
    gsap.set(fillRef.current, { transformOrigin: "left" });
    gsap.to(fillRef.current, {
      scaleX: 1,
      duration: 0.4,
      ease: "power2.out"
    });
  });

  const handleLeave = contextSafe(() => {
    gsap.killTweensOf(fillRef.current);
    gsap.set(fillRef.current, { transformOrigin: "right" });
    gsap.to(fillRef.current, {
      scaleX: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  });

  // Extract base classes by removing hover:bg-* to avoid conflict, and adding relative + overflow-hidden
  const baseClass = `relative overflow-hidden ${className || ""}`.replace(/hover:bg-\[?[a-zA-Z0-9#]*\]?/g, "");

  // Default fill depending on original background to make it automatic and simple
  const computedFillClass = fillClass 
    ? fillClass 
    : (className?.includes("bg-white") ? "bg-[#F4F3EF]" 
        : className?.includes("bg-[#EAF2EC]") ? "bg-[#C8DDD0]" 
        : "bg-[#2B5038]");

  const innerContent = (
    <>
      <span 
        ref={fillRef} 
        className={`absolute inset-0 z-0 ${computedFillClass}`}
        style={{ transform: "scaleX(0)" }}
      />
      <span className="relative z-10 flex items-center justify-center gap-x-2 w-full h-full">
        {children}
      </span>
    </>
  );

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a 
          href={href} 
          ref={container}
          className={baseClass} 
          onMouseEnter={handleEnter} 
          onMouseLeave={handleLeave}
          onClick={onClick}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {innerContent}
        </a>
      );
    }
    return (
      <Link 
        href={href} 
        ref={container}
        className={baseClass} 
        onMouseEnter={handleEnter} 
        onMouseLeave={handleLeave}
        onClick={onClick}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <button 
      ref={container}
      className={baseClass} 
      onMouseEnter={handleEnter} 
      onMouseLeave={handleLeave}
      onClick={onClick}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {innerContent}
    </button>
  );
}
