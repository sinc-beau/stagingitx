'use client';

import React, { useState, useEffect } from 'react';
import { Database, Download, Lock, Server, Cpu, Globe, Zap, Shield, CheckCircle, Activity, Terminal } from 'lucide-react';
import { ITxNewsletterInlineForm } from '@/components/forms/ITxNewsletterInlineForm';

export default function KnowledgeUploadSection() {
  const [uploadStage, setUploadStage] = useState(0);
  const [dataStreams, setDataStreams] = useState<Array<{ id: number; value: string }>>([]);
  const [glitchText, setGlitchText] = useState(false);
  const [scanlinePosition, setScanlinePosition] = useState(0);

  useEffect(() => {
    const stages = [
      { delay: 500, stage: 1 },
      { delay: 2000, stage: 2 },
      { delay: 4000, stage: 3 },
      { delay: 6000, stage: 4 },
      { delay: 8000, stage: 5 }
    ];

    stages.forEach(({ delay, stage }) => {
      setTimeout(() => setUploadStage(stage), delay);
    });

    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 100);
    }, 3000);

    const scanlineInterval = setInterval(() => {
      setScanlinePosition(prev => (prev + 2) % 100);
    }, 50);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(scanlineInterval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataStreams(prev => {
        const newStreams = [...prev];
        if (newStreams.length > 20) newStreams.shift();
        newStreams.push({
          id: Date.now(),
          value: Math.random().toString(36).substring(2, 15)
        });
        return newStreams;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const getTerminalText = () => {
    switch(uploadStage) {
      case 0: return '> INITIALIZING ITx KNOWLEDGE REPOSITORY...';
      case 1: return '> CONNECTING TO UPLOAD LINK...';
      case 2: return '> ESTABLISHING SECURE CHANNEL...';
      case 3: return '> LINK ESTABLISHED';
      case 4: return '> KNOWLEDGE UPLOAD IN PROGRESS';
      case 5: return '> PREVIEW MODE - FULL ACCESS COMING Q1 2026';
      default: return '> WAITING...';
    }
  };

  return (
    <section className="min-h-screen py-16 sm:py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(75, 11, 232, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(75, 11, 232, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(75, 11, 232, 0.2) 0%, transparent 70%)
            `,
            backgroundSize: '50px 50px, 50px 50px, 100% 100%',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />

        <div
          className="absolute w-full h-1 opacity-30"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(75, 11, 232, 0.5), transparent)',
            top: `${scanlinePosition}%`,
            filter: 'blur(1px)'
          }}
        />

        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-8 opacity-20"
            style={{
              background: `linear-gradient(to bottom, transparent, #4B0BE8, transparent)`,
              left: `${Math.random() * 100}%`,
              top: '-10%',
              animation: `fall ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-6 sm:mb-8">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#4B0BE8' }} />
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase" style={{ color: '#4B0BE8' }}>
              KNOWLEDGE REPOSITORY - LAUNCHING SOON
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-6 relative ${glitchText ? 'glitch' : ''}`}
            style={{
              textShadow: glitchText ? `
                2px 2px 0 #4B0BE8,
                -2px -2px 0 #3A0BB8,
                4px 4px 8px rgba(75, 11, 232, 0.5)
              ` : 'none'
            }}
          >
            <span className="text-white block">KNOWLEDGE</span>
            <span className="block mt-1 sm:mt-2" style={{
              background: 'linear-gradient(45deg, #4B0BE8, #3A0BB8, #4B0BE8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% 100%',
              animation: 'gradient 3s ease infinite'
            }}>
              UPLOAD
            </span>
          </h1>
        </div>

        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div
            className="bg-black border rounded-xl p-4 sm:p-6 lg:p-8 relative overflow-hidden"
            style={{
              borderColor: 'rgba(75, 11, 232, 0.5)',
              boxShadow: `
                0 0 40px rgba(75, 11, 232, 0.2),
                inset 0 0 40px rgba(75, 11, 232, 0.05)
              `
            }}
          >
            <div className="flex items-center gap-2 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b" style={{ borderColor: 'rgba(75, 11, 232, 0.2)' }}>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full" style={{ background: '#4B0BE8' }} />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full" style={{ background: '#3A0BB8' }} />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full" style={{ background: '#2A0888' }} />
              <span className="ml-2 sm:ml-4 text-[10px] sm:text-xs font-mono text-white/50">ITx://COLLECTIVE/KNOWLEDGE/UPLOAD</span>
            </div>

            <div className="font-mono space-y-2">
              <div className="text-green-400 animate-pulse text-xs sm:text-sm">
                {getTerminalText()}
              </div>

              {uploadStage >= 3 && (
                <div className="text-white/50 text-[10px] sm:text-xs lg:text-sm mt-3 sm:mt-4">
                  <div>Protocol: ITx-SECURE-2025</div>
                  <div>Encryption: AES-256-GCM</div>
                  <div>Bandwidth: {(Math.random() * 100).toFixed(1)} Gbps</div>
                </div>
              )}

              {uploadStage >= 4 && (
                <div className="mt-4 sm:mt-6">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: uploadStage === 5 ? '100%' : '75%',
                        background: 'linear-gradient(90deg, #4B0BE8, #3A0BB8)',
                        boxShadow: '0 0 10px rgba(75, 11, 232, 0.5)'
                      }}
                    />
                  </div>
                </div>
              )}

              <div className="mt-3 sm:mt-4 h-16 sm:h-20 overflow-hidden opacity-30">
                {dataStreams.map(stream => (
                  <div key={stream.id} className="text-[10px] sm:text-xs text-white/30 font-mono">
                    {stream.value}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
              <div className="flex items-center gap-1 sm:gap-2">
                <Activity className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" style={{ color: '#4B0BE8' }} />
                <span className="text-[10px] sm:text-xs text-white/50">System Active</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: uploadStage >= 3 ? '#4B0BE8' : '#666' }} />
                <span className="text-[10px] sm:text-xs text-white/50">Secure Channel</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Database className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: uploadStage >= 4 ? '#4B0BE8' : '#666' }} />
                <span className="text-[10px] sm:text-xs text-white/50">Repository: Building</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          <div
            className="relative group"
            style={{
              background: 'linear-gradient(135deg, rgba(75, 11, 232, 0.1) 0%, rgba(75, 11, 232, 0.05) 100%)',
              borderRadius: '12px'
            }}
          >
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 style={{
                   background: 'linear-gradient(135deg, rgba(75, 11, 232, 0.2) 0%, rgba(75, 11, 232, 0.1) 100%)',
                   filter: 'blur(20px)'
                 }} />

            <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 lg:p-8 h-full group-hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center"
                     style={{ background: 'rgba(75, 11, 232, 0.2)' }}>
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#4B0BE8' }} />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white">Digital Community Only Sessions</h3>
              </div>
              <p className="text-sm sm:text-base text-white/70">
                CIOs and CTOs in the ITx Collective will shape focused digital programs exclusively
                for our executive community members.
              </p>
              <div className="mt-4 sm:mt-6 flex items-center gap-2">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: '#4B0BE8' }} />
                <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Members Only</span>
              </div>
            </div>
          </div>

          <div
            className="relative group"
            style={{
              background: 'linear-gradient(135deg, rgba(75, 11, 232, 0.1) 0%, rgba(75, 11, 232, 0.05) 100%)',
              borderRadius: '12px'
            }}
          >
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 style={{
                   background: 'linear-gradient(135deg, rgba(75, 11, 232, 0.2) 0%, rgba(75, 11, 232, 0.1) 100%)',
                   filter: 'blur(20px)'
                 }} />

            <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 lg:p-8 h-full group-hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center"
                     style={{ background: 'rgba(75, 11, 232, 0.2)' }}>
                  <Download className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#4B0BE8' }} />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white">Digital Recaps</h3>
              </div>
              <p className="text-sm sm:text-base text-white/70">
                Recaps of CIO/CTO Backbone Forums, FutureScale Sessions, and Command Briefings
                for new community members to catch up.
              </p>
              <div className="mt-4 sm:mt-6 flex items-center gap-2">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: '#4B0BE8' }} />
                <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Knowledge Archive</span>
              </div>
            </div>
          </div>

          <div
            className="relative group sm:col-span-2 lg:col-span-1"
            style={{
              background: 'linear-gradient(135deg, rgba(75, 11, 232, 0.1) 0%, rgba(75, 11, 232, 0.05) 100%)',
              borderRadius: '12px'
            }}
          >
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 style={{
                   background: 'linear-gradient(135deg, rgba(75, 11, 232, 0.2) 0%, rgba(75, 11, 232, 0.1) 100%)',
                   filter: 'blur(20px)'
                 }} />

            <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 lg:p-8 h-full group-hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center"
                     style={{ background: 'rgba(75, 11, 232, 0.2)' }}>
                  <Server className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#4B0BE8' }} />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white">Always Online</h3>
              </div>
              <p className="text-sm sm:text-base text-white/70">
                Once upload is complete, this information will be available freely to ITx
                Collective members 24/7 from any device.
              </p>
              <div className="mt-4 sm:mt-6 flex items-center gap-2">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: '#4B0BE8' }} />
                <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">24/7 Access</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border-2 border-[#4B0BE8]/30 rounded-lg overflow-hidden">
            <div className="bg-[#4B0BE8] p-3 sm:p-4 border-b border-[#4B0BE8]">
              <div className="flex items-center gap-2 sm:gap-3">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white uppercase tracking-wider">
                  Get Notified
                </h3>
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 bg-white">
              <div className="text-center mb-4 sm:mb-6">
                <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#4B0BE8]/10 border border-[#4B0BE8]/30 rounded-full mb-3 sm:mb-4">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#4B0BE8] rounded-full animate-pulse" />
                  <span className="text-[#4B0BE8] font-bold text-xs sm:text-sm uppercase tracking-wider">
                    Coming Soon - Q1 2026
                  </span>
                </div>
                <p className="text-gray-600 mb-2 text-sm sm:text-base">
                  This exclusive knowledge repository is currently being built for ITx Collective members.
                </p>
                <p className="text-[#4B0BE8] text-lg sm:text-xl lg:text-2xl font-bold">
                  BE THE FIRST TO KNOW
                </p>
              </div>

              <ITxNewsletterInlineForm />

              <div className="text-center mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                  Exclusive Content • IT Leader Access Only • Secure Platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(120vh);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .glitch {
          animation: glitch 0.3s ease;
        }

        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
      `}</style>
    </section>
  );
}