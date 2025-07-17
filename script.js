const data = {
  1: [
    { nombre: "Globalización y Realidad Nacional" },
    { nombre: "Lenguaje y Comunicación I" },
    { nombre: "Metodologías de Investigación" },
    { nombre: "Desarrollo Personal y Social" },
    { nombre: "Fundamentos de Matemática" },
    { nombre: "Ética Cívica" }
  ],
  2: [
    { nombre: "Economía y Empresa" },
    { nombre: "Lenguaje y Comunicación II", requisitos: ["Lenguaje y Comunicación I"] },
    { nombre: "Procesos Sociales y Políticos" },
    { nombre: "Temas de Filosofía" },
    { nombre: "Literatura y Sociedad", requisitos: ["Lenguaje y Comunicación I"] },
    { nombre: "Arte y Cultura" }
  ],
  3: [
    { nombre: "Expresión Escrita", requisitos: ["Lenguaje y Comunicación II"] },
    { nombre: "Problemática Nacional", requisitos: ["Procesos Sociales y Políticos"] },
    { nombre: "Historia General del Derecho" },
    { nombre: "Introducción a la Ciencia Política" },
    { nombre: "Introducción a las Ciencias Jurídicas" }
  ],
  4: [
    { nombre: "Derecho Civil I (Principios Generales y Personas Naturales)" },
    { nombre: "Derecho Civil II (Personas Jurídicas)", requisitos: ["Derecho Civil I (Principios Generales y Personas Naturales)"] },
    { nombre: "Introducción al Derecho Procesal", requisitos: ["Introducción a las Ciencias Jurídicas"] },
    { nombre: "Derecho Romano", requisitos: ["Historia General del Derecho"] },
    { nombre: "Derecho Penal I (Parte General)", requisitos: ["Introducción a las Ciencias Jurídicas"] },
    { nombre: "Lógica y Argumentación Jurídica", requisitos: ["Introducción a las Ciencias Jurídicas"] }
  ],
  5: [
    { nombre: "Derecho Penal II", requisitos: ["Derecho Penal I (Parte General)"] },
    { nombre: "Derecho Civil III (Acto Jurídico)", requisitos: ["Derecho Civil II (Personas Jurídicas)"] },
    { nombre: "Derecho Procesal Civil I", requisitos: ["Introducción al Derecho Procesal"] },
    { nombre: "Derecho Constitucional I (Derecho Constitucional General)", requisitos: ["Temas de Filosofía", "Introducción a las Ciencias Jurídicas"] },
    { nombre: "Filosofía del Derecho", requisitos: ["Temas de Filosofía"] },
    { nombre: "Introducción a la Economía y Derecho", requisitos: ["Economía y Empresa", "Introducción a las Ciencias Jurídicas"] }
  ],
  6: [
    { nombre: "Derecho Civil IV (Reales)", requisitos: ["Derecho Civil III (Acto Jurídico)"] },
    { nombre: "Derecho Procesal Civil II", requisitos: ["Derecho Procesal Civil I"] },
    { nombre: "Introducción a la Contabilidad" },
    { nombre: "Derecho Administrativo I" },
    { nombre: "Derecho Constitucional II (Derecho Constitucional Peruano)", requisitos: ["Derecho Constitucional I (Derecho Constitucional General)"] },
    { nombre: "Derecho Procesal Penal I" }
  ],
  7: [
    { nombre: "Derecho Civil V (Familia)", requisitos: ["Derecho Civil IV (Reales)"] },
    { nombre: "Derecho Civil VI (Obligaciones)", requisitos: ["Derecho Civil IV (Reales)"] },
    { nombre: "Derecho Comercial I (Parte General)", requisitos: ["Derecho Civil IV (Reales)"] },
    { nombre: "Derecho Procesal Penal II", requisitos: ["Derecho Procesal Penal I"] },
    { nombre: "Derecho Procesal Civil III", requisitos: ["Derecho Procesal Civil II"] },
    { nombre: "Derecho Administrativo II", requisitos: ["Derecho Administrativo I"] },
    { nombre: "Historia del Derecho Peruano", requisitos: ["Historia General del Derecho"], electivo: true },
    { nombre: "Derecho Pesquero", requisitos: ["Derecho Administrativo I"], electivo: true },
    { nombre: "Ciencia Política", requisitos: ["Introducción a la Ciencia Política"], electivo: true },
    { nombre: "Derecho Ambiental", requisitos: ["Derecho Administrativo I"], electivo: true },
    { nombre: "Criminología", requisitos: ["Derecho Penal II"], electivo: true },
    { nombre: "Derecho Judicial", requisitos: ["Derecho Procesal Civil I"], electivo: true },
    { nombre: "Teoría del Conflicto y MARC’s", requisitos: ["Derecho Procesal Civil I"], electivo: true }
  ],
  8: [
    { nombre: "Derecho Comercial II (Sociedades I)", requisitos: ["Derecho Comercial I (Parte General)"] },
    { nombre: "Derecho Civil VII (Contratos Parte General)", requisitos: ["Derecho Civil VI (Obligaciones)"] },
    { nombre: "Derecho Tributario I (Código Tributario)", requisitos: ["Derecho Administrativo II"] },
    { nombre: "Contratación Pública", requisitos: ["Derecho Administrativo II"], electivo: true },
    { nombre: "Derecho del Niño y Adolescente", requisitos: ["Derecho Civil V (Familia)"], electivo: true },
    { nombre: "Servicios Públicos y Concesiones", requisitos: ["Derecho Administrativo II"], electivo: true },
    { nombre: "Negociación", requisitos: ["Derecho Civil VI (Obligaciones)"], electivo: true },
    { nombre: "Inglés Jurídico I", requisitos: ["Derecho Civil VI (Obligaciones)"], electivo: true },
    { nombre: "Fundamentos de la Regulación", requisitos: ["Derecho Administrativo II"], electivo: true },
    { nombre: "Temas de Derecho I", requisitos: ["Derecho Administrativo I"], electivo: true },
    { nombre: "Propiedad Intelectual", requisitos: ["Derecho Civil IV (Reales)"], electivo: true },
    { nombre: "Instrumentos de Gestión Ambiental", requisitos: ["Derecho Administrativo II"], electivo: true },
    { nombre: "Historia de las Ideas Políticas", electivo: true },
    { nombre: "Derecho Municipal y Gobiernos Locales", requisitos: ["Derecho Constitucional II (Derecho Constitucional Peruano)"], electivo: true },
    { nombre: "Economía y Derecho", electivo: true }
  ],
  9: [
    { nombre: "Derecho Tributario II", requisitos: ["Derecho Tributario I (Código Tributario)"] },
    { nombre: "Derecho Civil IX (Contratos Típicos)", requisitos: ["Derecho Civil VII (Contratos Parte General)"] },
    { nombre: "Derecho Comercial III (Sociedades II)", requisitos: ["Derecho Comercial II (Sociedades I)"] },
    { nombre: "Derecho Laboral II (Derecho Laboral Individual)", requisitos: ["Derecho Laboral I"], electivo: true },
    { nombre: "Estados Financieros", requisitos: ["Introducción a la Contabilidad"], electivo: true },
    { nombre: "Tutela del Consumidor", requisitos: ["Derecho Comercial I (Parte General)"], electivo: true },
    { nombre: "Derecho de la Competencia", requisitos: ["Derecho Comercial I (Parte General)"], electivo: true },
    { nombre: "Derecho Concursal", requisitos: ["Derecho Comercial II (Sociedades I)"], electivo: true },
    { nombre: "Calidad y Control Regulatorio", requisitos: ["Derecho Administrativo II"], electivo: true },
    { nombre: "Derecho y Tecnología I", electivo: true },
    { nombre: "Finanzas Corporativas", electivo: true },
    { nombre: "Derecho Penal III (Penal Económico)", requisitos: ["Derecho Penal II"] },
    { nombre: "Introducción al Sistema Jurídico Norteamericano", electivo: true },
    { nombre: "Derecho Urbanístico", electivo: true },
    { nombre: "Derecho Bancario", electivo: true }
  ],
  10: [
    { nombre: "Derecho Civil X (Garantías)", requisitos: ["Derecho Civil VII (Contratos Parte General)"] },
    { nombre: "Derecho Comercial IV (Títulos Valores)", requisitos: ["Derecho Comercial II (Sociedades I)"] },
    { nombre: "Arbitraje" },
    { nombre: "Seminario de Investigación I" },
    { nombre: "Fusiones y Adquisiciones", requisitos: ["Derecho Comercial III (Sociedades II)"], electivo: true },
    { nombre: "Derecho Laboral III (Colectivo)", requisitos: ["Derecho Laboral I"], electivo: true },
    { nombre: "Seminario de Derecho Procesal Civil", requisitos: ["Derecho Civil IX (Contratos Típicos)"], electivo: true },
    { nombre: "Seguridad y Salud en el Trabajo", requisitos: ["Derecho Laboral II (Derecho Laboral Individual)"], electivo: true },
    { nombre: "Temas de Derecho II", requisitos: ["Derecho Civil VII (Contratos Parte General)"], electivo: true },
    { nombre: "Compliance", electivo: true },
    { nombre: "Contratos Mercantiles", electivo: true },
    { nombre: "Inglés Jurídico II", electivo: true },
    { nombre: "Mercado de Valores", electivo: true },
    { nombre: "Derecho de la Energía", electivo: true }
  ],
  11: [
    { nombre: "Ética Profesional", requisitos: ["Filosofía del Derecho"] },
    { nombre: "Derecho Civil XI (Responsabilidad Civil)", requisitos: ["Derecho Civil IX (Contratos Típicos)"] },
    { nombre: "Derecho de la Integración", requisitos: ["Derecho Internacional Público"], electivo: true },
    { nombre: "Política Internacional", requisitos: ["Derecho Internacional Público"], electivo: true },
    { nombre: "Seminario de Propiedad", requisitos: ["Derecho Civil X (Garantías)"], electivo: true },
    { nombre: "Derecho Tributario III (Imposición al Consumo)", requisitos: ["Derecho Tributario I (Código Tributario)"], electivo: true },
    { nombre: "Derecho Laboral IV (Procesal del Trabajo)", requisitos: ["Derecho Laboral II (Derecho Laboral Individual)"], electivo: true },
    { nombre: "Arbitrajes Especiales y Dispute Boards", requisitos: ["Arbitraje"], electivo: true },
    { nombre: "Project Finance", requisitos: ["Derecho Comercial III (Sociedades II)"], electivo: true },
    { nombre: "Fondos", requisitos: ["Derecho Comercial III (Sociedades II)"], electivo: true },
    { nombre: "Derecho de la Construcción", requisitos: ["Derecho Civil IX (Contratos Típicos)"], electivo: true },
    { nombre: "Regulación de Servicios Públicos", requisitos: ["Derecho Comercial III (Sociedades II)"], electivo: true }
  ],
  12: [
    { nombre: "Introducción a las Técnicas de Litigación Oral" },
    { nombre: "Seminario de Investigación II", requisitos: ["Seminario de Investigación I"] },
    { nombre: "Derecho Internacional Privado", requisitos: ["Derecho Civil X (Garantías)"] },
    { nombre: "Seminario de Familia", requisitos: ["Derecho Civil VIII (Sucesiones)"], electivo: true },
    { nombre: "Cooperación Económica Internacional", requisitos: ["Derecho Internacional Público"], electivo: true },
    { nombre: "Seminario de Derecho Corporativo", requisitos: ["Derecho Comercial III (Sociedades II)"], electivo: true },
    { nombre: "Temas de Derecho III", requisitos: ["Derecho Civil VII (Contratos Parte General)"], electivo: true },
    { nombre: "Temas de Derecho IV", requisitos: ["Derecho Civil VII (Contratos Parte General)"], electivo: true }
  ]
};

