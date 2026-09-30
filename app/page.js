'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import AttorneyProfiles from './components/AttorneyProfiles';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import { ArrowUp, Calendar } from 'lucide-react';

export default function HomePage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState('Civil Litigation');

  const handleOpenConsultation = (area = 'Civil Litigation') => {
    setSelectedPracticeArea(area);
    setConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-['Poppins'] text-base selection:bg-blue-600 selection:text-white">
      {/* Primary Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation('Civil Litigation')} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section with 5-image legal architecture carousel and 3 pillars */}
        <Hero onOpenConsultation={() => handleOpenConsultation('Civil Litigation')} />

        {/* 2. Practice Areas strictly in priority order:
               1. Civil Litigation
               2. Personal Injury
               3. Bankruptcy
               4. Criminal and Traffic Defense */}
        <PracticeAreas onOpenConsultation={() => handleOpenConsultation('Personal Injury')} />

        {/* 3. Attorney Profiles / About */}
        <AttorneyProfiles onOpenConsultation={() => handleOpenConsultation('Civil Litigation')} />

        {/* 4. Contact Information & Office Details */}
        <ContactSection preselectedArea={selectedPracticeArea} />
      </main>

      {/* Footer with full original disclaimers and notices */}
      <Footer />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={handleCloseConsultation}
        defaultPracticeArea={selectedPracticeArea}
      />

      {/* Floating Action: Book Consultation & Scroll To Top */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <button
          onClick={() => handleOpenConsultation('Civil Litigation')}
          className="font-['Montserrat'] flex items-center gap-2 px-5 py-3 bg-[#1e3a8a] hover:bg-blue-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-2xl hover:shadow-blue-900/40 transition-all cursor-pointer border border-blue-400/30"
        >
          <Calendar className="w-4 h-4 text-amber-300" />
          <span>Book Consultation</span>
        </button>

        <button
          onClick={scrollToTop}
          className="p-3 bg-white hover:bg-slate-100 text-slate-700 hover:text-[#1e3a8a] border border-slate-300 rounded-full shadow-md transition-all cursor-pointer"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
