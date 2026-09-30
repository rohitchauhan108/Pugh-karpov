import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, ChevronLeft, ChevronRight, Award, Scale, Calendar } from 'lucide-react';

export default function Hero({ onOpenConsultation }) {
  // All 5 original high-resolution hero slides from pughkarpov.com
  const slides = [
    {
      image: '/assets/home5-i7sEHa6v.jpg',
      label: 'Virginia Beach Trial Attorneys',
    },
    {
      image: '/assets/home1-DFJEHY55.jpg',
      label: 'Civil Litigation & Courtroom Advocacy',
    },
    {
      image: '/assets/home2-DRRhvbOt.jpg',
      label: 'Personal Injury & Hampton Roads Justice',
    },
    {
      image: '/assets/home3-ByCrLLV2.jpg',
      label: 'Bankruptcy Protection & Fresh Starts',
    },
    {
      image: '/assets/home4-NvBDFwU5.jpg',
      label: 'Criminal & Traffic Offense Defense',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Exact 3 Core Pillars from original website (H5 component)
  const pillars = [
    {
      title: 'Experience',
      icon: <Award className="w-8 h-8 text-[#1e3a8a]" />,
      text: 'Legal troubles or challenges often invite feelings of anxiety and fear. Putting them to rest and making legal problems go away is our specialty. Founders of Pugh and Karpov Law, Virginia attorneys Gregory Pugh and Anton Karpov put their superior trial skills, advanced Law Degrees (LLM) from William and Mary School of Law, and over 50 years of legal experience to benefit their clients. When the opportunity arose in 2019, they merged their law practices, expanding their area of expertise. They built Pugh & Karpov, a premier Virginia full-service law firm with the mission of providing expert legal advice and zealous representation to anyone in need.',
    },
    {
      title: 'Integrity',
      icon: <ShieldCheck className="w-8 h-8 text-[#1e3a8a]" />,
      text: 'At Pugh & Karpov, we strive to approach each client’s legal issue with the utmost integrity and pride ourselves in meeting the highest expectations of professional conduct, ethics, and diligence. Our commitment to integrity has helped make Pugh and Karpov an AV-Rated firm, a distinction given only to those law firms who demonstrate the highest ethical standards and professional excellence.',
    },
    {
      title: 'Results',
      icon: <Scale className="w-8 h-8 text-[#1e3a8a]" />,
      text: 'Our attorneys are ready to extend a helping hand to those in need and always prepared to fight for their clients, consistently delivering the best results possible. When Pugh & Karpov represent you in litigation, negotiate favorable terms, or work on any other legal matter, they do it with one goal in mind – make you wholly satisfied with the outcome.',
    },
  ];

  return (
    <section className="relative pt-28 sm:pt-32 bg-white">
      {/* Hero Visual Banner with 5 rotating images and dark blue overlay */}
      <div className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[80vh] min-h-[500px] overflow-hidden bg-slate-950">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.label}
              className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
            />
            {/* Elegant deep blue & dark gradient overlay for optimal readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428]/85 via-[#1e3a8a]/60 to-[#0a1428]/80"></div>
            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          </div>
        ))}

        {/* Hero Foreground Content */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col justify-center items-start text-white">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-400/20 border border-amber-300/40 text-amber-300 text-xs sm:text-sm font-['Montserrat'] font-bold uppercase tracking-wider rounded-sm backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>AV-Rated Law Firm · Virginia Beach</span>
            </div>

            <h1 className="font-['Montserrat'] text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-md">
              Experience. Integrity.{' '}
              <span className="text-amber-300">Results.</span>
            </h1>

            <p className="font-['Montserrat'] text-xl sm:text-2xl text-blue-100 italic font-medium tracking-wide">
              “Never say Never…”
            </p>

            <p className="font-['Poppins'] text-base sm:text-lg text-slate-100 leading-relaxed max-w-2xl font-normal">
              Founders of Pugh and Karpov Law, Virginia attorneys Gregory Pugh and Anton Karpov put
              their superior trial skills, advanced Law Degrees (LL.M.) from William &amp; Mary, and
              over 50 years of legal experience to benefit their clients.
            </p>

            {/* Action Buttons: Prominent Book Consultation and Have A Question */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onOpenConsultation}
                className="font-['Montserrat'] px-7 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm uppercase tracking-wider rounded-sm shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </button>

              <a
                href="#contact"
                className="font-['Montserrat'] px-7 py-4 bg-[#1e3a8a] hover:bg-blue-800 text-white font-bold text-sm uppercase tracking-wider rounded-sm shadow-lg transition-all flex items-center gap-2 cursor-pointer border border-blue-400/40"
              >
                <span>Have A Question?</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </a>

              <a
                href="#practice-areas"
                className="font-['Montserrat'] px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm uppercase tracking-wider rounded-sm backdrop-blur-xs transition-all border border-white/25"
              >
                Explore Practice Areas
              </a>
            </div>
          </div>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-6 left-4 sm:left-8 z-30 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`transition-all duration-300 cursor-pointer ${
                  currentSlide === i
                    ? 'w-8 h-2 bg-amber-300 rounded-full'
                    : 'w-2 h-2 bg-white/50 hover:bg-white rounded-full'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Slide Controls */}
          <div className="absolute bottom-5 right-4 sm:right-8 z-30 hidden sm:flex items-center gap-2">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-sm border border-white/20 transition-colors cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-sm border border-white/20 transition-colors cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Three Pillars: Experience, Integrity, Results (Exact H5 text from original website in 16px normal text size) */}
      <div className="relative py-16 px-4 sm:px-8 bg-slate-50 border-b border-slate-200 bg-subtle-lines">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-extrabold text-[#1e3a8a] tracking-wide mb-2">
              Experience. Integrity. Results.
            </h2>
            <p className="font-['Montserrat'] text-base sm:text-lg text-slate-600 italic">
              “Never say Never…”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-200 p-7 sm:p-8 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-[#1e3a8a] border border-blue-100">
                    {pillar.icon}
                  </div>
                  <h3 className="font-['Montserrat'] text-xl font-bold text-[#1e3a8a]">
                    {pillar.title}
                  </h3>
                  <p className="font-['Poppins'] text-base text-slate-700 leading-relaxed text-justify">
                    {pillar.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
