'use client';

import { Footer } from '@/components/Footer';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { CTAButton } from '@/components/ui/cta-button';
import { DenverCurlingHubspotForm } from '@/components/forms/DenverCurlingHubspotForm';

export default function DenverITLeadersCurlingEvent() {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">

      {/* Hero Section - Dark with Robot */}
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
                Clear the Path to Innovation with <span className="text-[#4B0BE8]">Curling and Agentic AI</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Success in both curling and the enterprise depends on momentum and a clear path. Join us for a private curling lesson on the ice followed by a networking discussion to see how Agentic AI is redefining business communications.
              </p>

              {/* Event Details Grid */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <Calendar className="w-6 h-6 text-[#4B0BE8] mx-auto mb-2" />
                  <p className="text-gray-400 text-xs mb-1">Date</p>
                  <p className="text-white text-sm font-semibold">Tuesday, February 24, 2026</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <Clock className="w-6 h-6 text-[#4B0BE8] mx-auto mb-2" />
                  <p className="text-gray-400 text-xs mb-1">Time</p>
                  <p className="text-white text-sm font-semibold">2:15 PM - 5:30 PM</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <MapPin className="w-6 h-6 text-[#4B0BE8] mx-auto mb-2" />
                  <p className="text-gray-400 text-xs mb-1">Venue</p>
                  <p className="text-white text-sm font-semibold">Rock Creek Curling</p>
                </div>
              </div>

              <CTAButton onClick={scrollToRegistration} size="lg">
                SECURE YOUR SPOT
              </CTAButton>
            </div>

            {/* Right Side - Robot Image */}
            <div className="relative">
              <div className="w-full aspect-square rounded-xl overflow-hidden">
                <img
                  src="/curlingrobot.png"
                  alt="FutureScale Sessions Curling Event"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RingCentral Logo Section - White */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 inline-block">
              <img
                src="https://45377644.fs1.hubspotusercontent-na1.net/hubfs/45377644/Sponsors/RingCentral/ringcentrallogo.png"
                alt="RingCentral"
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About This Event - White */}
      <section className="py-24 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 uppercase">
              About This <span className="text-[#4B0BE8]">Event</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              We have moved beyond simple cloud phones into the era where AI doesn't just talk—it acts to drive outcomes. Discover how autonomous voice AI automates routine workflows, captures every opportunity 24/7, and surfaces real-time strategic insights from every conversation.
            </p>
            <p>
              Whether you are an IT leader demanding 99.999% reliability or a CX professional focused on stronger customer relationships, this experience shows you how to clear the path for growth and innovation across your organization.
            </p>
            <p className="font-semibold">
              On the ice: Master the slide and sweep in a private curling lesson.
            </p>
            <p className="font-semibold">
              In the house: Connect with peers over drinks to explore AI that accelerates decisions and automates results.
            </p>
            <p>
              Clear the technical friction and give your organization the winning edge.
            </p>
          </div>
        </div>
      </section>

      {/* Evening Agenda - White (continues) */}
      <section className="py-24 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 uppercase">
              Evening <span className="text-[#4B0BE8]">Agenda</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { time: '2:15 PM', title: 'Guest Arrival & Check-In', description: 'Welcome and registration' },
              { time: '2:30 PM', title: 'On-Ice Curling', description: '90 minutes of interactive curling experience' },
              { time: '4:00 PM', title: 'Happy Hour', description: 'Networking and refreshments upstairs' },
              { time: '5:30 PM', title: 'Conclusion', description: 'Final networking and departure' },
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
              Join us for an exclusive evening of networking, knowledge-sharing, and thought leadership tailored for senior IT professionals and AI innovators. This invitation-only event provides a unique opportunity to connect with peers, hear from industry leaders, and explore how leading organizations are accelerating their AI inference strategies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Seats are limited to ensure high-quality discussions and meaningful interactions—register now to confirm your participation.
            </p>
          </div>

          {/* HubSpot Form */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-12">
            <DenverCurlingHubspotForm />
          </div>
        </div>
      </section>

      {/* What Are FutureScale Sessions - Dark */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">
              What Are <span className="text-[#4B0BE8]">FutureScale Sessions</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-12">
            <p>
              FutureScale Sessions are more than just your average gathering of IT leaders. They are full experiences aimed at giving everyone a platform to meet their peers locally and have real discussions about the current state of IT.
            </p>
            <p>
              These carefully curated events create space for authentic dialogue, away from the noise of traditional conferences and webinars. At a FutureScale Session, you're not just another attendee—you're part of a select group of peers who share your challenges, aspirations, and commitment to innovation.
            </p>
            <p>
              We believe the best insights come from real conversations, not rehearsed presentations. That's why FutureScale Sessions prioritize peer-to-peer exchange, intimate group dynamics, and the kind of frank discussions that only happen when you bring the right people together in the right environment.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase">
              What Makes FutureScale Sessions Different
            </h3>
            <div className="space-y-4">
              {[
                'Intimate, invitation-only format ensures quality interactions',
                'Peer-focused discussions, not vendor pitches',
                'Local connections with leaders in your region',
                'Real-world insights from those in the trenches',
                'Premium venues that elevate the experience',
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
              Rock Creek Curling in Lafayette, CO offers a unique and memorable setting for networking and team building. Experience the sport of curling in a fun, relaxed atmosphere designed for meaningful connections.
            </p>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
            <img
              src="/curling.png"
              alt="Rock Creek Curling Venue"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Our Partner - White */}
      <section className="py-24 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 uppercase">
              About Our Partner
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
