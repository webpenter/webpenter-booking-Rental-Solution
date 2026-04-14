"use client";

export default function CTA() {
  return (
    <section id="cta" className="bg-white py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative bg-[#111110] rounded-2xl overflow-hidden px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">

          {/* Subtle green glow top-left */}
          <div aria-hidden="true" className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#1C3320]/60 blur-3xl pointer-events-none" />
          {/* Faint grid pattern overlay */}
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "40px 40px" }}
          />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">

            {/* Left heading block */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.07] border border-white/10 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4A7C59] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8DB89A]">
                  Free Consultation No Commitment
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-white leading-tight tracking-tight mb-3">
                Ready to Scale Your
                <span className="block text-[#4A7C59]">Booking Business?</span>
              </h2>

              <p className="text-sm text-[#7A7A77] leading-relaxed max-w-sm">
                Tell us your goals. We'll map out a custom solution and send a free proposal within 48 hours.
              </p>
            </div>

            {/* Divider desktop only */}
            <div aria-hidden="true" className="hidden lg:block w-px self-stretch bg-white/[0.08]" />

            {/* Right CTA block */}
            <div className="flex flex-col gap-5 lg:w-64 shrink-0">

              {/* Trust signals */}
              <ul className="flex flex-col gap-2">
                {[
                  "50+ Platforms Shipped",
                  "12+ Countries Served",
                  "100% On-Time Delivery",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#8DB89A] font-medium">
                    <svg className="w-3.5 h-3.5 text-[#4A7C59] shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5">
                <a
                  href="#contact"
                  className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-[#111110] bg-white hover:bg-[#EAF2EC] transition-colors"
                >
                  Schedule a Discovery Call
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white border border-white/20 hover:bg-white/[0.07] transition-colors"
                >
                  See Case Studies
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
