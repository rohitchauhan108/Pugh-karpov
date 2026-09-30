import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, Calendar, MapPin } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Civil Litigation', href: '#civil-litigation' },
    { name: 'Personal Injury', href: '#personal-injury' },
    { name: 'Bankruptcy', href: '#bankruptcy' },
    { name: 'Criminal & Traffic', href: '#criminal-traffic' },
    { name: 'Attorneys', href: '#attorneys' },
    { name: 'Have A Question?', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top information bar (Clean office info without emergency badges) */}
      <div className="bg-[#1e3a8a] text-white text-sm py-2 px-4 sm:px-8 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 font-['Poppins']">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <MapPin className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-blue-100">
              2400 Princess Anne Rd, Virginia Beach, VA 23456
            </span>
          </div>

          <div className="flex items-center gap-5 text-xs sm:text-sm">
            <span className="hidden md:inline text-blue-200">
              AV-Rated Firm · Over 50 Years Combined Experience
            </span>
            <span className="hidden md:inline text-blue-400">|</span>
            <a
              href="tel:7577212390"
              className="text-white hover:text-amber-300 font-semibold transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>Office: (757) 721-2390</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main desktop & mobile navbar */}
      <nav
        className={`transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3'
            : 'bg-white/90 backdrop-blur-sm shadow-sm border-b border-slate-200/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          {/* Logo & Brand with Montserrat */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/assets/logo-Ds7Cltmw.png"
              alt="Pugh & Karpov Law"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-['Montserrat'] font-extrabold text-base sm:text-lg text-[#1e3a8a] tracking-tight group-hover:text-blue-700 transition-colors leading-tight">
                PUGH &amp; KARPOV
              </span>
              <span className="text-[10px] sm:text-xs tracking-wider uppercase font-semibold text-amber-700">
                Law, PC · Virginia Beach
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-['Montserrat'] px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#1e3a8a] transition-colors relative group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#1e3a8a] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Compact Menu for Medium-Large screens (1024px-1279px) */}
          <div className="hidden lg:flex xl:hidden items-center gap-1">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-['Montserrat'] px-2 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#1e3a8a] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action: Book Consultation */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="font-['Montserrat'] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1e3a8a] hover:bg-blue-800 rounded-sm shadow-xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-700 hover:text-[#1e3a8a] rounded-sm transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-3 shadow-xl">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-['Montserrat'] px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-slate-800 hover:text-[#1e3a8a] hover:bg-blue-50 rounded transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="font-['Montserrat'] w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-white bg-[#1e3a8a] hover:bg-blue-800 rounded transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book Consultation</span>
              </button>

              <a
                href="tel:7577212390"
                className="font-['Poppins'] py-2.5 px-3 border border-slate-300 text-slate-800 rounded hover:border-[#1e3a8a] flex items-center justify-center gap-2 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-[#1e3a8a]" />
                <span>Office: (757) 721-2390</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
