import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Calendar, MapPin } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Exact navigation links from original website pughkarpov.com
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'BANKRUPTCY', path: '/bankruptcy' },
    { name: 'CRIMINAL AND TRAFFIC DEFENSE', path: '/criminal-traffic-defense' },
    { name: 'PERSONAL INJURY', path: '/personal-injury' },
    { name: 'Have A Question?', path: '/contact' },
  ];

  return (
    // Header is NOT sticky on scroll
    <header className="relative w-full z-40 bg-white">
      {/* Top information bar */}
      <div className="bg-[#111827] text-gray-200 text-xs sm:text-sm py-2 px-4 sm:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 font-['Poppins']">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-gray-300">
              2400 Princess Anne Rd, Virginia Beach, VA 23456
            </span>
          </div>

          <div className="flex items-center gap-5 text-xs sm:text-sm">
            <span className="hidden md:inline text-gray-400">
              AV-Rated Law Firm · Over 50 Years Combined Experience
            </span>
            <span className="hidden md:inline text-gray-600">|</span>
            <a
              href="tel:7577212390"
              className="text-white hover:text-amber-300 font-semibold transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Office: (757) 721-2390</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white border-b border-gray-200 py-3 sm:py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-6">
          {/* Logo ONLY as requested: removed the text name "Pugh & Karpov", kept logo only */}
          <Link to="/" className="flex items-center shrink-0 group py-1" title="Pugh & Karpov Law, PC">
            <img
              src="/assets/logo-Ds7Cltmw.png"
              alt="Pugh & Karpov Law Logo"
              className="h-16 sm:h-20 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links - Single line with proper spacing and whitespace-nowrap */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-['Montserrat'] text-xs xl:text-sm font-bold uppercase tracking-wider transition-colors relative py-2 whitespace-nowrap group ${
                    isActive ? 'text-[#DD3333]' : 'text-gray-800 hover:text-[#DD3333]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute left-0 bottom-0 h-[3px] rounded-full bg-[#DD3333] transition-all duration-300 ease-in-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Right Action: Book Consultation */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="font-['Montserrat'] px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#1E3A8A] hover:bg-blue-800 rounded-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-800 hover:text-[#1E3A8A] rounded transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7 text-gray-800" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-5 space-y-3 shadow-xl">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-['Montserrat'] px-4 py-3 text-sm font-bold uppercase tracking-wider rounded transition-colors ${
                      isActive
                        ? 'bg-red-50 text-[#DD3333]'
                        : 'text-gray-800 hover:text-[#1E3A8A] hover:bg-blue-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-gray-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="font-['Montserrat'] w-full py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white bg-[#1E3A8A] hover:bg-blue-800 rounded transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book Consultation</span>
              </button>

              <a
                href="tel:7577212390"
                className="font-['Poppins'] py-3 px-3 border border-gray-300 text-gray-800 rounded hover:border-[#1E3A8A] flex items-center justify-center gap-2 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-[#1E3A8A]" />
                <span>Office: (757) 721-2390</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
