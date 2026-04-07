// ============================================================
// PUBLICACIONES — Formato BibTeX agrupado por tema
// Agrega o edita entradas directamente aquí
// ============================================================

const RESEARCH_TOPICS = [
  {
    id: "topic1",
    title: "Aprendizaje Automático y Datos Espaciales",
    description: "Investigación sobre métodos de machine learning aplicados a datos geoespaciales y análisis territorial."
  },
  {
    id: "topic2",
    title: "Modelado y Simulación de Sistemas Complejos",
    description: "Desarrollo de modelos computacionales para la simulación de fenómenos físicos y sociales complejos."
  },
  {
    id: "topic3",
    title: "Análisis de Redes y Grafos",
    description: "Estudio de estructuras de red en sistemas sociales, biológicos y tecnológicos."
  }
];

// BibTeX de publicaciones — el campo "topic" debe coincidir con el id de RESEARCH_TOPICS
const PUBLICATIONS_BIBTEX = `
@article{LuisAmigo_2024,
  author    = {G.J. Posada-Hernández and M. López-Bonilla and D.A. Uribe-Suárez and V. Gómez-Ceballos and L.F. Cardona-Palacio},
  title     = {Estimating the added value of critical reading competence in college students using statistical modeling},
  journal   = {Revista de Investigación, Desarrollo e Innovación},
  year      = {2025},
  ISSN = {2027-8306},
  volume    = {15},
  pages     = {67--86},
  doi = {10.19053/uptc.20278306.v15.n1.2025.18823},
  topic     = {topic1}
}


@article{LuisAmigo_2023,
	title = {Analysis of the added value for the quantitative reasoning competency at the Luis Amigó Catholic University in 2021},
	journal = {Revista de Investigación, Desarrollo e Innovación},
	volume = {13},
	issue  ={2},
	pages = {329-344},
	year = {2023},
	issn = {2027-8306},
	doi = {10.19053/20278306.v13.n2.2023.16838},
	author = {G.J. Posada-Hernández and M. López-Bonilla and D.A. Uribe-Suárez and V. Gómez-Ceballos and L.F. Cardona-Palacio}
}





@article{apellido2023complex,
  author    = {Apellido, Nombre and Otro, Autor},
  title     = {Simulation of Complex Systems Using Agent-Based Models},
  journal   = {Physica A: Statistical Mechanics and its Applications},
  year      = {2023},
  volume    = {612},
  pages     = {128--145},
  doi       = {10.1016/j.physa.2023.128},
  topic     = {topic2}
}

@inproceedings{apellido2023networks,
  author    = {Apellido, Nombre},
  title     = {Graph Neural Networks for Social Network Analysis},
  booktitle = {Proceedings of the International Conference on Network Science},
  year      = {2023},
  pages     = {45--58},
  publisher = {Springer},
  topic     = {topic3}
}

@article{apellido2022spatial,
  author    = {Apellido, Nombre and Coautor2, Nombre},
  title     = {Spatial Clustering Algorithms: A Comparative Study},
  journal   = {Computers, Environment and Urban Systems},
  year      = {2022},
  volume    = {98},
  pages     = {101847},
  topic     = {topic1}
}

@book{apellido2022book,
  author    = {Apellido, Nombre},
  title     = {Introduction to Computational Social Science},
  publisher = {Editorial Universitaria},
  year      = {2022},
  address   = {Bogotá, Colombia},
  isbn      = {978-0-000-00000-0},
  topic     = {topic2}
}
`;

// ============================================================
// TALKS / CONFERENCIAS
// ============================================================

const TALKS_BIBTEX = `
@misc{talk2024isi,
  author    = {Apellido, Nombre},
  title     = {Advances in Spatial Machine Learning for Urban Systems},
  howpublished = {Keynote, International Symposium on Informatics},
  year      = {2024},
  month     = {September},
  address   = {Berlín, Alemania},
  url       = {https://example.com/talk2024}
}

@misc{talk2023netscix,
  author    = {Apellido, Nombre},
  title     = {Community Detection in Temporal Networks},
  howpublished = {Invited Talk, NetSci-X Conference},
  year      = {2023},
  month     = {January},
  address   = {Buenos Aires, Argentina}
}

@misc{talk2023unal,
  author    = {Apellido, Nombre},
  title     = {Modelado basado en agentes para políticas públicas},
  howpublished = {Seminario de Investigación, Universidad Nacional de Colombia},
  year      = {2023},
  month     = {March},
  address   = {Medellín, Colombia}
}

@misc{talk2022somsi,
  author    = {Apellido, Nombre},
  title     = {Data-Driven Approaches to Complex System Modeling},
  howpublished = {Panel, Simposio de Modelado y Simulación},
  year      = {2022},
  month     = {November},
  address   = {Cali, Colombia}
}
`;
