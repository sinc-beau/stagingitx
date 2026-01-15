import React from 'react';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Shield, Lock, Eye, Database, UserCheck, Bell } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - ITx Collective',
  description: 'Learn how ITx Collective protects your privacy and handles data for CIOs, CTOs, and IT executives in our community.',
  openGraph: {
    title: 'Privacy Policy - ITx Collective',
    description: 'Learn how ITx Collective protects your privacy and handles data.',
    url: 'https://itxcollective.com/privacy-policy',
    siteName: 'ITx Collective',
    images: [
      {
        url: '/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'ITx Collective Privacy Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - ITx Collective',
    description: 'Learn how ITx Collective protects your privacy.',
    images: ['/ITxCollectiveMainOG.png'],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-[#4B0BE8]/30 px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-[#4B0BE8]" />
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">Legal</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
              PRIVACY <span className="text-[#4B0BE8]">POLICY</span>
            </h1>

            <p className="text-white/60 text-lg">
              Last Updated: January 1, 2025
            </p>
          </div>

          <div className="space-y-12 text-white/80">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-[#4B0BE8]" />
                <h2 className="text-2xl font-bold text-white">Introduction</h2>
              </div>
              <p className="leading-relaxed mb-4">
                ITx Collective, operated by SINC LLC, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and participate in our events and programs.
              </p>
              <p className="leading-relaxed">
                By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-[#4B0BE8]" />
                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Personal Information</h3>
                  <p className="leading-relaxed">
                    We collect personal information that you voluntarily provide to us when you register for events, sign up for our newsletter, join the ITx Guild, or contact us. This may include:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                    <li>Name and job title</li>
                    <li>Company name and information</li>
                    <li>Email address and phone number</li>
                    <li>Professional interests and preferences</li>
                    <li>Event registration information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Automatic Information</h3>
                  <p className="leading-relaxed">
                    When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and cookies. We also collect information about your browsing behavior and engagement with our content.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-[#4B0BE8]" />
                <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
              </div>

              <p className="leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, operate, and maintain our services and events</li>
                <li>Process your registrations and manage event participation</li>
                <li>Send you newsletters, updates, and marketing communications</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve and personalize your experience</li>
                <li>Analyze usage trends and optimize our services</li>
                <li>Comply with legal obligations</li>
                <li>Facilitate connections between IT leaders and solution providers</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-[#4B0BE8]" />
                <h2 className="text-2xl font-bold text-white">Information Sharing</h2>
              </div>

              <p className="leading-relaxed mb-4">
                We may share your information with:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Event Sponsors and Partners</h3>
                  <p className="leading-relaxed">
                    When you register for sponsored events or programs, we may share your contact information and professional details with our event sponsors and strategic partners. This enables meaningful connections and networking opportunities within the IT leadership community.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Service Providers</h3>
                  <p className="leading-relaxed">
                    We work with third-party service providers who help us operate our business, including email marketing platforms, event management systems, and analytics providers. These providers are bound by confidentiality obligations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Legal Requirements</h3>
                  <p className="leading-relaxed">
                    We may disclose your information if required by law or in response to valid legal requests, or to protect the rights, property, or safety of ITx Collective, our users, or others.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Bell className="w-6 h-6 text-[#4B0BE8]" />
                <h2 className="text-2xl font-bold text-white">Your Rights and Choices</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Email Communications</h3>
                  <p className="leading-relaxed">
                    You can opt out of receiving marketing emails by clicking the unsubscribe link in any email or contacting us directly. Please note that even if you opt out of marketing communications, we may still send you administrative messages.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Access and Correction</h3>
                  <p className="leading-relaxed">
                    You have the right to access, correct, or delete your personal information. Contact us at privacy@sincusa.com to exercise these rights.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Cookies</h3>
                  <p className="leading-relaxed">
                    Most web browsers are set to accept cookies by default. You can adjust your browser settings to refuse cookies or alert you when cookies are being sent.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#4B0BE8]" />
                <h2 className="text-2xl font-bold text-white">Data Security</h2>
              </div>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              <p className="leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <p className="font-bold text-white mb-2">SINC LLC</p>
                <p>Email: <a href="mailto:privacy@sincusa.com" className="text-[#4B0BE8] hover:text-[#3A0BB8]">privacy@sincusa.com</a></p>
                <p>Website: <a href="https://sincusa.com" target="_blank" rel="noopener noreferrer" className="text-[#4B0BE8] hover:text-[#3A0BB8]">sincusa.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
