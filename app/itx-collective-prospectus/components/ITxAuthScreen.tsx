'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield } from 'lucide-react';

interface ITxAuthScreenProps {
  onAuthenticate: (authenticated: boolean) => void;
}

export function ITxAuthScreen({ onAuthenticate }: ITxAuthScreenProps) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === '0649') {
      onAuthenticate(true);
      setError('');
    } else {
      setError('Invalid passcode');
      setPasscode('');
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(75, 11, 232, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(75, 11, 232, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-md w-full mx-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-purple-500" style={{ color: '#4B0BE8' }} />
              <Shield className="w-10 h-10 text-purple-500" style={{ color: '#4B0BE8' }} />
              <Lock className="w-8 h-8 text-purple-500" style={{ color: '#4B0BE8' }} />
            </div>

            <div className="mb-4">
              <h1 className="text-4xl font-black text-white">
                IT<span style={{ color: '#4B0BE8' }}>x</span> <span className="text-white">COLLECTIVE</span>
              </h1>
            </div>

            <h2 className="text-xl font-bold text-white mb-2">RESTRICTED ACCESS</h2>
            <p className="text-white/40 text-xs font-bold uppercase tracking-wider">
              Partnership Prospectus
            </p>
          </div>

          <form onSubmit={handlePasscodeSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Access Code
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border-2 border-white/20 rounded-lg text-white placeholder-white/40 focus:border-purple-500 focus:bg-white/10 transition-all font-mono text-center text-lg tracking-widest outline-none"
                style={{ borderColor: passcode ? '#4B0BE8' : 'rgba(255, 255, 255, 0.2)' }}
                placeholder="••••"
                maxLength={4}
                required
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-400/30 text-red-400 px-4 py-2 rounded-lg text-sm text-center"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              className="w-full py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wider text-sm"
              style={{
                background: '#4B0BE8',
                color: 'white'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#3A0BB8')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#4B0BE8')}
            >
              Access Prospectus
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-white/40">
            <p>Authorized personnel only</p>
            <p className="mt-2">Powered by <span className="font-bold">SINC</span></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}