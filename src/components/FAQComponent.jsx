import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQComponent = () => {
  const [expandedId, setExpandedId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: '¿Cómo funciona PlantClinic?',
      answer: 'PlantClinic utiliza inteligencia artificial especializada en diagnóstico de enfermedades vegetales. Subes fotos de tus plantas o accedes mediante cámara en tiempo real. Nuestro algoritmo analiza patrones de enfermedad en 2-3 segundos y te proporciona diagnóstico preciso con recomendaciones de tratamiento inmediato.',
    },
    {
      id: 2,
      question: '¿Qué precisión tiene el diagnóstico?',
      answer: 'Nuestro sistema alcanza 92% de precisión en identificación de enfermedades, basado en modelos entrenados con 500k+ imágenes de plantas reales en campo. Es comparable a consulta con fitólogo experto, pero instantáneo y accesible 24/7.',
    },
    {
      id: 3,
      question: '¿Se integra con nuestros sistemas existentes (ERP, CRM)?',
      answer: 'Sí. Ofrecemos API REST completa para integración con cualquier software empresarial. También contamos con integraciones pre-construidas para los principales ERP agrícolas. Nuestro equipo técnico gestiona todo el setup sin interrupciones.',
    },
    {
      id: 4,
      question: '¿Qué ocurre con nuestros datos e imágenes?',
      answer: 'Tus datos son privados y cifrados end-to-end. Las imágenes se procesan en servidores seguros (ISO 27001) y NO se almacenan sin tu consentimiento. Cumplimos RGPD y todas las normativas agrícolas españolas. Tienes control total sobre exportación/eliminación de datos.',
    },
    {
      id: 5,
      question: '¿Cuál es el proceso de onboarding?',
      answer: 'Mínimo 15 minutos. 1) Crear cuenta, 2) Instalar app/integración, 3) Primera predicción de prueba, 4) Entrenar al equipo (opcional). Nuestro equipo ofrece sesiones guiadas vía Zoom y documentación en español. Soporte técnico 24/7 disponible.',
    },
    {
      id: 6,
      question: '¿Funciona offline?',
      answer: 'Sí. La app móvil incluye modo offline. Tomas fotos en campo sin conexión y PlantClinic procesa localmente. Cuando recuperas conexión, se sincroniza automáticamente con tu dashboard y equipo.',
    },
    {
      id: 7,
      question: '¿Qué ROI puedo esperar?',
      answer: 'Promedio: 60% reducción en pérdidas por enfermedad en primer año. Empresas logran €8,000-€50,000 de ahorro anual dependiendo de tamaño de cultivo. Nuestro calculador personalizado muestra tu caso específico.',
    },
    {
      id: 8,
      question: '¿Hay garantía de éxito?',
      answer: 'Ofrecemos período de prueba de 30 días sin riesgo. Si no obtienes resultados medibles en tus cultivos, te devolvemos el 100%. Además, tenemos garantía de uptime del 99.9% para la plataforma.',
    },
    {
      id: 9,
      question: '¿Cuánto tiempo tarda en ver resultados?',
      answer: 'Resultados inmediatos: diagnósticos en segundos. Impacto en producción: visible en 2-3 semanas (detectas enfermedades antes, tratas a tiempo, reduces pérdidas). ROI completo visible en 3-6 meses.',
    },
    {
      id: 10,
      question: '¿Tenemos soporte en español?',
      answer: 'Sí. Equipo de soporte técnico bilingüe disponible 24/7 via email, chat y teléfono. Documentación completa en español. Sesiones de training personalizadas con agrónomo especializado incluidas.',
    },
  ];

  const toggleExpanded = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <p className="section-description">
            Todo lo que necesitas saber sobre PlantClinic para empresas agro
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleExpanded(faq.id)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`faq-icon ${expandedId === faq.id ? 'expanded' : ''}`}
                  size={20}
                />
              </button>
              {expandedId === faq.id && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h3>¿Tienes otras preguntas?</h3>
          <p>Nuestro equipo está disponible para asesorarte sin compromiso</p>
          <button className="cta-button">Contactar a Ventas</button>
        </div>
      </div>

      <style>{`
        .faq-section {
          padding: 80px 20px;
          background: #ffffff;
          margin: 60px 0;
        }
        .container {
          max-width: 900px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .section-title {
          font-size: 36px;
          font-weight: 700;
          color: #0d3d1a;
          margin-bottom: 10px;
        }
        .section-description {
          font-size: 16px;
          color: #4a7c59;
        }
        .faq-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 50px;
        }
        .faq-item {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .faq-item:hover {
          border-color: #107c41;
          box-shadow: 0 4px 12px rgba(16, 124, 65, 0.1);
        }
        .faq-question {
          width: 100%;
          padding: 20px;
          background: #f8fafc;
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 16px;
          font-weight: 600;
          color: #0d3d1a;
          text-align: left;
          transition: all 0.3s ease;
        }
        .faq-question:hover {
          background: #f0fdf4;
          color: #107c41;
        }
        .faq-icon {
          transition: transform 0.3s ease;
          color: #107c41;
          flex-shrink: 0;
          margin-left: 16px;
        }
        .faq-icon.expanded {
          transform: rotate(180deg);
        }
        .faq-answer {
          padding: 20px;
          background: #ffffff;
          border-top: 1px solid #e5e7eb;
          animation: slideDown 0.3s ease;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .faq-answer p {
          font-size: 15px;
          line-height: 1.6;
          color: #4a7c59;
          margin: 0;
        }
        .faq-cta {
          text-align: center;
          background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%);
          padding: 40px;
          border-radius: 12px;
          border: 2px solid #107c41;
        }
        .faq-cta h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0d3d1a;
          margin-bottom: 8px;
        }
        .faq-cta p {
          font-size: 15px;
          color: #4a7c59;
          margin-bottom: 20px;
        }
        .cta-button {
          background: linear-gradient(135deg, #107c41 0%, #15a34a 100%);
          color: white;
          border: none;
          padding: 14px 40px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(16,124,65,0.3);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16,124,65,0.4);
        }
        @media (max-width: 768px) {
          .faq-question {
            font-size: 15px;
            padding: 16px;
          }
          .faq-answer {
            padding: 16px;
          }
          .faq-answer p {
            font-size: 14px;
          }
          .section-title {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQComponent;
