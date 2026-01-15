'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isForumsOpen, setIsForumsOpen] = useState(false);
  const [isMobileForumsOpen, setIsMobileForumsOpen] = useState(false);
  const forumsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (forumsRef.current && !forumsRef.current.contains(event.target as Node)) {
        setIsForumsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const forumItems = [
    { label: 'East', date: 'Mar 15-17', href: '/forums/miami-cto-cio-forum', disabled: false },
    { label: 'Central', date: 'June 14-16', href: '/forums/austin-cto-cio-forum', disabled: false },
    { label: 'Canada', date: 'August', href: '/forums/toronto-cto-cio-forum', disabled: false },
    { label: 'West', date: 'Oct 11-13', href: '/forums/las-vegas-cto-cio-forum', disabled: false },
    { label: 'National', date: 'Nov 8-10', href: '/forums/national-cto-cio-forum', disabled: false },
  ];

  const navItems = [
    { label: 'Kernel', href: '/kernel' },
    { label: 'Command Briefings', href: '/command-briefings' },
    { label: 'FutureScale Sessions', href: '/futurescale' },
    { label: 'Knowledge', href: '/knowledge' },
    { label: 'Sponsors', href: '/it-event-providers' },
  ];

  const navItemsBeforeForums = [
    { label: 'Kernel', href: '/kernel' },
  ];

  const navItemsAfterForums = [
    { label: 'Command Briefings', href: '/command-briefings' },
    { label: 'FutureScale Sessions', href: '/futurescale' },
    { label: 'Knowledge', href: '/knowledge' },
    { label: 'Sponsors', href: '/it-event-providers' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/home" className="block">
              <img
                src="/ITx Collective Logo Transparent.png"
                alt="ITx Collective"
                className="h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-6 flex items-baseline space-x-6">
              {navItemsBeforeForums.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white hover:text-[#4B0BE8] px-2 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-200 whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}

              {/* Forums Dropdown */}
              <div className="relative" ref={forumsRef}>
                <button
                  onClick={() => setIsForumsOpen(!isForumsOpen)}
                  className="text-gray-300 hover:text-white hover:text-[#4B0BE8] px-2 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-200 whitespace-nowrap flex items-center gap-1"
                >
                  Backbone Forums
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isForumsOpen ? 'rotate-180' : ''}`} />
                </button>

                {isForumsOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-black border border-gray-800 rounded-lg shadow-xl overflow-hidden">
                    {forumItems.map((forum) => (
                      forum.disabled ? (
                        <div
                          key={forum.href}
                          className="block px-4 py-3 text-gray-600 cursor-not-allowed opacity-50"
                        >
                          <div className="font-medium">{forum.label}</div>
                          <div className="text-xs text-gray-700">{forum.date}</div>
                        </div>
                      ) : (
                        <a
                          key={forum.href}
                          href={forum.href}
                          className="block px-4 py-3 text-gray-300 hover:bg-[#4B0BE8]/10 hover:text-[#4B0BE8] transition-colors duration-200"
                        >
                          <div className="font-medium">{forum.label}</div>
                          <div className="text-xs text-gray-500">{forum.date}</div>
                        </a>
                      )
                    ))}
                  </div>
                )}
              </div>

              {navItemsAfterForums.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white hover:text-[#4B0BE8] px-2 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-200 whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>


          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4B0BE8] p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-800">
              {navItemsBeforeForums.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-white hover:text-[#4B0BE8] block px-3 py-2 text-base font-medium uppercase tracking-wider transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Forums Dropdown */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsMobileForumsOpen(!isMobileForumsOpen)}
                  className="text-gray-300 hover:text-white hover:text-[#4B0BE8] w-full text-left px-3 py-2 text-base font-medium uppercase tracking-wider transition-colors duration-200 flex items-center justify-between"
                >
                  Backbone Forums
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileForumsOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMobileForumsOpen && (
                  <div className="pl-6 space-y-1">
                    {forumItems.map((forum) => (
                      forum.disabled ? (
                        <div
                          key={forum.href}
                          className="block px-3 py-2 text-sm text-gray-600 cursor-not-allowed opacity-50"
                        >
                          <div className="font-medium">{forum.label}</div>
                          <div className="text-xs text-gray-700">{forum.date}</div>
                        </div>
                      ) : (
                        <a
                          key={forum.href}
                          href={forum.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileForumsOpen(false);
                          }}
                          className="block px-3 py-2 text-sm text-gray-400 hover:text-[#4B0BE8] transition-colors duration-200"
                        >
                          <div className="font-medium">{forum.label}</div>
                          <div className="text-xs text-gray-600">{forum.date}</div>
                        </a>
                      )
                    ))}
                  </div>
                )}
              </div>

              {navItemsAfterForums.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-white hover:text-[#4B0BE8] block px-3 py-2 text-base font-medium uppercase tracking-wider transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}