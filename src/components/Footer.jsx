import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Bankruptcy', path: '/bankruptcy' },
    { name: 'Criminal and Traffic Defense', path: '/criminal-traffic-defense' },
    { name: 'Personal Injury', path: '/personal-injury' },
    { name: 'Have A Question?', path: '/contact' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 text-sm border-t-4 border-[#1E3A8A] font-['Poppins']">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-8 text-center">
        {/* Logo and Brand */}
        <div className="flex justify-center">
          <Link to="/" className="inline-flex items-center gap-4 group">
            <img
              src="/assets/logo-Ds7Cltmw.png"
              alt="Pugh & Karpov Law Logo"
              className="h-16 sm:h-20 w-auto object-contain bg-white/95 p-1.5 rounded shadow-sm transition-transform group-hover:scale-105"
            />
            <div className="text-left">
              <span className="font-['Montserrat'] font-extrabold text-xl sm:text-2xl text-white tracking-wide block">
                Pugh &amp; Karpov Law, PC
              </span>
              <span className="text-xs sm:text-sm tracking-wider uppercase text-amber-300 font-semibold block">
                Virginia Beach, Virginia
              </span>
            </div>
          </Link>
        </div>

        {/* Navlinks in footer as requested ("show the navlinks in the footer also") */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-2 border-t border-slate-800 text-xs sm:text-sm font-semibold font-['Montserrat'] uppercase tracking-wider">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-300 hover:text-amber-300 transition-colors whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-4 border-t border-slate-800/80">
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-4xl mx-auto">
            <strong className="text-slate-200">LEGAL DISCLAIMER: </strong>
            The use of the internet or the email contact form for communication does not establish an
            attorney-client relationship. Attorneys of Pugh and Karpov Law PC do not guarantee any
            particular outcome of the representation. Every case is different and fact specific, and
            the results obtained will be related to the facts and merits of the particular case.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-slate-800/60 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Pugh &amp; Karpov Law, PC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
