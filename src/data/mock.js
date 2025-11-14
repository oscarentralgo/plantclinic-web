// Mock data for PlantClinic Landing Page

export const mockDiseases = [
  {
    id: 1,
    name: "Mildiu (Plasmopara viticola)",
    severity: "Alta",
    confidence: 92,
    description: "Enfermedad fúngica común en vid y tomate. Requiere tratamiento inmediato.",
    prevention: "Aplicar fungicidas preventivos cada 7-10 días en condiciones húmedas",
    treatment: "Cobre o fungicidas sistémicos (metalaxil, mancozeb)",
    costImpact: 35,
    timeToAction: "3-5 días",
    recommendedActions: [
      "Aplicar tratamiento fungicida inmediatamente",
      "Mejorar ventilación del cultivo",
      "Reducir riego por aspersión",
      "Monitorear plantas vecinas"
    ]
  },
  {
    id: 2,
    name: "Oídio (Erysiphe necator)",
    severity: "Media",
    confidence: 88,
    description: "Hongo que afecta hojas y frutos. Común en clima seco y cálido.",
    prevention: "Mantener ventilación adecuada, evitar exceso de nitrógeno",
    treatment: "Azufre en polvo o fungicidas específicos (tebuconazol)",
    costImpact: 22,
    timeToAction: "5-7 días",
    recommendedActions: [
      "Aplicar azufre en polvo",
      "Reducir fertilización nitrogenada",
      "Podar para mejorar circulación de aire",
      "Monitorear semanalmente"
    ]
  },
  {
    id: 3,
    name: "Roya (Puccinia spp.)",
    severity: "Media",
    confidence: 85,
    description: "Enfermedad fúngica que causa manchas amarillas y pustulas naranjas.",
    prevention: "Rotación de cultivos, eliminar restos vegetales infectados",
    treatment: "Fungicidas sistémicos (triazoles, estrobilurinas)",
    costImpact: 28,
    timeToAction: "4-6 días",
    recommendedActions: [
      "Aplicar fungicida sistémico",
      "Eliminar hojas afectadas",
      "Evitar riego por aspersión",
      "Revisar cultivos adyacentes"
    ]
  },
  {
    id: 4,
    name: "Botrytis (Botrytis cinerea)",
    severity: "Alta",
    confidence: 90,
    description: "Podredumbre gris que afecta flores, frutos y hojas en condiciones húmedas.",
    prevention: "Control de humedad, espaciamiento adecuado entre plantas",
    treatment: "Fungicidas específicos (iprodiona, pirimetanil)",
    costImpact: 40,
    timeToAction: "2-4 días",
    recommendedActions: [
      "Tratamiento urgente con fungicida",
      "Eliminar partes afectadas inmediatamente",
      "Reducir humedad ambiental",
      "Mejorar ventilación"
    ]
  }
];

