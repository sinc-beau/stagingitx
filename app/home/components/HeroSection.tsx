'use client';

import { CTAButton } from '@/components/ui/cta-button';

interface HeroSectionProps {
  onOpenNewsletter: () => void;
}

export default function HeroSection({ onOpenNewsletter }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://45377644.fs1.hubspotusercontent-na1.net/hubfs/45377644/ITx%20Collective/CIO%20CTO%20Community%20Background.mp4"
            type="video/mp4"
          />
        </video>

        {/* ITx Hero Image Background */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-5"
          style={{
            backgroundImage: 'url(/ITxHero.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 25%'
          }}
        ></div>

        {/* Darker Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              {/* Logo */}
              <div className="mb-8">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold">
                  <span className="text-white uppercase">IT</span>
                  <span className="text-[#4B0BE8]">x</span>
                </h1>
                <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-2 uppercase">
                  COLLECTIVE
                </p>
              </div>

              {/* Description */}
              <div className="mb-12 space-y-4">
                <p className="text-lg text-white leading-relaxed">
                  A peer-to-peer ecosystem of CIOs, CTOs, and IT leaders to share knowledge and build their professional networks.
                </p>
                <div className="flex items-center gap-3">
                  <p className="text-gray-300">
                    Powered by
                  </p>
                  <img
                    src="https://sincusa.com/wp-content/uploads/2025/04/Component-1.svg"
                    alt="Sinc"
                    className="h-6 w-auto"
                  />
                </div>
              </div>

              {/* CTA Button */}
              <CTAButton onClick={onOpenNewsletter} size="lg" className="w-full sm:w-auto">
                JOIN ITx COLLECTIVE
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
  );
}