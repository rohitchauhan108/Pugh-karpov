import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ConsultationModal from './components/ConsultationModal';

import HomePage from './pages/HomePage';
import BankruptcyPage from './pages/BankruptcyPage';
import CriminalTrafficPage from './pages/CriminalTrafficPage';
import PersonalInjuryPage from './pages/PersonalInjuryPage';
import ContactPage from './pages/ContactPage';

import { ArrowUp, Calendar } from 'lucide-react';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationArea, setConsultationArea] = useState('Bankruptcy');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenConsultation = (area = 'Bankruptcy') => {
    setConsultationArea(area);
    setConsultationOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 text-slate-800 flex flex-col font-['Poppins'] text-base antialiased selection:bg-blue-600 selection:text-white">
        {/* Navigation Bar - NOT sticky on scroll, with larger logo */}
        <Navbar onOpenConsultation={() => handleOpenConsultation('Bankruptcy')} />

        {/* Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenConsultation={() => handleOpenConsultation('Bankruptcy')} />}
            />
            <Route
              path="/bankruptcy"
              element={<BankruptcyPage onOpenConsultation={() => handleOpenConsultation('Bankruptcy')} />}
            />
            <Route
              path="/criminal-traffic-defense"
              element={<CriminalTrafficPage onOpenConsultation={() => handleOpenConsultation('Criminal and Traffic Defense')} />}
            />
            <Route
              path="/personal-injury"
              element={<PersonalInjuryPage onOpenConsultation={() => handleOpenConsultation('Personal Injury')} />}
            />
            <Route
              path="/contact"
              element={<ContactPage onOpenConsultation={() => handleOpenConsultation('Bankruptcy')} />}
            />
            {/* Fallback to home */}
            <Route
              path="*"
              element={<HomePage onOpenConsultation={() => handleOpenConsultation('Bankruptcy')} />}
            />
          </Routes>
        </main>

        {/* Footer - Only legal disclaimer & larger logo */}
        <Footer />

        {/* Modal */}
        <ConsultationModal
          isOpen={consultationOpen}
          onClose={() => setConsultationOpen(false)}
          defaultPracticeArea={consultationArea}
        />

        {/* Floating Scroll-To-Top button (appears only after scrolling, doesn't block hero) */}
        {showScrollTop && (
          <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
            <button
              onClick={() => handleOpenConsultation('Bankruptcy')}
              className="font-['Montserrat'] hidden sm:flex items-center gap-2 px-4 py-2.5 bg-[#1E3A8A] hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-all cursor-pointer border border-blue-400/30"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Book Consultation</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-3 bg-white hover:bg-slate-100 text-[#1E3A8A] border border-gray-300 rounded-full shadow-lg transition-all cursor-pointer hover:border-[#1E3A8A]"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}
