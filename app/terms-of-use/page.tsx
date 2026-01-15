import React from 'react';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { FileText, Shield, CircleAlert as AlertCircle, Scale, Users, Copyright } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use - ITx Collective',
  description: 'Review the terms and conditions for participating in ITx Collective events, forums, and programs for CIOs and CTOs.',
  openGraph: {
    title: 'Terms of Use - ITx Collective',
    description: 'Review the terms and conditions for participating in ITx Collective events and programs.',
    url: 'https://itxcollective.com/terms-of-use',
    siteName: 'ITx Collective',
    images: [
      {
        url: '/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'ITx Collective Terms of Use',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use - ITx Collective',
    description: 'Review the terms for participating in ITx Collective.',
    images: ['/ITxCollectiveMainOG.png'],
  },
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-[#4B0BE8]/30 px-4 py-2 rounded-full mb-6">
              <FileText className="w-4 h-4 text-[#4B0BE8]" />
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">Legal</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
              TERMS OF <span className="text-[#4B0BE8]">USE</span>
            </h1>

            <p className="text-white/60 text-lg">
              Last Updated: January 1, 2025
            </p>
          </div>

          <div className="space-y-12 text-white/80">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-[#4B0BE8]" />
                <h2 className="text-2xl font-bold text-white">Agreement to Terms</h2>
              </div>
              <p className="leading-relaxed mb-4">
                These Terms of Use constitute a legally binding agreement between you and SINC LLC, doing business as ITx Collective. By accessing or using our website, services, events, or programs, you agree to be bound by these Terms.
              </p>
              <p className="leading-relaxed">
                If you do not agree to these Terms, you must not access or use our services. We reserve the right to modify these Terms at any time, and your continued use of our services constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#4B0BE8]" />
                <h2 className="text-2xl font-bold text-white">Eligibility and Registration</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Professional Use</h3>
                  <p className="leading-relaxed">
                    ITx Collective services are intended for professional IT leaders, executives, and enterprise technology decision-makers. By using our services, you represent that you are at least 18 years old and have the authority to enter into these Terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Account Accuracy</h3>
                  <p className="leading-relaxed">
                    You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate. You are responsible for maintaining the confidentiality of your account credentials.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-[#4B0BE8]" />
                <h2 className="text-2xl font-bold text-white">Use of Services</h2>
              </div>

              <p className="leading-relaxed mb-3">
                You agree to use ITx Collective services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use our services in any way that violates applicable laws or regulations</li>
                <li>Transmit any material that is defamatory, offensive, or inappropriate</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Engage in unauthorized data collection or harvesting</li>
                <li>Interfere with or disrupt the integrity or performance of our services</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Use our services for spam, phishing, or other malicious activities</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-[#4B0BE8]" />
                <h2 className="text-2xl font-bold text-white">Events and Programs</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Registration and Attendance</h3>
                  <p className="leading-relaxed">
                    Event registration is subject to availability and approval. We reserve the right to refuse or cancel registrations at our discretion. Event details, including dates, locations, and formats, are subject to change.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Conduct at Events</h3>
                  <p className="leading-relaxed">
                    Participants are expected to conduct themselves professionally and respectfully at all ITx Collective events. We reserve the right to remove any participant who violates our code of conduct or disrupts the event experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Photography and Recording</h3>
                  <p className="leading-relaxed">
                    By attending our events, you consent to being photographed, filmed, or recorded, and you grant us the right to use such media for promotional purposes.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Copyright className="w-6 h-6 text-[#4B0BE8]" />
                <h2 className="text-2xl font-bold text-white">Intellectual Property</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Our Content</h3>
                  <p className="leading-relaxed">
                    All content on our website and at our events, including text, graphics, logos, images, and software, is the property of SINC LLC or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Trademarks</h3>
                  <p className="leading-relaxed">
                    ITx Collective, SINC, and related logos are trademarks of SINC LLC. You may not use these trademarks without our prior written consent.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">User Content</h3>
                  <p className="leading-relaxed">
                    If you submit content to our services, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute such content in connection with our services.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-[#4B0BE8]" />
                <h2 className="text-2xl font-bold text-white">Disclaimers and Limitations of Liability</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Service Availability</h3>
                  <p className="leading-relaxed">
                    Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Third-Party Content</h3>
                  <p className="leading-relaxed">
                    Our services may contain links to third-party websites or content. We are not responsible for the accuracy, legality, or content of external sites or resources.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Limitation of Liability</h3>
                  <p className="leading-relaxed">
                    To the fullest extent permitted by law, SINC LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify, defend, and hold harmless SINC LLC and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of our services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="leading-relaxed">
                We reserve the right to suspend or terminate your access to our services at any time, with or without cause or notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law and Dispute Resolution</h2>
              <p className="leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
              <p className="leading-relaxed">
                Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except where prohibited by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Severability</h2>
              <p className="leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Entire Agreement</h2>
              <p className="leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and SINC LLC regarding the use of our services and supersede all prior agreements and understandings.
              </p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="leading-relaxed mb-4">
                If you have questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <p className="font-bold text-white mb-2">SINC LLC</p>
                <p>Email: <a href="mailto:legal@sincusa.com" className="text-[#4B0BE8] hover:text-[#3A0BB8]">legal@sincusa.com</a></p>
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
