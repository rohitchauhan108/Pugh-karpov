import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function BankruptcyFaq() {
  const [openIndex, setOpenIndex] = useState(0);

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
    <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 font-['Poppins']">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-4">
        <HelpCircle className="w-5 h-5 text-[#1e3a8a]" />
        <h3 className="font-['Montserrat'] text-xl font-bold text-[#1e3a8a]">
          Frequently Asked Questions About Bankruptcy
        </h3>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border transition-all rounded-lg overflow-hidden ${
                isOpen
                  ? 'border-[#1e3a8a]/40 bg-white shadow-xs'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-['Montserrat'] font-bold text-base sm:text-lg text-slate-800 flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-mono text-[#1e3a8a] bg-blue-50 px-2 py-0.5 rounded">
                    Q{index + 1}
                  </span>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#1e3a8a] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-6 pt-2 text-base text-slate-700 leading-relaxed border-t border-slate-100 pl-12 font-['Poppins']">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
