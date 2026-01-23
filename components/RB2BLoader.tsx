'use client';

import { useEffect, useRef } from 'react';

export default function RB2BLoader() {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Skip loading if RB2B ID is not configured
    const rb2bId = process.env.NEXT_PUBLIC_RB2B_ID;
    if (!rb2bId) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('RB2B tracking script not loaded: NEXT_PUBLIC_RB2B_ID is not configured');
      }
      return;
    }

    // Only load the script once
    if (scriptLoaded.current) return;

    // Check if script already exists in DOM
    const existing = document.getElementById('rb2b-script');
    if (existing) {
      scriptLoaded.current = true;
      return;
    }

    const script = document.createElement('script');
    script.id = 'rb2b-script';
    script.src = `https://ddwl4m2hdecbv.cloudfront.net/b/${rb2bId}/${rb2bId}.js.gz`;
    script.async = true;

    script.onload = () => {
      console.log('RB2B tracking script loaded successfully');
      scriptLoaded.current = true;
    };

    script.onerror = () => {
      console.error('Failed to load RB2B tracking script');
      scriptLoaded.current = false;
    };

    document.body.appendChild(script);
  }, []); // Empty dependency array - only run once on mount

  return null;
}
