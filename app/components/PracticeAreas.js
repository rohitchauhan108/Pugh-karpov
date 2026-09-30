import React from 'react';
import {
  Scale,
  Award,
  FileSpreadsheet,
  ShieldAlert,
  Car,
  Truck,
  Bike,
  Ship,
  Footprints,
  Stethoscope,
  HeartCrack,
  CheckCircle2,
  Shield,
  FileCheck,
  Calendar,
} from 'lucide-react';
import BankruptcyFaq from './BankruptcyFaq';

export default function PracticeAreas({ onOpenConsultation }) {
  // Exact 7 Personal Injury categories from original website (W5)
  const personalInjuryCases = [
    { title: 'Auto Accidents', icon: <Car className="w-6 h-6 text-[#1e3a8a]" /> },
    { title: 'Truck Accidents', icon: <Truck className="w-6 h-6 text-[#1e3a8a]" /> },
    { title: 'Motorcycle Accidents', icon: <Bike className="w-6 h-6 text-[#1e3a8a]" /> },
    { title: 'Boat Accidents', icon: <Ship className="w-6 h-6 text-[#1e3a8a]" /> },
    { title: 'Slip and Fall Lawsuits', icon: <Footprints className="w-6 h-6 text-[#1e3a8a]" /> },
    { title: 'Medical Malpractice', icon: <Stethoscope className="w-6 h-6 text-[#1e3a8a]" /> },
    { title: 'Wrongful Deaths', icon: <HeartCrack className="w-6 h-6 text-[#1e3a8a]" /> },
  ];

  // Exact 10 Criminal Defense categories from original website (Q5)
  const criminalCharges = [
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
    <section id="practice-areas" className="py-20 bg-slate-50 text-slate-800 bg-grid-pattern font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="font-['Montserrat'] text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-700">
            Client Priority Practice Areas
          </span>
          <h2 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e3a8a]">
            Areas of Practice
          </h2>
          <p className="text-base text-slate-600">
            Dedicated trial advocates serving Virginia Beach and Tidewater courts.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PRIORITY 1: CIVIL LITIGATION                                             */}
        {/* ========================================================================= */}
        <div
          id="civil-litigation"
          className="scroll-mt-32 relative bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-['Montserrat'] text-xs px-2.5 py-1 bg-[#1e3a8a] text-white font-bold uppercase tracking-wider rounded">
                Priority 01
              </span>
              <h3 className="font-['Montserrat'] text-2xl sm:text-3xl font-extrabold text-[#1e3a8a] flex items-center gap-2.5">
                <Scale className="w-7 h-7 text-[#1e3a8a]" />
                Civil Litigation
              </h3>
            </div>

            <button
              onClick={onOpenConsultation}
              className="font-['Montserrat'] px-4 py-2.5 bg-[#1e3a8a] hover:bg-blue-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book Consultation</span>
            </button>
          </div>

          <div className="space-y-6 text-slate-700 text-base leading-relaxed">
            <p className="text-lg font-medium text-slate-900 leading-relaxed">
              When Pugh &amp; Karpov represent you in litigation, negotiate favorable terms, or
              work on any other legal matter, they do it with one goal in mind &ndash; make you wholly
              satisfied with the outcome.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-blue-50/70 border-l-4 border-[#1e3a8a] p-6 rounded-r">
                <h4 className="font-['Montserrat'] text-base font-bold text-[#1e3a8a] uppercase tracking-wider mb-2">
                  Trial Advocacy &amp; Courtroom Toughness
                </h4>
                <p className="text-base text-slate-700 leading-relaxed">
                  Attorney Gregory Pugh has actively practiced in Virginia courts since 1988,
                  specializing in civil litigation, bankruptcy, traffic and criminal defense. He
                  represents clients in all courts in the greater Tidewater area and has argued cases
                  before the Virginia Court of Appeals and the Virginia Supreme Court.
                </p>
              </div>

              <div className="bg-amber-50/80 border-l-4 border-amber-600 p-6 rounded-r">
                <h4 className="font-['Montserrat'] text-base font-bold text-amber-900 uppercase tracking-wider mb-2">
                  Contracts &amp; Dispute Resolution
                </h4>
                <p className="text-base text-slate-700 leading-relaxed">
                  Attorney Anton Karpov holds an initial law degree with specialty in Contracts and
                  Civil Litigation, combined with advanced LL.M. from William &amp; Mary. He is always
                  honest and forthcoming with his clients, ready to fight defending their rights and
                  expertly represent you in litigation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PRIORITY 2: PERSONAL INJURY (Exact text from I5 in 16px normal size)     */}
        {/* ========================================================================= */}
        <div
          id="personal-injury"
          className="scroll-mt-32 relative bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-['Montserrat'] text-xs px-2.5 py-1 bg-[#1e3a8a] text-white font-bold uppercase tracking-wider rounded">
                Priority 02
              </span>
              <h3 className="font-['Montserrat'] text-2xl sm:text-3xl font-extrabold text-[#1e3a8a] flex items-center gap-2.5">
                <Award className="w-7 h-7 text-[#1e3a8a]" />
                PERSONAL INJURY
              </h3>
            </div>

            <button
              onClick={onOpenConsultation}
              className="font-['Montserrat'] px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-emerald-200" />
              <span>Book Consultation</span>
            </button>
          </div>

          <div className="space-y-6 text-slate-700 text-base leading-relaxed">
            <p className="text-lg leading-relaxed text-slate-800 font-medium">
              Pugh &amp; Karpov can assist you with your personal injury case. We dedicate ourselves
              to helping local Hampton Roads residents fight for what is owed to them. We have more
              than 50 years of experience handling personal injury cases in Hampton Roads and the
              surrounding area.
            </p>

            <div className="flex justify-center my-6">
              <img
                src="/assets/image-CT9HhJZy.png"
                alt="Personal Injury"
                className="max-w-md w-full rounded-xl shadow-md object-cover border border-slate-200"
              />
            </div>

            <p className="text-base leading-relaxed">
              Our fees are based upon a contingency fee so you pay nothing unless we recover funds on
              your behalf. We are a boutique law firm so unlike the large personal injury factories
              with huge advertising machines to feed, we are able to provide you and your case the
              individual attention necessary for the best possible outcome. We are committed to
              improving lives one at a time.
            </p>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-2">
              <h4 className="font-['Montserrat'] font-bold text-[#1e3a8a] text-base sm:text-lg">
                Experience and Skilled Injury Attorneys
              </h4>
              <p className="text-base leading-relaxed">
                When you hire Pugh and Karpov you can be rest assured that we will take time to get to
                know you and your situation. We never treat our clients like a case number. Being
                able to facilitate your best possible results is always our goal.
              </p>
            </div>

            {/* 7 Case Types Grid from W5 */}
            <div className="pt-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
                {personalInjuryCases.map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 border border-slate-200 p-4 rounded-lg flex flex-col items-center text-center gap-2 hover:border-[#1e3a8a] transition-all"
                  >
                    <div className="p-2.5 bg-white rounded-full shadow-xs border border-slate-200">
                      {item.icon}
                    </div>
                    <span className="font-['Montserrat'] text-sm font-semibold text-slate-800">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Original Legal Disclaimer */}
            <div className="pt-4 text-sm text-slate-500 border-t border-slate-100">
              <strong>LEGAL DISCLAIMER: </strong>
              The use of the internet or the email contact form for communication does not
              establish an attorney-client relationship. Attorneys of Pugh and Karpov Law PC do not
              guarantee any particular outcome of the representation. Every case is different and
              fact specific, and the results obtained will be related to the facts and merits of the
              particular case.
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PRIORITY 3: BANKRUPTCY (Exact text from K5 in 16px normal size)          */}
        {/* ========================================================================= */}
        <div
          id="bankruptcy"
          className="scroll-mt-32 relative bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-['Montserrat'] text-xs px-2.5 py-1 bg-[#1e3a8a] text-white font-bold uppercase tracking-wider rounded">
                Priority 03
              </span>
              <h3 className="font-['Montserrat'] text-2xl sm:text-3xl font-extrabold text-[#1e3a8a] flex items-center gap-2.5">
                <FileSpreadsheet className="w-7 h-7 text-[#1e3a8a]" />
                BANKRUPTCY
              </h3>
            </div>

            <button
              onClick={onOpenConsultation}
              className="font-['Montserrat'] px-4 py-2.5 bg-[#1e3a8a] hover:bg-blue-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book Consultation</span>
            </button>
          </div>

          <div className="space-y-6 text-slate-700 text-base leading-relaxed">
            <p className="text-lg leading-relaxed text-slate-800 font-medium">
              A fundamental goal of the federal bankruptcy laws enacted by Congress is to give debtors
              a financial “fresh start” from burdensome debts. This goal is accomplished through the
              bankruptcy discharge, which releases debtors from personal liability from specific
              debts and prohibits creditors from ever taking any action against the debtor to collect
              those debts.
            </p>

            {/* Red callout from original site */}
            <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-r shadow-xs">
              <p className="font-['Montserrat'] font-bold uppercase text-red-800 text-base sm:text-lg">
                ARE YOU SICK, TIRED AND FRUSTRATED WITH YOUR FINANCES? BILLS ARE PILING UP? LOSING
                SLEEP OVER THE FAMILY BUDGET?
              </p>
            </div>

            {/* Blue callout from original site */}
            <div className="bg-blue-50 border-l-8 border-[#1e3a8a] p-6 sm:p-7 rounded-r shadow-xs">
              <p className="font-['Montserrat'] font-bold text-[#1e3a8a] text-base sm:text-lg leading-relaxed">
                WE CAN STOP COLLECTOR’S CALLS, GARNISHMENTS, FORECLOSURES, REPOSSESSIONS, CIVIL
                PENALTIES AND LATE FEES AND HELP YOU AND YOUR FAMILY TO GET A FRESH START.
              </p>
            </div>

            <p className="text-base leading-relaxed">
              Most Americans count on their earnings to make ends meet. We go to work and pay the bills
              from our paychecks. We make our financial decisions and commitments based on what we
              believe we can afford. But sometimes life happens: death or serious illness, divorce or
              a job loss can easily derail all our well-thought plans.
            </p>

            <p className="text-base leading-relaxed">
              We understand that filing bankruptcy is a difficult decision, involving severe financial
              hardships and emotional anguish.
            </p>

            {/* Green box from original site */}
            <div className="bg-green-50 border-l-8 border-green-600 p-6 rounded-r shadow-xs space-y-2">
              <p className="font-['Montserrat'] font-bold text-green-900 text-base sm:text-lg">
                We promise effective legal representation at an affordable price.
              </p>
              <ul className="list-disc list-inside text-base text-slate-800 space-y-1 font-medium">
                <li>Bankruptcy Chapter 7 filing for an $800 attorney fee (plus court’s fees)</li>
                <li>
                  Help you decide what type of bankruptcy is right for your specific circumstances
                </li>
                <li>Straight-forward and honest advice</li>
              </ul>
            </div>

            {/* Interactive FAQs Accordion */}
            <BankruptcyFaq />

            {/* Federal Notice */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded text-sm text-amber-900">
              <span className="font-bold">Federal Law Notice: </span>
              Pursuant to federal law, Pugh &amp; Karpov is a debt relief agency and helps people file
              for consumer bankruptcy relief under title II of the United States Code.
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PRIORITY 4: CRIMINAL AND TRAFFIC DEFENSE (Exact text from F5)            */}
        {/* ========================================================================= */}
        <div
          id="criminal-traffic"
          className="scroll-mt-32 relative bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-['Montserrat'] text-xs px-2.5 py-1 bg-[#1e3a8a] text-white font-bold uppercase tracking-wider rounded">
                Priority 04
              </span>
              <h3 className="font-['Montserrat'] text-2xl sm:text-3xl font-extrabold text-[#1e3a8a] flex items-center gap-2.5">
                <ShieldAlert className="w-7 h-7 text-[#1e3a8a]" />
                CRIMINAL AND TRAFFIC DEFENSE
              </h3>
            </div>

            <button
              onClick={onOpenConsultation}
              className="font-['Montserrat'] px-4 py-2.5 bg-[#1e3a8a] hover:bg-blue-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book Consultation</span>
            </button>
          </div>

          <div className="space-y-6 text-slate-700 text-base leading-relaxed">
            <p className="text-lg leading-relaxed text-slate-800 font-medium">
              We bring 45 years of combined trial experience defending adult and juvenile criminal
              charges and traffic offenses in Virginia Beach, Norfolk, Chesapeake and other courts of
              the Tidewater area.
            </p>

            {/* 10 Criminal Charge Cards from Q5 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {criminalCharges.map((charge, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border-l-4 border-[#1e3a8a] border-t border-r border-b border-slate-200 p-3.5 rounded flex items-center gap-2 hover:bg-blue-50/50 transition-colors shadow-2xs"
                >
                  <Shield className="w-4 h-4 text-[#1e3a8a] shrink-0" />
                  <span className="font-['Montserrat'] text-sm font-semibold text-slate-800">
                    {charge}
                  </span>
                </div>
              ))}
            </div>

            {/* Yellow callout: Traffic Cases */}
            <div className="bg-amber-50 border-l-8 border-amber-600 p-6 rounded-r shadow-xs">
              <p className="text-base text-slate-800 leading-relaxed">
                <strong className="text-amber-900 font-bold font-['Montserrat']">
                  Traffic Cases:{' '}
                </strong>
                Our main focus is on DUI, reckless driving and driving on a suspended license as these
                charges are generally the most serious and conviction may carry jail time, loss of
                driver’s license and expensive fines.
              </p>
            </div>

            {/* Blue callout: Trial Strategy */}
            <div className="bg-blue-50 border-l-8 border-[#1e3a8a] p-6 rounded-r shadow-xs">
              <p className="text-base text-blue-950 leading-relaxed font-medium">
                We will establish the trial strategy, prepare and file all court documents, and
                expertly conduct hearings related to your particular situation: bond and bond
                appeals, criminal discovery and evidentiary motions, preliminary hearings, probation
                hearings, and trials in the General District, Juvenile and Domestic, and Circuit
                Courts.
              </p>
            </div>

            {/* Green callout: Why Choose Us */}
            <div className="bg-green-50 border-l-8 border-green-600 p-6 sm:p-7 rounded-r shadow-xs space-y-2">
              <h4 className="font-['Montserrat'] text-base sm:text-lg font-bold text-green-900 uppercase">
                WHY SHOULD YOU CHOOSE US?
              </h4>
              <p className="text-base text-slate-800 leading-relaxed">
                Attorneys at Pugh &amp; Karpov love to win cases and see relief on their client’s
                faces. When hired, they prepare the best defense of your case using legal research,
                investigating alleged facts and potential witnesses and then aggressively pursue the
                best course, specifically tailored to the case in hand. We stay in touch with our
                clients and their families, providing the support and guidance during the entire
                litigation process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
