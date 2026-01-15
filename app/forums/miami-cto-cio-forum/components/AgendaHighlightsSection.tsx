'use client';

import React, { useState, useRef } from 'react';
import { Calendar, Clock, ChevronDown } from 'lucide-react';

export default function AgendaHighlightsSection() {
  const [expandedDay, setExpandedDay] = useState<string | null>(null);
  const dayRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const agendaData = [
    {
      day: 'Sunday',
      date: 'March 15, 2026 - Welcome Reception',
      sessions: [
        {
          time: '2:00 – 5:00 PM',
          title: 'Registration'
        },
        {
          time: '5:30 – 7:00 PM',
          title: 'Welcome & Reception'
        },
        {
          time: '7:00 – 9:00 PM',
          title: 'Dinner & Keynote',
          subtitle: 'The CIO Mandate for 2026: AI, Value Creation, and the New Enterprise Operating Model'
        }
      ]
    },
    {
      day: 'Monday',
      date: 'March 16, 2026 - Keynotes, Breakouts, and Experiential Networking',
      sessions: [
        {
          time: '7:00 – 7:55 AM',
          title: 'Breakfast'
        },
        {
          time: '8:00 – 8:55 AM',
          title: 'Opening Keynote Panel',
          subtitle: 'AI With Outcomes: How CIOs Are Delivering Real ROI, Not Just Experiments',
          description: 'AI pilots are easy. Delivering measurable business outcomes is not. This opening keynote panel brings CIOs and technology leaders together to discuss how they are moving beyond experimentation to drive real return on investment. Panelists will share what has actually scaled, what has been shut down, and how they are aligning AI initiatives to enterprise priorities, operating models, and funding expectations.'
        },
        {
          time: '8:55 – 9:05 AM',
          title: 'Networking Break',
          subtitle: 'Circle back with your Peers on the content so far while grabbing a coffee or tea and a snack'
        },
        {
          time: '9:05 – 9:35 AM',
          title: 'Parallel Workshops',
          workshops: [
            {
              title: 'Workshop 1: From Reactive to Autonomous: Driving Efficiency with Agentic AI',
              description: 'Agentic AI changes the game. It moves us from insight to execution — from systems that wait to systems that act. This session explores the software blueprint for building an Agentic Layer above today\'s architectures to drive faster, smarter, more autonomous operations.'
            },
            {
              title: 'Workshop 2: Data Governance & Enterprise Architecture: Building the Foundation for AI',
              description: 'AI success depends on disciplined data governance and intentional architecture. This workshop connects governance models to architectural decisions that enable scale, reuse, and control.'
            }
          ]
        },
        {
          time: '9:45 – 10:15 AM',
          title: 'Parallel Workshops',
          workshops: [
            {
              title: 'Workshop 1: AI Governance for CIOs: Frameworks for Responsible, Scalable Adoption',
              description: 'AI governance is becoming a core CIO responsibility, not a side initiative. This workshop examines practical governance frameworks that balance speed, risk, and accountability.'
            },
            {
              title: 'Workshop 2: From RPA to Agentic AI: What CIOs Need to Know About the Next Automation Wave',
              description: 'Traditional automation is giving way to AI driven agents capable of decision making and orchestration. This workshop helps CIOs understand what changes when automation moves from rules based execution to adaptive intelligence.'
            }
          ]
        },
        {
          time: '10:15 – 10:40 AM',
          title: 'Networking Break'
        },
        {
          time: '10:40 – 11:10 AM',
          title: 'Presentation: Hybrid & Multi-Cloud Optimization',
          subtitle: 'Cost, Performance, and Architecture Decisions CIOs Are Making Now',
          description: 'Hybrid and multi cloud strategies are now about optimization, not expansion. This session examines how CIOs are rebalancing cost, performance, and architectural consistency across environments.'
        },
        {
          time: '11:20 – 11:50 AM',
          title: 'Parallel Workshops',
          workshops: [
            {
              title: 'Workshop 1: IT Talent & Workforce Development: Upskilling for AI, Cloud, and Modern Architecture',
              description: 'Technology strategy fails without the right skills to execute it. This workshop focuses on how CIOs are reshaping their workforce to support AI, cloud, and modern architecture initiatives.'
            },
            {
              title: 'Workshop 2: Enterprise Architecture for 2026: Designing for Agility, Data Flow, and AI Integration',
              description: 'Enterprise architecture is shifting from control to enablement. This workshop challenges traditional EA approaches and focuses on designing architectures that support agility, real time data flow, and AI integration.'
            }
          ]
        },
        {
          time: '11:50 – 1:00 PM',
          title: 'Lunch Keynote',
          subtitle: 'The CIO as Value Creator: Communicating Impact to the Board and the Business'
        },
        {
          time: '1:00 – 1:15 PM',
          title: 'Networking Break'
        },
        {
          time: '1:15 – 1:45 PM',
          title: 'Presentation: Vendor Consolidation & Platform Strategy',
          subtitle: 'Reducing Complexity While Increasing Capability',
          description: 'Tool sprawl has become an operational and financial liability. This presentation explores how CIOs are approaching vendor consolidation and platform strategy to reduce complexity while improving capability and integration.'
        },
        {
          time: '1:55 – 2:25 PM',
          title: 'Parallel Workshops',
          workshops: [
            {
              title: 'Workshop 1: Business–IT Alignment: How CIOs Are Driving Enterprise Value in 2026',
              description: 'Alignment between business and IT is no longer about demand intake. It is about shared accountability for outcomes. This workshop examines how CIOs are redefining engagement models, funding mechanisms, and success metrics.'
            },
            {
              title: 'Workshop 2: Designing a Modern Data Architecture: Practical Steps for CIOs',
              description: 'Modern data architecture is critical to analytics, AI, and operational insight. This workshop focuses on practical design choices that CIOs can implement today to improve data accessibility, quality, and governance.'
            }
          ]
        },
        {
          time: '2:40 – 3:10 PM',
          title: 'Parallel Workshops',
          workshops: [
            {
              title: 'Workshop 1: AI in the Real World: Productivity Gains, Cost Savings, and Execution Lessons',
              description: 'AI value is being proven in specific use cases, not broad mandates. This workshop highlights real world examples where AI has delivered productivity gains and cost savings.'
            },
            {
              title: 'Workshop 2: Cloud Optimization & Hybrid Architecture: Real-World Strategies That Work',
              description: 'Cloud optimization is an ongoing discipline, not a one time initiative. This workshop explores practical strategies CIOs are using to control spend, improve performance, and align hybrid architectures to business needs.'
            }
          ]
        },
        {
          time: '3:20 – 3:50 PM',
          title: 'Presentation: Emerging Tech Radar',
          subtitle: 'Quantum, Edge, IoT, and What CIOs Should Actually Care About',
          description: 'Not every emerging technology deserves executive attention. This presentation cuts through hype to examine which technologies matter in the near and mid term and which can safely be monitored.'
        },
        {
          time: '4:00 – 6:30 PM',
          title: 'Structured Activities'
        },
        {
          time: '6:30 – 7:00 PM',
          title: 'Reception',
          subtitle: 'Great conversations, an easy way to reconnect with new contacts over canapes and cocktails'
        },
        {
          time: '7:00 – 8:30 PM',
          title: 'Dinner',
          subtitle: 'Open seating buffet meal serving 5-star food and great Peer engagement'
        }
      ]
    },
    {
      day: 'Tuesday',
      date: 'March 17, 2026 - Strategic Keynote and Closing Reflections',
      sessions: [
        {
          time: '8:00 – 8:55 AM',
          title: 'Breakfast',
          subtitle: 'Fuel up and network with fellow tech leaders before the day kicks off!'
        },
        {
          time: '9:00 – 9:55 AM',
          title: 'Opening Keynote Panel'
        },
        {
          time: '10:05 – 11:05 AM',
          title: 'Parallel Boardroom Sessions',
          workshops: [
            {
              title: 'Boardroom Session A: CIO Role Evolution: From Technology Leader to Enterprise Strategist',
              description: 'The CIO role is expanding beyond technology delivery into enterprise strategy and value creation. This closed door boardroom session focuses on how CIOs are redefining their influence, responsibilities, and success metrics.'
            },
            {
              title: 'Boardroom Session B: Building a 2026 CIO Roadmap: Priorities, Pitfalls, and Peer Benchmarking',
              description: 'Roadmaps are under constant pressure from AI acceleration, cost constraints, and shifting business priorities. This boardroom session enables CIOs to compare plans, surface blind spots, and benchmark priorities with peers.'
            }
          ]
        },
        {
          time: '11:05 – 11:20 AM',
          title: 'Networking Break',
          subtitle: 'Circle back with your Peers on the content so far while grabbing a coffee or tea and a snack'
        },
        {
          time: '11:20 – 12:20 PM',
          title: 'Parallel Boardroom Sessions',
          workshops: [
            {
              title: 'Boardroom Session C: The 2026 CIO Playbook: Architecture, AI, Talent, and Value Delivery',
              description: 'This session brings together the core elements shaping CIO agendas for 2026. Participants will examine how architecture decisions, AI strategy, talent models, and value delivery interconnect.'
            },
            {
              title: 'Boardroom Session D: AI ROI & Value Delivery: How CIOs Are Funding and Scaling AI',
              description: 'AI funding models are evolving as organizations demand clearer returns. This boardroom session focuses on how CIOs are structuring investment, measuring value, and deciding what to scale or stop.'
            }
          ]
        },
        {
          time: '12:30 PM',
          title: 'Lunch & Departure',
          subtitle: 'Open seating, Buffet-style lunch. Serving food for all tastes, pallets and preferences. Vegan, vegetarian, halal options available. Serving to-go boxes for those in a hurry!'
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
              ref={(el) => { dayRefs.current[day.day] = el; }}
              className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-[#4B0BE8]/50 transition-all duration-300"
            >
              <button
                onClick={() => {
                  const newDay = expandedDay === day.day ? null : day.day;
                  setExpandedDay(newDay);
                  if (newDay && dayRefs.current[day.day]) {
                    setTimeout(() => {
                      dayRefs.current[day.day]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }
                }}
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
                        {session.time && <Clock className="w-5 h-5 text-[#4B0BE8] flex-shrink-0 mt-1" />}
                        <div className="flex-1">
                          {session.time && <div className="text-sm text-[#4B0BE8] font-mono mb-2">{session.time}</div>}
                          <h4 className="text-lg font-bold text-slate-900">{session.title}</h4>
                          {(session as any).subtitle && (
                            <div className="mt-2 text-slate-700 font-semibold">
                              {(session as any).subtitle}
                            </div>
                          )}
                          {(session as any).description && (
                            <div className="mt-2 text-slate-600 text-sm">
                              {(session as any).description}
                            </div>
                          )}
                          {(session as any).workshops && (
                            <div className="mt-4 space-y-4 ml-4">
                              {(session as any).workshops.map((workshop: any, wIndex: number) => (
                                <div key={wIndex} className="border-l-2 border-[#4B0BE8] pl-4">
                                  <div className="font-semibold text-slate-900">
                                    {typeof workshop === 'string' ? workshop : workshop.title}
                                  </div>
                                  {typeof workshop === 'object' && workshop.description && (
                                    <div className="mt-1 text-sm text-slate-600">
                                      {workshop.description}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
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
