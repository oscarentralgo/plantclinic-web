import React from 'react';
import { CheckCircle, X } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const CompetitiveTable = () => {
  const competitors = [
    {
      name: 'PlantClinic',
      category: 'Nuestro Producto',
      precision: '92%',
      precisionColor: 'text-green-600',
      timeSetup: '15 min',
      cost: '€49/mes',
      aiSpecific: 'Sí',
      alerts: 'Sí',
      integration: 'Sí',
      support: '24/7',
    },
    {
      name: 'Métodos Manuales',
      category: 'Vigilancia Tradicional',
      precision: '40%',
      precisionColor: 'text-red-600',
      timeSetup: '2 horas',
      cost: 'Gratis + horas',
      aiSpecific: 'No',
      alerts: 'No',
      integration: 'No',
      support: 'N/A',
    },
    {
      name: 'Software Genérico',
      category: 'Herramientas Multi-Propósito',
      precision: '65%',
      precisionColor: 'text-yellow-600',
      timeSetup: '1 hora',
      cost: '€199/mes',
      aiSpecific: 'Parcial',
      alerts: 'Sí',
      integration: 'Limitada',
      support: 'Email',
    },
  ];

  return (
    <section className="competitive-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Comparativa con Competidores</h2>
          <p className="section-description">
            Por qué PlantClinic es la mejor opción para negocios agropecuarios serios
          </p>
        </div>

        <div className="table-wrapper">
          <table className="competitive-table">
            <thead>
              <tr>
                <th className="feature-column">Característica</th>
                {competitors.map((comp) => (
                  <th key={comp.name} className={comp.category === 'Nuestro Producto' ? 'highlight-column' : ''}>
                    <div className="column-header">
                      <div className="column-name">{comp.name}</div>
                      <div className="column-category">{comp.category}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="feature-name">Precisión Diagnóstico</td>
                {competitors.map((comp) => (
                  <td key={`${comp.name}-precision`} className={comp.category === 'Nuestro Producto' ? 'highlight-column' : ''}>
                    <span className={`precision-badge ${comp.precisionColor}`}>{comp.precision}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="feature-name">Tiempo Setup</td>
                {competitors.map((comp) => (
                  <td key={`${comp.name}-setup`} className={comp.category === 'Nuestro Producto' ? 'highlight-column' : ''}>
                    {comp.timeSetup}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="feature-name">Costo Mensual</td>
                {competitors.map((comp) => (
                  <td key={`${comp.name}-cost`} className={comp.category === 'Nuestro Producto' ? 'highlight-column' : ''}>
                    <span className="cost-badge">{comp.cost}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="feature-name">IA Específica Plantas</td>
                {competitors.map((comp) => (
                  <td key={`${comp.name}-ai`} className={comp.category === 'Nuestro Producto' ? 'highlight-column' : ''}>
                    {comp.aiSpecific === 'Sí' ? (
                      <CheckCircle className="icon-check" />
                    ) : comp.aiSpecific === 'No' ? (
                      <X className="icon-x" />
                    ) : (
                      <span className="partial">Parcial</span>
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="feature-name">Alertas en Tiempo Real</td>
                {competitors.map((comp) => (
                  <td key={`${comp.name}-alerts`} className={comp.category === 'Nuestro Producto' ? 'highlight-column' : ''}>
                    {comp.alerts === 'Sí' ? (
                      <CheckCircle className="icon-check" />
                    ) : (
                      <X className="icon-x" />
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="feature-name">Integración API/ERP</td>
                {competitors.map((comp) => (
                  <td key={`${comp.name}-integration`} className={comp.category === 'Nuestro Producto' ? 'highlight-column' : ''}>
                    {comp.integration === 'Sí' ? (
                      <CheckCircle className="icon-check" />
                    ) : comp.integration === 'No' ? (
                      <X className="icon-x" />
                    ) : (
                      <span className="partial">{comp.integration}</span>
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="feature-name">Soporte</td>
                {competitors.map((comp) => (
                  <td key={`${comp.name}-support`} className={comp.category === 'Nuestro Producto' ? 'highlight-column' : ''}>
                    <span className="support-badge">{comp.support}</span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cta-section">
          <button className="cta-button">Solicitar Demostración Personalizada</button>
          <p className="cta-text">
            Comprueba por qué empresas líderes en agricultura confían en PlantClinic
          </p>
        </div>
      </div>

      <style>{`
        .competitive-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #f7fafc 0%, #ecfdf5 100%);
          margin: 60px 0;
        }
        .container {
          max-width: 1200px;
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
        .table-wrapper {
          overflow-x: auto;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(13, 61, 26, 0.1);
          margin-bottom: 40px;
        }
        .competitive-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
        }
        .competitive-table thead {
          background: linear-gradient(90deg, #107c41 0%, #15a34a 100%);
          color: white;
        }
        .competitive-table th {
          padding: 20px 16px;
          text-align: center;
          font-weight: 600;
          font-size: 14px;
        }
        .competitive-table th.highlight-column {
          background: linear-gradient(90deg, #15a34a 0%, #22c55e 100%);
        }
        .column-header {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .column-name {
          font-size: 16px;
          font-weight: 700;
        }
        .column-category {
          font-size: 12px;
          opacity: 0.9;
        }
        .competitive-table td {
          padding: 18px 16px;
          text-align: center;
          border-bottom: 1px solid #e5e7eb;
          font-size: 14px;
        }
        .competitive-table td.highlight-column {
          background: #f0fdf4;
        }
        .competitive-table tbody tr:hover td:not(.feature-name) {
          background: #f9fafb;
        }
        .competitive-table tbody tr:hover td.highlight-column {
          background: #dcfce7;
        }
        .feature-column {
          background: #f3f4f6;
          font-weight: 600;
          color: #1f2937;
        }
        .feature-name {
          text-align: left;
          font-weight: 600;
          color: #0d3d1a;
          background: #f8fafc;
          border-right: 2px solid #e5e7eb;
        }
        .precision-badge {
          font-weight: 700;
          font-size: 15px;
        }
        .cost-badge {
          font-weight: 600;
          color: #107c41;
        }
        .support-badge {
          background: #dbeafe;
          color: #1e40af;
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 500;
          font-size: 12px;
        }
        .partial {
          color: #ca8a04;
          font-weight: 600;
        }
        .icon-check {
          width: 24px;
          height: 24px;
          color: #16a34a;
          margin: 0 auto;
        }
        .icon-x {
          width: 24px;
          height: 24px;
          color: #dc2626;
          margin: 0 auto;
        }
        .cta-section {
          text-align: center;
        }
        .cta-button {
          background: linear-gradient(135deg, #107c41 0%, #15a34a 100%);
          color: white;
          border: none;
          padding: 16px 48px;
          font-size: 16px;
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
        .cta-text {
          margin-top: 15px;
          font-size: 14px;
          color: #4a7c59;
        }
        @media (max-width: 768px) {
          .competitive-table th,
          .competitive-table td {
            padding: 12px 8px;
            font-size: 12px;
          }
          .column-name {
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

export default CompetitiveTable;
