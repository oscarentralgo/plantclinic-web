import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, TrendingDown, Clock } from 'lucide-react';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Casos de Éxito Beta</h2>
          <p className="section-description">
            Clientes reales, resultados reales. Descubre cómo PlantClinic transformó sus operaciones.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="network-card testimonial-card">
              <CardContent className="testimonial-content">
                <div className="testimonial-header">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                    <p className="testimonial-company">{testimonial.company}</p>
                  </div>
                </div>

                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star-icon filled" />
                  ))}
                </div>

                <blockquote className="testimonial-quote">
                  "{testimonial.testimonial}"
                </blockquote>

                <div className="testimonial-stats">
                  <div className="stat-badge">
                    <span className="stat-label">Cultivo:</span>
                    <span className="stat-value">{testimonial.cultivo} - {testimonial.hectareas} ha</span>
                  </div>
                  
                  <div className="result-metrics">
                    <div className="metric-item">
                      <TrendingDown className="metric-icon" />
                      <div>
                        <div className="metric-value">{testimonial.savings}</div>
                        <div className="metric-label">{testimonial.metric}</div>
                      </div>
                    </div>
                    <div className="metric-period">
                      <Clock className="period-icon" />
                      {testimonial.period}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="testimonial-cta">
          <p className="cta-text">
            Únete a +20 clientes Beta que ya están ahorrando con PlantClinic
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
