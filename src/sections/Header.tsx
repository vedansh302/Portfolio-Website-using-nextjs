"use client";

import { useState } from 'react';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home'); // Default is 'home'

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId); // Update active section on click
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <button
          onClick={() => handleScroll('home')}
          className={`nav-item ${
            activeSection === 'home'
              ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
              : 'hover:bg-white/10 hover:text-white'
          }`}
        >
          Home
        </button>
        <button
          onClick={() => handleScroll('projects')}
          className={`nav-item ${
            activeSection === 'projects'
              ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
              : 'hover:bg-white/10 hover:text-white'
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => handleScroll('about')}
          className={`nav-item ${
            activeSection === 'about'
              ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
              : 'hover:bg-white/10 hover:text-white'
          }`}
        >
          About
        </button>
        <button
          onClick={() => handleScroll('contact')}
          className={`nav-item ${
            activeSection === 'contact'
              ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
              : 'hover:bg-white/10 hover:text-white'
          }`}
        >
          Contact
        </button>
      </nav>
    </div>
  );
};
