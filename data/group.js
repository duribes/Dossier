// ============================================================
// RESEARCH GROUP — Edit members here
// IMPORTANT: ALL declarations must use "var", never "const" or "let"
// TIP: Only include the social fields that exist for each member.
//      Missing fields are simply ignored — no need to add empty strings.
// ============================================================

var GROUP_INFO = {
  name: "Diego Uribe-Suárez´s Group",
  //acronym: "",
  //classification: "",
  //founded: "2026",
  description: "Our research group focuses on computational mechanics and numerical simulation of advanced materials and engineering systems. We develop and apply methods such as the Finite Element Method, Virtual Element Method, and Material Point Method to study complex mechanical behavior, including heterogeneous and functionally graded materials. The group combines mathematical modeling, high-performance computing, and experimental collaboration to address challenges in solid mechanics and materials engineering."
};

var GROUP_MEMBERS = [
  {
    id: 1,
    name: "Dr. Diego Uribe-Suárez",
    position: "Postdoctoral Researcher",    
    formation: "PhD. Computational Mechanics and Materials, Université Côte d'Azur, France, 2021<br>MSc. Engineering, Universidad EAFIT, Medellín, Colombia, 2015<br>BSc. Mechanical Engineering, Universidad EAFIT, Medellín, Colombia, 2013",
    description: "Dr. Diego A. Uribe-Suárez is a Postdoctoral Researcher at Universidad de los Andes, Colombia. His research focuses on advanced numerical methods for the simulation of complex engineering problems, particularly in the mechanical behavior of materials, fracture and damage mechanics, and structural analysis. He currently works on the Material Point Method (MPM) and the Virtual Element Method (VEM) to model challenging problems in computational mechanics and materials science. His expertise includes finite element analysis, numerical simulation, applied mathematics, and scientific software development.",
    email: "d.uribe@uniandes.edu.co",
    photo: "assets/diego_uribe.jpg",
    googleScholar: "https://scholar.google.com/citations?user=EzmANP0AAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/duribes/",
    cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001626017",
    orcid: "https://orcid.org/0000-0002-0364-8561",
    researchgate: "https://www.researchgate.net/profile/Diego-Uribe-Suarez",
    academia: "https://academia.uniandes.edu.co/AcademyCv/d.uribe"
  },
  {
    id: 2,
    name: "Dr. Fernando Ramirez Rodriguez",
    position: "Full Professor",    
    formation: "PhD. Civil Engineering, Colorado State University, USA, 2006<br>MSc. Civil Engineering, Colorado State University, USA, 2002<br>BSc. Civil Engineering, UNIVERSIDAD EIA, Medellín, Colombia, 1993",
    description: "Dr. Fernando Ramirez is a Civil Engineer whose main area of expertise is Theoretical and Computational Mechanics. Dr Ramirez is currently a full professor at Universidad de los Andes in Colombia. His main topics of research include theoretical and computational mechanics, nanomechanics and biomechanics, structural mechanics, and composite and smart materials, among others. Dr. Ramirez has more than 250 publications, including over 35 highly cited peer reviewed journal papers. Dr. Ramirez also has two international patents related to his biomechanics research.",
    email: "framirez@uniandes.edu.co",
    photo: "assets/members/prof_fernando_ramirez.png",
    googleScholar: "https://scholar.google.com/citations?hl=es&user=7RE9nmMAAAAJ",
    linkedin: "https://www.linkedin.com/in/fernando-ramirez-763b1a17a/",
    cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000774847",
    orcid: "https://orcid.org/0000-0001-5103-601X",
    academia: "https://academia.uniandes.edu.co/AcademyCv/framirez"
  },
  {
    id: 3,
    name: "Juan Sebastián Olarte",
    position: "Master’s Student",
    formation: "BSc. Civil Engineering, Universidad de los Andes, Bogotá, Colombia, 2024<br>MSc. Civil Engineering, Universidad de los Andes, Bogotá, Colombia, 2026",
    description: "He is working on the project Virtual Element Method for Linear Elasticity Problems. This research applies the Virtual Element Method (VEM) to the elastic analysis of concrete, explicitly representing its heterogeneous composition, including aggregates and the cement matrix, in order to achieve a more accurate characterization of its mechanical behavior.",
    email: "j.olartem@uniandes.edu.co",
    photo: "assets/members/Master_Student_Olarte.jpeg",
    googleScholar: "",
    linkedin: "https://www.linkedin.com/in/juan-sebasti%C3%A1n-olarte-049365309/",
    orcid: "",
    researchgate: ""
  },
  {
    id: 4,
    name: "Juan David Nuñez Rivera",
    position: "Master’s Student",
    formation: "BSc. Mechanical Engineering, Universidad de los Andes, Bogotá, Colombia, 2025<br>MSc. Mechanical Engineering, Universidad de los Andes, Bogotá, Colombia, 2026",
    description: "He is currently developing my master’s thesis, focused on the numerical modeling of a heat transfer problem using CFD simulations in OpenFOAM. My research aims to analyze the interaction between natural convection and fouling deposition processes, with the objective of predicting their temporal evolution in systems with zero net mass flux.",
    email: "j.nunezr@uniandes.edu.co",
    photo: "assets/members/Master_Nunez.jpeg",
    googleScholar: "",
    linkedin: "www.linkedin.com/in/juan-david-nuñez-rivera-b47636274",
    orcid: "",
    researchgate: ""
  },
  {
    id: 5,
    name: "Alejandro Guerrero Caicedo",
    position: "Master’s Student (Research Project)",
    formation: "BSc. Mechanical Engineering, Universidad de los Andes, Bogotá, Colombia, 2025<br>MSc. Mechanical Engineering, Universidad de los Andes, Bogotá, Colombia, 2027",
    description: "He is working on a research project with the group, separate from his MSc thesis work. The project focuses on the experimental characterization of the fatigue behavior of polymer matrix composites with biochar as an additive, including fatigue resistance tests using an MTS testing machine.",
    email: "a.guerreroc23@uniandes.edu.co",
    photo: "assets/members/Master_Guerrero.jpeg",
    googleScholar: "",
    linkedin: "https://www.linkedin.com/in/alejandro-guerrero-caicedo-2822262a2/",
    orcid: "",
    researchgate: ""
  },
  {
    id: 6,
    name: "Santiago Gonzalez Buenaventura",
    position: "Master’s Student (Research Project)",
    formation: "BSc. Mechanical Engineering, Universidad de los Andes, Bogotá, Colombia, 2024<br>MSc. Mechanical Engineering, Universidad de los Andes, Bogotá, Colombia, 2026",
    description: "He is contributing to a research project with the group, separate from his MSc thesis work, focused on the computational simulation of the thermal response associated with pyrolysis degradation in composite materials subjected to high temperatures typical of ablative thermal shield applications. The work involves the use of the finite element method and the exploration of the emerging Material Point Method, taking advantage of its adaptability to evolving material properties and large deformations, which are consistent with pyrolysis degradation and ablation boundary recession. The project aims to address this computational problem using novel modeling techniques, with potential impact in the aerospace sector through improved simulation of ablative thermal shields.",
    email: "s.gonzalez32@uniandes.edu.co",
    photo: "assets/members/Master_Buenaventura.jpeg",
    googleScholar: "https://scholar.google.com/citations?user=8dmISLYAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/s-gonzalez-buenaventura/",
    orcid: "https://orcid.org/0009-0005-8925-7762",
    cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0002327978",    
    researchgate: "https://www.researchgate.net/profile/Santiago-Gonzalez-80?ev=hdr_xprf"
  },  
  {
    id: 7,
    name: "Carlos León",
    position: "Undergraduate student",
    formation: "BSc. Civil Engineering, Universidad de los Andes, Bogotá, Colombia, 2026<br>BSc. Mechanical Engineering, Universidad de los Andes, Bogotá, Colombia, 2026",
    description: "His project revolves around getting familiarized with the virtual element method such that I can comprehend and utilize VEM++, a C++ in-house virtual element library in order to design a specific application for linear elasticity problems.",
    email: "c.leonp@uniandes.edu.co",
    photo: "assets/members/Undergrad_Carlos_Leon.jpeg",
    linkedin: "https://www.linkedin.com/in/carlos-andres-leon-puentes-984648372/",
    researchgate: "https://www.researchgate.net/profile/Carlos-Leon-Puentes?ev=hdr_xprf"
  },
  {
    id: 8,
    name: "Tomás Palacios Muñoz",
    position: "Undergraduate student",
    formation: "BSc. Mechanical Engineering (Minor in Computational Mathematics), Universidad de los Andes, Bogotá, Colombia, 2027",    
    description: "As an undergraduate research assistant, he is exploring numerical simulation methods with a focus on the Material Point Method (MPM), a computational technique used to model large deformation problems in solid mechanics. His work involves becoming familiar with different MPM learning environments: AMPLE, a MATLAB-based implementation in which he has been studying and modifying example cases to understand the underlying structure of MPM solvers, and Karamelo, a more advanced C++ framework that he is just beginning to explore. The broader goal of this research is to investigate how cutting simulations can be implemented within these environments.",
    email: "t.palacios1@uniandes.edu.co",
    photo: "assets/members/Undergrad_Tomas.JPG.jpeg",
    linkedin: "https://www.linkedin.com/in/tom%C3%A1s-palacios-mu%C3%B1oz-31006736b/",
    researchgate: ""
  }
];
