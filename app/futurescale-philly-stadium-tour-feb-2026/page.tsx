'use client';

import { Footer } from '@/components/Footer';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { CTAButton } from '@/components/ui/cta-button';
import { ITxNewsletterInlineForm } from '@/components/forms/ITxNewsletterInlineForm';

export default function FutureScalePhillyStadiumTour() {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">

      {/* Hero Section - Dark */}
      <section className="min-h-screen bg-black relative overflow-hidden pt-20">
        {/* ITx Grid Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(75, 11, 232, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(75, 11, 232, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />

        <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase leading-tight">
                Inside Lincoln Financial Field: <span className="text-[#4B0BE8]">A Private Stadium Tour and AI Executive Experience</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                An invite-only evening for senior IT leaders featuring behind-the-scenes access, high-impact networking, and a discussion on the future of AI-powered business communications.
              </p>

              {/* Event Details Grid */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <Calendar className="w-6 h-6 text-[#4B0BE8] mx-auto mb-2" />
                  <p className="text-gray-400 text-xs mb-1">Date</p>
                  <p className="text-white text-sm font-semibold">Wednesday, February 19, 2026</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <Clock className="w-6 h-6 text-[#4B0BE8] mx-auto mb-2" />
                  <p className="text-gray-400 text-xs mb-1">Time</p>
                  <p className="text-white text-sm font-semibold">4:00 PM - 7:00 PM</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <MapPin className="w-6 h-6 text-[#4B0BE8] mx-auto mb-2" />
                  <p className="text-gray-400 text-xs mb-1">Venue</p>
                  <p className="text-white text-sm font-semibold">Lincoln Financial Field</p>
                </div>
              </div>

              <CTAButton onClick={scrollToRegistration} size="lg">
                SECURE YOUR SPOT
              </CTAButton>
            </div>

            {/* Right Side - Stadium Image */}
            <div className="relative">
              <div className="w-full aspect-square rounded-xl overflow-hidden">
                <img
                  src="/robotfoamfinger.png"
                  alt="ITx Robot with foam finger"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About This Event - White */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 uppercase">
              About This <span className="text-[#4B0BE8]">Event</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Join us for an exclusive evening at Lincoln Financial Field, featuring a private behind-the-scenes stadium tour, executive networking, and a hosted conversation.
            </p>
            <p>
              Together with RingCentral, you'll explore how next-generation communication platforms are transforming customer experiences—specifically how integrated Unified Communications (UC) and Contact Center (CC) solutions help organizations deliver seamless, consistent customer journeys across every touchpoint.
            </p>
            <p>
              In today's fast-evolving landscape, customers expect effortless, responsive interactions. This experience is designed to spark meaningful discussion around how an integrated UC + CC strategy can simplify collaboration, strengthen service operations, and help your teams exceed customer expectations—while driving productivity and measurable business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Evening Agenda - White */}
      <section className="py-24 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 uppercase">
              Evening <span className="text-[#4B0BE8]">Agenda</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { time: '4:00 PM', title: 'Guest Arrival & Check-In', description: 'Welcome and registration at Lincoln Financial Field' },
              { time: '4:00 PM - 5:30 PM', title: 'Stadium Tour', description: 'Exclusive behind-the-scenes tour of this iconic venue' },
              { time: '5:30 PM - 7:00 PM', title: 'Networking Reception', description: 'Snacks and beverages in the Janney Tunnel Club' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <p className="text-2xl font-bold text-[#4B0BE8]">{item.time}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section - White */}
      <section id="registration" className="py-24 px-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 uppercase">
              <span className="text-[#4B0BE8]">Registration</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Join us for an exclusive FutureScale experience that combines professional networking with rare access to one of Philadelphia's premier sports venues. This invitation-only event provides a unique opportunity to connect with senior IT leaders in an extraordinary setting.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Seats are limited to ensure high-quality discussions and meaningful interactions—register now to confirm your participation.
            </p>
          </div>

          {/* Registration Form */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-12">
            <ITxNewsletterInlineForm />
          </div>
        </div>
      </section>

      {/* What is FutureScale - Dark */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">
              What is <span className="text-[#4B0BE8]">FutureScale</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-12">
            <p>
              FutureScale represents the evolution of professional networking—transforming traditional meet-and-greets into extraordinary experiences that inspire, connect, and energize technology leaders.
            </p>
            <p>
              These carefully curated events take place in venues that most people never get to see behind the scenes. From championship stadiums to exclusive cultural venues, FutureScale creates the perfect backdrop for authentic connections and memorable conversations.
            </p>
            <p>
              More than just networking, FutureScale events are designed to remind busy IT leaders why they love what they do—by bringing together the right people in remarkable settings that spark creativity, collaboration, and lasting professional relationships.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase">
              What Makes FutureScale Different
            </h3>
            <div className="space-y-4">
              {[
                'Intimate, invitation-only format for quality interactions',
                'Extraordinary venues with exclusive behind-the-scenes access',
                'Senior-level IT leaders from your region',
                'Focus on connections and experiences, not presentations',
                'Memorable settings that inspire creativity and collaboration',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#4B0BE8] rounded-full mt-2"></div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Venue - White */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 uppercase">
              The <span className="text-[#4B0BE8]">Venue</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Lincoln Financial Field is home to the Philadelphia Eagles and one of the premier sports venues in the United States. This behind-the-scenes tour offers rare access to areas typically reserved for players, coaches, and VIPs, followed by networking in the exclusive Janney Tunnel Club.
            </p>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
            <img
              src="/lincolnfinancialfield.jpeg"
              alt="Lincoln Financial Field"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Our Sponsor - White */}
      <section className="py-24 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 uppercase">
              About Our Sponsor
            </h2>
          </div>

          {/* RingCentral Logo */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 inline-block">
              <img
                src="https://45377644.fs1.hubspotusercontent-na1.net/hubfs/45377644/Sponsors/RingCentral/ringcentrallogo.png"
                alt="RingCentral"
                className="h-16 w-auto"
              />
            </div>
          </div>

          <div className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            <p>
              RingCentral is a global leader in AI-powered trusted business communications, contact center, revenue intelligence, video and hybrid event solutions. RingCentral empowers businesses with conversation intelligence and unlocks rich customer and employee interactions to provide insights and improved business outcomes. With decades of expertise in reliable and secure cloud communications, RingCentral has earned the trust of hundreds of thousands of customers and millions of users worldwide.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
