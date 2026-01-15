import React from 'react';

interface EventData {
  blurb: string;
}

interface EventOverviewSectionProps {
  eventData: EventData;
}

export default function EventOverviewSection({ eventData }: EventOverviewSectionProps) {
  if (!eventData.blurb) return null;

  const paragraphs = eventData.blurb.split('\n\n').filter(p => p.trim());

  return (
    <section className="pt-12 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              About This Event
            </h2>
            <div className="w-20 h-1 bg-[#4B0BE8] rounded-full mb-8" />
          </div>

          <div className="prose prose-lg max-w-none">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-slate-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
