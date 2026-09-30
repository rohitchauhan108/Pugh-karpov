import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function PracticeTabs() {
  const location = useLocation();

  const tabs = [
    { name: 'BANKRUPTCY', path: '/bankruptcy' },
    { name: 'CRIMINAL AND TRAFFIC DEFENSE', path: '/criminal-traffic-defense' },
    { name: 'PERSONAL INJURY', path: '/personal-injury' },
  ];

  return (
    <div className="flex justify-center mt-6 sm:mt-10 mb-8 sm:mb-12 gap-3 sm:gap-4 flex-wrap">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={`font-['Montserrat'] text-xs sm:text-sm md:text-base px-6 py-2.5 rounded-full transition-all duration-300 font-semibold shadow-xs cursor-pointer border ${
              isActive
                ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md'
                : 'bg-white text-[#1E3A8A] border-[#1E3A8A] hover:bg-blue-50'
            }`}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
}
