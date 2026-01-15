'use client'

import React, { useState } from 'react';
import { Mail, Send, CircleCheck as CheckCircle, CircleAlert as AlertCircle } from 'lucide-react';

export function ContactPageContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mblzoewl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#4B0BE8]/5 to-black" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(75,11,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(75,11,232,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-6">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">Get In Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              CONTACT <span className="text-[#4B0BE8]">US</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
              Have questions about ITx Collective? We're here to help.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully</h3>
                <p className="text-white/70 mb-8">
                  Thank you for reaching out. We'll get back to you within 24-48 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-[#4B0BE8] text-white font-bold rounded-lg hover:bg-[#3A0BB8] transition-all duration-300 transform hover:scale-105"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-400 font-semibold">Failed to send message</p>
                      <p className="text-red-400/80 text-sm mt-1">Please try again or email us directly.</p>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-bold text-white uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full pl-11 pr-4 py-3 bg-white/5 border-2 border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#4B0BE8] focus:bg-white/10 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-white uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border-2 border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#4B0BE8] focus:bg-white/10 transition-all duration-300 resize-vertical"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#4B0BE8] text-white font-black text-sm uppercase tracking-wider rounded-lg hover:bg-[#3A0BB8] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#4B0BE8]/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
