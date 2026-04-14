import Link from "next/link";

const footerLinks = {
  Services: [
    "BookHere Mobile App",
    "Custom Booking Platforms",
    "Fast-Launch Websites",
    "Web + Mobile Integration",
  ],
  Company: ["About Us", "Portfolio", "Blog", "Careers"],
  Support: ["Contact Us", "Documentation", "Help Center", "Community"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"],
};

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Twitter",
    href: "#",
    path: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
  },
  {
    label: "GitHub",
    href: "#",
    path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111110] text-[#7A7A77]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <span className="w-9 h-9 rounded-xl bg-[#2B5038] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M9 2L16 7.5V16H2V7.5L9 2Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round"/>
                  <rect x="6" y="10" width="2.2" height="3.5" rx="0.5" fill="#fff"/>
                  <rect x="9.8" y="10" width="2.2" height="3.5" rx="0.5" fill="#fff"/>
                  <circle cx="9" cy="6.5" r="1.2" fill="#C8DDD0"/>
                </svg>
              </span>
              <span className="text-[1.05rem] font-bold text-white">
                Webpenter<span className="text-[#4A7C59]"> Solution</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[#7A7A77] max-w-xs mb-5">
              Helping rental businesses grow revenue and scale operations since 2020. 50+ platforms shipped across 12+ countries.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, path }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-[#1C1C1A] flex items-center justify-center text-[#7A7A77]
                             hover:text-white hover:bg-[#2B5038] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={path}/>
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-[#B8B7B3] uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-[#7A7A77] hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#7A7A77]">
            &copy; {new Date().getFullYear()} Webpenter Solution. All rights reserved.
          </p>
          <p className="text-xs text-[#7A7A77]">
            Crafted with ❤️ for the booking &amp; rental industry.
          </p>
        </div>
      </div>
    </footer>
  );
}
