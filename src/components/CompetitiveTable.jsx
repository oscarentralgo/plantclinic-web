import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, X } from 'lucide-react';
import { competitors } from '../data/mock';

const CompetitiveTable = () => {
  return (
    <section className="competitive-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Comparativa con Competidores</h2>
          <p className="section-description">
            Por qué PlantClinic es la mejor opción para negocios agropecuarios serios
          </p>
        </div>

        <Card className="network-card competitive-card">
          <CardHeader>
            <CardTitle>PlantClinic vs. Plantix, Agrio y Aicrop</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="comparison-table">
              <table className="competitive-table">
                <thead>
                  <tr>
                    <th className="feature-column">Característica</th>
                    {competitors.map((comp) => (
                      <th key={comp.name} className={comp.name === 'PlantClinic' ? 'highlight-column' : ''}>
                        {comp.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="feature-name">Alertas Preventivas</td>
                    {competitors.map((comp) => (
                      <td key={`${comp.name}-alertas`} className={comp.name === 'PlantClinic' ? 'highlight-column' : ''}>
                        <span className={comp.alertasPrev === 'No' ? 'text-muted' : 'text-bold'}>
                          {comp.alertasPrev}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="feature-name">Integración API/ERP</td>
                    {competitors.map((comp) => (
                      <td key={`${comp.name}-api`} className={comp.name === 'PlantClinic' ? 'highlight-column' : ''}>
                        {comp.integracionAPI === true ? (
                          <CheckCircle className="check-icon" />
                        ) : comp.integracionAPI === false ? (
                          <X className="x-icon" />
                        ) : (
                          <span className="text-muted">{comp.integracionAPI}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="feature-name">Datos Reales B2B</td>
                    {competitors.map((comp) => (
                      <td key={`${comp.name}-datos`} className={comp.name === 'PlantClinic' ? 'highlight-column' : ''}>
                        {comp.datosReales === true ? (
                          <CheckCircle className="check-icon" />
                        ) : comp.datosReales === false ? (
                          <X className="x-icon" />
                        ) : (
                          <span>{comp.datosReales}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="feature-name">Soporte B2B Profesional</td>
                    {competitors.map((comp) => (
                      <td key={`${comp.name}-soporte`} className={comp.name === 'PlantClinic' ? 'highlight-column' : ''}>
                        {comp.soporteB2B === true ? (
                          <CheckCircle className="check-icon" />
                        ) : comp.soporteB2B === false ? (
                          <X className="x-icon" />
                        ) : (
                          <span className="text-muted">{comp.soporteB2B}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="feature-name">Precio</td>
                    {competitors.map((comp) => (
                      <td key={`${comp.name}-precio`} className={comp.name === 'PlantClinic' ? 'highlight-column' : ''}>
                        <span className="price-text">{comp.precio}</span>
                      </td>
                    ))}
                  </tr>
                  <tr className="roi-row">
                    <td className="feature-name"><strong>ROI Comprobado</strong></td>
                    {competitors.map((comp) => (
                      <td key={`${comp.name}-roi`} className={comp.name === 'PlantClinic' ? 'highlight-column' : ''}>
                        <strong className={comp.name === 'PlantClinic' ? 'roi-highlight' : ''}>
                          {comp.roi}
                        </strong>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="competitive-summary">
              <h4>Ventaja Competitiva Clave</h4>
              <ul>
                <li>Única plataforma con alertas predictivas <strong>7 días antes</strong></li>
                <li>ROI demostrable: <strong>35-40% reducción de costes</strong> vs 15-20% competencia</li>
                <li>API completa para integración con sistemas empresariales existentes</li>
                <li>Entrenamiento con datos reales de +1000 explotaciones B2B</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CompetitiveTable;
