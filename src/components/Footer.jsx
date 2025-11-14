import React from 'react';
import { Mail, Linkedin, Twitter, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <div className="footer-logo">
              <img 
                src="https://customer-assets.emergentagent.com/job_plantclinic-ai/artifacts/pj23e2oj_c63f8551-70bf-4d11-b57b-ecb493dec1e7.png" 
                alt="PlantClinic Logo" 
                className="footer-logo-image"
              />
            </div>
            <p className="footer-tagline">
              IA predictiva para la gestión profesional de enfermedades en plantas. 
              Alertas 7 días antes, ROI comprobable.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Twitter className="social-icon" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Producto</h4>
            <ul className="footer-links">
              <li><a href="#demo">Demo Interactiva</a></li>
              <li><a href="#pricing">Precios</a></li>
              <li><a href="#casos">Casos de Éxito</a></li>
              <li><a href="#api">Documentación API</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Empresa</h4>
            <ul className="footer-links">
              <li><a href="#about">Sobre Nosotros</a></li>
              <li><a href="#team">Equipo</a></li>
              <li><a href="#careers">Carreras</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>

          {/* Contact & Events */}
          <div className="footer-section">
            <h4 className="footer-heading">Eventos 2025</h4>
            <ul className="footer-links">
              <li>
                <MapPin className="footer-icon" />
                <span>ECPA Barcelona (Jun-Jul)</span>
              </li>
              <li>
                <MapPin className="footer-icon" />
                <span>Vibecon 2025</span>
              </li>
            </ul>
            <div className="footer-contact">
              <Mail className="footer-icon" />
              <a href="mailto:hola@plantclinic.es">hola@plantclinic.es</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>© 2025 PlantClinic. Todos los derechos reservados.</p>
            <div className="legal-links">
              <a href="#privacy">Política de Privacidad</a>
              <span className="divider">|</span>
              <a href="#terms">Términos de Servicio</a>
              <span className="divider">|</span>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
