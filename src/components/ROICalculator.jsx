import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ROICalculator = () => {
  // Estados para los inputs del usuario
  const [plants, setPlants] = useState(1000);
  const [currentDisease, setCurrentDisease] = useState(15);
  
  // Cálculos automáticos
  const avgCostPerPlant = 8; // €8 costo promedio por planta afectada
  const diseaseReduction = 0.60; // 60% reducción con PlantClinic
  const monthlySubscription = 49; // €49/mes suscripción
  
  // Calcular pérdidas actuales
  const currentAffectedPlants = (plants * currentDisease) / 100;
  const currentMonthlyCost = currentAffectedPlants * avgCostPerPlant;
  
  // Calcular con PlantClinic
  const newAffectedPlants = currentAffectedPlants * (1 - diseaseReduction);
  const newMonthlyCost = (newAffectedPlants * avgCostPerPlant) + monthlySubscription;
  
  // Ahorro mensual y anual
  const monthlySavings = currentMonthlyCost - newMonthlyCost;
  const annualSavings = monthlySavings * 12;
  const roi = ((monthlySavings * 12 - (monthlySubscription * 12)) / (monthlySubscription * 12)) * 100;

  return (
    <section className="roi-calculator-section">
      <div className="container">
        <div className="section-header">
          <Calculator className="section-icon" />
          <h2 className="section-title">Calculá tu ROI</h2>
          <p className="section-description">
            Descubrí cuánto podés ahorrar con PlantClinic
          </p>
        </div>

        <Card className="calculator-card">
          <CardContent className="calculator-content">
            {/* Inputs del usuario */}
            <div className="calculator-inputs">
              <div className="input-group">
                <label htmlFor="plants">Número de plantas:</label>
                <input
                  type="range"
                  id="plants"
                  min="100"
                  max="50000"
                  step="100"
                  value={plants}
                  onChange={(e) => setPlants(parseInt(e.target.value))}
                  className="slider"
                />
                <span className="input-value">{plants.toLocaleString()} plantas</span>
              </div>

              <div className="input-group">
                <label htmlFor="disease">% de enfermedad actual:</label>
                <input
                  type="range"
                  id="disease"
                  min="5"
                  max="50"
                  step="1"
                  value={currentDisease}
                  onChange={(e) => setCurrentDisease(parseInt(e.target.value))}
                  className="slider"
                />
                <span className="input-value">{currentDisease}%</span>
              </div>
            </div>

            {/* Resultados */}
            <div className="calculator-results">
              <div className="result-card current">
                <h3>Situación Actual</h3>
                <div className="result-value">€{currentMonthlyCost.toFixed(0)}</div>
                <p>Pérdida mensual</p>
              </div>

              <div className="result-arrow">→</div>

              <div className="result-card plantclinic">
                <h3>Con PlantClinic</h3>
                <div className="result-value">€{newMonthlyCost.toFixed(0)}</div>
                <p>Costo mensual</p>
              </div>

              <div className="result-savings">
                <div className="savings-highlight">
                  <h3>Ahorro Anual</h3>
                  <div className="savings-value">€{annualSavings.toFixed(0)}</div>
                  <p className="roi-text">ROI: {roi.toFixed(0)}%</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="calculator-cta">
              <button className="cta-button">
                Solicitar Demostración
              </button>
              <p className="cta-subtext">
                Descubrí cómo PlantClinic puede optimizar tu producción
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ROICalculator;
