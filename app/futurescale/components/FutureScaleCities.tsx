'use client';

import React from 'react';
import { MapPin, Bell, Globe } from 'lucide-react';
import { ITxNewsletterInlineForm } from '@/components/forms/ITxNewsletterInlineForm';

export default function FutureScaleCities() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#4B0BE8] text-xs font-bold tracking-wider mb-6">
            <MapPin className="w-3 h-3" />
            UPCOMING SESSIONS
            <MapPin className="w-3 h-3" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            CITIES <span className="text-[#4B0BE8]">COMING ONLINE SOON</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for intimate, high-impact gatherings of technology leaders
          </p>
        </div>

        {/* More Cities Coming */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-8 py-4">
            <Globe className="w-5 h-5 text-[#4B0BE8]" />
            <div className="text-left">
              <p className="text-white font-bold">More Cities Coming Online</p>
              <p className="text-gray-400 text-sm">Additional locations to be announced</p>
            </div>
          </div>
        </div>

        {/* Registration Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 border-2 border-white/10 rounded-lg overflow-hidden">
            <div className="bg-[#4B0BE8] p-4 border-b border-[#4B0BE8]">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-white animate-pulse" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                  Get Notified
                </h3>
              </div>
            </div>

            <div className="p-8 bg-white">
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-2">
                  Be the first to know about FutureScale Sessions
                </p>
                <p className="text-[#4B0BE8] text-2xl font-bold">
                  STAY INFORMED
                </p>
              </div>

              <ITxNewsletterInlineForm />

              <div className="text-center mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  Exclusive Access • Limited Seats • Invitation Priority
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}