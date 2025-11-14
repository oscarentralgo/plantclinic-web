import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = ({ onScrollToDemo, onScrollToContact, onScrollToPricing }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="network-header">
      <div className="nav-wrapper">
        <div className="nav-logo" onClick={scrollToTop}>
          <img 
            src="https://customer-assets.emergentagent.com/job_plantclinic-ai/artifacts/pj23e2oj_c63f8551-70bf-4d11-b57b-ecb493dec1e7.png" 
            alt="PlantClinic Logo" 
            className="logo-image"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="network-nav desktop-nav">
          <a href="#demo" className="network-nav-link" onClick={onScrollToDemo}>
            Demo
          </a>
          <a href="#pricing" className="network-nav-link" onClick={onScrollToPricing}>
            Precios
          </a>
          <a href="#casos" className="network-nav-link">
            Casos de Éxito
          </a>
          <Button className="btn-primary nav-cta" onClick={onScrollToContact}>
            Solicitar Demo
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav">
          <a href="#demo" className="mobile-nav-link" onClick={() => { onScrollToDemo(); setMobileMenuOpen(false); }}>
            Demo Interactiva
          </a>
          <a href="#pricing" className="mobile-nav-link" onClick={() => { onScrollToPricing(); setMobileMenuOpen(false); }}>
            Precios
          </a>
          <a href="#casos" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Casos de Éxito
          </a>
          <Button className="btn-primary mobile-nav-cta" onClick={() => { onScrollToContact(); setMobileMenuOpen(false); }}>
            Solicitar Demo
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
