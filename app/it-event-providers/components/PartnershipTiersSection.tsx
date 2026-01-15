'use client';

import React from 'react';
import { Award, Star, Zap, Network, MessageSquare, CircleCheck as CheckCircle } from 'lucide-react';

interface PartnershipTiersSectionProps {
  onOpenModal: () => void;
}

export default function PartnershipTiersSection({ onOpenModal }: PartnershipTiersSectionProps) {
  return (
    <section className="py-32 px-6 bg-white" id="partnership">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest mb-6 uppercase text-black">
            <Award className="w-3 h-3" />
            PARTNERSHIP TIERS
            <Award className="w-3 h-3" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-black mb-6">
            PARTNERSHIP{' '}
            <span style={{
              background: 'linear-gradient(to right, #4B0BE8, #3A0BB8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              TIERS
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Choose the partnership level that aligns with your enterprise technology objectives
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 border-2 rounded-2xl p-8 relative overflow-hidden"
               style={{ borderColor: 'rgba(75, 11, 232, 0.5)' }}>
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full"
                 style={{ background: 'rgba(75, 11, 232, 0.2)', borderColor: 'rgba(75, 11, 232, 0.3)', border: '1px solid' }}>
              <span className="text-xs font-bold" style={{ color: '#4B0BE8' }}>DIAMOND LEVEL</span>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                   style={{ background: 'rgba(75, 11, 232, 0.2)', borderColor: 'rgba(75, 11, 232, 0.3)', border: '1px solid' }}>
                <Star className="w-8 h-8" style={{ color: '#4B0BE8' }} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-2">Vanguard Partner</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The flagship sponsorship tier, ensuring category dominance and year-round engagement with CIOs and CTOs.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#4B0BE8' }} />
                      <span className="text-sm text-gray-600">Diamond Keynote Sponsor at all 4 ITx Backbone Forums</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#4B0BE8' }} />
                      <span className="text-sm text-gray-600">4 Custom Executive Dinners per quarter (16 annually)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#4B0BE8' }} />
                      <span className="text-sm text-gray-600">4 Digital Roundtables per quarter (16 annually)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#4B0BE8' }} />
                      <span className="text-sm text-gray-600">Lead Sponsor of 1 FutureScale Session</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#4B0BE8' }} />
                      <span className="text-sm text-gray-600">ITx Collective Leadership Engagement</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#4B0BE8' }} />
                      <span className="text-sm text-gray-600">Exclusive Insight Architect - CIO/CTO survey ownership</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#4B0BE8' }} />
                      <span className="text-sm text-gray-600">Digital Transformation Storytelling</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#4B0BE8' }} />
                      <span className="text-sm text-gray-600">Quarterly ROI Reporting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 relative overflow-hidden hover:border-gray-300 transition-all">
            <div className="absolute top-4 right-4 bg-gray-200 border border-gray-300 px-3 py-1 rounded-full">
              <span className="text-xs font-bold text-gray-600">PLATINUM LEVEL</span>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                <Zap className="w-8 h-8" style={{ color: '#4B0BE8' }} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-2">Innovator Partner</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A high-impact sponsorship tier designed for organizations seeking consistent IT leader engagement and strong visibility.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                      <span className="text-sm text-gray-600">Platinum Session Sponsor at all 4 ITx Backbone Forums</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                      <span className="text-sm text-gray-600">2 Custom Executive Dinners per quarter (8 annually)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                      <span className="text-sm text-gray-600">2 Digital Roundtables per quarter (8 annually)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                      <span className="text-sm text-gray-600">Participation in 1 FutureScale Session (shared)</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                      <span className="text-sm text-gray-600">Survey Access - Annual CIO/CTO survey findings</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                      <span className="text-sm text-gray-600">Digital Visibility & Content Distribution</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                      <span className="text-sm text-gray-600">Bi-annual ROI Reporting</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                      <span className="text-sm text-gray-600">Branding as Innovator Partner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 relative overflow-hidden hover:border-gray-300 transition-all">
            <div className="absolute top-4 right-4 bg-gray-200 border border-gray-300 px-3 py-1 rounded-full">
              <span className="text-xs font-bold text-gray-600">GOLD LEVEL</span>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                <Network className="w-8 h-8" style={{ color: '#4B0BE8' }} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-2">Connector Partner</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  An entry-level package offering targeted access to CIOs, CTOs, and IT leaders with meaningful brand visibility.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                      <span className="text-sm text-gray-600">Gold Forum Sponsor at all 4 ITx Backbone Forums</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                      <span className="text-sm text-gray-600">1 Custom Executive Dinner per quarter (4 annually)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                      <span className="text-sm text-gray-600">1 Digital Roundtable per quarter (4 annually)</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                      <span className="text-sm text-gray-600">Participation in 1 FutureScale Session (shared)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                      <span className="text-sm text-gray-600">Survey Highlights - Executive summary</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                      <span className="text-sm text-gray-600">Digital Visibility & Content Distribution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 relative overflow-hidden hover:border-gray-300 transition-all">
            <div className="absolute top-4 right-4 bg-gray-200 border border-gray-300 px-3 py-1 rounded-full">
              <span className="text-xs font-bold text-gray-600">A LA CARTE</span>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-8 h-8" style={{ color: '#4B0BE8' }} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-2">A La Carte</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Entry point for new partners. Sponsor individual ITx Backbone Forums, FutureScale Sessions, or ITx Command Briefings.
                </p>

                <div className="text-center bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-gray-600 text-sm">
                    Flexible sponsorship options tailored to your specific IT market needs and budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onOpenModal}
            className="group px-8 py-4 text-white font-bold text-sm rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            style={{
              background: '#4B0BE8',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#3A0BB8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#4B0BE8';
            }}
          >
            <span>Partner With Us</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}