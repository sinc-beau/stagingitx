'use client';

import React, { useState } from 'react';
import { Shield, Bell, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { ITxNewsletterHubspotForm } from '@/components/forms/ITxNewsletterHubspotForm';

export default function GetNotifiedSection() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <section className="py-32 px-6 bg-black relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at center top, rgba(75, 11, 232, 0.05) 0%, transparent 50%),
              radial-gradient(ellipse at center bottom, rgba(75, 11, 232, 0.03) 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 hover:border-white/20 transition-all duration-300">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Bell className="w-8 h-8" style={{ color: '#4B0BE8' }} />
            <h3 className="text-3xl font-bold text-white">
              Get Notified About ITx Command Briefings
            </h3>
          </div>

          {/* Subtitle */}
          <p className="text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto text-lg">
            Stay informed about upcoming CIO and CTO digital and in-person events in your area.
            Be the first to know when new technical strategy sessions, executive IT dinners,
            and digital transformation councils are scheduled.
          </p>

          {/* Event Types Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <Calendar className="w-5 h-5 mx-auto mb-2" style={{ color: '#4B0BE8' }} />
              <div className="text-sm font-semibold text-white">In-Person Events</div>
              <div className="text-xs text-white/50">Executive dinners & workshops</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <Shield className="w-5 h-5 mx-auto mb-2" style={{ color: '#4B0BE8' }} />
              <div className="text-sm font-semibold text-white">Digital Briefings</div>
              <div className="text-xs text-white/50">Virtual CIO/CTO sessions</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <MapPin className="w-5 h-5 mx-auto mb-2" style={{ color: '#4B0BE8' }} />
              <div className="text-sm font-semibold text-white">Regional Events</div>
              <div className="text-xs text-white/50">Local IT leadership gatherings</div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setIsNewsletterOpen(true)}
            className="group px-8 py-4 text-white font-bold text-sm rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl tracking-wider uppercase inline-flex items-center gap-3"
            style={{
              background: '#4B0BE8',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#3A0BB8';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#4B0BE8';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.5)';
            }}
          >
            Request Command Briefing Notifications
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <ITxNewsletterHubspotForm
            isOpen={isNewsletterOpen}
            onClose={() => setIsNewsletterOpen(false)}
          />

          {/* Footer Text */}
          <p className="text-xs text-white/40 mt-6 uppercase tracking-wider">
            Exclusive Access • IT Leadership Only
          </p>

          {/* ITx Collective Branding */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center justify-center gap-3">
              <span className="font-bold text-white">
                IT<span style={{ color: '#4B0BE8' }}>x</span> COLLECTIVE
              </span>
              <span className="text-white/40">-</span>
              <span className="text-xs text-white/40 uppercase tracking-wider">Powered by</span>
              <img
                src="https://sincusa.com/wp-content/uploads/2025/04/Component-1.svg"
                alt="SINC"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}