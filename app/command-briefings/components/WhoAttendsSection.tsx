import React from 'react';
import { CircleCheck as CheckCircle, Users, Shield, Briefcase, Building, Award } from 'lucide-react';

export default function WhoAttendsSection() {
  return (
    <section className="py-32 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-xs font-bold tracking-widest mb-4 uppercase" style={{ color: 'rgba(75, 11, 232, 1)' }}>
            THE COLLECTIVE
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Who Attends
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Senior IT executives and digital transformation leaders from Fortune 500 and enterprise organizations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Description and Verification */}
          <div className="space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              CIOs, CTOs, and senior IT executives leading digital transformation initiatives.
              VPs of Engineering, Infrastructure Directors, and Cloud Architecture leaders from
              enterprises navigating complex technology ecosystems. Carefully selected technology
              partners when aligned with the mission.
            </p>

            {/* Attendee Criteria */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5" style={{ color: '#4B0BE8' }} />
                <span className="text-gray-700">Senior IT executives only</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5" style={{ color: '#4B0BE8' }} />
                <span className="text-gray-700">Enterprise organizations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5" style={{ color: '#4B0BE8' }} />
                <span className="text-gray-700">Active digital transformation leaders</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5" style={{ color: '#4B0BE8' }} />
                <span className="text-gray-700">Limited technology partners, maximum peer value</span>
              </div>
            </div>
          </div>

          {/* Right Column - Code of Conduct Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Code of Conduct</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ background: '#4B0BE8' }}></div>
                <div>
                  <span className="text-gray-900 font-semibold">Maintain IT Security:</span>
                  <span className="text-gray-600 ml-2">Share strategies within NDA bounds</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ background: '#4B0BE8' }}></div>
                <div>
                  <span className="text-gray-900 font-semibold">Protect IP:</span>
                  <span className="text-gray-600 ml-2">Honor proprietary architectures</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ background: '#4B0BE8' }}></div>
                <div>
                  <span className="text-gray-900 font-semibold">Share Knowledge:</span>
                  <span className="text-gray-600 ml-2">Contribute transformation insights</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ background: '#4B0BE8' }}></div>
                <div>
                  <span className="text-gray-900 font-semibold">Build Networks:</span>
                  <span className="text-gray-600 ml-2">Connect with peer IT leaders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}