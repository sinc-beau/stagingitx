'use client';

import React, { useEffect, useRef } from 'react';
import { Footer } from '@/components/Footer';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { CTAButton } from '@/components/ui/cta-button';

export default function FutureScalePhillyStadiumTour() {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formContainerRef.current) {
      const initForm = () => {
        if (window.hbspt && formContainerRef.current) {
          window.hbspt.forms.create({
            portalId: '45377644',
            formId: '6ffa6099-1fec-4179-b683-36a6eeb5c5c0',
            region: 'na1',
            target: '#hubspot-form-philly-registration',
          });
        }
      };

      if (window.hbspt) {
        initForm();
      } else {
        const checkHubSpot = setInterval(() => {
          if (window.hbspt) {
            clearInterval(checkHubSpot);
            initForm();
          }
        }, 100);

        return () => clearInterval(checkHubSpot);
      }
    }
  }, []);

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
                <span className="text-[#4B0BE8]">Philadelphia IT Leaders Lincoln Financial Field Tour</span>
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
            <style jsx global>{`
            #hubspot-form-philly-registration {
              max-width: 100% !important;
            }

            #hubspot-form-philly-registration .hs-form {
              font-family: inherit !important;
            }

            #hubspot-form-philly-registration h2,
            #hubspot-form-philly-registration h3,
            #hubspot-form-philly-registration h4 {
              color: #0f172a !important;
              font-weight: 700 !important;
              font-size: 20px !important;
              margin-top: 32px !important;
              margin-bottom: 6px !important;
              padding-top: 24px !important;
              border-top: 2px solid #e2e8f0 !important;
            }

            #hubspot-form-philly-registration h2:first-child,
            #hubspot-form-philly-registration h3:first-child,
            #hubspot-form-philly-registration h4:first-child {
              margin-top: 0 !important;
              padding-top: 0 !important;
              border-top: none !important;
            }

            #hubspot-form-philly-registration p,
            #hubspot-form-philly-registration .hs-richtext {
              color: #64748b !important;
              font-size: 14px !important;
              line-height: 1.6 !important;
              margin-bottom: 24px !important;
              font-style: italic !important;
            }

            #hubspot-form-philly-registration .hs-richtext a {
              color: #4B0BE8 !important;
              text-decoration: underline !important;
              font-style: normal !important;
            }

            #hubspot-form-philly-registration .hs-form-field {
              margin-bottom: 24px !important;
            }

            #hubspot-form-philly-registration .hs-form-field label {
              color: #1e293b !important;
              font-weight: 600 !important;
              font-size: 15px !important;
              margin-bottom: 8px !important;
              display: block !important;
              line-height: 1.5 !important;
            }

            #hubspot-form-philly-registration .hs-form-field label span.hs-form-required {
              color: #4B0BE8 !important;
              margin-left: 2px !important;
            }

            #hubspot-form-philly-registration .hs-input {
              width: 100% !important;
              padding: 12px 16px !important;
              font-size: 15px !important;
              border: 2px solid #e2e8f0 !important;
              border-radius: 8px !important;
              background: white !important;
              color: #1e293b !important;
              transition: all 200ms ease !important;
              font-family: inherit !important;
              box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05) !important;
            }

            #hubspot-form-philly-registration .hs-input:hover {
              border-color: #cbd5e1 !important;
            }

            #hubspot-form-philly-registration .hs-input:focus {
              outline: none !important;
              border-color: #4B0BE8 !important;
              background: white !important;
              box-shadow: 0 0 0 4px rgba(75, 11, 232, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05) !important;
            }

            #hubspot-form-philly-registration select.hs-input {
              appearance: none !important;
              background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234B0BE8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") !important;
              background-repeat: no-repeat !important;
              background-position: right 16px center !important;
              background-size: 18px !important;
              padding-right: 48px !important;
              cursor: pointer !important;
            }

            #hubspot-form-philly-registration textarea.hs-input {
              min-height: 120px !important;
              resize: vertical !important;
              line-height: 1.6 !important;
            }

            #hubspot-form-philly-registration .hs-fieldtype-checkbox,
            #hubspot-form-philly-registration .hs-fieldtype-radio {
              margin-bottom: 12px !important;
            }

            #hubspot-form-philly-registration .hs-fieldtype-checkbox label,
            #hubspot-form-philly-registration .hs-fieldtype-radio label {
              display: flex !important;
              align-items: flex-start !important;
              cursor: pointer !important;
              font-weight: 400 !important;
              padding: 12px !important;
              border-radius: 8px !important;
              transition: all 150ms ease !important;
              border: 2px solid transparent !important;
            }

            #hubspot-form-philly-registration .hs-fieldtype-checkbox label:hover,
            #hubspot-form-philly-registration .hs-fieldtype-radio label:hover {
              background-color: #f8fafc !important;
              border-color: #e2e8f0 !important;
            }

            #hubspot-form-philly-registration .hs-fieldtype-checkbox input[type="checkbox"],
            #hubspot-form-philly-registration .hs-fieldtype-radio input[type="radio"],
            #hubspot-form-philly-registration .hs-form-booleancheckbox input[type="checkbox"] {
              appearance: none !important;
              -webkit-appearance: none !important;
              -moz-appearance: none !important;
              width: 24px !important;
              height: 24px !important;
              border: 2px solid #cbd5e1 !important;
              border-radius: 6px !important;
              margin-right: 12px !important;
              margin-top: 2px !important;
              cursor: pointer !important;
              flex-shrink: 0 !important;
              background-color: white !important;
              transition: all 200ms ease !important;
              position: relative !important;
              box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05) !important;
            }

            #hubspot-form-philly-registration .hs-fieldtype-radio input[type="radio"] {
              border-radius: 50% !important;
            }

            #hubspot-form-philly-registration .hs-fieldtype-checkbox input[type="checkbox"]:hover,
            #hubspot-form-philly-registration .hs-fieldtype-radio input[type="radio"]:hover,
            #hubspot-form-philly-registration .hs-form-booleancheckbox input[type="checkbox"]:hover {
              border-color: #4B0BE8 !important;
              box-shadow: 0 0 0 3px rgba(75, 11, 232, 0.1) !important;
            }

            #hubspot-form-philly-registration .hs-fieldtype-checkbox input[type="checkbox"]:checked,
            #hubspot-form-philly-registration .hs-form-booleancheckbox input[type="checkbox"]:checked {
              background-color: #4B0BE8 !important;
              border-color: #4B0BE8 !important;
              box-shadow: 0 0 0 3px rgba(75, 11, 232, 0.1) !important;
            }

            #hubspot-form-philly-registration .hs-fieldtype-radio input[type="radio"]:checked {
              border-color: #4B0BE8 !important;
              border-width: 7px !important;
            }

            #hubspot-form-philly-registration .hs-fieldtype-checkbox input[type="checkbox"]:checked::after,
            #hubspot-form-philly-registration .hs-form-booleancheckbox input[type="checkbox"]:checked::after {
              content: "" !important;
              position: absolute !important;
              left: 7px !important;
              top: 3px !important;
              width: 6px !important;
              height: 11px !important;
              border: solid white !important;
              border-width: 0 2.5px 2.5px 0 !important;
              transform: rotate(45deg) !important;
            }

            #hubspot-form-philly-registration .hs-fieldtype-checkbox label span,
            #hubspot-form-philly-registration .hs-fieldtype-radio label span {
              flex: 1 !important;
              line-height: 1.5 !important;
            }

            #hubspot-form-philly-registration .hs-error-msgs {
              margin-top: 8px !important;
              margin-bottom: 0 !important;
              list-style: none !important;
              padding: 0 !important;
            }

            #hubspot-form-philly-registration .hs-error-msg {
              color: #dc2626 !important;
              font-size: 14px !important;
              font-weight: 500 !important;
              display: flex !important;
              align-items: center !important;
              gap: 6px !important;
            }

            #hubspot-form-philly-registration .hs-error-msg:before {
              content: "⚠" !important;
            }

            #hubspot-form-philly-registration .hs-submit {
              margin-top: 32px !important;
              padding-top: 24px !important;
              border-top: 2px solid #e2e8f0 !important;
            }

            #hubspot-form-philly-registration .hs-button {
              width: 100% !important;
              padding: 16px 32px !important;
              font-size: 15px !important;
              font-weight: 700 !important;
              text-transform: uppercase !important;
              letter-spacing: 0.05em !important;
              color: white !important;
              background: linear-gradient(135deg, #4B0BE8 0%, #6D28D9 100%) !important;
              border: none !important;
              border-radius: 8px !important;
              cursor: pointer !important;
              transition: all 300ms ease !important;
              font-family: inherit !important;
              box-shadow: 0 4px 6px rgba(75, 11, 232, 0.2) !important;
            }

            #hubspot-form-philly-registration .hs-button:hover {
              background: linear-gradient(135deg, #3A0BB8 0%, #5B21B6 100%) !important;
              transform: translateY(-2px) !important;
              box-shadow: 0 8px 16px rgba(75, 11, 232, 0.3) !important;
            }

            #hubspot-form-philly-registration .hs-button:active {
              transform: translateY(0) !important;
              box-shadow: 0 2px 4px rgba(75, 11, 232, 0.2) !important;
            }

            #hubspot-form-philly-registration .submitted-message {
              padding: 24px !important;
              background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;
              color: white !important;
              border-radius: 8px !important;
              font-weight: 600 !important;
              text-align: center !important;
              font-size: 16px !important;
              box-shadow: 0 4px 6px rgba(16, 185, 129, 0.2) !important;
            }

            #hubspot-form-philly-registration .hs-form-booleancheckbox-display {
              display: flex !important;
              align-items: flex-start !important;
            }

            #hubspot-form-philly-registration .hs-form-booleancheckbox-display input {
              margin-top: 4px !important;
            }
            `}</style>
            <div id="hubspot-form-philly-registration" ref={formContainerRef} />
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
