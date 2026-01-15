'use client';
import React, { useEffect, useRef, useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface ITxGuildHubspotFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ITxGuildHubspotForm({ isOpen, onClose }: ITxGuildHubspotFormProps) {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  
  useEffect(() => {
    if (isOpen && formContainerRef.current) {
      const initForm = () => {
        if (window.hbspt && formContainerRef.current) {
          window.hbspt.forms.create({
            portalId: '45377644',
            formId: '3f643673-2644-4bbb-a35a-12178b27d512',
            region: 'na1',
            target: `#hubspot-form-guild`,
            onFormSubmitted: () => {
              setShowSuccess(true);
              setTimeout(() => {
                onClose();
                setShowSuccess(false);
              }, 2500);
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
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-black border border-white/20 rounded-lg">
        
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-white/20 bg-black">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-white/60 uppercase tracking-[0.2em]">Kernel Access</span>
            </div>
            <h2 className="text-2xl font-black text-white">
              IT<span className="text-[#4B0BE8]">x</span> GUILD
            </h2>
            <p className="text-sm text-white/50 mt-1">
              Premier IT leadership membership
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white/70 hover:text-white" />
          </button>
        </div>
        
        {/* Form Content */}
        <div className="p-6 bg-white rounded-b-lg">
          {showSuccess ? (
            <div className="p-8 bg-green-500 text-white rounded-lg text-center animate-in fade-in duration-500">
              <CheckCircle className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Submission Successful!</h3>
              <p className="text-lg">Thank you for your interest in ITx Guild!</p>
            </div>
          ) : (
            <>
              <style jsx global>{`
            /* HubSpot Form Style Overrides for ITx Brand */
            #hubspot-form-guild .hs-form {
              font-family: inherit !important;
            }
            
            #hubspot-form-guild .hs-form-field label {
              color: #1e293b !important;
              font-weight: 600 !important;
              font-size: 14px !important;
              margin-bottom: 6px !important;
              display: block !important;
            }
            
            #hubspot-form-guild .hs-form-field label span.hs-form-required {
              color: #4B0BE8 !important;
            }
            
            #hubspot-form-guild .hs-input {
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
            
            #hubspot-form-guild .hs-input:focus {
              outline: none !important;
              border-color: #4B0BE8 !important;
              background: white !important;
              box-shadow: 0 0 0 3px rgba(75, 11, 232, 0.1) !important;
            }
            
            #hubspot-form-guild select.hs-input {
              appearance: none !important;
              background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234B0BE8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") !important;
              background-repeat: no-repeat !important;
              background-position: right 12px center !important;
              background-size: 20px !important;
              padding-right: 40px !important;
            }
            
            #hubspot-form-guild .hs-error-msgs {
              margin-top: 6px !important;
              margin-bottom: 0 !important;
              list-style: none !important;
              padding: 0 !important;
            }
            
            #hubspot-form-guild .hs-error-msg {
              color: #ef4444 !important;
              font-size: 13px !important;
              font-weight: 500 !important;
            }
            
            #hubspot-form-guild .hs-submit {
              margin-top: 24px !important;
              position: relative !important;
              z-index: 10 !important;
            }

            #hubspot-form-guild .hs-button,
            #hubspot-form-guild input[type="submit"],
            #hubspot-form-guild button[type="submit"] {
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

            #hubspot-form-guild .hs-button:hover:not(:disabled),
            #hubspot-form-guild input[type="submit"]:hover:not(:disabled),
            #hubspot-form-guild button[type="submit"]:hover:not(:disabled) {
              background: #3A0BB8 !important;
              transform: translateY(-1px) !important;
              box-shadow: 0 4px 12px rgba(75, 11, 232, 0.3) !important;
            }

            #hubspot-form-guild .hs-button:active,
            #hubspot-form-guild input[type="submit"]:active,
            #hubspot-form-guild button[type="submit"]:active {
              transform: translateY(0) !important;
            }

            #hubspot-form-guild .hs-button:disabled,
            #hubspot-form-guild input[type="submit"]:disabled,
            #hubspot-form-guild button[type="submit"]:disabled {
              opacity: 0.5 !important;
              cursor: not-allowed !important;
              pointer-events: none !important;
            }
            
            #hubspot-form-guild .hs-richtext {
              color: #4b5563 !important;
              font-size: 14px !important;
              line-height: 1.5 !important;
              margin-top: 8px !important;
            }
            
            #hubspot-form-guild .hs-richtext a {
              color: #4B0BE8 !important;
              text-decoration: underline !important;
            }
            
            #hubspot-form-guild .hs-form-field {
              margin-bottom: 20px !important;
            }
            
            #hubspot-form-guild textarea.hs-input {
              min-height: 100px !important;
              resize: vertical !important;
            }
            
            #hubspot-form-guild .hs-fieldtype-checkbox label,
            #hubspot-form-guild .hs-fieldtype-radio label {
              display: flex !important;
              align-items: flex-start !important;
              cursor: pointer !important;
              font-weight: 400 !important;
            }
            
            #hubspot-form-guild .hs-fieldtype-checkbox input,
            #hubspot-form-guild .hs-fieldtype-radio input {
              margin-right: 8px !important;
              margin-top: 2px !important;
            }
            
            /* Success message */
            #hubspot-form-guild .submitted-message {
              padding: 16px !important;
              background: #10b981 !important;
              color: white !important;
              border-radius: 6px !important;
              font-weight: 500 !important;
              text-align: center !important;
            }
              `}</style>
              <div id="hubspot-form-guild" ref={formContainerRef} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}