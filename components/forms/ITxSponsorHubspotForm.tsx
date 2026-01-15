'use client';
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';

export function ITxSponsorHubspotForm() {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const initForm = () => {
      if (window.hbspt && formContainerRef.current) {
        window.hbspt.forms.create({
          portalId: '45377644',
          formId: '567b72c8-99ea-4842-92d2-db0ff3305e99',
          region: 'na1',
          target: `#hubspot-form-sponsor`,
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
  }, []);

  return (
    <div className="w-full flex justify-center">
      {showSuccess ? (
        <div className="p-8 bg-green-500 text-white rounded-lg text-center animate-in fade-in duration-500 w-full max-w-[600px]">
          <CheckCircle className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Submission Successful!</h3>
          <p className="text-lg">Thank you! We'll be in touch about partnership opportunities.</p>
        </div>
      ) : (
        <>
          <style jsx global>{`
        #hubspot-form-sponsor {
          max-width: 600px !important;
          margin: 0 auto !important;
        }

        #hubspot-form-sponsor .hs-form {
          font-family: inherit !important;
        }

        #hubspot-form-sponsor .hs-form-field label {
          color: #1e293b !important;
          font-weight: 600 !important;
          font-size: 14px !important;
          margin-bottom: 6px !important;
          display: block !important;
        }

        #hubspot-form-sponsor .hs-form-field label span.hs-form-required {
          color: #4B0BE8 !important;
        }

        #hubspot-form-sponsor .hs-input {
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

        #hubspot-form-sponsor .hs-input:focus {
          outline: none !important;
          border-color: #4B0BE8 !important;
          background: white !important;
          box-shadow: 0 0 0 3px rgba(75, 11, 232, 0.1) !important;
        }

        #hubspot-form-sponsor select.hs-input {
          appearance: none !important;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234B0BE8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") !important;
          background-repeat: no-repeat !important;
          background-position: right 12px center !important;
          background-size: 20px !important;
          padding-right: 40px !important;
        }

        #hubspot-form-sponsor .hs-error-msgs {
          margin-top: 6px !important;
          margin-bottom: 0 !important;
          list-style: none !important;
          padding: 0 !important;
        }

        #hubspot-form-sponsor .hs-error-msg {
          color: #ef4444 !important;
          font-size: 13px !important;
          font-weight: 500 !important;
        }

        #hubspot-form-sponsor .hs-submit {
          margin-top: 24px !important;
          position: relative !important;
          z-index: 10 !important;
        }

        #hubspot-form-sponsor .hs-button,
        #hubspot-form-sponsor input[type="submit"],
        #hubspot-form-sponsor button[type="submit"] {
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
          pointer-events: auto !important;
          position: relative !important;
          z-index: 10 !important;
          display: block !important;
          -webkit-appearance: none !important;
        }

        #hubspot-form-sponsor .hs-button:hover:not(:disabled),
        #hubspot-form-sponsor input[type="submit"]:hover:not(:disabled),
        #hubspot-form-sponsor button[type="submit"]:hover:not(:disabled) {
          background: #3A0BB8 !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(75, 11, 232, 0.3) !important;
        }

        #hubspot-form-sponsor .hs-button:active,
        #hubspot-form-sponsor input[type="submit"]:active,
        #hubspot-form-sponsor button[type="submit"]:active {
          transform: translateY(0) !important;
        }

        #hubspot-form-sponsor .hs-button:disabled,
        #hubspot-form-sponsor input[type="submit"]:disabled,
        #hubspot-form-sponsor button[type="submit"]:disabled {
          opacity: 0.5 !important;
          cursor: not-allowed !important;
          pointer-events: none !important;
        }

        #hubspot-form-sponsor .hs-richtext {
          color: #4b5563 !important;
          font-size: 14px !important;
          line-height: 1.5 !important;
          margin-top: 8px !important;
        }

        #hubspot-form-sponsor .hs-richtext a {
          color: #4B0BE8 !important;
          text-decoration: underline !important;
        }

        #hubspot-form-sponsor .hs-form-field {
          margin-bottom: 20px !important;
        }

        #hubspot-form-sponsor textarea.hs-input {
          min-height: 100px !important;
          resize: vertical !important;
        }

        #hubspot-form-sponsor .hs-fieldtype-checkbox,
        #hubspot-form-sponsor .hs-fieldtype-radio {
          margin-bottom: 24px !important;
        }

        #hubspot-form-sponsor .hs-fieldtype-checkbox .hs-form-field > label,
        #hubspot-form-sponsor .hs-fieldtype-radio .hs-form-field > label {
          color: #1e293b !important;
          font-weight: 600 !important;
          font-size: 14px !important;
          margin-bottom: 12px !important;
          display: block !important;
        }

        #hubspot-form-sponsor .hs-form-checkbox-display,
        #hubspot-form-sponsor .hs-form-radio-display {
          display: block !important;
          margin-top: 8px !important;
        }

        #hubspot-form-sponsor .hs-form-checkbox,
        #hubspot-form-sponsor .hs-form-radio {
          display: flex !important;
          align-items: center !important;
          margin-bottom: 12px !important;
          padding: 12px 16px !important;
          background: #f8fafc !important;
          border: 2px solid #e2e8f0 !important;
          border-radius: 8px !important;
          transition: all 200ms !important;
          cursor: pointer !important;
        }

        #hubspot-form-sponsor .hs-form-checkbox:hover,
        #hubspot-form-sponsor .hs-form-radio:hover {
          background: white !important;
          border-color: #4B0BE8 !important;
          box-shadow: 0 2px 8px rgba(75, 11, 232, 0.08) !important;
        }

        #hubspot-form-sponsor .hs-form-checkbox input[type="checkbox"],
        #hubspot-form-sponsor .hs-form-radio input[type="radio"] {
          width: 20px !important;
          height: 20px !important;
          min-width: 20px !important;
          margin: 0 12px 0 0 !important;
          cursor: pointer !important;
          accent-color: #4B0BE8 !important;
        }

        #hubspot-form-sponsor .hs-form-checkbox label span,
        #hubspot-form-sponsor .hs-form-radio label span {
          color: #1e293b !important;
          font-weight: 500 !important;
          font-size: 15px !important;
          line-height: 1.5 !important;
          cursor: pointer !important;
          margin: 0 !important;
        }

        #hubspot-form-sponsor .submitted-message {
          padding: 16px !important;
          background: #10b981 !important;
          color: white !important;
          border-radius: 6px !important;
          font-weight: 500 !important;
          text-align: center !important;
        }
          `}</style>
          <div id="hubspot-form-sponsor" ref={formContainerRef} />
        </>
      )}
    </div>
  );
}
