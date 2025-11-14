import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Shield, TrendingUp, Clock } from 'lucide-react';

const Hero = ({ onScrollToDemo, onScrollToContact }) => {
  return (
    <section className="hero-section" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1744230673231-865d54a0aba4)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      {/* Overlay for readability */}
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <Shield className="badge-icon" />
            <span>Precisión Profesional B2B</span>
          </div>
          
          <h1 className="hero-title">
            Alertas Preventivas <span className="highlight-text">7 Días Antes</span>
          </h1>
          
          <p className="hero-subtitle">
            SaaS B2B de diagnóstico y prevención de enfermedades en plantas con IA predictiva. 
            Integración API, reducción de costes del 35-40%, y ROI comprobable desde el primer mes.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <TrendingUp className="stat-icon" />
              <div>
                <div className="stat-value">35-40%</div>
                <div className="stat-label">Reducción de costes</div>
              </div>
            </div>
            <div className="stat-item">
              <Clock className="stat-icon" />
              <div>
                <div className="stat-value">7 días</div>
                <div className="stat-label">Alertas preventivas</div>
              </div>
            </div>
            <div className="stat-item">
              <Shield className="stat-icon" />
              <div>
                <div className="stat-value">92%</div>
                <div className="stat-label">Precisión IA</div>
              </div>
            </div>
          </div>
          
          <div className="hero-cta">
            <Button className="btn-primary btn-cta" onClick={onScrollToDemo}>
              Probar Demo Interactiva
              <ArrowRight className="btn-icon" />
            </Button>
            <Button className="btn-secondary" onClick={onScrollToContact}>
              Solicitar Contacto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
