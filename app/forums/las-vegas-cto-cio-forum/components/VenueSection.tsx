import React from 'react';
import { CheckCircle2, MapPin } from 'lucide-react';

export default function VenueSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-[#4B0BE8] tracking-wider mb-4">VENUE & LOCATION</div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-4">
            M Resort Spa Casino
          </h2>
          <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#4B0BE8] to-purple-400 font-bold">
            Las Vegas, Nevada
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4B0BE8]/20 to-purple-500/20 rounded-2xl blur-3xl" />
            <div className="relative h-[500px] rounded-2xl border border-slate-700 overflow-hidden bg-slate-800">
              <img
                src="/mresort.png"
                alt="M Resort Spa Casino"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              Experience luxury and convenience at M Resort Spa Casino, one of Las Vegas's premier destinations.
              The perfect setting for focused collaboration and networking with stunning views of the Las Vegas Valley.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4B0BE8] flex-shrink-0 mt-1" />
                <div className="text-slate-300">
                  <strong className="text-white">Prime Location:</strong> Minutes from Harry Reid International Airport
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4B0BE8] flex-shrink-0 mt-1" />
                <div className="text-slate-300">
                  <strong className="text-white">Modern Facilities:</strong> State-of-the-art meeting spaces and technology
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4B0BE8] flex-shrink-0 mt-1" />
                <div className="text-slate-300">
                  <strong className="text-white">All-Inclusive:</strong> Accommodations, meals, and activities included
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4B0BE8] flex-shrink-0 mt-1" />
                <div className="text-slate-300">
                  <strong className="text-white">Resort Amenities:</strong> Award-winning spa, dining, and entertainment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
