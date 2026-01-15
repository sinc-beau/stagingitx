'use client';

import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

interface EventData {
  hubspot_form_id: string;
  venue: string;
  venue_address: string;
}

interface RegistrationSectionProps {
  eventData: EventData;
}

export default function RegistrationSection({ eventData }: RegistrationSectionProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!eventData.hubspot_form_id) return;

    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = () => {
      if (window.hbspt && formRef.current) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '45377644',
          formId: eventData.hubspot_form_id,
          target: '#hubspot-form-container',
          onFormSubmitted: () => {
            if (sectionRef.current) {
              sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          },
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [eventData.hubspot_form_id]);

  return (
    <section id="registration" ref={sectionRef} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {(eventData.venue || eventData.venue_address) && (
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="space-y-3">
                {eventData.venue && (
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#4B0BE8] flex-shrink-0" />
                    <span className="text-lg font-semibold text-white">{eventData.venue}</span>
                  </div>
                )}
                {eventData.venue_address && (
                  <div className="pl-8">
                    <p className="text-white/70">{eventData.venue_address}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Register for This Event
          </h2>
          <div className="w-20 h-1 bg-[#4B0BE8] rounded-full mx-auto mb-8" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Secure Your Spot
            </h3>

            {eventData.hubspot_form_id ? (
              <>
                <style jsx global>{`
                  #hubspot-form-container {
                    text-align: left !important;
                  }

                  #hubspot-form-container * {
                    text-align: left !important;
                  }

                  #hubspot-form-container .hs-form {
                    font-family: inherit !important;
                    width: 100% !important;
                    max-width: 100% !important;
                    margin: 0 auto !important;
                    text-align: left !important;
                  }

                  #hubspot-form-container .hs-form-field {
                    margin-bottom: 20px !important;
                  }

                  #hubspot-form-container .hs-form-field > label {
                    color: #ffffff !important;
                    font-weight: 600 !important;
                    font-size: 14px !important;
                    margin-bottom: 8px !important;
                    display: block !important;
                  }

                  #hubspot-form-container .hs-form-field > label span {
                    color: #ffffff !important;
                  }

                  #hubspot-form-container .hs-form-field > label span.hs-form-required {
                    color: #4B0BE8 !important;
                  }

                  #hubspot-form-container .hs-input {
                    width: 100% !important;
                    padding: 12px 14px !important;
                    font-size: 15px !important;
                    border: 2px solid rgba(255, 255, 255, 0.15) !important;
                    border-radius: 8px !important;
                    background: rgba(255, 255, 255, 0.08) !important;
                    color: #ffffff !important;
                    transition: all 200ms !important;
                    font-family: inherit !important;
                  }

                  #hubspot-form-container .hs-input::placeholder {
                    color: rgba(255, 255, 255, 0.4) !important;
                  }

                  #hubspot-form-container .hs-input:focus {
                    outline: none !important;
                    border-color: #4B0BE8 !important;
                    background: rgba(255, 255, 255, 0.12) !important;
                    box-shadow: 0 0 0 3px rgba(75, 11, 232, 0.25) !important;
                  }

                  #hubspot-form-container select.hs-input {
                    appearance: none !important;
                    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") !important;
                    background-repeat: no-repeat !important;
                    background-position: right 12px center !important;
                    background-size: 20px !important;
                    padding-right: 40px !important;
                  }

                  #hubspot-form-container select.hs-input option {
                    background: #1a1a1a !important;
                    color: #ffffff !important;
                  }

                  #hubspot-form-container .hs-fieldtype-radio .hs-form-radio {
                    display: block !important;
                  }

                  #hubspot-form-container .hs-fieldtype-radio .hs-form-radio > div {
                    margin-bottom: 12px !important;
                  }

                  #hubspot-form-container .hs-fieldtype-radio .hs-form-radio label {
                    display: flex !important;
                    align-items: center !important;
                    cursor: pointer !important;
                    font-weight: 400 !important;
                    color: #ffffff !important;
                    margin-bottom: 0 !important;
                    padding: 10px 14px !important;
                    border-radius: 8px !important;
                    border: 2px solid rgba(255, 255, 255, 0.15) !important;
                    background: rgba(255, 255, 255, 0.05) !important;
                    transition: all 200ms !important;
                  }

                  #hubspot-form-container .hs-fieldtype-radio .hs-form-radio label:hover {
                    background: rgba(255, 255, 255, 0.08) !important;
                    border-color: rgba(255, 255, 255, 0.25) !important;
                  }

                  #hubspot-form-container .hs-fieldtype-radio input[type="radio"]:checked + label {
                    border-color: #4B0BE8 !important;
                    background: rgba(75, 11, 232, 0.15) !important;
                  }

                  #hubspot-form-container .hs-fieldtype-radio label span {
                    color: #ffffff !important;
                  }

                  #hubspot-form-container .hs-fieldtype-radio input[type="radio"] {
                    margin-right: 10px !important;
                    margin-top: 0 !important;
                    cursor: pointer !important;
                    width: 18px !important;
                    height: 18px !important;
                    flex-shrink: 0 !important;
                  }

                  #hubspot-form-container .hs-fieldtype-checkbox {
                    text-align: left !important;
                    display: block !important;
                  }

                  #hubspot-form-container .hs-fieldtype-checkbox * {
                    text-align: left !important;
                    margin-left: 0 !important;
                    margin-right: 0 !important;
                  }

                  #hubspot-form-container .hs-fieldtype-checkbox ul {
                    list-style: none !important;
                    padding: 0 !important;
                    margin: 0 !important;
                    text-align: left !important;
                  }

                  #hubspot-form-container .hs-fieldtype-checkbox li {
                    text-align: left !important;
                    padding: 0 !important;
                    margin: 0 0 12px 0 !important;
                  }

                  #hubspot-form-container .hs-fieldtype-checkbox .hs-form-checkbox {
                    display: block !important;
                    text-align: left !important;
                  }

                  #hubspot-form-container .hs-fieldtype-checkbox .hs-form-checkbox > div {
                    margin-bottom: 12px !important;
                    text-align: left !important;
                  }

                  #hubspot-form-container .hs-fieldtype-checkbox label {
                    display: flex !important;
                    flex-direction: row !important;
                    align-items: center !important;
                    justify-content: flex-start !important;
                    cursor: pointer !important;
                    font-weight: 400 !important;
                    color: #ffffff !important;
                    margin: 0 !important;
                    padding: 12px 16px !important;
                    border-radius: 8px !important;
                    border: 2px solid rgba(255, 255, 255, 0.15) !important;
                    background: rgba(255, 255, 255, 0.05) !important;
                    transition: all 200ms !important;
                    text-align: left !important;
                    width: 100% !important;
                    gap: 12px !important;
                    box-sizing: border-box !important;
                  }

                  #hubspot-form-container .hs-fieldtype-checkbox label:hover {
                    background: rgba(255, 255, 255, 0.08) !important;
                    border-color: rgba(255, 255, 255, 0.25) !important;
                  }

                  #hubspot-form-container .hs-fieldtype-checkbox input[type="checkbox"]:checked + label {
                    border-color: #4B0BE8 !important;
                    background: rgba(75, 11, 232, 0.15) !important;
                  }

                  #hubspot-form-container .hs-fieldtype-checkbox label span {
                    display: inline-block !important;
                    color: #ffffff !important;
                    text-align: left !important;
                    flex: 1 !important;
                    line-height: 1.5 !important;
                    order: 1 !important;
                  }

                  #hubspot-form-container .hs-fieldtype-checkbox input[type="checkbox"] {
                    display: block !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    cursor: pointer !important;
                    width: 20px !important;
                    height: 20px !important;
                    min-width: 20px !important;
                    max-width: 20px !important;
                    min-height: 20px !important;
                    max-height: 20px !important;
                    flex-shrink: 0 !important;
                    flex-grow: 0 !important;
                    position: relative !important;
                    top: auto !important;
                    left: auto !important;
                    right: auto !important;
                    bottom: auto !important;
                    transform: none !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                    z-index: 1 !important;
                    order: -1 !important;
                  }

                  #hubspot-form-container .hs-error-msgs {
                    margin-top: 6px !important;
                    margin-bottom: 0 !important;
                    list-style: none !important;
                    padding: 0 !important;
                  }

                  #hubspot-form-container .hs-error-msg {
                    color: #ff6b6b !important;
                    font-size: 13px !important;
                    font-weight: 500 !important;
                  }

                  #hubspot-form-container .hs-submit {
                    margin-top: 24px !important;
                    text-align: left !important;
                  }

                  #hubspot-form-container .hs-submit .actions {
                    text-align: left !important;
                    display: block !important;
                  }

                  #hubspot-form-container .hs-button,
                  #hubspot-form-container input[type="submit"],
                  #hubspot-form-container button[type="submit"] {
                    width: 100% !important;
                    padding: 14px 32px !important;
                    font-size: 14px !important;
                    font-weight: 700 !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.1em !important;
                    color: white !important;
                    background: #4B0BE8 !important;
                    border: none !important;
                    border-radius: 8px !important;
                    cursor: pointer !important;
                    transition: all 300ms !important;
                    font-family: inherit !important;
                    text-align: center !important;
                  }

                  #hubspot-form-container .hs-button:hover:not(:disabled),
                  #hubspot-form-container input[type="submit"]:hover:not(:disabled),
                  #hubspot-form-container button[type="submit"]:hover:not(:disabled) {
                    background: #3A0BB8 !important;
                    transform: translateY(-2px) !important;
                    box-shadow: 0 6px 16px rgba(75, 11, 232, 0.4) !important;
                  }

                  #hubspot-form-container .hs-button:active,
                  #hubspot-form-container input[type="submit"]:active,
                  #hubspot-form-container button[type="submit"]:active {
                    transform: translateY(0) !important;
                  }

                  #hubspot-form-container .hs-richtext {
                    color: rgba(255, 255, 255, 0.7) !important;
                    font-size: 13px !important;
                    line-height: 1.6 !important;
                    margin-top: 8px !important;
                  }

                  #hubspot-form-container .hs-richtext p {
                    color: rgba(255, 255, 255, 0.7) !important;
                  }

                  #hubspot-form-container .hs-richtext a {
                    color: #4B0BE8 !important;
                    text-decoration: underline !important;
                  }

                  #hubspot-form-container textarea.hs-input {
                    min-height: 120px !important;
                    resize: vertical !important;
                  }

                  #hubspot-form-container .submitted-message {
                    padding: 20px !important;
                    background: #10b981 !important;
                    color: white !important;
                    border-radius: 8px !important;
                    font-weight: 500 !important;
                    text-align: center !important;
                    font-size: 16px !important;
                  }

                  #hubspot-form-container .hs-form-booleancheckbox {
                    margin-bottom: 20px !important;
                  }

                  #hubspot-form-container .hs-form-booleancheckbox-display {
                    width: 100% !important;
                  }

                  #hubspot-form-container .hs-form-booleancheckbox .inputs-list {
                    list-style: none !important;
                    padding: 0 !important;
                    margin: 0 !important;
                  }

                  #hubspot-form-container .hs-form-booleancheckbox .hs-form-booleancheckbox-display > label,
                  #hubspot-form-container .hs-form-booleancheckbox label {
                    display: flex !important;
                    flex-direction: row !important;
                    align-items: center !important;
                    justify-content: flex-start !important;
                    cursor: pointer !important;
                    font-weight: 400 !important;
                    color: #ffffff !important;
                    margin: 0 !important;
                    padding: 12px 16px !important;
                    border-radius: 8px !important;
                    border: 2px solid rgba(255, 255, 255, 0.15) !important;
                    background: rgba(255, 255, 255, 0.05) !important;
                    transition: all 200ms !important;
                    text-align: left !important;
                    width: 100% !important;
                    gap: 12px !important;
                    box-sizing: border-box !important;
                  }

                  #hubspot-form-container .hs-form-booleancheckbox label:hover {
                    background: rgba(255, 255, 255, 0.08) !important;
                    border-color: rgba(255, 255, 255, 0.25) !important;
                  }

                  #hubspot-form-container .hs-form-booleancheckbox input[type="checkbox"]:checked + label,
                  #hubspot-form-container .hs-form-booleancheckbox input[type="checkbox"]:checked ~ label {
                    border-color: #4B0BE8 !important;
                    background: rgba(75, 11, 232, 0.15) !important;
                  }

                  #hubspot-form-container .hs-form-booleancheckbox input[type="checkbox"] {
                    display: block !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    cursor: pointer !important;
                    width: 20px !important;
                    height: 20px !important;
                    min-width: 20px !important;
                    max-width: 20px !important;
                    min-height: 20px !important;
                    max-height: 20px !important;
                    flex-shrink: 0 !important;
                    flex-grow: 0 !important;
                    position: relative !important;
                    top: auto !important;
                    left: auto !important;
                    right: auto !important;
                    bottom: auto !important;
                    transform: none !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                    z-index: 1 !important;
                    order: -1 !important;
                    appearance: auto !important;
                    -webkit-appearance: checkbox !important;
                    -moz-appearance: checkbox !important;
                  }

                  #hubspot-form-container .hs-form-booleancheckbox label span {
                    display: inline-block !important;
                    color: #ffffff !important;
                    text-align: left !important;
                    flex: 1 !important;
                    line-height: 1.5 !important;
                    order: 1 !important;
                  }
                `}</style>
                <div id="hubspot-form-container" ref={formRef} className="min-h-[400px]" />
              </>
            ) : (
              <div className="text-center text-white/60 py-12">
                <p className="mb-4">Registration form will appear here</p>
                <p className="text-sm text-white/50">
                  If you don&apos;t see the form, please refresh the page or contact us directly
                </p>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-white/60 text-center">
                Questions about this event?{' '}
                <a href="/contact" className="text-[#4B0BE8] hover:text-[#3A0BB8] font-semibold">
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
