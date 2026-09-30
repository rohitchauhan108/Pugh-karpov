import React from 'react';
import PracticeTabs from '../components/PracticeTabs';
import { Shield, AlertTriangle, Gavel, Calendar } from 'lucide-react';

export default function CriminalTrafficPage({ onOpenConsultation }) {
  // Exact 10 Criminal Charges from Q5 in bundle.js
  const charges = [
    'Assault and Battery',
    'Computer Crimes',
    'Drug Crimes',
    'Expungement',
    'Protective Orders',
    'Theft Crimes',
    'Violent Offenses',
    'Weapons/Firearms Charges',
    'Domestic Violence',
    'Juvenile Offenses',
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-28 sm:pt-32 pb-20 px-4 sm:px-8 font-['Poppins'] bg-grid-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Practice Area Switcher Tabs */}
        <PracticeTabs />

        {/* Main Content Area (F5) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-12 space-y-10">
          <div className="text-center space-y-3">
            <h1 className="font-['Montserrat'] text-3xl sm:text-5xl font-black text-[#1E3A8A] tracking-wide">
              CRIMINAL AND TRAFFIC DEFENSE
            </h1>
            <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-200 text-[#1E3A8A] rounded-full text-xs sm:text-sm font-semibold">
              45 Years of Combined Trial Experience in Hampton Roads
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            We bring 45 years of combined trial experience defending adult and juvenile criminal
            charges and traffic offenses in Virginia Beach, Norfolk, Chesapeake and other courts of
            the Tidewater area.
          </p>

          {/* 10 Criminal Charges Grid (Q5) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
            {charges.map((charge, i) => (
              <div
                key={i}
                className="group bg-white hover:bg-[#1E3A8A] shadow-xs rounded-xl p-4 flex items-center gap-2.5 border-l-4 border-[#1E3A8A] border-t border-r border-b border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <Shield className="w-4 h-4 text-[#1E3A8A] group-hover:text-white shrink-0 transition-colors duration-300" />
                <span className="font-['Montserrat'] text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                  {charge}
                </span>
              </div>
            ))}
          </div>

          {/* Yellow Box: Traffic Cases from original site */}
          <div className="bg-amber-50/80 border-l-8 border-amber-500 p-6 sm:p-8 rounded-xl shadow-xs space-y-2">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              <strong className="font-['Montserrat'] text-amber-900 font-bold">Traffic Cases: </strong>
              Our main focus is on DUI, reckless driving and driving on a suspended license as these
              charges are generally the most serious and conviction may carry jail time, loss of
              driver’s license and expensive fines.
            </p>
          </div>

          {/* Blue Box: Court Coverage & Trial Strategy from original site */}
          <div className="bg-blue-50/80 border-l-8 border-[#1E3A8A] p-6 sm:p-8 rounded-2xl shadow-xs">
            <p className="text-base sm:text-lg text-[#1E3A8A] leading-relaxed font-medium">
              We will establish the trial strategy, prepare and file all court documents, and
              expertly conduct hearings related to your particular situation: bond and bond appeals,
              criminal discovery and evidentiary motions, preliminary hearings, probation hearings,
              and trials in the General District, Juvenile and Domestic, and Circuit Courts.
            </p>
          </div>

          {/* Green Box: Why Choose Us from original site */}
          <div className="bg-green-50 border-l-8 border-green-600 p-6 sm:p-8 rounded-2xl shadow-xs space-y-3">
            <h2 className="font-['Montserrat'] text-xl sm:text-2xl font-bold text-green-900">
              WHY SHOULD YOU CHOOSE US?
            </h2>
            <p className="text-base text-gray-800 leading-relaxed">
              Attorneys at Pugh &amp; Karpov love to win cases and see relief on their client’s faces.
              When hired, they prepare the best defense of your case using legal research,
              investigating alleged facts and potential witnesses and then aggressively pursue the
              best course, specifically tailored to the case in hand. We stay in touch with our
              clients and their families, providing the support and guidance during the entire
              litigation process.
            </p>
          </div>

          {/* Action CTA */}
          <div className="text-center pt-4">
            <button
              onClick={onOpenConsultation}
              className="font-['Montserrat'] px-8 py-4 bg-[#1E3A8A] hover:bg-blue-800 text-white font-bold text-sm uppercase tracking-wider rounded-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book Consultation for Criminal / Traffic Defense</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
