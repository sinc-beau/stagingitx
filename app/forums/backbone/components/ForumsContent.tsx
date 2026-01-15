import React from 'react';
import { Users, MessageCircle, Clock, Eye } from 'lucide-react';

interface ForumsContentProps {
  selectedEvent: string;
}

export default function ForumsContent({ selectedEvent }: ForumsContentProps) {
  // Placeholder forum topics
  const forumTopics = [
    {
      id: 1,
      title: 'AI Strategy Implementation: Real-world Challenges',
      author: 'Anonymous CTO',
      replies: 23,
      views: 145,
      lastActivity: '2 hours ago',
      category: 'AI & Machine Learning'
    },
    {
      id: 2,
      title: 'Cloud Cost Optimization: Executive Strategies',
      author: 'Anonymous CIO',
      replies: 18,
      views: 92,
      lastActivity: '4 hours ago',
      category: 'Cloud Infrastructure'
    },
    {
      id: 3,
      title: 'Cybersecurity Budget Planning for 2025',
      author: 'Anonymous CISO',
      replies: 31,
      views: 203,
      lastActivity: '1 day ago',
      category: 'Security'
    }
  ];

  return (
    <section className="py-12 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Forum Discussions</h2>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Users className="w-4 h-4" />
              <span>124 Active Members</span>
            </div>
          </div>

          <div className="space-y-4">
            {forumTopics.map((topic) => (
              <div
                key={topic.id}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-[#4B0BE8]/30 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-3 flex-1">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white hover:text-[#4B0BE8] transition-colors">
                        {topic.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>by {topic.author}</span>
                        <span className="bg-[#4B0BE8]/10 text-[#4B0BE8] px-2 py-1 rounded text-xs">
                          {topic.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-400 ml-6">
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{topic.replies}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{topic.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{topic.lastActivity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <button className="bg-[#4B0BE8] hover:bg-[#4B0BE8]/90 text-white px-8 py-3 rounded font-semibold transition-all duration-300">
              Load More Discussions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}