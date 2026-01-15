'use client';

import React from 'react';
import { Activity } from 'lucide-react';

export function ITxComparisonMatrix() {
  const tiers = {
    vanguard: {
      name: 'VANGUARD',
      price: '$1,129,000',
      shortPrice: '$1.129M',
      discount: '20%',
      savings: '$282,870',
      minEngagements: 721,
      avgEngagements: 971,
      rateCard: '$1,411,870'
    },
    innovator: {
      name: 'INNOVATOR',
      price: '$604,000',
      shortPrice: '$604K',
      discount: '15%',
      savings: '$106,810',
      minEngagements: 493,
      avgEngagements: 641,
      rateCard: '$710,810'
    },
    connector: {
      name: 'CONNECTOR',
      price: '$395,000',
      shortPrice: '$395K',
      discount: '10%',
      savings: '$44,030',
      minEngagements: 429,
      avgEngagements: 525,
      rateCard: '$439,030'
    }
  };

  const features = [
    {
      category: 'Forum Sponsorship',
      vanguard: 'Diamond Keynote',
      innovator: 'Platinum Session',
      connector: 'Gold Shared'
    },
    {
      category: 'Executive Dinners',
      vanguard: '16',
      innovator: '8',
      connector: '4'
    },
    {
      category: 'Digital Roundtables',
      vanguard: '16',
      innovator: '8',
      connector: '4'
    },
    {
      category: 'FutureScale Session',
      vanguard: 'Lead Sponsor',
      innovator: 'FutureScale (Shared)',
      connector: 'Shared'
    },
    {
      category: 'ITx Council Seat',
      vanguard: 'Included',
      innovator: '—',
      connector: '—'
    },
    {
      category: 'CIO Survey Access',
      vanguard: 'Full Ownership',
      innovator: 'Topline Findings',
      connector: 'Summary Only'
    },
    {
      category: 'Concierge Support',
      vanguard: '12 Months',
      innovator: '—',
      connector: '—'
    }
  ];

  return (
    <section className="py-16 px-6 border-t border-white/5 relative bg-black">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(75, 11, 232, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(75, 11, 232, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-bold text-xs tracking-wider mb-6 uppercase" style={{ color: '#4B0BE8' }}>
            <Activity className="w-3 h-3" />
            Partnership Matrix
            <Activity className="w-3 h-3" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            COMPARE <span style={{ color: '#4B0BE8' }}>TIERS</span>
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 text-xs font-bold text-white/50 uppercase">Feature</th>
                <th className="px-6 py-4 text-center">
                  <div className="text-xs font-bold uppercase mb-2" style={{ color: '#4B0BE8' }}>
                    {tiers.vanguard.name}
                  </div>
                  <div className="text-2xl font-black text-white">{tiers.vanguard.shortPrice}</div>
                </th>
                <th className="px-6 py-4 text-center">
                  <div className="text-xs font-bold uppercase mb-2" style={{ color: '#4B0BE8' }}>
                    {tiers.innovator.name}
                  </div>
                  <div className="text-2xl font-black text-white">{tiers.innovator.shortPrice}</div>
                </th>
                <th className="px-6 py-4 text-center">
                  <div className="text-xs font-bold uppercase mb-2" style={{ color: '#4B0BE8' }}>
                    {tiers.connector.name}
                  </div>
                  <div className="text-2xl font-black text-white">{tiers.connector.shortPrice}</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/60">{feature.category}</td>
                  <td className="px-6 py-4 text-center text-white font-bold">{feature.vanguard}</td>
                  <td className="px-6 py-4 text-center text-white font-bold">{feature.innovator}</td>
                  <td className="px-6 py-4 text-center text-white font-bold">{feature.connector}</td>
                </tr>
              ))}
              
              <tr className="border-b border-white/5">
                <td className="px-6 py-4 text-white/60">Min Leads Generated</td>
                <td className="px-6 py-4 text-center font-bold text-xl" style={{ color: '#4B0BE8' }}>
                  {tiers.vanguard.minEngagements}
                </td>
                <td className="px-6 py-4 text-center font-bold text-xl" style={{ color: '#4B0BE8' }}>
                  {tiers.innovator.minEngagements}
                </td>
                <td className="px-6 py-4 text-center font-bold text-xl" style={{ color: '#4B0BE8' }}>
                  {tiers.connector.minEngagements}
                </td>
              </tr>

              <tr className="border-b border-white/5">
                <td className="px-6 py-4 text-white/60">Avg Leads Generated</td>
                <td className="px-6 py-4 text-center font-bold text-xl" style={{ color: '#4B0BE8' }}>
                  {tiers.vanguard.avgEngagements}
                </td>
                <td className="px-6 py-4 text-center font-bold text-xl" style={{ color: '#4B0BE8' }}>
                  {tiers.innovator.avgEngagements}
                </td>
                <td className="px-6 py-4 text-center font-bold text-xl" style={{ color: '#4B0BE8' }}>
                  {tiers.connector.avgEngagements}
                </td>
              </tr>
              
              <tr className="border-b border-white/5">
                <td className="px-6 py-4 text-white/60">Rate Card Value</td>
                <td className="px-6 py-4 text-center font-bold text-xl text-white/60">
                  {tiers.vanguard.rateCard}
                </td>
                <td className="px-6 py-4 text-center font-bold text-xl text-white/60">
                  {tiers.innovator.rateCard}
                </td>
                <td className="px-6 py-4 text-center font-bold text-xl text-white/60">
                  {tiers.connector.rateCard}
                </td>
              </tr>
              
              <tr className="border-b border-white/5">
                <td className="px-6 py-4 text-white/60">Discount</td>
                <td className="px-6 py-4 text-center text-green-400 font-bold text-xl">
                  {tiers.vanguard.discount}
                </td>
                <td className="px-6 py-4 text-center text-green-400 font-bold text-xl">
                  {tiers.innovator.discount}
                </td>
                <td className="px-6 py-4 text-center text-green-400 font-bold text-xl">
                  {tiers.connector.discount}
                </td>
              </tr>
              
              <tr>
                <td className="px-6 py-4 text-white/60">Partner Savings</td>
                <td className="px-6 py-4 text-center text-green-400 font-bold text-xl">
                  {tiers.vanguard.savings}
                </td>
                <td className="px-6 py-4 text-center text-green-400 font-bold text-xl">
                  {tiers.innovator.savings}
                </td>
                <td className="px-6 py-4 text-center text-green-400 font-bold text-xl">
                  {tiers.connector.savings}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden mt-12 space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-black mb-1" style={{ color: '#4B0BE8' }}>
                {tiers.vanguard.name}
              </h3>
              <div className="text-xl font-bold text-white">{tiers.vanguard.shortPrice}</div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/60">Min Leads:</span>
                <span className="text-white font-bold">{tiers.vanguard.minEngagements}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Avg Leads:</span>
                <span className="text-white font-bold">{tiers.vanguard.avgEngagements}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Council Seat:</span>
                <span className="text-white font-bold">Included</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Concierge:</span>
                <span className="text-white font-bold">12 Months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Discount:</span>
                <span className="text-green-400 font-bold">{tiers.vanguard.discount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Savings:</span>
                <span className="text-green-400 font-bold">$283K</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-black mb-1" style={{ color: '#4B0BE8' }}>
                {tiers.innovator.name}
              </h3>
              <div className="text-xl font-bold text-white">{tiers.innovator.shortPrice}</div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/60">Min Leads:</span>
                <span className="text-white font-bold">{tiers.innovator.minEngagements}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Avg Leads:</span>
                <span className="text-white font-bold">{tiers.innovator.avgEngagements}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Council Seat:</span>
                <span className="text-white font-bold">—</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Concierge:</span>
                <span className="text-white font-bold">—</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Discount:</span>
                <span className="text-green-400 font-bold">{tiers.innovator.discount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Savings:</span>
                <span className="text-green-400 font-bold">$107K</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-black mb-1" style={{ color: '#4B0BE8' }}>
                {tiers.connector.name}
              </h3>
              <div className="text-xl font-bold text-white">{tiers.connector.shortPrice}</div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/60">Min Leads:</span>
                <span className="text-white font-bold">{tiers.connector.minEngagements}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Avg Leads:</span>
                <span className="text-white font-bold">{tiers.connector.avgEngagements}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Council Seat:</span>
                <span className="text-white font-bold">—</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Concierge:</span>
                <span className="text-white font-bold">—</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Discount:</span>
                <span className="text-green-400 font-bold">{tiers.connector.discount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Savings:</span>
                <span className="text-green-400 font-bold">$41K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}