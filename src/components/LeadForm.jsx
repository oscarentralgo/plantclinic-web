import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from '../hooks/use-toast';
import { Mail, Building2, Sprout, MapPin } from 'lucide-react';

const LeadForm = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    email: '',
    empresa: '',
    hectareas: '',
    tipoCultivo: '',
    dolorPrincipal: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.email || !formData.empresa || !formData.hectareas || !formData.tipoCultivo) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const API = `${BACKEND_URL}/api`;
      
      // Convert hectareas to number
      const submitData = {
        ...formData,
        hectareas: parseInt(formData.hectareas, 10)
      };
      
      const response = await fetch(`${API}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "¡Solicitud Enviada!",
          description: "Nuestro equipo te contactará en menos de 24 horas. Revisa tu email para confirmar.",
        });
        
        // Reset form
        setFormData({
          email: '',
          empresa: '',
          hectareas: '',
          tipoCultivo: '',
          dolorPrincipal: ''
        });
      } else {
        toast({
          title: "Error",
          description: data.detail || "Hubo un problema al enviar tu solicitud.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Error submitting lead:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="lead-form-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Solicita una Demo Personalizada</h2>
          <p className="section-description">
            Descubre cómo PlantClinic puede transformar la gestión de tu explotación agropecuaria
          </p>
        </div>

        <Card className="network-card lead-card">
          <CardHeader>
            <CardTitle>Datos de tu Explotación</CardTitle>
            <CardDescription>
              Completa el formulario y recibe una propuesta personalizada en 24h
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="lead-form">
              <div className="form-row">
                <div className="form-group">
                  <Label htmlFor="email">
                    <Mail className="form-label-icon" />
                    Email Corporativo *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@empresa.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="empresa">
                    <Building2 className="form-label-icon" />
                    Nombre de Empresa *
                  </Label>
                  <Input
                    id="empresa"
                    type="text"
                    placeholder="Cooperativa Agrícola S.A."
                    value={formData.empresa}
                    onChange={(e) => handleChange('empresa', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <Label htmlFor="hectareas">
                    <MapPin className="form-label-icon" />
                    Hectáreas Totales *
                  </Label>
                  <Input
                    id="hectareas"
                    type="number"
                    placeholder="50"
                    value={formData.hectareas}
                    onChange={(e) => handleChange('hectareas', e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="tipoCultivo">
                    <Sprout className="form-label-icon" />
                    Tipo de Cultivo *
                  </Label>
                  <Select 
                    value={formData.tipoCultivo} 
                    onValueChange={(value) => handleChange('tipoCultivo', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona cultivo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tomate">Tomate</SelectItem>
                      <SelectItem value="pimiento">Pimiento</SelectItem>
                      <SelectItem value="olivo">Olivo</SelectItem>
                      <SelectItem value="vid">Vid</SelectItem>
                      <SelectItem value="citricos">Cítricos</SelectItem>
                      <SelectItem value="frutales">Frutales</SelectItem>
                      <SelectItem value="horticolas">Hortícolas varios</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="form-group">
                <Label htmlFor="dolorPrincipal">
                  Principal Problema Actual (Opcional)
                </Label>
                <Textarea
                  id="dolorPrincipal"
                  placeholder="Ej: Pérdidas recurrentes por mildiu, alto coste en tratamientos preventivos, falta de visibilidad en tiempo real..."
                  value={formData.dolorPrincipal}
                  onChange={(e) => handleChange('dolorPrincipal', e.target.value)}
                  rows={4}
                />
              </div>

              <Button 
                type="submit" 
                className="btn-primary btn-cta submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Demo Gratuita'}
              </Button>

              <p className="form-privacy">
                Al enviar, aceptas que contactemos para ofrecerte una demo personalizada. 
                Tus datos están protegidos según RGPD.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
});

LeadForm.displayName = 'LeadForm';

export default LeadForm;
