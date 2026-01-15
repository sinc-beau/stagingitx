'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ForumsPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to backbone forums by default
    router.push('/backbone-cto-cio-forums');
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Backbone Forums...</h1>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4B0BE8] mx-auto"></div>
      </div>
    </div>
  );
}