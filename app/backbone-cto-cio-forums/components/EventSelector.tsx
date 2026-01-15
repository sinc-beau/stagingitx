'use client'

import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ChevronDown, CheckCircle } from 'lucide-react';

interface Event {
  id: string;
  name: string;
  type: string;
  date: string;
  location: string;
  city: string;
  state: string;
  hubspot_form_id: string;
  landingPage?: string;
}

export default function EventSelector() {
  const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(null);
  const [hubspotLoaded, setHubspotLoaded] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const events: Event[] = [
    {
      id: 'itx-forum-east-2026',
      name: 'ITx Collective Forum (East)',
      type: 'SINC Forum',
      date: 'March 15-17, 2026',
      location: 'Trump Doral Creek, Miami FL',
      city: 'Miami',
      state: 'FL',
      hubspot_form_id: '8b1e9f48-95f7-4cba-9f68-2b9c5ce99e21',
      landingPage: '/forums/itx-east'
    },
    {
      id: 'itx-forum-national-2026',
      name: 'ITx Collective Forum (National)',
      type: 'SINC Forum',
      date: 'June 2026',
      location: 'Austin, TX',
      city: 'Austin',
      state: 'TX',
      hubspot_form_id: ''
    },
    {
      id: 'itx-forum-canada-2026',
      name: 'ITx Collective Forum (Canada National)',
      type: 'SINC Forum',
      date: 'August 2026',
      location: 'Toronto, ON',
      city: 'Toronto',
      state: 'ON',
      hubspot_form_id: ''
    },
    {
      id: 'itx-forum-west-2026',
      name: 'ITx Collective Forum (West)',
      type: 'SINC Forum',
      date: 'October 11-13, 2026',
      location: 'M Resort, Las Vegas',
      city: 'Las Vegas',
      state: 'NV',
      hubspot_form_id: ''
    }
  ];

  // Load HubSpot script
  useEffect(() => {
    if (!hubspotLoaded) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.onload = () => setHubspotLoaded(true);
      document.head.appendChild(script);
    }
  }, [hubspotLoaded]);

  // Load HubSpot form when event selection changes
  useEffect(() => {
    if (hubspotLoaded && selectedEventIndex !== null && events[selectedEventIndex]?.hubspot_form_id) {
      const formId = events[selectedEventIndex].hubspot_form_id;

      const formContainer = document.getElementById('hubspot-form-container');
      if (formContainer) {
        formContainer.innerHTML = '';
      }

      setTimeout(() => {
        if (window.hbspt?.forms && formContainer && formId) {
          window.hbspt.forms.create({
            portalId: "45377644",
            formId: formId,
            target: '#hubspot-form-container',
            region: "na1",
            onFormSubmitted: () => {
              setShowSuccess(true);
            }
          });
        }
      }, 100);
    }
  }, [hubspotLoaded, selectedEventIndex]);

  // Add HubSpot form styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      #hubspot-form-container .hs-form {
        font-family: inherit !important;
      }

      #hubspot-form-container .hs-form-field label {
        color: #1e293b !important;
        font-weight: 600 !important;
        font-size: 14px !important;
        margin-bottom: 6px !important;
        display: block !important;
      }

      #hubspot-form-container .hs-form-field label span.hs-form-required {
        color: #4B0BE8 !important;
      }

      #hubspot-form-container .hs-input {
        width: 100% !important;
        padding: 10px 12px !important;
        font-size: 15px !important;
        border: 2px solid #e2e8f0 !important;
        border-radius: 6px !important;
        background: #f8fafc !important;
        color: #1e293b !important;
        transition: all 200ms !important;
        font-family: inherit !important;
      }

      #hubspot-form-container .hs-input:focus {
        outline: none !important;
        border-color: #4B0BE8 !important;
        background: white !important;
        box-shadow: 0 0 0 3px rgba(75, 11, 232, 0.1) !important;
      }

      #hubspot-form-container select.hs-input {
        appearance: none !important;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234B0BE8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") !important;
        background-repeat: no-repeat !important;
        background-position: right 12px center !important;
        background-size: 20px !important;
        padding-right: 40px !important;
      }

      #hubspot-form-container .hs-error-msgs {
        margin-top: 6px !important;
        margin-bottom: 0 !important;
        list-style: none !important;
        padding: 0 !important;
      }

      #hubspot-form-container .hs-error-msg {
        color: #ef4444 !important;
        font-size: 13px !important;
        font-weight: 500 !important;
      }

      #hubspot-form-container .hs-submit {
        margin-top: 24px !important;
      }

      #hubspot-form-container .hs-button {
        width: 100% !important;
        padding: 12px 32px !important;
        font-size: 14px !important;
        font-weight: 700 !important;
        text-transform: uppercase !important;
        letter-spacing: 0.1em !important;
        color: white !important;
        background: #4B0BE8 !important;
        border: none !important;
        border-radius: 6px !important;
        cursor: pointer !important;
        transition: all 300ms !important;
        font-family: inherit !important;
      }

      #hubspot-form-container .hs-button:hover {
        background: #3A0BB8 !important;
        transform: translateY(-1px) !important;
        box-shadow: 0 4px 12px rgba(75, 11, 232, 0.3) !important;
      }

      #hubspot-form-container .hs-button:active {
        transform: translateY(0) !important;
      }

      #hubspot-form-container .hs-richtext {
        color: #4b5563 !important;
        font-size: 14px !important;
        line-height: 1.5 !important;
        margin-top: 8px !important;
      }

      #hubspot-form-container .hs-richtext a {
        color: #4B0BE8 !important;
        text-decoration: underline !important;
      }

      #hubspot-form-container .hs-form-field {
        margin-bottom: 20px !important;
      }

      #hubspot-form-container textarea.hs-input {
        min-height: 100px !important;
        resize: vertical !important;
      }

      #hubspot-form-container .hs-fieldtype-checkbox label,
      #hubspot-form-container .hs-fieldtype-radio label {
        display: flex !important;
        align-items: flex-start !important;
        cursor: pointer !important;
        font-weight: 400 !important;
      }

      #hubspot-form-container .hs-fieldtype-checkbox input,
      #hubspot-form-container .hs-fieldtype-radio input {
        margin-right: 8px !important;
        margin-top: 2px !important;
      }

      #hubspot-form-container .submitted-message {
        padding: 16px !important;
        background: #10b981 !important;
        color: white !important;
        border-radius: 6px !important;
        font-weight: 500 !important;
        text-align: center !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-black" data-event-selector>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-[#4B0BE8] tracking-wider mb-4">2026 PROGRAM</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Choose Your <span className="text-[#4B0BE8]">Forum</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Select an event below to register for our upcoming ITx forums.
          </p>
        </div>

        {/* Event Grid */}
        {selectedEventIndex === null ? (
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => {
              const isSelectable = event.hubspot_form_id !== '';

              const handleClick = () => {
                if (isSelectable && event.landingPage) {
                  window.location.href = event.landingPage;
                } else if (isSelectable) {
                  setSelectedEventIndex(index);
                }
              };

              return (
                <button
                  key={event.id}
                  onClick={handleClick}
                  disabled={!isSelectable}
                  className={`group bg-white/5 border border-white/20 rounded-lg p-8 transition-all duration-300 text-left ${
                    isSelectable
                      ? 'hover:bg-white/10 hover:border-[#4B0BE8]/50 cursor-pointer'
                      : 'opacity-60 cursor-not-allowed'
                  }`}
                >
                  <div className="text-xs font-bold text-[#4B0BE8] uppercase tracking-wider mb-3">
                    {event.type}
                  </div>
                  <h3 className={`text-2xl font-bold text-white mb-4 transition-colors ${
                    isSelectable ? 'group-hover:text-[#4B0BE8]' : ''
                  }`}>
                    {event.name}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/70">
                      <Calendar className="w-4 h-4 text-[#4B0BE8]" />
                      <span className="text-sm font-semibold">
                        {event.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <MapPin className="w-4 h-4 text-[#4B0BE8]" />
                      <span className="text-sm">
                        {event.location}
                      </span>
                    </div>
                  </div>
                  <div className={`mt-6 text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 ${
                    isSelectable
                      ? 'text-[#4B0BE8] group-hover:translate-x-1 transition-transform'
                      : 'text-white/50'
                  }`}>
                    {isSelectable ? (
                      <>
                        Register Now
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      </>
                    ) : (
                      'Registration Opens Soon'
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="space-y-8">
            {/* Back Button & Selected Event Info */}
            <div>
              <button
                onClick={() => setSelectedEventIndex(null)}
                className="text-white/70 hover:text-white text-sm font-semibold mb-6 inline-flex items-center gap-2 transition-colors"
              >
                <ChevronDown className="w-4 h-4 rotate-90" />
                Back to Events
              </button>

              <div className="bg-white/5 border border-[#4B0BE8]/30 rounded-lg p-6">
                <div className="text-xs font-bold text-[#4B0BE8] uppercase tracking-wider mb-2">
                  {events[selectedEventIndex].type}
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {events[selectedEventIndex].name}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-white/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#4B0BE8]" />
                    <span className="text-sm font-semibold">
                      {events[selectedEventIndex].date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#4B0BE8]" />
                    <span className="text-sm">
                      {events[selectedEventIndex].location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            {showSuccess ? (
              <div className="bg-white rounded-lg p-12 shadow-xl text-center">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Complete!</h2>
                <p className="text-lg text-gray-600 mb-2">Thank you for registering!</p>
                <p className="text-base text-gray-500">We'll send you confirmation details shortly.</p>
              </div>
            ) : (
              <div className="bg-white rounded-lg p-8 shadow-xl">
                <div id="hubspot-form-container">
                {!hubspotLoaded && (
                  <div className="text-center py-12">
                    <div className="w-8 h-8 border-2 border-[#4B0BE8] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading registration form...</p>
                  </div>
                )}
                </div>
              </div>
            )}

            <div className="text-center">
              <p className="text-xs text-white/40">
                Registration is limited to qualified technology executives
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}