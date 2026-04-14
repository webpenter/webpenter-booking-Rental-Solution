import Link from "next/link";
import AnimatedButton from "@/components/ui/AnimatedButton";

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-[#4A7C59] shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    className="w-4 h-4 text-[#1C3320]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

function MobileAppMockups() {
  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto lg:mr-0 z-10 flex items-center justify-center">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--g5)_0%,_transparent_70%)] opacity-40 blur-3xl pointer-events-none" />

      {/* Background Phone (Dashboard) */}
      <div className="absolute right-[5%] top-[10%] w-[240px] h-[500px] bg-white rounded-[36px] shadow-xl border-4 border-[#ECEAE4] overflow-hidden rotate-6 opacity-70 transition-transform duration-500 hover:rotate-3 hover:-translate-y-2">
        <div className="absolute top-0 inset-x-0 h-6 bg-white z-20 flex justify-center rounded-t-[32px]">
          <div className="w-16 h-4 bg-[#F4F3EF] rounded-b-xl mt-[-2px]"></div>
        </div>
        <div className="p-4 pt-8 bg-[#F4F3EF] h-full">
          <div className="w-full h-24 bg-[#1C3320] rounded-2xl mb-4 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(to_top,rgba(255,255,255,0.1),transparent)]"></div>
            <div className="p-3">
              <div className="w-1/2 h-3 bg-white/20 rounded-full mb-2"></div>
              <div className="w-3/4 h-5 bg-white/40 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-full h-16 bg-white rounded-xl shadow-sm flex items-center p-3 gap-3">
                <div className="w-10 h-10 bg-[#EAF2EC] rounded-lg"></div>
                <div className="flex-1">
                  <div className="w-full h-3 bg-[#F4F3EF] rounded-full mb-2"></div>
                  <div className="w-2/3 h-2 bg-[#F4F3EF] rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Foreground Phone (Main App) */}
      <div className="absolute left-[5%] bottom-[5%] w-[260px] h-[540px] bg-white rounded-[36px] shadow-2xl border-4 border-[#1C3320] overflow-hidden -rotate-2 transition-transform duration-500 hover:-rotate-1 hover:-translate-y-4 z-20">
        <div className="absolute top-0 inset-x-0 h-7 bg-white z-20 flex justify-center rounded-t-[32px]">
          <div className="w-20 h-5 bg-[#1C3320] rounded-b-2xl mt-[-2px]"></div>
        </div>
        <div className="h-full bg-white flex flex-col pt-8">
          <div className="px-5 pb-4">
            <div className="text-xl font-bold text-[#111110] mb-1">BookHere</div>
            <div className="text-xs text-[#7A7A77]">Find your perfect rental</div>
          </div>

          <div className="px-5 mb-5">
            <div className="w-full h-12 bg-[#F4F3EF] rounded-full flex items-center px-4 gap-2">
              <svg className="w-4 h-4 text-[#7A7A77]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <div className="w-1/2 h-3 bg-[#ECEAE4] rounded-full"></div>
            </div>
          </div>

          <div className="flex px-5 gap-3 overflow-hidden mb-5">
            {['Cars', 'Hotels', 'Bikes'].map(cat => (
              <div key={cat} className="flex-shrink-0 px-4 py-2 bg-[#EAF2EC] rounded-full text-[10px] font-bold text-[#1C3320]">
                {cat}
              </div>
            ))}
          </div>

          <div className="flex-1 bg-[#F4F3EF] rounded-t-[24px] p-5">
            <div className="font-bold text-[#111110] text-sm mb-4">Featured Listings</div>
            <div className="w-full h-40 bg-white rounded-2xl shadow-sm overflow-hidden mb-4 relative">
              <div className="w-full h-2/3 bg-[#C8DDD0]"></div>
              <div className="p-3">
                <div className="w-3/4 h-3 bg-[#F4F3EF] rounded-full mb-2"></div>
                <div className="w-1/3 h-2 bg-[#F4F3EF] rounded-full"></div>
              </div>
              <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-[8px] font-bold text-[#111110] border border-[#ECEAE4]">
                ★ 4.9
              </div>
            </div>
            <div className="w-full h-40 bg-white rounded-2xl shadow-sm overflow-hidden relative">
              <div className="w-full h-2/3 bg-[#8DB89A]"></div>
              <div className="p-3">
                <div className="w-2/3 h-3 bg-[#F4F3EF] rounded-full mb-2"></div>
                <div className="w-1/4 h-2 bg-[#F4F3EF] rounded-full"></div>
              </div>
              <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-[8px] font-bold text-[#111110] border border-[#ECEAE4]">
                ★ 4.7
              </div>
            </div>
          </div>

          {/* Nav Bar Mobile */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-white border-t border-[#ECEAE4] flex items-center justify-around px-2 z-30">
            <div className="w-6 h-6 rounded-full bg-[#1C3320]"></div>
            <div className="w-6 h-6 rounded-full bg-[#EAF2EC]"></div>
            <div className="w-6 h-6 rounded-full bg-[#EAF2EC]"></div>
            <div className="w-6 h-6 rounded-full bg-[#EAF2EC]"></div>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute top-1/4 -right-4 lg:-right-8 bg-white border border-[#ECEAE4] shadow-xl rounded-2xl p-3 z-30 animate-float flex items-center gap-3">
        <div className="w-10 h-10 bg-[#EAF2EC] rounded-full flex items-center justify-center text-[#1C3320]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <div>
          <div className="text-xs font-bold text-[#111110]">Booking Confirmed</div>
          <div className="text-[10px] text-[#7A7A77]">Just now</div>
        </div>
      </div>
    </div>
  );
}

const features = [
  "Real-time booking management",
  "Customer and order tracking",
  "Secure payment integration",
  "Admin dashboard for full control",
  "Multi-platform support (Android & iOS)",
  "Scalable for different business types",
];

const trustSignals = [
  "Production-ready solution",
  "Used for real booking businesses",
  "Built with scalable architecture",
];

export default function BookHereFeature() {
  return (
    <section id="bookhere" className="bg-white py-24 lg:py-32 overflow-hidden border-t border-[#ECEAE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <div className="flex flex-col">

            {/* Tagline */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1C3320] bg-[#EAF2EC] border border-[#C8DDD0] rounded-full">
                🔥 Flagship Product
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111110] leading-tight mb-6">
              BookHere Complete Booking & Rental Platform <span className="text-[#4A7C59]">Ready to Launch</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-[#7A7A77] leading-relaxed mb-8">
              BookHere is a fully developed mobile-first booking and rental solution designed to help businesses manage bookings, customers, and payments from a single system. Built with modern technology, it works seamlessly across web and mobile platforms.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10 pb-8 border-b border-[#ECEAE4]">
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center gap-2">
                  <ShieldIcon />
                  <span className="text-sm font-semibold text-[#3A3A38]">{signal}</span>
                </div>
              ))}
            </div>

            {/* Features Outline */}
            <div className="mb-10">
              <h3 className="text-sm font-bold text-[#111110] uppercase tracking-widest mb-5">Key Features</h3>
              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-base text-[#3A3A38] font-medium leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <AnimatedButton
                href="https://bookhere.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex py-3.5 px-8 rounded-full text-base font-bold text-white bg-[#1C3320] hover:bg-[#2B5038] transition-all shadow-md hover:shadow-lg"
              >
                View Live Demo
              </AnimatedButton>
              <AnimatedButton
                href="#contact"
                fillClass="bg-[#F4F3EF]"
                className="inline-flex py-3.5 px-8 rounded-full text-base font-bold text-[#1C3320] bg-white border-2 border-[#1C3320] transition-all"
              >
                Get BookHere for Your Business
              </AnimatedButton>
            </div>

            {/* External Link */}
            <p className="text-sm text-[#7A7A77]">
              Live product available at: <a href="https://bookhere.tech" target="_blank" rel="noopener noreferrer" className="text-[#4A7C59] font-bold hover:underline">bookhere.tech</a>
            </p>

          </div>

          {/* Right Content - Visual Mockup */}
          <div className="relative mt-8 lg:mt-0">
            <MobileAppMockups />
          </div>

        </div>
      </div>
    </section>
  );
}