const grid = document.getElementById("grid");

function guardarProgreso() {
  localStorage.setItem("progresoDerecho", JSON.stringify(data));
}

function cargarProgreso() {
  const progreso = localStorage.getItem("progresoDerecho");
  if (progreso) {
    const parsed = JSON.parse(progreso);
    for (const ciclo in parsed) {
      parsed[ciclo].forEach((curso, i) => {
        data[ciclo][i].estado = curso.estado;
      });
    }
  }
}

function crearCurso(curso) {
  const div = document.createElement("div");
  div.className = "curso";
  div.dataset.state = curso.estado || "locked";
  div.innerHTML = `<h3>${curso.nombre}</h3>`;

  if (curso.requisitos) {
    const req = document.createElement("small");
    req.textContent = `Requiere: ${curso.requisitos.join(", ")}`;
    div.appendChild(req);
  }

  div.addEventListener("click", () => {
    if (div.dataset.state === "unlocked") {
      div.dataset.state = "completed";
      curso.estado = "completed";
      actualizarDesbloqueos();
      guardarProgreso();
    } else if (div.dataset.state === "completed") {
      div.dataset.state = "unlocked";
      curso.estado = "unlocked";
      actualizarDesbloqueos();
      guardarProgreso();
    }
  });

  curso.element = div;
  return div;
}

