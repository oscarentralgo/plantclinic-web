import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Upload, AlertTriangle, CheckCircle, TrendingDown, Clock } from 'lucide-react';
import { mockDiseases } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const InteractiveDemo = React.forwardRef((props, ref) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [diagnosis, setDiagnosis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setDiagnosis(null);
    } else {
      toast({
        title: "Error",
        description: "Por favor selecciona una imagen válida",
        variant: "destructive"
      });
    }
  };

  const handleAnalyze = () => {
    if (!selectedFile) {
      toast({
        title: "Error",
        description: "Primero sube una imagen de la planta",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const randomDisease = mockDiseases[Math.floor(Math.random() * mockDiseases.length)];
      setDiagnosis(randomDisease);
      setIsAnalyzing(false);
      
      toast({
        title: "Análisis Completado",
        description: `Enfermedad detectada: ${randomDisease.name}`,
      });
    }, 2500);
  };

  const calculateROI = () => {
    if (!diagnosis) return null;
    
    const hectares = 50; // Example
    const costPerHectare = 800; // Euro per hectare
    const totalCost = hectares * costPerHectare;
    const savings = (totalCost * diagnosis.costImpact) / 100;
    
    return {
      totalCost,
      savings,
      percentage: diagnosis.costImpact
    };
  };

  const roi = calculateROI();

  return (
    <section ref={ref} className="demo-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Demo Interactiva</h2>
          <p className="section-description">
            Sube una foto de tu planta y obtén un diagnóstico instantáneo con cálculo de ROI
          </p>
          <p className="demo-note">
            <span className="note-badge">BETA</span>
            Simulación con datos mock. IA real vía API disponible en Fase 2 (Marzo 2025)
          </p>
        </div>

        <div className="demo-container">
          <div className="demo-upload">
            <Card className="network-card upload-card">
              <CardHeader>
                <CardTitle>1. Sube Imagen de Planta</CardTitle>
                <CardDescription>
                  Foto clara de hojas, tallos o frutos con síntomas visibles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="upload-area">
                  <input
                    type="file"
                    id="plant-image"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="file-input"
                  />
                  <label htmlFor="plant-image" className="upload-label">
                    <Upload className="upload-icon" />
                    <span className="upload-text">
                      {selectedFile ? selectedFile.name : 'Seleccionar imagen'}
                    </span>
                  </label>
                </div>
                
                <Button 
                  className="btn-primary analyze-btn" 
                  onClick={handleAnalyze}
                  disabled={!selectedFile || isAnalyzing}
                >
                  {isAnalyzing ? 'Analizando...' : 'Analizar con IA'}
                </Button>
              </CardContent>
            </Card>
          </div>

          {diagnosis && (
            <div className="demo-results">
              <Card className="network-card result-card">
                <CardHeader>
                  <div className="result-header">
                    <AlertTriangle className="result-icon severity-icon" />
                    <div>
                      <CardTitle>Diagnóstico: {diagnosis.name}</CardTitle>
                      <CardDescription>Confianza: {diagnosis.confidence}%</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="result-info">
                    <div className="info-item">
                      <span className="info-label">Severidad:</span>
                      <span className={`severity-badge severity-${diagnosis.severity.toLowerCase()}`}>
                        {diagnosis.severity}
                      </span>
                    </div>
                    
                    <div className="info-item">
                      <span className="info-label">Tiempo para actuar:</span>
                      <span className="info-value">
                        <Clock className="info-icon" />
                        {diagnosis.timeToAction}
                      </span>
                    </div>
                  </div>

                  <div className="diagnosis-description">
                    <h4>Descripción</h4>
                    <p>{diagnosis.description}</p>
                  </div>

                  <div className="treatment-section">
                    <h4>Tratamiento Recomendado</h4>
                    <p>{diagnosis.treatment}</p>
                  </div>

                  <div className="actions-section">
                    <h4>Acciones Recomendadas</h4>
                    <ul className="actions-list">
                      {diagnosis.recommendedActions.map((action, idx) => (
                        <li key={idx}>
                          <CheckCircle className="action-icon" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {roi && (
                    <div className="roi-section">
                      <div className="roi-header">
                        <TrendingDown className="roi-icon" />
                        <h4>Cálculo de ROI</h4>
                      </div>
                      <div className="roi-data">
                        <div className="roi-item">
                          <span className="roi-label">Coste sin prevención:</span>
                          <span className="roi-value">€{roi.totalCost.toLocaleString()}</span>
                        </div>
                        <div className="roi-item highlight">
                          <span className="roi-label">Ahorro potencial:</span>
                          <span className="roi-value savings">€{roi.savings.toLocaleString()}</span>
                        </div>
                        <div className="roi-percentage">
                          <span>Reducción de costes: {roi.percentage}%</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

InteractiveDemo.displayName = 'InteractiveDemo';

export default InteractiveDemo;
