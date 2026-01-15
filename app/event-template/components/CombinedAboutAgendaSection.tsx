'use client';

import React, { useState } from 'react';
import { Clock, ChevronDown } from 'lucide-react';

interface EventData {
  blurb: string;
}

interface AgendaItem {
  time_slot: string;
  title: string;
  description: string;
}

interface CombinedAboutAgendaSectionProps {
  eventData: EventData;
  agendaItems: AgendaItem[];
}

export default function CombinedAboutAgendaSection({ eventData, agendaItems }: CombinedAboutAgendaSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  const paragraphs = eventData.blurb ? eventData.blurb.split('\n\n').filter(p => p.trim()) : [];
  const isHtmlContent = (text: string): boolean => {
    return text.includes('<p>') || text.includes('<strong>') || text.includes('<ul>') || text.includes('<li>');
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* About Section - Left Side */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                About This Event
              </h2>
              <div className="w-20 h-1 bg-[#4B0BE8] rounded-full" />
            </div>

            <div className="space-y-6">
              {paragraphs.length > 0 && (
                <>
                  {isHtmlContent(eventData.blurb) ? (
                    <>
                      <div
                        className={`blurb-description ${!isExpanded ? 'line-clamp-6' : ''}`}
                        dangerouslySetInnerHTML={{ __html: eventData.blurb }}
                      />
                      {eventData.blurb.length > 400 && (
                        <button
                          onClick={() => setIsExpanded(!isExpanded)}
                          className="flex items-center gap-2 text-[#4B0BE8] hover:text-[#3A0BB8] font-semibold transition-colors"
                        >
                          {isExpanded ? 'Read Less' : 'Read More'}
                          <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </>
                  ) : (
                    <>
                      <div className={`space-y-6 ${!isExpanded ? 'line-clamp-6' : ''}`}>
                        {paragraphs.map((paragraph, index) => (
                          <p key={index} className="text-lg text-slate-700 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {eventData.blurb.length > 400 && (
                        <button
                          onClick={() => setIsExpanded(!isExpanded)}
                          className="flex items-center gap-2 text-[#4B0BE8] hover:text-[#3A0BB8] font-semibold transition-colors"
                        >
                          {isExpanded ? 'Read Less' : 'Read More'}
                          <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Agenda Section - Right Side */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                Event Agenda
              </h2>
              <div className="w-20 h-1 bg-[#4B0BE8] rounded-full" />
            </div>

            {agendaItems.length > 0 ? (
              <div className="space-y-4">
                {agendaItems.map((item, index) => {
                  const hasHtml = isHtmlContent(item.description);

                  return (
                    <div
                      key={index}
                      className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:border-[#4B0BE8]/50 transition-all"
                    >
                      <div className="px-6 py-4 hover:bg-slate-100/50 transition-colors">
                        <div className="flex items-center gap-4 text-left w-full">
                          <div className="bg-[#4B0BE8] text-white px-4 py-2 rounded-lg flex-shrink-0">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span className="font-bold text-sm">{item.time_slot}</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                        </div>
                      </div>
                      <div className="px-6 pb-4">
                        {hasHtml ? (
                          <div
                            className="agenda-description text-slate-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: item.description }}
                          />
                        ) : (
                          <p className="text-base text-slate-600">{item.description}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-slate-600">Agenda coming soon...</p>
            )}

            <div className="pt-8">
              <button
                onClick={scrollToRegistration}
                className="w-full bg-[#4B0BE8] hover:bg-[#3A0BB8] text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#4B0BE8]/50 text-lg uppercase tracking-wider"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .agenda-description :global(p),
        .blurb-description :global(p) {
          margin-bottom: 1rem;
          line-height: 1.75;
        }

        .agenda-description :global(p:last-child),
        .blurb-description :global(p:last-child) {
          margin-bottom: 0;
        }

        .agenda-description :global(strong),
        .blurb-description :global(strong) {
          color: #4B0BE8;
          font-weight: 700;
        }

        .agenda-description :global(ul),
        .blurb-description :global(ul) {
          list-style: none;
          padding-left: 0;
          margin: 1rem 0;
        }

        .agenda-description :global(li),
        .blurb-description :global(li) {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.75rem;
          line-height: 1.75;
        }

        .agenda-description :global(li:before),
        .blurb-description :global(li:before) {
          content: "•";
          color: #4B0BE8;
          font-weight: bold;
          position: absolute;
          left: 0;
          font-size: 1.25rem;
        }

        .blurb-description {
          font-size: 1.125rem;
          color: #334155;
        }
      `}</style>
    </section>
  );
}
