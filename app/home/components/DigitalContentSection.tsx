import React from 'react';
import { FileText, Video, Share } from 'lucide-react';
import Link from 'next/link';

export default function DigitalContentSection() {
  const contentTypes = [
    {
      icon: FileText,
      title: 'Executive Briefings',
      description: 'Key insights from peer discussions on emerging tech strategies.'
    },
    {
      icon: Video,
      title: 'Session Recordings',
      description: 'On-demand access to selected ITx forums and workshops.'
    },
    {
      icon: Share,
      title: 'Action Summaries',
      description: 'Distilled takeaways ready to share with your leadership team.'
    }
  ];

  return (
    <section className="relative py-20 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            KNOWLEDGE <span className="text-[#4B0BE8]">STREAM</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg border-4 border-gray-200 shadow-lg aspect-square">
              <img
                src="/knowledgestream.png"
                alt="ITx knowledge center"
                className="w-full h-full object-contain"
              />

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6">
                <div className="bg-black/80 backdrop-blur-sm border border-[#4B0BE8]/30 rounded p-4">
                  <div className="text-[#4B0BE8] text-xs font-bold mb-1 tracking-wider">CONTINUOUS LEARNING</div>
                  <div className="text-white font-bold text-lg">Always-On Resources</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="grid gap-4">
              {contentTypes.map((content, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 p-6 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-[#4B0BE8]/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded bg-[#4B0BE8]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <content.icon className="w-6 h-6 text-[#4B0BE8]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black mb-2">
                        {content.title}
                      </h3>
                      <p className="text-gray-600">
                        {content.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/knowledge">
                <button className="px-8 py-4 bg-transparent border-2 border-[#4B0BE8] text-[#4B0BE8] font-bold text-lg rounded hover:bg-[#4B0BE8] hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                  ACCESS RESOURCES →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}