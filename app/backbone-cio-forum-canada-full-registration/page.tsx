'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Footer } from '@/components/Footer';

export default function CanadaFullRegistrationPage() {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (formContainerRef.current) {
      const initForm = () => {
        if (window.hbspt && formContainerRef.current) {
          window.hbspt.forms.create({
            portalId: '45377644',
            formId: '45356d2b-ef50-4fdf-879a-20e26d06ebe1',
            region: 'na1',
            target: '#hubspot-form-canada-full-registration',
            onFormSubmitted: () => {
              setShowSuccess(true);
            }
          });
        }
      };

      if (window.hbspt) {
        initForm();
      } else {
        const checkHubSpot = setInterval(() => {
          if (window.hbspt) {
            clearInterval(checkHubSpot);
            initForm();
          }
        }, 100);

        return () => clearInterval(checkHubSpot);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Thank You for Registering!
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Please fill out the form below so that we can properly provide logistics support for your attendance at the forum.
          </p>

          <div className="inline-flex flex-col gap-3 text-slate-300 bg-slate-900/50 rounded-lg p-6 border border-[#4B0BE8]/30">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5 text-[#4B0BE8]" />
              <span className="text-lg font-semibold">August 2026</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-[#4B0BE8]" />
              <span className="text-lg font-semibold">Toronto, ON</span>
            </div>
          </div>
        </div>

        {showSuccess ? (
          <div className="bg-white rounded-xl shadow-2xl p-8 sm:p-12 text-center">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Complete!</h2>
            <p className="text-lg text-gray-600 mb-2">Thank you for completing your registration.</p>
            <p className="text-base text-gray-500">We'll send you confirmation details and event information shortly.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-10 lg:p-12">
            <style jsx global>{`
            #hubspot-form-canada-full-registration {
              max-width: 100% !important;
            }

            #hubspot-form-canada-full-registration .hs-form {
              font-family: inherit !important;
            }

            #hubspot-form-canada-full-registration h2,
            #hubspot-form-canada-full-registration h3,
            #hubspot-form-canada-full-registration h4 {
              color: #0f172a !important;
              font-weight: 700 !important;
              font-size: 20px !important;
              margin-top: 32px !important;
              margin-bottom: 6px !important;
              padding-top: 24px !important;
              border-top: 2px solid #e2e8f0 !important;
            }

            #hubspot-form-canada-full-registration h2:first-child,
            #hubspot-form-canada-full-registration h3:first-child,
            #hubspot-form-canada-full-registration h4:first-child {
              margin-top: 0 !important;
              padding-top: 0 !important;
              border-top: none !important;
            }

            #hubspot-form-canada-full-registration p,
            #hubspot-form-canada-full-registration .hs-richtext {
              color: #64748b !important;
              font-size: 14px !important;
              line-height: 1.6 !important;
              margin-bottom: 24px !important;
              font-style: italic !important;
            }

            #hubspot-form-canada-full-registration .hs-richtext a {
              color: #4B0BE8 !important;
              text-decoration: underline !important;
              font-style: normal !important;
            }

            #hubspot-form-canada-full-registration .hs-form-field {
              margin-bottom: 24px !important;
            }

            #hubspot-form-canada-full-registration .hs-form-field label {
              color: #1e293b !important;
              font-weight: 600 !important;
              font-size: 15px !important;
              margin-bottom: 8px !important;
              display: block !important;
              line-height: 1.5 !important;
            }

            #hubspot-form-canada-full-registration .hs-form-field label span.hs-form-required {
              color: #4B0BE8 !important;
              margin-left: 2px !important;
            }

            #hubspot-form-canada-full-registration .hs-input {
              width: 100% !important;
              padding: 12px 16px !important;
              font-size: 15px !important;
              border: 2px solid #e2e8f0 !important;
              border-radius: 8px !important;
              background: white !important;
              color: #1e293b !important;
              transition: all 200ms ease !important;
              font-family: inherit !important;
              box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05) !important;
            }

            #hubspot-form-canada-full-registration .hs-input:hover {
              border-color: #cbd5e1 !important;
            }

            #hubspot-form-canada-full-registration .hs-input:focus {
              outline: none !important;
              border-color: #4B0BE8 !important;
              background: white !important;
              box-shadow: 0 0 0 4px rgba(75, 11, 232, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05) !important;
            }

            #hubspot-form-canada-full-registration select.hs-input {
              appearance: none !important;
              background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234B0BE8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") !important;
              background-repeat: no-repeat !important;
              background-position: right 16px center !important;
              background-size: 18px !important;
              padding-right: 48px !important;
              cursor: pointer !important;
            }

            #hubspot-form-canada-full-registration textarea.hs-input {
              min-height: 120px !important;
              resize: vertical !important;
              line-height: 1.6 !important;
            }

            #hubspot-form-canada-full-registration .hs-fieldtype-checkbox,
            #hubspot-form-canada-full-registration .hs-fieldtype-radio {
              margin-bottom: 12px !important;
            }

            #hubspot-form-canada-full-registration .hs-fieldtype-checkbox label,
            #hubspot-form-canada-full-registration .hs-fieldtype-radio label {
              display: flex !important;
              align-items: flex-start !important;
              cursor: pointer !important;
              font-weight: 400 !important;
              padding: 12px !important;
              border-radius: 8px !important;
              transition: all 150ms ease !important;
              border: 2px solid transparent !important;
            }

            #hubspot-form-canada-full-registration .hs-fieldtype-checkbox label:hover,
            #hubspot-form-canada-full-registration .hs-fieldtype-radio label:hover {
              background-color: #f8fafc !important;
              border-color: #e2e8f0 !important;
            }

            #hubspot-form-canada-full-registration .hs-fieldtype-checkbox input[type="checkbox"],
            #hubspot-form-canada-full-registration .hs-fieldtype-radio input[type="radio"],
            #hubspot-form-canada-full-registration .hs-form-booleancheckbox input[type="checkbox"] {
              appearance: none !important;
              -webkit-appearance: none !important;
              -moz-appearance: none !important;
              width: 24px !important;
              height: 24px !important;
              border: 2px solid #cbd5e1 !important;
              border-radius: 6px !important;
              margin-right: 12px !important;
              margin-top: 2px !important;
              cursor: pointer !important;
              flex-shrink: 0 !important;
              background-color: white !important;
              transition: all 200ms ease !important;
              position: relative !important;
              box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05) !important;
            }

            #hubspot-form-canada-full-registration .hs-fieldtype-radio input[type="radio"] {
              border-radius: 50% !important;
            }

            #hubspot-form-canada-full-registration .hs-fieldtype-checkbox input[type="checkbox"]:hover,
            #hubspot-form-canada-full-registration .hs-fieldtype-radio input[type="radio"]:hover,
            #hubspot-form-canada-full-registration .hs-form-booleancheckbox input[type="checkbox"]:hover {
              border-color: #4B0BE8 !important;
              box-shadow: 0 0 0 3px rgba(75, 11, 232, 0.1) !important;
            }

            #hubspot-form-canada-full-registration .hs-fieldtype-checkbox input[type="checkbox"]:checked,
            #hubspot-form-canada-full-registration .hs-form-booleancheckbox input[type="checkbox"]:checked {
              background-color: #4B0BE8 !important;
              border-color: #4B0BE8 !important;
              box-shadow: 0 0 0 3px rgba(75, 11, 232, 0.1) !important;
            }

            #hubspot-form-canada-full-registration .hs-fieldtype-radio input[type="radio"]:checked {
              border-color: #4B0BE8 !important;
              border-width: 7px !important;
            }

            #hubspot-form-canada-full-registration .hs-fieldtype-checkbox input[type="checkbox"]:checked::after,
            #hubspot-form-canada-full-registration .hs-form-booleancheckbox input[type="checkbox"]:checked::after {
              content: "" !important;
              position: absolute !important;
              left: 7px !important;
              top: 3px !important;
              width: 6px !important;
              height: 11px !important;
              border: solid white !important;
              border-width: 0 2.5px 2.5px 0 !important;
              transform: rotate(45deg) !important;
            }

            #hubspot-form-canada-full-registration .hs-fieldtype-checkbox label span,
            #hubspot-form-canada-full-registration .hs-fieldtype-radio label span {
              flex: 1 !important;
              line-height: 1.5 !important;
            }

            #hubspot-form-canada-full-registration .hs-error-msgs {
              margin-top: 8px !important;
              margin-bottom: 0 !important;
              list-style: none !important;
              padding: 0 !important;
            }

            #hubspot-form-canada-full-registration .hs-error-msg {
              color: #dc2626 !important;
              font-size: 14px !important;
              font-weight: 500 !important;
              display: flex !important;
              align-items: center !important;
              gap: 6px !important;
            }

            #hubspot-form-canada-full-registration .hs-error-msg:before {
              content: "⚠" !important;
            }

            #hubspot-form-canada-full-registration .hs-submit {
              margin-top: 32px !important;
              padding-top: 24px !important;
              border-top: 2px solid #e2e8f0 !important;
            }

            #hubspot-form-canada-full-registration .hs-button {
              width: 100% !important;
              padding: 16px 32px !important;
              font-size: 15px !important;
              font-weight: 700 !important;
              text-transform: uppercase !important;
              letter-spacing: 0.05em !important;
              color: white !important;
              background: linear-gradient(135deg, #4B0BE8 0%, #6D28D9 100%) !important;
              border: none !important;
              border-radius: 8px !important;
              cursor: pointer !important;
              transition: all 300ms ease !important;
              font-family: inherit !important;
              box-shadow: 0 4px 6px rgba(75, 11, 232, 0.2) !important;
            }

            #hubspot-form-canada-full-registration .hs-button:hover {
              background: linear-gradient(135deg, #3A0BB8 0%, #5B21B6 100%) !important;
              transform: translateY(-2px) !important;
              box-shadow: 0 8px 16px rgba(75, 11, 232, 0.3) !important;
            }

            #hubspot-form-canada-full-registration .hs-button:active {
              transform: translateY(0) !important;
              box-shadow: 0 2px 4px rgba(75, 11, 232, 0.2) !important;
            }

            #hubspot-form-canada-full-registration .submitted-message {
              padding: 24px !important;
              background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;
              color: white !important;
              border-radius: 8px !important;
              font-weight: 600 !important;
              text-align: center !important;
              font-size: 16px !important;
              box-shadow: 0 4px 6px rgba(16, 185, 129, 0.2) !important;
            }

            #hubspot-form-canada-full-registration .hs-form-booleancheckbox-display {
              display: flex !important;
              align-items: flex-start !important;
            }

            #hubspot-form-canada-full-registration .hs-form-booleancheckbox-display input {
              margin-top: 4px !important;
            }
            `}</style>
            <div id="hubspot-form-canada-full-registration" ref={formContainerRef} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
