'use client';

import React from 'react';
import { Eye, Users, Zap, Target, Calendar, Shield, Network, Crosshair } from 'lucide-react';

interface ForumsMainContentProps {
  selectedEvent: string;
}

export default function ForumsMainContent({ selectedEvent }: ForumsMainContentProps) {
  const scrollToEventSelector = () => {
    const eventSelectorSection = document.querySelector('[data-event-selector]');
    if (eventSelectorSection) {
      eventSelectorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  // Experience Types Data
  const experiences = [
    {
      icon: Eye,
      title: 'Executive Briefings',
      description: 'Strategic insights from industry leaders and technology innovators.',
      highlights: ['Digital Transformation', 'AI Strategy', 'Cloud Architecture']
    },
    {
      icon: Users,
      title: 'Leadership Councils',
      description: 'Peer discussions with Fortune 500 technology executives.',
      highlights: ['Best Practices', 'Shared Experiences', 'Strategic Planning']
    },
    {
      icon: Zap,
      title: 'Innovation Labs',
      description: 'Hands-on workshops with emerging technologies.',
      highlights: ['Proof of Concepts', 'Technology Demos', 'Implementation Guides']
    },
    {
      icon: Target,
      title: 'Strategic Sessions',
      description: 'Executive planning for technology investments.',
      highlights: ['Budget Strategy', 'Board Communications', 'ROI Analysis']
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      quote: "Transformative insights that directly impacted our technology strategy.",
      author: "Sarah Chen",
      role: "CTO, Fortune 500",
      rating: 5
    },
    {
      quote: "The peer discussions alone justified the investment. Real solutions from real leaders.",
      author: "Marcus Rodriguez",
      role: "CIO, Global Enterprise",
      rating: 5
    },
    {
      quote: "Finally, a forum that respects our time with zero vendor pitches.",
      author: "Elena Vasquez",
      role: "VP Technology, Tech Giant",
      rating: 5
    }
  ];

  // What to Expect Features
  const features = [
    {
      icon: Calendar,
      title: '48 Hours of Intensive Learning',
      description: 'Packed with insights from technology leaders who deliver real-world experience, not theory.'
    },
    {
      icon: Users,
      title: 'Learn from Industry Pioneers',
      description: 'Connect with CIOs and CTOs who have successfully navigated digital transformation.'
    },
    {
      icon: Target,
      title: 'Community-Driven Agenda',
      description: 'Every topic is chosen based on what our network says matters most.'
    },
    {
      icon: Shield,
      title: 'Merit, Not Marketing',
      description: 'We select the best speakers based on expertise, not sponsorship levels.'
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Forum Experiences Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8 md:mb-12">
            {/* Updated label with better contrast and border */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-4">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">Forum Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Four Ways to <span className="text-[#4B0BE8]">Level Up</span>
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-3xl">
              Each forum combines multiple formats to deliver maximum value and actionable insights.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300">
                <exp.icon className="w-8 h-8 md:w-10 md:h-10 text-[#4B0BE8] mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">{exp.title}</h3>
                <p className="text-sm md:text-base text-white/70 mb-4">{exp.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {exp.highlights.map((highlight, i) => (
                    /* Updated tags with white text and borders for better visibility */
                    <span key={i} className="text-xs bg-white/10 text-white/90 border border-white/20 px-3 py-1 rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-4">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">Trusted by Leaders</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              What Leaders Say
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 hover:border-white/20 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-3 h-3 md:w-4 md:h-4 bg-[#4B0BE8] rounded-full" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="text-sm text-white font-semibold">{testimonial.author}</div>
                  <div className="text-xs text-white/50">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-4">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">The ITx Difference</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              What You Can Expect
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto">
              Two days that will transform your approach to technology leadership
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Features List */}
            <div className="space-y-4 md:space-y-6">
              {features.map((item, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 hover:border-white/20 transition-all">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[#4B0BE8]" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{item.title}</h3>
                      <p className="text-sm md:text-base text-white/70">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Card - Hide sticky on mobile */}
            <div className="lg:sticky lg:top-8 h-fit">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-8 md:p-12">
                <div className="text-center space-y-6 md:space-y-8">
                  <Network className="w-12 h-12 md:w-16 md:h-16 text-[#4B0BE8] mx-auto" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    The ITx Promise
                  </h3>
                  <p className="text-sm md:text-base text-white/70">
                    Real solutions to real challenges from real leaders.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 md:gap-6 py-6 md:py-8 border-y border-white/10">
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-[#4B0BE8] mb-1 md:mb-2">48</div>
                      <div className="text-xs md:text-sm text-white/60">Hours of Content</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-[#4B0BE8] mb-1 md:mb-2">75+</div>
                      <div className="text-xs md:text-sm text-white/60">Tech Leaders</div>
                    </div>
                  </div>
                  
                  <button
                    onClick={scrollToEventSelector}
                    className="w-full px-6 md:px-8 py-3 md:py-4 bg-[#4B0BE8] text-white font-bold text-sm md:text-base rounded-lg hover:bg-[#3A0BB8] transition-all uppercase tracking-wider"
                  >
                    Join the Next Forum
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}