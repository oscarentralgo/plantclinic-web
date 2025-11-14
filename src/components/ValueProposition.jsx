import React from 'react';
import { Shield, Bell, Zap, DollarSign, Clock, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

const ValueProposition = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Precisión Profesional",
      description: "IA entrenada con datos reales B2B de 1000+ explotaciones. Diagnósticos con 92% de precisión validados por ingenieros agrónomos."
    },
    {
      icon: Bell,
      title: "Alertas 7 Días Antes",
      description: "Sistema predictivo que anticipa brotes de enfermedades hasta una semana antes. Actúa preventivamente y evita pérdidas masivas."
    },
    {
      icon: Zap,
      title: "Integración API Completa",
      description: "API REST con webhooks para integrar con tu CRM, ERP o sistemas de gestión. Automatiza el flujo de trabajo agropecuario."
    },
    {
      icon: DollarSign,
      title: "Reducción 35-40% Costes",
      description: "Optimiza el uso de fitosanitarios con tratamientos precisos. Clientes Beta reportan ahorros de €8,000-€12,000 por temporada."
    },
    {
      icon: Clock,
      title: "Ahorro de 12 Horas Semanales",
      description: "Automatiza inspecciones manuales con monitoreo continuo. Tus técnicos se enfocan en decisiones estratégicas, no en recorridos."
    },
    {
      icon: BarChart3,
      title: "ROI Comprobable",
      description: "Dashboard con métricas de ahorro, eficiencia de tratamientos y tendencias. Justifica inversión con datos duros desde día 1."
    }
  ];

  return (
    <section className="value-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">¿Por Qué PlantClinic?</h2>
          <p className="section-description">
            No es otra app de diagnóstico. Es tu sistema profesional de gestión preventiva de enfermedades.
          </p>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="network-card benefit-card">
                <CardHeader>
                  <div className="benefit-icon-wrapper">
                    <IconComponent className="benefit-icon" />
                  </div>
                  <CardTitle className="benefit-title">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="benefit-description">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
