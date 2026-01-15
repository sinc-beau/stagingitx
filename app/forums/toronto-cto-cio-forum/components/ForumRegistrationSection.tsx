import React from 'react';
import Image from 'next/image';
import { ITxForumCanadaForm } from '@/components/forms/ITxForumCanadaForm';

export default function ForumRegistrationSection() {
  return (
    <section id="registration" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="text-xs font-mono text-[#4B0BE8] tracking-wider mb-4">SECURE YOUR SEAT</div>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
            Register for the Forum
          </h2>
          <p className="text-xl text-slate-600">
            Limited seats available for qualified IT leaders. Complete the form below to request your invitation.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-lg">
          <ITxForumCanadaForm />
        </div>

        <div className="mt-16 pt-12 border-t border-slate-200">
          <p className="text-center text-sm font-bold text-[#FFD700] uppercase tracking-wider mb-6">
            Gold Sponsor
          </p>
          <div className="bg-slate-50 rounded-xl p-8 flex items-center justify-center min-h-[120px] max-w-md mx-auto">
            <Image
              src="/Perforce Logo.png"
              alt="Perforce"
              width={250}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
