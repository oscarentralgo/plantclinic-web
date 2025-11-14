import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, Clock, TrendingUp, Globe } from 'lucide-react';
import { roadmapMilestones, successMetrics } from '../data/mock';

const Roadmap = () => {
  const getStatusIcon = (status) => {
    if (status === 'completed') return <CheckCircle className="status-icon completed" />;
    if (status === 'current') return <Clock className="status-icon current" />;
    return <TrendingUp className="status-icon planned" />;
  };

  return (
    <section className="roadmap-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Roadmap y Métricas de Éxito</h2>
          <p className="section-description">
            Escalado Y Combinator: Transparencia en objetivos y tracción medible
          </p>
        </div>

        {/* Success Metrics */}
        <div className="metrics-grid">
          {successMetrics.map((metric, index) => {
            const IconComponent = 
              metric.icon === 'users' ? Globe :
              metric.icon === 'trending-up' ? TrendingUp :
              metric.icon === 'percent' ? TrendingUp :
              metric.icon === 'target' ? CheckCircle :
              metric.icon === 'clock' ? Clock : TrendingUp;
            
            return (
              <Card key={index} className="network-card metric-card">
                <CardContent className="metric-content">
                  <IconComponent className="metric-icon-large" />
                  <div className="metric-number">{metric.metric}</div>
                  <div className="metric-description">{metric.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Roadmap Timeline */}
        <div className="roadmap-timeline">
          <Card className="network-card roadmap-card">
            <CardHeader>
              <CardTitle>Hoja de Ruta 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="timeline">
                {roadmapMilestones.map((milestone, index) => (
                  <div key={index} className={`timeline-item ${milestone.status}`}>
                    <div className="timeline-marker">
                      {getStatusIcon(milestone.status)}
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-quarter">{milestone.quarter}</div>
                      <h4 className="timeline-title">{milestone.title}</h4>
                      <ul className="timeline-goals">
                        {milestone.goals.map((goal, idx) => (
                          <li key={idx}>{goal}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Milestones Summary */}
        <div className="milestones-summary">
          <Card className="network-card summary-card">
            <CardContent className="summary-content">
              <div className="summary-item">
                <div className="summary-label">Año 1 (2025)</div>
                <div className="summary-value">50 clientes | €60K ARR</div>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-item">
                <div className="summary-label">Expansión</div>
                <div className="summary-value">Portugal Q4 | LATAM 2026</div>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-item">
                <div className="summary-label">Ferias 2025</div>
                <div className="summary-value">ECPA Barcelona (Jun-Jul)</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
