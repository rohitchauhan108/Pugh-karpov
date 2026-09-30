import React from 'react';
import PracticeTabs from '../components/PracticeTabs';
import { Car, Truck, Bike, Ship, Footprints, Stethoscope, HeartCrack, Calendar } from 'lucide-react';

export default function PersonalInjuryPage({ onOpenConsultation }) {
  // Exact 7 Case Types from W5 in bundle.js
  const injuryTypes = [
    { title: 'Auto Accidents', icon: Car },
    { title: 'Truck Accidents', icon: Truck },
    { title: 'Motorcycle Accidents', icon: Bike },
    { title: 'Boat Accidents', icon: Ship },
    { title: 'Slip and Fall Lawsuits', icon: Footprints },
    { title: 'Medical Malpractice', icon: Stethoscope },
    { title: 'Wrongful Deaths', icon: HeartCrack },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-28 sm:pt-32 pb-20 px-4 sm:px-8 font-['Poppins'] bg-grid-pattern">
      <div className="max-w-5xl mx-auto">
        {/* Practice Area Switcher Tabs */}
        <PracticeTabs />

        {/* Main Content Area (I5) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-12 space-y-10">
          <div className="text-center space-y-3">
            <h1 className="font-['Montserrat'] text-3xl sm:text-5xl font-black text-[#1E3A8A] tracking-wide">
              PERSONAL INJURY
            </h1>
            <div className="inline-block px-4 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-full text-xs sm:text-sm font-semibold">
              Contingency Fee Basis · No Recovery, No Fee
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            Pugh &amp; Karpov can assist you with your personal injury case. We dedicate ourselves to
            helping local Hampton Roads residents fight for what is owed to them. We have more than 50
            years of experience handling personal injury cases in Hampton Roads and the surrounding
            area.
          </p>

          {/* Original Site Image */}
          <div className="flex justify-center my-6">
            <img
              src="/assets/image-CT9HhJZy.png"
              alt="Personal Injury"
              className="md:w-3/5 w-full rounded-2xl shadow-lg object-cover border border-gray-200"
            />
          </div>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Our fees are based upon a contingency fee so you pay nothing unless we recover funds on your
            behalf. We are a boutique law firm so unlike the large personal injury factories with huge
            advertising machines to feed, we are able to provide you and your case the individual
            attention necessary for the best possible outcome. We are committed to improving lives
            one at a time.
          </p>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-gray-200 space-y-2">
            <h2 className="font-['Montserrat'] text-xl sm:text-2xl font-bold text-[#1E3A8A]">
              Experience and Skilled Injury Attorneys
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              When you hire Pugh and Karpov you can be rest assured that we will take time to get to know
              you and your situation. We never treat our clients like a case number. Being able to
              facilitate your best possible results is always our goal.
            </p>
          </div>

          {/* 7 Case Types Grid from W5 */}
          <div className="space-y-4 pt-2">
            <h3 className="font-['Montserrat'] text-lg font-bold text-gray-800 text-center">
              Personal Injury Matters We Handle
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {injuryTypes.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-gray-50 hover:bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1E3A8A] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center gap-3"
                >
                  <div className="p-3 bg-white group-hover:bg-[#1E3A8A] rounded-full shadow-2xs border border-gray-200 group-hover:border-[#1E3A8A] transition-all duration-300">
                    <item.icon className="w-8 h-8 text-[#1E3A8A] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-['Montserrat'] text-base font-semibold text-gray-800">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="pt-6 border-t border-gray-200 text-xs sm:text-sm text-gray-500 leading-relaxed">
            <strong className="text-gray-700">LEGAL DISCLAIMER: </strong>
            The use of the internet or the email contact form for communication does not establish an
            attorney-client relationship. Attorneys of Pugh and Karpov Law PC do not guarantee any
            particular outcome of the representation. Every case is different and fact specific, and
            the results obtained will be related to the facts and merits of the particular case.
          </div>

          {/* Action CTA */}
          <div className="text-center pt-4">
            <button
              onClick={onOpenConsultation}
              className="font-['Montserrat'] px-8 py-4 bg-[#1E3A8A] hover:bg-blue-800 text-white font-bold text-sm uppercase tracking-wider rounded-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book A Free Personal Injury Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