export const testimonials = [
{
id: 1,
type: "use-case",
title: "Caso de Uso: Tomate",
subtitle: "Explotación mediana: 45 hectáreas",
cultivo: "Tomate",
hectareas: 45,
description: "Un productor de tomate típico pierde €12,000/año en plagas tardías. Con PlantClinic detectaría problemas 7 días antes y reduciría costos a €7,800.",
impacts: [
"-€4,200/año en fitosanitarios (-35%)",
"-12 horas/semana en inspecciones",
"+5-8% rentabilidad de producción"
],
disclaimer: "Basado en datos de mercado agropecuario 2024-2025"
},
{
id: 2,
type: "use-case",
title: "Caso de Uso: Olivar",
subtitle: "Empresa grande: 120 hectáreas",
cultivo: "Olivo",
hectareas: 120,
description: "Una empresa de olivares típica invierte 3-4 horas diarias en inspecciones manuales. PlantClinic automatiza esto y alerta de problemas antes de manifestarse.",
impacts: [
"-12 horas/semana en monitoreo",
"Detección temprana 90% de brotes",
"Mejor toma de decisiones estratégicas"
],
disclaimer: "Basado en datos de mercado agropecuario 2024-2025"
},
{
id: 3,
type: "use-case",
title: "Caso de Uso: Pimiento",
subtitle: "Invernadero intensivo: 28 hectáreas",
cultivo: "Pimiento",
hectareas: 28,
description: "Invernaderos de pimiento requieren máxima precisión. Plagas tardías generan 30-40% de pérdida de cosecha. PlantClinic reduce químicos sin sacrificar rendimiento.",
impacts: [
"-40% uso de fungicidas/insecticidas",
"Producción sostenible sin sacrificar rendimiento",
"Certificación ecológica más accesible"
],
disclaimer: "Basado en datos de mercado agropecuario 2024-2025"
}
];
export const pricingPlans = [
  {
    id: 1,
    name: "Professional",
    price: 80,
    period: "mes",
    description: "Para explotaciones pequeñas y medianas",
    features: [
      "Hasta 50 hectáreas monitorizadas",
      "Diagnósticos ilimitados con IA",
      "Alertas preventivas 7 días",
      "Reportes semanales PDF",
      "Soporte email 24-48h",
      "App móvil iOS/Android",
      "1 usuario incluido"
    ],
    ideal: "5-50 hectáreas",
    popular: false
  },
  {
    id: 2,
    name: "Enterprise",
    price: 180,
    period: "mes",
    description: "Para grandes explotaciones y SATs",
    features: [
      "Hasta 200 hectáreas monitorizadas",
      "Diagnósticos ilimitados con IA",
      "Alertas preventivas 7 días",
      "API REST para integración ERP/CRM",
      "Reportes personalizados",
      "Soporte prioritario 4-8h",
      "App móvil + Dashboard web",
      "5 usuarios incluidos",
      "Analítica avanzada y tendencias"
    ],
    ideal: "50-200 hectáreas",
    popular: true
  },
  {
    id: 3,
    name: "Cooperativa",
    price: 800,
    period: "mes",
    description: "Para cooperativas y grupos agropecuarios",
    features: [
      "Hectáreas ilimitadas",
      "Diagnósticos ilimitados con IA",
      "Alertas preventivas 7 días",
      "API REST completa + Webhooks",
      "White-label personalizado",
      "Soporte dedicado 2-4h",
      "Onboarding y formación incluida",
      "Usuarios ilimitados",
      "Analítica multi-explotación",
      "Gestor de cuenta dedicado"
    ],
    ideal: "+200 hectáreas",
    popular: false
  }
];

export const competitors = [
  {
    name: "PlantClinic",
    alertasPrev: "7 días",
    integracionAPI: true,
    datosReales: true,
    soporteB2B: true,
    precio: "€80-800/mes",
    roi: "35-40%"
  },
  {
    name: "Plantix",
    alertasPrev: "No",
    integracionAPI: false,
    datosReales: false,
    soporteB2B: false,
    precio: "Gratis/B2C",
    roi: "No medible"
  },
  {
    name: "Agrio",
    alertasPrev: "24h",
    integracionAPI: false,
    datosReales: false,
    soporteB2B: "Limitado",
    precio: "$30-60/mes",
    roi: "15-20%"
  },
  {
    name: "Aicrop",
    alertasPrev: "48h",
    integracionAPI: true,
    datosReales: true,
    soporteB2B: true,
    precio: "€150-400/mes",
    roi: "25-30%"
  }
];

export const roadmapMilestones = [
  {
    quarter: "Q1 2025",
    title: "Consolidación Beta",
    goals: [
      "20 clientes Beta activos",
      "€15K MRR",
      "Integración API v1.0",
      "Precisión IA >90%"
    ],
    status: "completed"
  },
  {
    quarter: "Q2 2025",
    title: "Expansión España",
    goals: [
      "50 clientes totales",
      "€30K MRR (€360K ARR)",
      "Presencia en ECPA Barcelona",
      "Lanzamiento app móvil"
    ],
    status: "current"
  },
  {
    quarter: "Q3 2025",
    title: "Internacionalización",
    goals: [
      "Expansión Portugal",
      "100 clientes totales",
      "€60K MRR",
      "API v2.0 con webhooks"
    ],
    status: "planned"
  },
  {
    quarter: "Q4 2025",
    title: "Escalado LATAM",
    goals: [
      "Entrada México y Chile",
      "200 clientes totales",
      "€100K MRR (€1.2M ARR)",
      "Round Seed €500K"
    ],
    status: "planned"
  }
];

export const successMetrics = [
  {
    metric: "50+",
    label: "Clientes Año 1",
    icon: "users"
  },
  {
    metric: "€60K",
    label: "ARR Proyectado Q4 2025",
    icon: "trending-up"
  },
  {
    metric: "35-40%",
    label: "Reducción Costes Promedio",
    icon: "percent"
  },
  {
    metric: "92%",
    label: "Precisión Diagnóstico IA",
    icon: "target"
  },
  {
    metric: "7 días",
    label: "Alertas Preventivas",
    icon: "clock"
  },
  {
    metric: "12 hrs",
    label: "Ahorro Semanal Monitoreo",
    icon: "zap"
  }
];
