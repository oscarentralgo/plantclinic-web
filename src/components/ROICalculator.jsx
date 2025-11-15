import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const ROICalculator = () => {
  const [plants, setPlants] = useState(1000);
  const [currentDisease, setCurrentDisease] = useState(15);
  
  const avgCostPerPlant = 8;
  const diseaseReduction = 0.60;
  const monthlySubscription = 49;
  
  const currentAffectedPlants = (plants * currentDisease) / 100;
  const currentMonthlyCost = currentAffectedPlants * avgCostPerPlant;
  
  const newAffectedPlants = currentAffectedPlants * (1 - diseaseReduction);
  const newMonthlyCost = (newAffectedPlants * avgCostPerPlant) + monthlySubscription;
  
  const monthlySavings = currentMonthlyCost - newMonthlyCost;
  const annualSavings = monthlySavings * 12;
  const roi = ((monthlySavings * 12 - (monthlySubscription * 12)) / (monthlySubscription * 12)) * 100;

  const styles = `
    .roi-calculator-section {
      padding: 80px 20px;
      background: #f7fafc;
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
    .section-icon {
      width: 50px;
      height: 50px;
      color: #107c41;
      margin-bottom: 15px;
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
    .calculator-grid {
      display: flex;
      flex-direction: row;
      gap: 60px;
      justify-content: center;
      align-items: flex-start;
      margin-bottom: 40px;
    }
    @media (max-width: 900px) {
      .calculator-grid {
        flex-direction: column;
        gap: 30px;
        align-items: stretch;
      }
    }
    .calculator-inputs-block {
      background: white;
      border-radius: 12px;
      padding: 32px 26px;
      min-width: 250px;
      box-shadow: 0 2px 14px rgba(30, 126, 52, 0.06);
    }
    .calculator-label {
      color: #146357;
      font-weight: 700;
      font-size: 15px;
      margin-top: 1.2em;
      margin-bottom: 0.5em;
      display: block;
    }
    .calculator-slider {
      width: 100%;
      accent-color: #107c41;
      cursor: pointer;
    }
    .calculator-slider-value {
      font-size: 14px;
      font-weight: 700;
      color: #107c41;
      margin-bottom: 8px;
    }
    .calculator-results-block {
      flex: 1;
    }
    .calculator-cards-row {
      display: flex;
      flex-direction: row;
      gap: 32px;
      align-items: center;
      justify-content: start;
    }
    .calculator-result-card {
      background: white;
      border-radius: 12px;
      padding: 26px 32px;
      box-shadow: 0 1px 10px rgba(20,99,87,0.08);
      text-align: center;
      min-width: 170px;
    }
    .calculator-result-card.danger {
      background: #fffbe0;
      border: 1.5px solid #ffd166;
    }
    .calculator-result-card.success {
      background: #ecfdf5;
      border: 1.5px solid #53c297;
    }
    .result-title {
      color: #15803d;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 3px;
    }
    .result-number {
      color: #14532d;
      font-size: 30px;
      font-weight: 800;
    }
    .result-sub {
      color: #828282;
      font-size: 12px;
      margin-top: 3px;
    }
    .result-arrow {
      font-size: 32px;
      font-weight: 400;
      color: #16a34a;
    }
    .calculator-savings-row {
      margin-top: 22px;
      display: flex;
      justify-content: center;
    }
    .calculator-savings-card {
      background: linear-gradient(93deg, #107c41 0%, #33e58c 100%);
      color: white;
      border-radius: 10px;
      padding: 22px 48px;
      font-weight: 700;
      min-width: 220px;
      text-align: center;
      box-shadow: 0 8px 20px rgba(16,124,65,0.10);
    }
    .savings-title { 
      font-size: 13px; 
      opacity: 0.9; 
    }
    .savings-number { 
      font-size: 32px; 
      margin: 0.3em 0;
    }
    .savings-roi { 
      font-size: 14px; 
      font-weight: 600; 
      opacity: 0.95; 
    }
    .calculator-cta {
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
    .cta-subtext {
      margin-top: 15px;
      font-size: 13px;
      color: #4a7c59;
    }
  `;

  if (typeof document !== 'undefined' && !document.getElementById('roi-calculator-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'roi-calculator-styles';
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
  }

  return (
    <section className="roi-calculator-section">
      <div className="container">
        <div className="section-header">
          <Calculator className="section-icon" />
          <h2 className="section-title">Calcula tu ROI</h2>
          <p className="section-description">
            Descubre cuánto podrías ahorrar con PlantClinic
          </p>
        </div>

        <div className="calculator-grid">
          {/* Inputs */}
          <div className="calculator-inputs-block">
            <label className="calculator-label">Número de plantas:</label>
            <input
              type="range"
              min="100"
              max="20000"
              step="100"
              value={plants}
              onChange={e => setPlants(Number(e.target.value))}
              className="calculator-slider"
            />
            <div className="calculator-slider-value">{plants.toLocaleString()} plantas</div>

            <label className="calculator-label">% de enfermedad actual:</label>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={currentDisease}
              onChange={e => setCurrentDisease(Number(e.target.value))}
              className="calculator-slider"
            />
            <div className="calculator-slider-value">{currentDisease}%</div>
          </div>

          {/* Tarjetas resultados */}
          <div className="calculator-results-block">
            <div className="calculator-cards-row">
              <div className="calculator-result-card danger">
                <div className="result-title">Situación Actual</div>
                <div className="result-number">€{currentMonthlyCost.toFixed(0)}</div>
                <div className="result-sub">Pérdida mensual</div>
              </div>
              <div className="result-arrow">→</div>
              <div className="calculator-result-card success">
                <div className="result-title">Con PlantClinic</div>
                <div className="result-number">€{newMonthlyCost.toFixed(0)}</div>
                <div className="result-sub">Costo mensual</div>
              </div>
            </div>
            <div className="calculator-savings-row">
              <div className="calculator-savings-card">
                <div className="savings-title">Ahorro anual</div>
                <div className="savings-number">€{annualSavings.toFixed(0)}</div>
                <div className="savings-roi">ROI: {roi.toFixed(0)}%</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="calculator-cta">
          <button className="cta-button">Solicitar demostración</button>
          <p className="cta-subtext">
            Descubre cómo PlantClinic puede optimizar tu producción
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
