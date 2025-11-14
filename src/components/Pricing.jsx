import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { CheckCircle, Star } from 'lucide-react';
import { pricingPlans } from '../data/mock';

const Pricing = ({ onScrollToContact }) => {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Planes y Precios</h2>
          <p className="section-description">
            Transparencia total. Sin costes ocultos. Cancela cuando quieras.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`network-card pricing-card ${plan.popular ? 'popular-plan' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Star className="badge-star" />
                  Más Popular
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="plan-name">{plan.name}</CardTitle>
                <CardDescription className="plan-description">
                  {plan.description}
                </CardDescription>
                <div className="plan-price">
                  <span className="price-amount">€{plan.price}</span>
                  <span className="price-period">/{plan.period}</span>
                </div>
                <div className="plan-ideal">
                  Ideal para {plan.ideal}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <CheckCircle className="feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={plan.popular ? 'btn-primary btn-cta' : 'btn-secondary'}
                  onClick={onScrollToContact}
                >
                  {plan.popular ? 'Comenzar Ahora' : 'Solicitar Info'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="pricing-note">
          <p>
            <strong>Periodo de prueba:</strong> 14 días gratis sin compromiso. 
            <strong> Descuentos:</strong> 15% anual, 20% cooperativas +5 socios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
