import React from 'react';
import { Phone, Calendar } from 'lucide-react';

export default function AttorneyProfiles({ onOpenConsultation }) {
  const attorneys = [
    {
      name: 'Gregory Pugh',
      role: 'Attorney at Law · Managing Partner',
      image: '/assets/Gregory-YG6h9GJw.jpg',
      bio: 'Attorney Gregory Pugh obtained his Juris Doctor degree from Pettit College of Law at Ohio Northern University in 1981 and advanced Master of Laws Degree (LLM) was awarded to him by the Law School at the College of William and Mary in 1991. He has actively practiced in Virginia courts since 1988 and opened his own practice in 1996, specializing in civil litigation, bankruptcy, traffic and criminal defense. He represents clients in all courts in the greater Tidewater area and has argued cases before the Virginia Court of Appeals and the Virginia Supreme Court. It will be very hard to find another lawyer who can match Mr. Pugh’s legal experience or go toe-to-toe against him in the courtroom. But despite his toughness when he takes a stand protecting his clients, Mr. Pugh is a very personable and caring person, who also appointed by the courts to protect interest of children and mentally-ill individuals.',
      phone: '(757) 426-7660',
    },
    {
      name: 'Anton A. Karpov',
      role: 'Attorney at Law · Partner',
      image: '/assets/newImage-CjVRoL-9.jpg',
      bio: 'Attorney Anton Karpov, obtained his first law degree from Moscow State University in 1999 with the specialty in Contracts and Civil Litigation. After immigrating to the United States in 1999, he had to overcame many challenges to earn an advanced Master of Laws Degree (LLM) from Law School at the College of William and Mary in 2006. Since 2007 he practiced law in Virginia courts and represented hundreds of clients as a Public Defender. He tried every case imaginable – from DUI and juvenile delinquency cases to a drug, firearm, robbery, and homicide charges. Before leaving the public service, he worked as a supervisor of an adult felony team and he carried his trial experience into his private practice. When you or someone close to you is in trouble and you need a courtroom warrior like Mr. Karpov. He is always honest and forthcoming with his clients, always ready to fight defending their rights and ready to expertly defend you.',
      phone: '(757) 907-9075',
    },
  ];

  return (
    <section id="attorneys" className="py-20 bg-slate-100/70 text-slate-800 scroll-mt-24 bg-subtle-lines font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Section Heading directly from G5 */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-extrabold text-[#1e3a8a]">
            Get To Know Our Attorneys
          </h2>
          <p className="font-['Montserrat'] text-base sm:text-lg text-slate-600">
            Meet the legal minds behind Pugh &amp; Karpov
          </p>
        </div>

        {/* 2 Attorney Cards as in original site G5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {attorneys.map((attorney, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-80 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full h-full object-cover object-top filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="font-['Montserrat'] text-2xl sm:text-3xl font-bold text-white drop-shadow">
                      {attorney.name}
                    </h3>
                    <p className="font-['Montserrat'] text-xs sm:text-sm font-semibold text-amber-300 uppercase tracking-wider">
                      {attorney.role}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <p className="text-base text-slate-700 leading-relaxed text-justify font-['Poppins']">
                    {attorney.bio}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={`tel:${attorney.phone.replace(/\D/g, '')}`}
                  className="font-['Montserrat'] text-sm font-bold text-[#1e3a8a] hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>{attorney.phone}</span>
                </a>

                <button
                  onClick={onOpenConsultation}
                  className="font-['Montserrat'] px-5 py-2.5 bg-[#1e3a8a] hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-300" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
