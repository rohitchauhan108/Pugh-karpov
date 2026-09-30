import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 text-sm border-t-4 border-[#1e3a8a] font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-slate-700">
          <div className="flex items-center gap-4">
            <img
              src="/assets/logo-Ds7Cltmw.png"
              alt="Pugh & Karpov Logo"
              className="h-12 w-auto object-contain bg-white/95 p-1 rounded"
            />
            <div>
              <span className="font-['Montserrat'] font-extrabold text-lg text-white tracking-wide block">
                Pugh &amp; Karpov Law, PC
              </span>
              <span className="text-xs tracking-wider uppercase text-amber-300 font-semibold">
                Virginia Beach, Virginia
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm font-semibold justify-center md:justify-end font-['Montserrat']">
            <a href="#" className="hover:text-amber-300 transition-colors">
              Home
            </a>
            <a href="#civil-litigation" className="hover:text-amber-300 transition-colors">
              Civil Litigation
            </a>
            <a href="#personal-injury" className="hover:text-amber-300 transition-colors">
              Personal Injury
            </a>
            <a href="#bankruptcy" className="hover:text-amber-300 transition-colors">
              Bankruptcy
            </a>
            <a href="#criminal-traffic" className="hover:text-amber-300 transition-colors">
              Criminal &amp; Traffic
            </a>
            <a href="#contact" className="hover:text-amber-300 transition-colors text-amber-300">
              Have A Question?
            </a>
          </div>
        </div>

        {/* Mandatory Legal Notices */}
        <div className="space-y-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-200">LEGAL DISCLAIMER: </strong>
            The use of the internet or the email contact form for communication does not establish
            an attorney-client relationship. Attorneys of Pugh and Karpov Law PC do not guarantee
            any particular outcome of the representation. Every case is different and fact specific,
            and the results obtained will be related to the facts and merits of the particular
            case.
          </p>
          <p>
            <strong className="text-slate-200">DEBT RELIEF AGENCY: </strong>
            Pursuant to federal law, Pugh &amp; Karpov is a debt relief agency and helps people file
            for consumer bankruptcy relief under title II of the United States Code.
          </p>
          <p>
            <strong className="text-slate-200">CONFIDENTIALITY NOTICE: </strong>
            The information contained in this electronic message is legally privileged and
            confidential under applicable law and is intended only for the use of the individual or
            entity named above.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Pugh &amp; Karpov Law, PC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="tel:7577212390" className="hover:text-white flex items-center gap-1.5 font-semibold text-white">
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>Office: (757) 721-2390</span>
            </a>
            <span>·</span>
            <span>2400 Princess Anne Rd, Virginia Beach, VA 23456</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
