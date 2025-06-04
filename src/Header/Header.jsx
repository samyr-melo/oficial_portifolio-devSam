import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMenuOpen(false); 
  };

  return (
    <section className="general__header">
      <div className="header__top">
        <div className="general__header__sub">
          <p className='general__name'>Samyr Melo</p>
        </div>
        
        <button 
          className='menu__mobile' 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      <div className={`general__links ${menuOpen ? 'active' : ''}`}>
        <button 
          className='links__header' 
          onClick={() => scrollToSection('development')}
        >
          Home
        </button>
        <button 
          className='links__header' 
          onClick={() => scrollToSection('about')}
        >
          About me
        </button>
        <button 
          className='links__header' 
          onClick={() => scrollToSection('works')}
        >
          Projects
        </button>
        <button 
          className='links__header' 
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </button>
      </div>
    </section>
  );
}

export default Header;