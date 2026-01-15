import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The event was perfect. The organization, the venue, the sessions… everything was on point.",
      author: "Alexandre Lupien",
      role: "Directeur général des ressources informationnelles (CIO), Bibliothèque et Archives nationales du Québec",
      rating: 5
    },
    {
      quote: "Thank you for organizing a great event in Chicago! I watched the team run around, wrangle the participants, keep things organized and on schedule. You all handled each detail and challenge flawlessly. You've assembled an awesome team and it's a testimony to your leadership.",
      author: "Steve Allen",
      role: "ITSM Director, WSB",
      rating: 5
    },
    {
      quote: "The forum has provided me with much insight on the current hot topics that all IT leaders are struggling with. I was most impressed with the panels and fireside chats given by fellow attendees... I realized I was not alone, that we were all fighting the same battles, and searching for answers to similar situations.",
      author: "Frank Rotondi",
      role: "I.T. Officer, Henry Street Settlement",
      rating: 5
    },
    {
      quote: "Big Thank You to everyone at SINC as well as the sponsors and presenters. You all did a fantastic job and put on a great event. Made some great connections, and had some really insightful conversations.",
      author: "Collin Keen",
      role: "Implementation Program Manager, SEI",
      rating: 5
    },
    {
      quote: "Great to be part of the SINC community! Your team did a great job making the conference a success.",
      author: "Rob Huang",
      role: "Director, Enterprise Operations, Mastercard",
      rating: 5
    }
  ];

  return (
    <section className="py-24 relative bg-slate-900">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-[#4B0BE8] tracking-wider mb-4">TRUSTED BY LEADERS</div>
          <h2 className="text-5xl lg:text-6xl font-black text-white">
            What Leaders Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-[#4B0BE8]/50 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-gradient-to-r from-[#4B0BE8] to-purple-400 rounded-full" />
                  ))}
                </div>
                <p className="text-lg text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="text-sm text-[#4B0BE8] font-semibold">{testimonial.author}</div>
                  <div className="text-xs text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {testimonials.slice(3).map((testimonial, index) => (
            <div key={index + 3} className="group relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-[#4B0BE8]/50 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-gradient-to-r from-[#4B0BE8] to-purple-400 rounded-full" />
                  ))}
                </div>
                <p className="text-lg text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="text-sm text-[#4B0BE8] font-semibold">{testimonial.author}</div>
                  <div className="text-xs text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
