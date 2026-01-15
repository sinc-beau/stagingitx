import React from 'react';
import { Shield, Linkedin, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const partners = [
    { name: 'HPE', logo: '/hpelogo.png' },
    { name: 'Microsoft', logo: '/Microsoftlogo.webp' },
    { name: 'Nutanix', logo: '/Nutanixlogo.png' },
    { name: 'Pure Storage', logo: '/purestoragelogo.png' },
    { name: 'Google', logo: '/google-logo-transparent.png' },
    { name: 'AMD', logo: '/AMD_BIG.D-7dc90896.png' },
    { name: 'NVIDIA', logo: '/nvidialogo.png' },
    { name: 'Intel', logo: '/intellogotrans.png' },
    { name: 'AWS', logo: '/awslogo.png' },
    { name: 'Dell', logo: '/DellLogo.png' },
    { name: 'Cisco', logo: '/Cisco-Logo.png' },
    { name: 'IBM', logo: '/ibmlogo.png' },
  ];

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-4">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">Strategic Partners</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              TRUSTED BY ENTERPRISE LEADERS
            </h3>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6 items-center mb-6">
            <div className="hidden lg:block"></div>
            {partners.map((partner) => (
              <div key={partner.name} className="w-full flex items-center justify-center p-2">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-6 sm:h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-300 filter brightness-0 invert"
                />
              </div>
            ))}
            <div className="hidden lg:block"></div>
          </div>
        </div>

        <div className="text-center space-y-6 sm:space-y-8">
          <div className="flex items-center justify-center">
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-wider">
              IT<span className="text-[#4B0BE8]">x</span> COLLECTIVE
            </h3>
          </div>

          <p className="text-base sm:text-lg text-white/50 font-light max-w-2xl mx-auto">
            A peer-to-peer ecosystem of CIOs, CTOs, and IT leaders
          </p>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/company/itx-collective"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white/60 hover:text-white" />
            </a>
            <a
              href="https://www.instagram.com/that_sinc_life/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded hover:bg-white/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white/60 hover:text-white" />
            </a>
            <a
              href="https://x.com/sincusa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded hover:bg-white/10 transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-5 h-5 text-white/60 hover:text-white" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a
              href="/privacy-policy"
              className="text-white/40 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-white/20">•</span>
            <a
              href="/terms-of-use"
              className="text-white/40 hover:text-white/60 transition-colors"
            >
              Terms of Use
            </a>
            <span className="text-white/20">•</span>
            <a
              href="/contact"
              className="text-white/40 hover:text-white/60 transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-white/10">
            <div className="flex flex-col items-center gap-4">
              <p className="text-xs text-white/40 uppercase tracking-wider">Powered by</p>
              <a
                href="https://sincusa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                <img
                  src="https://sincusa.com/wp-content/uploads/2025/04/Component-1.svg"
                  alt="SINC"
                  className="h-8 sm:h-10 w-auto"
                />
              </a>
            </div>
          </div>

          <div className="text-white/30 text-xs sm:text-sm">
            © 2025 ITx Collective. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
