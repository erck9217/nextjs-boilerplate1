// Fuente única de verdad de proyectos.
// Alimenta las tarjetas de /proyectos y las fichas /proyectos/[slug].
//
// Convención de imágenes (Tarea 6):
// Cuando existan fotos reales de obra, colocarlas en /public/proyectos/
// con el nombre del slug (ej. /public/proyectos/armeria-manzanillo.jpg)
// y actualizar SOLO el campo `imagen` de ese proyecto. Mientras tanto,
// `imagen` apunta a las imágenes genéricas actuales como fallback.

export type FichaProyecto = {
  datos: { label: string; valor: string }[];
  reto: string[];
  decisiones: string[];
  resultados: string[];
};

export type Proyecto = {
  slug: string;
  titulo: string;
  tag: string;
  imagen: string;
  cliente: string;
  descripcion: string;
  escala: string;
  rol: string;
  tipo: string;
  // Solo los 3 proyectos de mayor escala tienen ficha (caso completo).
  ficha?: FichaProyecto;
};

export const proyectos: Proyecto[] = [
  {
    slug: "acueducto-armeria-manzanillo",
    titulo: "Acueducto Armería–Manzanillo",
    tag: "42 KM · ~$900M MXN",
    imagen: "/tanqueeleden.jpg",
    cliente: "ASIPONA",
    descripcion:
      "Construcción de acueducto nuevo de 42 km con tanque de almacenamiento. Proyecto de mayor escala personal: superintendencia de campo completa, toma de decisiones en sitio, cobro de extras y coordinación de equipos.",
    escala: "42 km · Tanque de almacenamiento",
    rol: "Superintendente de campo · ~200 personas",
    tipo: "Acueducto",
    ficha: {
      datos: [
        { label: "Alcance", valor: "42 km + tanque de almacenamiento, Colima" },
        { label: "Rol", valor: "Superintendente en campo" },
        { label: "Período", valor: "Oct 2023 – Mar 2025" },
        { label: "Equipo", valor: "~200 personas + jefes de frente" },
      ],
      reto: [
        "El proyecto operaba bajo una estructura de asociación en participación sin una jerarquía única: dos socios y el superintendente con pesos de decisión similares. Coordinar bajo ese esquema exigía construir consenso constante sin frenar el ritmo de obra.",
        "Fue mi primera superintendencia de campo completa. El reto central de control era sostener cada cambio de proyecto como un extra debidamente soportado y lograr su cobro efectivo — nada de trabajo ejecutado que quedara sin reconocer.",
      ],
      decisiones: [
        "Definición y ejecución de cambios de proyecto directamente en campo",
        "Definición de las formas de cobro de cada extra generado",
        "Priorización de frentes de trabajo según avance y disponibilidad de recursos",
        "Coordinación de maquinaria, personal y jefes de frente",
      ],
      resultados: [
        "Sustentación y cobro de la totalidad de las extras del proyecto.",
        "Control de avance apoyado en levantamientos con dron y topografía.",
        "Reportes ejecutivos periódicos para el cliente y los socios.",
      ],
    },
  },
  {
    slug: "linea-impulsion-el-salto-calderon",
    titulo: "Línea de Impulsión El Salto–Calderón",
    tag: "~$500M MXN · Jalisco",
    imagen: "/acueductoguadalajara.jpg",
    cliente: "CONAGUA",
    descripcion:
      "Línea de impulsión + tanque de cambio de régimen. Participación clave en licitación: volumetrías, análisis de costos y documentación técnica. Coordinación remota durante ejecución.",
    escala: "Línea de impulsión + tanque de régimen",
    rol: "Licitación y coordinación remota",
    tipo: "Línea de Impulsión",
    ficha: {
      datos: [
        { label: "Alcance", valor: "Línea de impulsión + tanque de régimen" },
        { label: "Rol", valor: "Licitación + coordinación remota" },
        { label: "Monto", valor: "~$500M MXN — licitación ganada" },
        { label: "Cliente", valor: "CONAGUA, Jalisco" },
      ],
      reto: [
        "El diferenciador no estuvo solo en ejecutar la obra, sino en ayudar a ganarla. La licitación exigía volumetrías precisas, un análisis de costos competitivo y documentación técnica impecable bajo normativa CONAGUA.",
        "Una propuesta mal soportada no llega a la ejecución. El trabajo de control empezó antes de la obra: en la mesa de la licitación.",
      ],
      decisiones: [
        "Elaboración de volumetrías y análisis de costos para la propuesta",
        "Integración de la documentación técnica de la licitación",
        "Coordinación remota durante la ejecución",
        "Seguimiento financiero y reportes a dirección",
        "Control de calidad documental de juntas soldadas y avances",
      ],
      resultados: [
        "Licitación adjudicada (~$500M MXN).",
        "Seguimiento financiero y reportes de avance sostenidos de forma remota durante la ejecución.",
      ],
    },
  },
  {
    slug: "acueducto-cerro-prieto",
    titulo: "Reforzamiento Acueducto Cerro Prieto",
    tag: '84" Acero · ~$200M MXN',
    imagen: "/acueductomonterrey.jpeg",
    cliente: "SADM",
    descripcion:
      "Reforzamiento de 4 km de tubería de acero de 2.13 m de diámetro. Infraestructura hidráulica crítica para el suministro de agua potable en la zona metropolitana de Monterrey.",
    escala: '4 km · Tubería acero 84"',
    rol: "Responsable administrativo integral",
    tipo: "Infraestructura Hidráulica",
    ficha: {
      datos: [
        { label: "Alcance", valor: '4 km de tubería de acero 84" (2.13 m)' },
        { label: "Rol", valor: "Responsable administrativo integral" },
        { label: "Monto", valor: "~$200M MXN + bombeo ~$100M MXN" },
        { label: "Cliente", valor: "SADM, Monterrey" },
      ],
      reto: [
        "Reforzamiento de una arteria crítica para el abastecimiento de agua potable de la zona metropolitana de Monterrey. En un proyecto de esta escala el control administrativo no admite holguras: cualquier desviación impacta un servicio esencial.",
        "Además de la línea, participé en el Sistema de Bombeo Cerro Prieto (~$100M MXN), acompañándolo desde el diseño hasta la operación.",
      ],
      decisiones: [
        "Control integral de estimaciones y precios unitarios",
        "Sustentación y gestión de extras",
        "Gestión documental completa del proyecto",
        "Participación desde el diseño hasta la operación en el sistema de bombeo asociado",
      ],
      resultados: [
        "Control administrativo integral de un proyecto de ~$200M MXN.",
        "Sistema de bombeo (~$100M MXN) acompañado desde diseño hasta operación.",
        "Estimaciones y documentación al día en infraestructura crítica de abastecimiento.",
      ],
    },
  },
  {
    slug: "drenaje-concepcion-barragan",
    titulo: "Drenaje Pluvial Concepción Barragán",
    tag: "Ducto CR · ~$99M MXN",
    imagen: "/cerrodelasilla.jpg",
    cliente: "Municipio de Apodaca",
    descripcion:
      'Diseño y proyecto ejecutivo completo del sistema de drenaje pluvial: ducto de concreto reforzado más tubería aluminizada de 84" de diámetro. Desarrollado en etapa de Secretaría de Obras Públicas.',
    escala: 'Ducto CR + tubería aluminizada 84"',
    rol: "Diseño completo (etapa SOP)",
    tipo: "Drenaje Pluvial",
  },
  {
    slug: "puente-el-infiernillo",
    titulo: "Puente Arroyo El Infiernillo",
    tag: "Obra Civil · ~$42M MXN",
    imagen: "/cerrodelasilla.jpg",
    cliente: "Municipio de Apodaca",
    descripcion:
      "Construcción de puente vehicular sobre Arroyo El Infiernillo en Apodaca, N.L. Control administrativo completo e intervención como firma de superintendente en etapas clave de la obra.",
    escala: "~$42,000,000 MXN",
    rol: "Administrativo + firma de superintendente",
    tipo: "Obra Civil",
  },
  {
    slug: "ampliacion-galerias-valle-oriente",
    titulo: "Ampliación Galerías Valle Oriente",
    tag: "Obra Privada · 3,000 m²",
    imagen: "/tanqueeleden.jpg",
    cliente: "Postensa",
    descripcion:
      "Ampliación de 3,000 m² de losa en el centro comercial Galerías Valle Oriente, San Pedro Garza García, N.L. Coordinación de estructuras, instalaciones y acabados.",
    escala: "3,000 m² de losa",
    rol: "Residente de obra · ~40 personas",
    tipo: "Obra Privada",
  },
];
