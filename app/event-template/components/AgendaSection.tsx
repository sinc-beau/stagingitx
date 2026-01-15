import React from 'react';
import { Clock } from 'lucide-react';

interface AgendaItem {
  time_slot: string;
  title: string;
  description: string;
}

interface AgendaSectionProps {
  agendaItems: AgendaItem[];
}

export default function AgendaSection({ agendaItems }: AgendaSectionProps) {
  const isHtmlContent = (text: string): boolean => {
    return text.includes('<p>') || text.includes('<strong>') || text.includes('<ul>') || text.includes('<li>');
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
            Event Agenda
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A focused afternoon of insights, networking, and practical takeaways
          </p>
        </div>

        <div className="space-y-4">
          {agendaItems.map((item, index) => {
            const hasHtml = isHtmlContent(item.description);

            return (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-[#4B0BE8]/50 transition-all duration-300"
              >
                <div className="px-8 py-6 hover:bg-slate-100/50 transition-colors">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center w-full">
                    <div className="flex-shrink-0">
                      <div className="bg-[#4B0BE8] text-white px-6 py-3 rounded-xl">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5" />
                          <span className="font-bold text-lg">{item.time_slot}</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 text-left">{item.title}</h3>
                  </div>
                </div>
                <div className="px-8 pb-6">
                  {hasHtml ? (
                    <div
                      className="agenda-description text-slate-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  ) : (
                    <p className="text-lg text-slate-600">{item.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .agenda-description :global(p) {
          margin-bottom: 1rem;
          line-height: 1.75;
        }

        .agenda-description :global(p:last-child) {
          margin-bottom: 0;
        }

        .agenda-description :global(strong) {
          color: #4B0BE8;
          font-weight: 700;
        }

        .agenda-description :global(ul) {
          list-style: none;
          padding-left: 0;
          margin: 1rem 0;
        }

        .agenda-description :global(li) {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.75rem;
          line-height: 1.75;
        }

        .agenda-description :global(li:before) {
          content: "•";
          color: #4B0BE8;
          font-weight: bold;
          position: absolute;
          left: 0;
          font-size: 1.25rem;
        }
      `}</style>
    </section>
  );
}
