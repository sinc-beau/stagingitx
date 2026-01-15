import React from 'react';
import { ITxForumNationalForm } from '@/components/forms/ITxForumNationalForm';

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
          <ITxForumNationalForm />
        </div>
      </div>
    </section>
  );
}