function actualizarDesbloqueos() {
  const completados = new Set();
  for (const ciclo in data) {
    data[ciclo].forEach((curso) => {
      if (curso.estado === "completed") {
        completados.add(curso.nombre);
      }
    });
  }

  for (const ciclo in data) {
    data[ciclo].forEach((curso) => {
      if (curso.estado === "completed") return;

      if (!curso.requisitos || curso.requisitos.every((req) => completados.has(req))) {
        curso.estado = "unlocked";
        curso.element.dataset.state = "unlocked";
      } else {
        curso.estado = "locked";
        curso.element.dataset.state = "locked";
      }
    });
  }
}

function reiniciar() {
  for (const ciclo in data) {
    data[ciclo].forEach((curso) => {
      curso.estado = "locked";
      curso.element.dataset.state = "locked";
    });
  }
  actualizarDesbloqueos();
  guardarProgreso();
}

function render() {
  grid.innerHTML = "";
  for (const ciclo in data) {
    const columna = document.createElement("section");
    const titulo = document.createElement("h2");
    titulo.textContent = `Nivel ${ciclo}`;
    columna.appendChild(titulo);

    data[ciclo].forEach((curso) => {
      const div = crearCurso(curso);
      columna.appendChild(div);
    });

    grid.appendChild(columna);
  }

  actualizarDesbloqueos();
}

cargarProgreso();
render();
