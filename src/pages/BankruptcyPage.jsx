import React, { useState } from 'react';
import PracticeTabs from '../components/PracticeTabs';
import { HelpCircle, ChevronDown, Calendar } from 'lucide-react';

export default function BankruptcyPage({ onOpenConsultation }) {
  const [openIndex, setOpenIndex] = useState(0);

  // Exact 7 FAQs from original site
  const faqs = [
    {
      q: 'When is the right time to file?',
      a: 'Once you realize that your financial situation is not likely to improve and you have exhausted all possible means of fixing the situation yourself, call us immediately for a free consultation: once we are retained we can curb the calls from your creditors so that you can regain your peace of mind and go on with your day to day life.',
    },
    {
      q: 'What type of bankruptcy should you file, Chapter 7 or Chapter 13?',
      a: 'Whether you should file Chapter 7 or Chapter 13 depends on your unique financial circumstances. One Chapter may be right and work miracles for you and your family, but not for someone else. We will closely analyze your financial situation, your assets and obligations and will advise you on the best course of action.',
    },
    {
      q: 'Can I just file for bankruptcy myself?',
      a: 'If you\'re the type of person who would try to fill a cavity with “Bondo” or “Crazy Glue” instead of going to a dentist, you can try to file for bankruptcy yourself too—but can you really afford it? Mistakes may cost you significant and unnecessary losses, including loss of your home, vehicle, or other personal property. Undoing that damage can be a very lengthy and costly process.',
    },
    {
      q: 'Will filing bankruptcy stop creditors from calling?',
      a: 'Yes! Once you file your petition with the court the automatic stay prevents creditors from taking any action to try to collect the debt. No lawsuits, no garnishments, no bank liens, no phone calls.',
    },
    {
      q: 'How long after filing will the creditors stop calling?',
      a: 'Once your creditors receive their notice from the court or become aware of your bankruptcy by other means they must immediately stop all collection efforts and can be held in contempt if they fail to do so.',
    },
    {
      q: 'Who deals with the creditors during bankruptcy?',
      a: 'Once you file bankruptcy, your attorney will deal directly with your creditors.',
    },
    {
      q: 'Can my employer fire me because I filed for bankruptcy?',
      a: 'No. The law prohibits both government and private employers from discriminating against you for filing for bankruptcy protection.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 sm:pt-32 pb-20 px-4 sm:px-8 font-['Poppins'] bg-grid-pattern">
      <div className="max-w-5xl mx-auto">
        {/* Practice Area Switcher Tabs */}
        <PracticeTabs />

        {/* Main Content Area (K5) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-12 space-y-10">
          <div className="text-center space-y-3">
            <h1 className="font-['Montserrat'] text-3xl sm:text-5xl font-black text-[#1E3A8A] tracking-wide">
              BANKRUPTCY
            </h1>
            <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-200 text-[#1E3A8A] rounded-full text-xs sm:text-sm font-semibold">
              Chapter 7 &amp; Chapter 13 Debt Relief
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            A fundamental goal of the federal bankruptcy laws enacted by Congress is to give debtors a
            financial “fresh start” from burdensome debts. This goal is accomplished through the
            bankruptcy discharge, which releases debtors from personal liability from specific debts
            and prohibits creditors from ever taking any action against the debtor to collect those
            debts.
          </p>

          {/* Red Banner from original site */}
          <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-xl shadow-xs">
            <p className="font-['Montserrat'] font-bold uppercase text-red-700 text-base sm:text-lg leading-snug">
              ARE YOU SICK, TIRED AND FRUSTRATED WITH YOUR FINANCES? BILLS ARE PILING UP? LOSING SLEEP
              OVER THE FAMILY BUDGET?
            </p>
          </div>

          {/* Blue Banner from original site */}
          <div className="bg-blue-50 p-6 sm:p-8 rounded-2xl shadow-sm border-l-[10px] border-[#1E3A8A]">
            <p className="font-['Montserrat'] font-semibold text-[#1E3A8A] text-base sm:text-lg leading-relaxed">
              WE CAN STOP COLLECTOR’S CALLS, GARNISHMENTS, FORECLOSURES, REPOSSESSIONS, CIVIL
              PENALTIES AND LATE FEES AND HELP YOU AND YOUR FAMILY TO GET A FRESH START.
            </p>
          </div>

          <div className="space-y-4 text-base text-gray-700 leading-relaxed">
            <p>
              Most Americans count on their earnings to make ends meet. We go to work and pay the bills
              from our paychecks. We make our financial decisions and commitments based on what we
              believe we can afford. But sometimes life happens: death or serious illness, divorce or
              a job loss can easily derail all our well-thought plans.
            </p>
            <p>
              We understand that filing bankruptcy is a difficult decision, involving severe financial
              hardships and emotional anguish.
            </p>
          </div>

          {/* Green Banner from original site */}
          <div className="bg-green-50 p-6 sm:p-8 border-l-8 border-green-600 rounded-xl shadow-xs space-y-3">
            <p className="font-['Montserrat'] font-bold text-green-800 text-base sm:text-lg">
              We promise effective legal representation at an affordable price.
            </p>
            <ul className="list-disc list-inside text-gray-800 space-y-1.5 text-base font-medium">
              <li>Bankruptcy Chapter 7 filing for an $800 attorney fee (plus court’s fees)</li>
              <li>Help you decide what type of bankruptcy is right for your specific circumstances</li>
              <li>Straight-forward and honest advice</li>
            </ul>
          </div>

          {/* Yellow Box / FAQs from original site */}
          <div className="bg-amber-50/70 p-6 sm:p-8 border-l-[10px] border-amber-500 rounded-2xl shadow-xs space-y-6">
            <div className="flex items-center gap-2 border-b border-amber-200/80 pb-3">
              <HelpCircle className="w-5 h-5 text-amber-700" />
              <h2 className="font-['Montserrat'] text-xl sm:text-2xl font-bold text-amber-950">
                Frequently Asked Questions About Bankruptcy
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-amber-200 bg-white rounded-xl overflow-hidden shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="font-['Montserrat'] font-bold text-base text-gray-900 flex items-center gap-3">
                        <span className="text-xs font-mono text-[#1E3A8A] bg-blue-100 px-2 py-0.5 rounded">
                          Q{index + 1}
                        </span>
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#1E3A8A] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 pt-1 text-base text-gray-700 leading-relaxed border-t border-gray-100 pl-12 font-['Poppins']">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Federal Notice */}
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600">
            <strong className="text-gray-800">Federal Law Notice: </strong>
            Pursuant to federal law, Pugh &amp; Karpov is a debt relief agency and helps people file for
            consumer bankruptcy relief under title II of the United States Code.
          </div>

          {/* CTA Button */}
          <div className="text-center pt-4">
            <button
              onClick={onOpenConsultation}
              className="font-['Montserrat'] px-8 py-4 bg-[#1E3A8A] hover:bg-blue-800 text-white font-bold text-sm uppercase tracking-wider rounded-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book A Free Bankruptcy Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
