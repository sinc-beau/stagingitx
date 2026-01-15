'use client';

import React, { useState } from 'react';
import { Calendar, Clock, ChevronDown } from 'lucide-react';

export default function AgendaHighlightsSection() {
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  const agendaData = [
    {
      day: 'Sunday',
      date: 'October 11, 2026',
      sessions: [
        {
          time: '2:00 - 5:00 PM',
          title: 'FORUM REGISTRATION & WELCOME',
          synopsis: 'Get familiar with SINC Staff and the event layout. Secure your complimentary Swag Bag and learn how to use the onsite application for peer engagement.'
        },
        {
          time: '5:30 - 7:00 PM',
          title: 'SINC WELCOME NETWORKING RECEPTION',
          synopsis: 'Engage your peers over canapes and cocktails in a relaxed networking atmosphere.'
        },
        {
          time: '7:00 - 9:00 PM',
          title: 'SINC NETWORKING & ENGAGEMENT DINNER',
          synopsis: 'Open seating buffet meal with excellent food and peer engagement before Day 1 kicks off.'
        }
      ]
    },
    {
      day: 'Monday',
      date: 'October 12, 2026',
      sessions: [
        {
          time: '7:00 - 7:55 AM',
          title: 'SINC IT LEADERS NETWORKING BREAKFAST',
          synopsis: 'Full breakfast and lots of coffee available!'
        },
        {
          time: '8:05 - 8:55 AM',
          title: 'CIO PANEL - Leading Digital Transformation',
          synopsis: 'Leading CIOs discuss navigating the dual pressures of innovation and operational excellence, balancing emerging technologies with organizational change needed to drive business value.'
        },
        {
          time: '9:05 - 9:35 AM',
          title: 'Cloud Architecture & Optimization Strategies',
          synopsis: 'Learn about modern cloud architectures, cost optimization techniques, and best practices for multi-cloud environments.'
        },
        {
          time: '9:45 - 10:15 AM',
          title: 'WORKSHOP - Building a Resilient IT Infrastructure',
          synopsis: 'A practical blueprint for building and sustaining infrastructure that drives real resilience. Learn to identify risks, prioritize investments, and implement scalable solutions.'
        },
        {
          time: '10:35 - 11:05 AM',
          title: 'AI & Automation in Enterprise IT',
          synopsis: 'Explore how artificial intelligence and automation are transforming IT operations, from predictive maintenance to intelligent workflows.'
        },
        {
          time: '11:55 - 12:40 PM',
          title: 'INTERACTIVE SIMULATION - Crisis Management Exercise',
          synopsis: 'Experience a simulated system outage, taking on leadership roles during high-stakes decision making. Navigate realistic scenarios and leave with actionable recovery frameworks.'
        },
        {
          time: '1:40 - 2:10 PM',
          title: 'FIRESIDE CHAT - Technology Is Everyone\'s Business',
          synopsis: 'Transform IT from a service organization to a strategic business driver. Learn how to embed technology thinking into daily operations and company values.'
        },
        {
          time: '3:00 - 3:50 PM',
          title: 'PANEL - Winning the Boardroom',
          synopsis: 'Learn proven strategies for translating technical complexity into business value. Frame IT investments in terms leadership cares about.'
        },
        {
          time: '4:40 - 5:30 PM',
          title: 'PANEL + ROUNDTABLE - IT Leadership Under Pressure',
          synopsis: 'A candid session addressing the challenges of IT leadership. Explore strategies for maintaining focus, driving results, and building high-performing teams.'
        }
      ]
    },
    {
      day: 'Tuesday',
      date: 'October 13, 2026',
      sessions: [
        {
          time: '8:00 - 8:50 AM',
          title: 'SINC IT LEADERS NETWORKING BREAKFAST',
          synopsis: 'Full breakfast and lots of coffee available!'
        },
        {
          time: '9:00 - 9:50 AM',
          title: 'PANEL - IT Organization Structure: What Works Now?',
          synopsis: 'Seasoned technology leaders discuss modern IT organizational models. Explore centralized vs. decentralized structures, the rise of platform teams, and hybrid approaches.'
        },
        {
          time: '10:00 - 10:30 AM',
          title: 'WORKSHOP - Data Strategy & Governance',
          synopsis: 'Build a comprehensive data strategy that drives business outcomes. Learn about data governance, quality management, and analytics excellence.'
        },
        {
          time: '10:50 - 11:20 AM',
          title: 'WORKSHOP - Cybersecurity for IT Leaders',
          synopsis: 'Essential security knowledge for IT executives. Understand risk management, compliance requirements, and building security-first cultures.'
        },
        {
          time: '11:30 - 12:00 PM',
          title: 'Technology Vendor Management Excellence',
          synopsis: 'Strategies for managing technology partnerships, negotiating contracts, and ensuring vendors deliver value aligned with business objectives.'
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
            Detailed Agenda
          </h2>
          <div className="text-xl font-semibold text-[#4B0BE8] mb-4">Three Days of Impact</div>
          <p className="text-xl text-slate-600 max-w-3xl">
            A carefully curated program designed to maximize learning, networking, and actionable outcomes.
          </p>
        </div>

        <div className="space-y-4">
          {agendaData.map((day, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-[#4B0BE8]/50 transition-all duration-300"
            >
              <button
                onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-slate-100 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-6 h-6 text-[#4B0BE8]" />
                    <span className="text-2xl font-black text-slate-900">{day.day}</span>
                  </div>
                  <p className="text-slate-600">{day.date}</p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-[#4B0BE8] transition-transform duration-300 ${
                    expandedDay === day.day ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedDay === day.day && (
                <div className="px-8 pb-8 space-y-6 border-t border-slate-200">
                  {day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="pt-6">
                      <div className="flex items-start gap-4">
                        <Clock className="w-5 h-5 text-[#4B0BE8] flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <div className="text-sm text-[#4B0BE8] font-mono mb-2">{session.time}</div>
                          <h4 className="text-lg font-bold text-slate-900 mb-2">{session.title}</h4>
                          <p className="text-slate-600 leading-relaxed">{session.synopsis}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
