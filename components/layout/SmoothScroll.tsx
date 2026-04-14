"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, useGSAP);
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
      });

      const handleAnchorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const link = target.closest("a");
        
        if (!link) return;
        
        const href = link.getAttribute("href") || link.hash;
        
        if (href && href.startsWith("#") && href.length > 1) {
          e.preventDefault();
          e.stopPropagation();
          smoother.scrollTo(href, true, "top top");
          window.history.pushState(null, "", href);
        }
      };

      // Use capture mode to intercept before Next.js Link handles it
      document.addEventListener("click", handleAnchorClick, { capture: true });

      return () => {
        document.removeEventListener("click", handleAnchorClick, { capture: true });
      };
    },
    { scope: container }
  );

  return (
    <div id="smooth-wrapper" ref={container}>
      <div id="smooth-content">{children}</div>
    </div>
  );
}
