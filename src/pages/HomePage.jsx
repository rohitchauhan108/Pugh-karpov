import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  ShieldCheck,
  Scale,
  ArrowRight,
  Calendar,
  Phone,
  FileSpreadsheet,
  ShieldAlert,
  Car,
  CheckCircle2,
  MapPin,
  Clock,
  Landmark,
  BadgeCheck,
  Sparkles,
} from 'lucide-react';

export default function HomePage({ onOpenConsultation }) {
  // 5 original hero images from pughkarpov.com
  const heroImages = [
    '/assets/home5-i7sEHa6v.jpg',
    '/assets/home1-DFJEHY55.jpg',
    '/assets/home2-DRRhvbOt.jpg',
    '/assets/home3-ByCrLLV2.jpg',
    '/assets/home4-NvBDFwU5.jpg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotating background slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Key Practice Areas for modern homepage gateway
  const practiceCards = [
    {
      title: 'Bankruptcy Protection',
      subtitle: 'Chapter 7 & Chapter 13 Debt Relief',
      icon: FileSpreadsheet,
      description:
        'Stop creditor calls, garnishments, foreclosures, and repossessions. We provide honest counsel and Chapter 7 filings at an affordable $800 attorney fee (plus court fees) to grant you a true fresh start.',
      highlights: ['Stop Creditor Harassment', '$800 Chapter 7 Attorney Fee', 'Debt Discharge Guidance'],
      link: '/bankruptcy',
      cta: 'Explore Bankruptcy',
      badge: 'Fresh Start',
    },
    {
      title: 'Criminal & Traffic Defense',
      subtitle: 'Felony, Misdemeanor & DUI Defense',
      icon: ShieldAlert,
      description:
        'Over 45 years combined trial defense experience defending adults and juveniles. Dedicated trial preparation for DUI, reckless driving, drug charges, weapons offenses, and bond hearings.',
      highlights: ['DUI & Reckless Driving', '10 Charge Defense Areas', 'Virginia General District & Circuit'],
      link: '/criminal-traffic-defense',
      cta: 'Explore Defense',
      badge: '45+ Yrs Defense',
    },
    {
      title: 'Personal Injury',
      subtitle: 'Contingency Fee Representation',
      icon: Car,
      description:
        'Dedicated to fighting for Hampton Roads accident victims. From auto and truck collisions to slip-and-fall and wrongful death cases. You pay nothing in attorney fees unless we recover funds for you.',
      highlights: ['No Recovery, No Fee', 'Direct Attorney Attention', 'Auto, Truck & Malpractice'],
      link: '/personal-injury',
      cta: 'Explore Injury Law',
      badge: 'No Win, No Fee',
    },
    {
      title: 'Civil Litigation & Contracts',
      subtitle: 'Courtroom Toughness & Advocacy',
      icon: Scale,
      description:
        'Representing individuals and businesses in high-stakes civil disputes, contract enforcement, and appellate litigation before the Virginia Court of Appeals and Virginia Supreme Court.',
      highlights: ['Contract Disputes', 'Court of Appeals Experience', 'Aggressive Trial Advocacy'],
      link: '/contact',
      cta: 'Request Legal Review',
      badge: 'Appellate Experience',
    },
  ];

  // Exact 3 Pillars from H5 in bundle.js
  const pillars = [
    {
      title: 'Experience',
      badge: '50+ Years Combined',
      icon: Award,
      tagline: 'Deep Roots in Tidewater Courts',
      text: 'Legal troubles or challenges often invite feelings of anxiety and fear. Putting them to rest and making legal problems go away is our specialty. Founders of Pugh and Karpov Law, Virginia attorneys Gregory Pugh and Anton Karpov put their superior trial skills, advanced Law Degrees (LLM) from William and Mary School of Law, and over 50 years of legal experience to benefit their clients. When the opportunity arose in 2019, they merged their law practices, expanding their area of expertise. They built Pugh & Karpov, a premier Virginia full-service law firm with the mission of providing expert legal advice and zealous representation to anyone in need.',
    },
    {
      title: 'Integrity',
      badge: 'AV Preeminent Rated',
      icon: ShieldCheck,
      tagline: 'Highest Ethical Standards',
      text: 'At Pugh & Karpov, we strive to approach each client’s legal issue with the utmost integrity and pride ourselves in meeting the highest expectations of professional conduct, ethics, and diligence. Our commitment to integrity has helped make Pugh and Karpov an AV-Rated firm, a distinction given only to those law firms who demonstrate the highest ethical standards and professional excellence.',
    },
    {
      title: 'Results',
      badge: 'Client-Centered Focus',
      icon: Scale,
      tagline: 'Focused on Your Satisfaction',
      text: 'Our attorneys are ready to extend a helping hand to those in need and always prepared to fight for their clients, consistently delivering the best results possible. When Pugh & Karpov represent you in litigation, negotiate favorable terms, or work on any other legal matter, they do it with one goal in mind – make you wholly satisfied with the outcome.',
    },
  ];

  // Key Differentiators / Why Choose Us
  const whyChooseUs = [
    {
      title: 'William & Mary Law (LL.M.) Credentials',
      description:
        'Both partners hold advanced Master of Laws degrees from the prestigious College of William & Mary, ensuring elite legal research and advanced courtroom acumen on every case.',
      icon: <Landmark className="w-6 h-6 text-[#1E3A8A]" />,
    },
    {
      title: 'Boutique Personal Attention',
      description:
        'Unlike large billboard volume firms that treat clients like case numbers, you work directly with experienced attorneys who invest the time to understand your unique situation.',
      icon: <BadgeCheck className="w-6 h-6 text-[#1E3A8A]" />,
    },
    {
      title: 'Proven Trial Warriors',
      description:
        'With former public defense leadership and over 50 years of courtroom presence, we have defended clients in hundreds of felony trials, bench hearings, and appellate arguments.',
      icon: <ShieldCheck className="w-6 h-6 text-[#1E3A8A]" />,
    },
    {
      title: 'Transparent & Accessible Fees',
      description:
        'No hidden costs. Flat $800 attorney fees for Chapter 7 bankruptcy and 100% contingency fee representation for personal injury victims with zero out-of-pocket legal expenses.',
      icon: <Sparkles className="w-6 h-6 text-[#1E3A8A]" />,
    },
  ];

  // Tidewater Courts We Actively Serve
  const courtsServed = [
    'Virginia Beach Circuit & General District Court',
    'Norfolk General District & Circuit Court',
    'Chesapeake General District & Circuit Court',
    'Portsmouth Judicial Center',
    'Newport News & Hampton General District Courts',
    'U.S. Bankruptcy Court for Eastern District of Virginia',
    'Virginia Court of Appeals (Richmond & Salem)',
    'Supreme Court of Virginia',
  ];

  // Exact Attorneys - ONE PER ROW
  const attorneys = [
    {
      name: 'Gregory Pugh',
      role: 'Attorney at Law · Managing Partner',
      credentials: ['Pettit College of Law J.D. 1981', 'William & Mary School of Law LL.M. 1991', 'Virginia Bar 1988'],
      image: '/assets/Gregory-YG6h9GJw.jpg',
      bio: 'Attorney Gregory Pugh obtained his Juris Doctor degree from Pettit College of Law at Ohio Northern University in 1981 and advanced Master of Laws Degree (LLM) was awarded to him by the Law School at the College of William and Mary in 1991. He has actively practiced in Virginia courts since 1988 and opened his own practice in 1996, specializing in civil litigation, bankruptcy, traffic and criminal defense. He represents clients in all courts in the greater Tidewater area and has argued cases before the Virginia Court of Appeals and the Virginia Supreme Court. It will be very hard to find another lawyer who can match Mr. Pugh’s legal experience or go toe-to-toe against him in the courtroom. But despite his toughness when he takes a stand protecting his clients, Mr. Pugh is a very personable and caring person, who also appointed by the courts to protect interest of children and mentally-ill individuals.',
      phone: '(757) 426-7660',
      directLine: 'Office: (757) 721-2390',
    },
    {
      name: 'Anton A. Karpov',
      role: 'Attorney at Law · Partner',
      credentials: ['Moscow State University 1999 (Contracts & Civil)', 'William & Mary School of Law LL.M. 2006', 'Virginia Bar 2007'],
      image: '/assets/newImage-CjVRoL-9.jpg',
      bio: 'Attorney Anton Karpov, obtained his first law degree from Moscow State University in 1999 with the specialty in Contracts and Civil Litigation. After immigrating to the United States in 1999, he had to overcame many challenges to earn an advanced Master of Laws Degree (LLM) from Law School at the College of William and Mary in 2006. Since 2007 he practiced law in Virginia courts and represented hundreds of clients as a Public Defender. He tried every case imaginable – from DUI and juvenile delinquency cases to a drug, firearm, robbery, and homicide charges. Before leaving the public service, he worked as a supervisor of an adult felony team and he carried his trial experience into his private practice. When you or someone close to you is in trouble and you need a courtroom warrior like Mr. Karpov. He is always honest and forthcoming with his clients, always ready to fight defending their rights and ready to expertly defend you.',
      phone: '(757) 907-9075',
      directLine: 'Office: (757) 721-2390',
    },
  ];

  return (
    <div className="font-['Poppins']">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Clean, immersive, without dots or arrows)                */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[72vh] sm:h-[78vh] lg:h-[84vh] min-h-[540px] overflow-hidden bg-slate-950 flex items-center">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={img}
              alt="Virginia Courthouse and Legal Counsel"
              className="w-full h-full object-cover object-center filter brightness-95"
            />
            {/* Deep logo blue gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428]/95 via-[#1E3A8A]/75 to-[#0a1428]/90"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 flex flex-col justify-center items-start text-white">
          <div className="max-w-3xl space-y-6">
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

            <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-2xl font-normal">
              Founders of Pugh and Karpov Law, Virginia attorneys Gregory Pugh and Anton Karpov put
              their superior trial skills, advanced Law Degrees (LL.M.) from William &amp; Mary, and
              over 50 years of legal experience to benefit their clients.
            </p>

            {/* Action buttons with clean styling */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="font-['Montserrat'] px-7 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-sm shadow-xl transition-all flex items-center gap-2 cursor-pointer hover:shadow-amber-500/20"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Book Consultation</span>
              </button>

              <Link
                to="/contact"
                className="font-['Montserrat'] px-7 py-3.5 bg-[#1E3A8A] hover:bg-blue-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-sm shadow-xl transition-all flex items-center gap-2 border border-blue-400/40"
              >
                <span>Have A Question?</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUST METRIC STRIP (NEW MODERN SECTION)                                */}
      {/* ========================================================================= */}
      <section className="bg-[#111827] text-white py-6 border-b border-gray-800 font-['Montserrat']">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r border-gray-800 last:border-none p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 block">50+</span>
              <span className="text-xs uppercase tracking-wider text-gray-300 mt-1 block">
                Years Combined Trial Experience
              </span>
            </div>
            <div className="border-r border-gray-800 last:border-none p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-white block">AV-Rated</span>
              <span className="text-xs uppercase tracking-wider text-gray-300 mt-1 block">
                Highest Ethical Distinction
              </span>
            </div>
            <div className="border-r border-gray-800 last:border-none p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 block">LL.M.</span>
              <span className="text-xs uppercase tracking-wider text-gray-300 mt-1 block">
                William &amp; Mary Advanced Law Degrees
              </span>
            </div>
            <div className="p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-white block">$0 Upfront</span>
              <span className="text-xs uppercase tracking-wider text-gray-300 mt-1 block">
                Personal Injury Contingency Basis
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PRACTICE AREAS GATEWAY (NEW MODERN SECTION)                            */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gray-50 border-b border-gray-200 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-['Montserrat'] text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Virginia Legal Counsel
            </span>
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A]">
              Areas of Legal Focus
            </h2>
            <p className="text-base text-gray-600">
              Dedicated trial representation across bankruptcy, defense, personal injury, and civil litigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#1E3A8A]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 group-hover:bg-[#1E3A8A] transition-all duration-300 flex items-center justify-center">
                      <card.icon className="w-8 h-8 text-[#1E3A8A] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-['Montserrat'] text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                      {card.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-['Montserrat'] text-xl font-bold text-gray-900 group-hover:text-[#1E3A8A] transition-colors">
                      {card.title}
                    </h3>
                    <p className="font-['Montserrat'] text-xs font-semibold text-gray-500 uppercase tracking-wide mt-1">
                      {card.subtitle}
                    </p>
                  </div>

                  <p className="text-base text-gray-600 leading-relaxed">
                    {card.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-gray-100 text-sm text-gray-700">
                    {card.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-100">
                  <Link
                    to={card.link}
                    className="font-['Montserrat'] w-full py-2.5 px-4 bg-gray-50 group-hover:bg-[#1E3A8A] text-[#1E3A8A] group-hover:text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THREE PILLARS SECTION (MODERNIZED CARD PRESENTATION)                   */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-20 px-4 sm:px-8 border-b border-gray-200 bg-subtle-lines">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="font-['Montserrat'] text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Our Core Philosophy
            </span>
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-wide">
              Experience. Integrity. Results.
            </h2>
            <p className="font-['Montserrat'] text-xl text-gray-600 italic">
              “Never say Never…”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-200 p-8 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top colored accent line */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-[#1E3A8A] rounded-b-md opacity-80 group-hover:opacity-100 transition-opacity"></div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 group-hover:bg-[#1E3A8A] group-hover:scale-105 transition-all duration-300">
                      <pillar.icon className="w-9 h-9 text-[#1E3A8A] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-['Montserrat'] text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                      {pillar.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1E3A8A]">
                      {pillar.title}
                    </h3>
                    <p className="font-['Montserrat'] text-xs font-semibold uppercase tracking-wider text-gray-400 mt-1">
                      {pillar.tagline}
                    </p>
                  </div>

                  <p className="text-base text-gray-700 leading-relaxed text-justify">
                    {pillar.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHY CLIENTS CHOOSE US (NEW MODERN SECTION)                             */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-['Montserrat'] text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
              The Pugh &amp; Karpov Difference
            </span>
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Why Clients Choose Our Firm
            </h2>
            <p className="text-base text-gray-300">
              We combine courtroom toughness with compassionate, honest guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 sm:p-7 space-y-3 backdrop-blur-xs hover:border-amber-400/60 transition-colors"
              >
                <div className="p-3 bg-slate-700 rounded-xl w-fit text-amber-300">
                  {item.icon}
                </div>
                <h3 className="font-['Montserrat'] text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-base text-gray-300 leading-relaxed font-['Poppins']">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quote Banner */}
          <div className="bg-gradient-to-r from-blue-900/60 via-slate-800 to-blue-900/60 border border-blue-500/30 rounded-2xl p-8 text-center max-w-4xl mx-auto space-y-3">
            <p className="font-['Montserrat'] text-lg sm:text-xl font-medium text-blue-100 italic">
              “When you hire Pugh and Karpov you can be rest assured that we will take time to get to
              know you and your situation. We never treat our clients like a case number.”
            </p>
            <p className="font-['Montserrat'] text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400">
              — Pugh &amp; Karpov Law, PC · Virginia Beach
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. GET TO KNOW OUR ATTORNEYS - ONE PER ROW                                */}
      {/* ========================================================================= */}
      <section className="bg-gray-50 py-20 px-4 sm:px-8 bg-grid-pattern">
        <div className="max-w-5xl mx-auto space-y-14">
          <div className="text-center space-y-3">
            <span className="font-['Montserrat'] text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Experienced Partners
            </span>
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A]">
              Get To Know Our Attorneys
            </h2>
            <p className="font-['Montserrat'] text-base sm:text-lg text-gray-600">
              Meet the legal minds behind Pugh &amp; Karpov
            </p>
          </div>

          {/* Single Column Stack: Exactly one attorney per row */}
          <div className="flex flex-col gap-12">
            {attorneys.map((attorney, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col md:flex-row items-stretch"
              >
                {/* Photo Column */}
                <div className="relative md:w-80 lg:w-96 shrink-0 bg-slate-900 overflow-hidden min-h-[340px] md:min-h-full">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full h-full object-cover object-top filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent md:hidden"></div>
                  <div className="absolute bottom-4 left-6 right-6 md:hidden">
                    <h3 className="font-['Montserrat'] text-2xl font-bold text-white drop-shadow">
                      {attorney.name}
                    </h3>
                    <p className="font-['Montserrat'] text-xs font-semibold text-amber-300 uppercase tracking-wider">
                      {attorney.role}
                    </p>
                  </div>
                </div>

                {/* Content Column */}
                <div className="p-6 sm:p-10 flex flex-col justify-between flex-grow space-y-6">
                  <div className="space-y-4">
                    <div className="hidden md:block">
                      <h3 className="font-['Montserrat'] text-3xl font-extrabold text-[#1E3A8A]">
                        {attorney.name}
                      </h3>
                      <p className="font-['Montserrat'] text-sm font-semibold text-amber-700 uppercase tracking-wider mt-1">
                        {attorney.role}
                      </p>
                    </div>

                    {/* Academic Credentials Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {attorney.credentials.map((cred, i) => (
                        <span
                          key={i}
                          className="font-['Montserrat'] text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded border border-slate-200"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>

                    <p className="text-base text-gray-700 leading-relaxed text-justify">
                      {attorney.bio}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-col">
                      <a
                        href={`tel:${attorney.phone.replace(/\D/g, '')}`}
                        className="font-['Montserrat'] text-base font-bold text-[#1E3A8A] hover:underline flex items-center gap-2"
                      >
                        <Phone className="w-5 h-5 text-[#1E3A8A]" />
                        <span>{attorney.phone}</span>
                      </a>
                      <span className="text-xs text-gray-500 font-mono pl-7">{attorney.directLine}</span>
                    </div>

                    <button
                      onClick={onOpenConsultation}
                      className="font-['Montserrat'] px-6 py-3 bg-[#1E3A8A] hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-amber-300" />
                      <span>Book Consultation</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. VIRGINIA COURTS SERVED (NEW SECTION)                                    */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-5">
            <div>
              <span className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-amber-700 block">
                Trial Jurisdiction
              </span>
              <h2 className="font-['Montserrat'] text-2xl sm:text-3xl font-extrabold text-[#1E3A8A] mt-1">
                Courts Actively Served Across Hampton Roads &amp; Virginia
              </h2>
            </div>
            <span className="text-xs text-gray-500 font-['Montserrat'] uppercase">
              Circuit, District, Appellate &amp; Federal
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {courtsServed.map((court, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3 hover:border-[#1E3A8A] transition-colors"
              >
                <Landmark className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-gray-800">{court}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FAST ACTION BANNER / FINAL CTA (NEW MODERN SECTION)                    */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] via-[#172554] to-[#0f172a] text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-white/20 text-amber-300 text-xs sm:text-sm font-['Montserrat'] font-bold uppercase tracking-wider rounded-full backdrop-blur-xs">
            <Clock className="w-4 h-4" />
            <span>Prompt Case Evaluation</span>
          </div>

          <h2 className="font-['Montserrat'] text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Facing a Legal Challenge in Virginia?
          </h2>

          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Putting your legal troubles to rest is our specialty. Contact Pugh &amp; Karpov Law today
            to speak directly with our experienced trial attorneys.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="font-['Montserrat'] px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm uppercase tracking-wider rounded-sm shadow-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book Free Consultation</span>
            </button>

            <a
              href="tel:7577212390"
              className="font-['Montserrat'] px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-sm border border-white/30 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Call Office: (757) 721-2390</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs sm:text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>2400 Princess Anne Rd, Virginia Beach, VA 23456</span>
            </div>
            <span>·</span>
            <span>All Consultations Kept Strictly Confidential</span>
          </div>
        </div>
      </section>
    </div>
  );
}
