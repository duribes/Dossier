// ============================================================
// DOCENCIA — Agrega o edita cursos aquí
// ============================================================

const UNDERGRADUATE_COURSES = [
  {
    id: "ug1",
    code: "INF-201",
    name: "Estructuras de Datos",
    credits: 4,
    semester: "Semestres I y II",
    description: "Estudio de las estructuras de datos fundamentales: listas, pilas, colas, árboles y grafos. Implementación en lenguajes de programación modernos con énfasis en eficiencia algorítmica y aplicaciones prácticas.",
    syllabus: "" // URL al syllabus si existe
  },
  {
    id: "ug2",
    code: "INF-315",
    name: "Algoritmos y Complejidad",
    credits: 4,
    semester: "Semestre I",
    description: "Fundamentos del diseño y análisis de algoritmos. Técnicas de divide y vencerás, programación dinámica, algoritmos voraces. Teoría de la complejidad computacional: clases P, NP y NP-completo.",
    syllabus: ""
  },
  {
    id: "ug3",
    code: "INF-420",
    name: "Simulación de Sistemas",
    credits: 3,
    semester: "Semestre II",
    description: "Modelado y simulación de sistemas discretos y continuos. Métodos de Monte Carlo, simulación de eventos discretos, validación y verificación de modelos. Uso de herramientas computacionales especializadas.",
    syllabus: ""
  },
  {
    id: "ug4",
    code: "MAT-210",
    name: "Probabilidad y Estadística",
    credits: 4,
    semester: "Semestres I y II",
    description: "Introducción a la teoría de probabilidad y la estadística inferencial. Variables aleatorias, distribuciones de probabilidad, pruebas de hipótesis, regresión lineal y análisis de varianza.",
    syllabus: ""
  }
];

const POSTGRADUATE_COURSES = [
  {
    id: "pg1",
    code: "CIC-701",
    name: "Sistemas Complejos Adaptativos",
    credits: 3,
    level: "Doctorado / Maestría",
    semester: "Semestre I",
    description: "Teoría y modelado de sistemas complejos adaptativos. Emergencia, autoorganización y criticalidad. Modelos basados en agentes, redes pequeño mundo y libre de escala. Aplicaciones en sistemas sociales, biológicos y económicos.",
    syllabus: ""
  },
  {
    id: "pg2",
    code: "CIC-702",
    name: "Aprendizaje Automático Avanzado",
    credits: 3,
    level: "Doctorado / Maestría",
    semester: "Semestre II",
    description: "Métodos avanzados de machine learning: redes neuronales profundas, aprendizaje por refuerzo, modelos generativos y aprendizaje no supervisado. Énfasis en fundamentos matemáticos y aplicaciones de investigación.",
    syllabus: ""
  },
  {
    id: "pg3",
    code: "CIC-650",
    name: "Análisis de Redes Complejas",
    credits: 3,
    level: "Maestría",
    semester: "Semestre I",
    description: "Teoría de grafos aplicada al estudio de redes reales. Métricas de centralidad, detección de comunidades, dinámica sobre redes, modelos de formación de redes. Análisis con Python y herramientas especializadas.",
    syllabus: ""
  }
];
