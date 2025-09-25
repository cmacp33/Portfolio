function filterCourses(category) {

    let rows = document.querySelectorAll('#courseTable tr');
    const table = document.getElementById('courseTable');

    table.classList.remove('math', 'physics', 'computer', 'electrical', 'mechanical', 'project', 'other');
    table.classList.add(category);

    for (let i = 1; i < rows.length; i++) {
    let row = rows[i];
    row.style.display = row.classList.contains(category) ? '' : 'none';
    }

};

function toggleCollapsible(button) {
  button.classList.toggle("active");
  const content = button.nextElementSibling;
  content.classList.toggle("show");
}

let slideIndex = 0;
let slideTimer;

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlide");
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  // hide all
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // show current
  slides[slideIndex].style.display = "block";
}

// manual navigation
function plusSlides(n) {
  clearInterval(slideTimer); // stop auto when clicked
  slideIndex += n;
  showSlides(slideIndex);
  autoSlides(); // restart auto
}

// auto slide
function autoSlides() {
  slideTimer = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 4000); // 4 seconds
}

window.addEventListener("load", function() {
  filterCourses('math');
});

window.addEventListener("load", function() {
  showSlides(slideIndex);
  autoSlides();
});

document.addEventListener("DOMContentLoaded", function () {
  const courseDescriptions = {
    "MATH100": "Derivatives of elementary functions. Applications and modelling: graphing, optimization.",
    "MATH101": "The definite integral, integration techniques, applications, modelling, infinite series.",
    "MATH152": "2D and 3D geometry, vectors and matrices, eigenvalues and vibration, physical applications. Laboratories demonstrate computer solutions of large systems.",
    "MATH217": "Partial differentiation, extreme values, multiple integration, vector fields, line and surface integrals, the divergence theorem, Green's and Stokes' theorems. Intended for students in Honours Physics and Engineering Physics.",
    "MATH255": "Review of linear systems; nonlinear equations and applications; phase plane analysis; Laplace transforms; numerical methods.",
    "MATH257": "Introduction to partial differential equations; Fourier series; the heat, wave and potential equations; boundary-value problems; numerical methods.",
    "MATH305": "Functions of a complex variable, Cauchy-Riemann equations, contour integration, Laurent series, residues, integrals of multi-valued functions, Fourier transforms.",
    "MATH307": "Applications of linear algebra to problems in science and engineering; use of computer algebra systems for solving problems in linear algebra.",
    "MATH318": "Random variables, discrete and continuous distributions. Random walk, Markov chains, Monte Carlo methods. Characteristic functions, limit laws.",
    "MATH400": "Separation of variables, first order equations, Sturm-Liouville theory, integral transform methods.",
    "PHYS117": "Kinematics including curvilinear motion. Forces and Newton's laws of motion. Work-energy theorem, conservation of energy. Conservation of momentum, collisions. Torque, rotational dynamics, angular momentum. Oscillations and waves.",
    "PHYS118": "Optics, electricity and magnetism, electric circuits, electromagnetic waves.",
    "PHYS119": "Introductory laboratory course, with emphasis on data collection, data analysis techniques, and scientific reasoning. ",
    "PHYS250": "Wave-particle duality of matter, special relativity, processes in atomic, nuclear and solid state, and introduction to quantum mechanical devices and techniques.",
    "PHYS301": "Maxwell's equations and their applications, electrical fields and potentials of static charge distributions, current, fields of moving charges, magnetic fields, electromagnetic induction.",
    "PHYS304": "Principles and applications of quantum mechanics, wave mechanics, the Schroedinger equation, expectation values, Hermitian operators, commuting observables, one-dimensional systems, harmonic oscillators, angular momentum, three-dimensional systems.",
    "PHYS350": "Review of principles. Particle mechanics: Euler's equations, tops and gyroscopes, motion of the Earth, Lagrangian and Hamiltonian methods. Variational principles in optics and mechanics, Liouville's theorem and statistical mechanics. The relationship between classical and quantum mechanics.",
    "PHYS401": "Applications of Maxwell's theory. Wave propagation in dielectrics, conductors and plasmas, wave guides, radiation, antennae, and special relativity.",
    "PHYS403": "Principles and applications of statistical mechanics. Ideal gases, degenerate Fermi gases, Bose-Einstein condensation, black body radiation, fluctuations and phase transitions.",
    "PHYS408": "Principles and applications of optical physics. Interference, diffraction, coherence, polarization, Fresnel relations, optical coatings, waves in dielectric media, Gaussian beams, waveguides, optical cavities, lasers, fibre optics, and Fourier optics.",
    "PHYS410": "Scientific programming applied to problems in physics. Fundamentals of numerical analysis for continuum problems. Solution of linear and non-linear algebraic systems, ordinary differential equations and stochastic problems.",
    "CPEN212": "Abstractions at the hardware-software interface and their low-level implementation. Procedure invocation, dynamic dispatch, and related exploits; library linkage, virtual memory, heap management, garbage collection, and caches; interrupts, signals, and processes; threads, locks, and cache coherence; files, devices, and network topology.",
    "CPEN221": "Design, implementation, reasoning about software systems: abstraction and specification of software, testing, verification, abstract data types, object-oriented design, type hierarchies, concurrent software design.",
    "CPEN311": "Advanced combinational and sequential electronic system design. Hardware specification, modelling, and simulation using hardware description languages (HDLs) and CAD tools. Design with programmable logic including FPGA's. Applications include complex state machines, microcontrollers, arithmetic circuits, and interface units.",
    "CPEN312": "Data representation in digital computers; boolean algebra; the design and optimization and implementation of combinatorial and sequential circuits; modern digital circuit technologies; memory and programmable logic devices; organization and operation of microcomputers; data/address bus organization; input-output interfacing. ",
    "CPEN331": "Operating systems, their design and their implementation. Process concurrency, synchronization, communication and scheduling. Device drivers, memory management, virtual memory, file systems, networking and security.",
    "CPEN455": "Fundamentals of deep learning, including architectures (e.g., MLPs, CNNs, RNNs, Transformers, and GNNs) and learning algorithms under different paradigms (supervised / unsupervised / reinforcement learning). Emphasis on design principles and motivating applications.",
    "CPSC538": "Multi-tasking; interrupt-driven systems; task scheduling; schedulability analysis; inter-process communication and synchronization; resource management; performance measurement; hardware/software integration; hardware/software tradeoffs; system reliability.",
    "ELEC204": "Basic concepts and analysis techniques in the context of electric and electronic circuits including Bode plots and the Laplace transform. Treatment of RLC circuits, phasors, op-amps. Introduction to nonlinear circuit elements, diodes, BJT, FET circuits.",
    "ELEC221": "Complex numbers, LTI systems, convolution sum, discrete-time Fourier series and transforms, z-transform, sampling, introduction to filtering and modulation, feedback systems, stability.",
    "ELEC302": "Semiconductor fundamentals; modelling of electronic devices including diodes and transistors; design of power supplies, waveform generators and logic circuits; signals in time and frequency domains; operational amplifiers; active filters; oscillators; device specification and selection.",
    "ELEC341": "Continuous time system analysis by Laplace transforms; system modelling by transfer function and state space methods; feedback, stability and sensitivity; control design; frequency domain analysis.",
    "ELEC481": "Time-money relationships; economic analysis of alternatives including the effects of interest rates, inflation, depreciation, taxation and uncertainty; cost estimation and budgeting; financial analysis of engineering operations.",
    "MECH260": "Statically determinate frames and trusses; normal and shear stresses and strains; shear force and bending moment diagrams; theory of beam bending, torsion of circular rods; transformation of stress and strain in two and three dimensions, Mohr's circle; yield and ultimate failure criteria.",
    "MECH280": "Fluid properties; statics; kinematics, dynamics, energy, and momentum principles for control volumes; dimensional analysis and similarity; laminar and turbulent flow; pipe flow; principles of centrifugal pumps.",
    "MECH325": "Selection of flexible drives, bearings, fluid power system components, and couplings. Design of shafts, bolted joints and power screws. Design and selection of gears, gear trains, and mechanisms.",
    "ENPH253": "Practice in engineering design and instrument development including mechanical and electrical design, and communications with sensors, actuators. Micro-controller implementation and system integration. Engineering design review process and presentations. Engineering communication in design and product release.",
    "ENPH257": "Thermometry, thermal properties of matter; heat transfer by conduction; convection and radiation; kinetic theory of gases and gas laws; heat engines; refrigeration; change of state; first and second laws of thermodynamics.",
    "ENPH259": "Basic experimental techniques in acquisition, analysis, and presentation and communication of data and technical results.",
    "ENPH270": "Dynamics: systems of particles, kinematics and kinetics of rigid bodies (plane motion), energy and momentum, rotating coordinates.",
    "ENPH352": "Some of the experiments will be based on the lecture material for PHYS 301. Other techniques and subjects will also be covered.",
    "ENPH353": "Engineering project planning, execution and reporting. The course involves carrying out an open-ended Engineering project to meet specific performance metrics on an industry relevant topic selected by instructors. Reporting on progress is both oral and written.",
    "ENPH459": "Project planning, management and reporting. This course involves writing a project proposal, carrying out an open-ended Engineering project, and reporting the results both orally and in writing.",
    "ENPH479": "Projects designed to give students research development and design experience. Projects are provided by research faculty in Science and Engineering and from local industry.",
    "APSC100": "An introduction to the engineering profession including: roles and responsibilities of the engineer, the engineering disciplines, sustainability, an introduction to the engineering design process, introduction and application of the relevant foundational scientific principles, prototyping, engineering graphics, technical communication, and engineering ethics.",
    "APSC101": "An introduction to the engineering profession including: the engineering design process, sustainability, prototype testing, introduction and application of the relevant foundational scientific principles, team functioning, engineering graphics, and technical communication.",
    "APSC160": "Analysis and simulation, laboratory data acquisition and processing, measurement interfaces, engineering tools, computer systems organization, programming languages.",
    "APSC278": "Atomic bonding; crystal structures and imperfections; properties of metals, ceramics, polymers, wood, concrete and fibre composite materials; selection of materials; corrosion; mechanical testing and heat treatment.",
    "APSC279": "Atomic bonding; crystal structures and imperfections; properties of metals, ceramics, polymers, wood, concrete and fibre composite materials; selection of materials; corrosion; mechanical testing and heat treatment.",
    "APSC450": "Legislation affecting the practice of engineering; ethical principles and responsibilities. Management of engineering enterprises; labour relations, safety and environmental legislation.",
    "CHEM121": "Fundamentals of bonding theories and structural chemistry, with applications relevant to modern society.",
    "CHEM123": "Fundamentals of chemical reactivity: thermodynamics; kinetics; organic chemistry, including stereochemistry; applications relevant to modern society.",
    "IGEN201": "Written and oral communication in business correspondence, engineering design methods, report preparation, and oral presentations of technical material.",
    "CIVL250": "Implications of a finite biosphere and the complexities inherent in environmental decision-making.",
  };

  const table = document.getElementById("courseTable");
  const descriptionBox = document.getElementById("courseDescription");

  table.addEventListener("click", function (e) {
    const row = e.target.closest("tr");
    if (!row || row.querySelector("th")) return; // ignore header

    const code = row.cells[0].textContent.trim();
    const name = row.cells[1].textContent.trim();

    descriptionBox.innerHTML = `
      <h3>${code} - ${name}</h3>
      <p>${courseDescriptions[code] || "Description not available."}</p>
    `;
  });
});
