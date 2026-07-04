import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de control de obra, estimaciones y precios unitarios, QA/QC, modelado BIM y análisis de datos para proyectos de infraestructura civil.",
};

const servicios = [
  {
    numero: "01",
    titulo: "Control de Obra",
    descripcion:
      "Gestión técnica de avances físicos y financieros con metodologías de precisión. Seguimiento de partidas, programas de obra, control de rendimientos y reportes periódicos al cliente. Dominio total del ciclo desde la estimación hasta el cierre.",
    entregables: [
      "Reportes de avance físico-financiero",
      "Control de estimaciones",
      "Programa de obra actualizado",
      "Conciliaciones con cliente",
    ],
  },
  {
    numero: "02",
    titulo: "Estimaciones y Precios Unitarios",
    descripcion:
      "Análisis de precios unitarios detallados con rendimientos reales de campo. Generadores de obra, cómputos métricos y conciliaciones. Experiencia en proyectos de hasta $900M MXN bajo normas CONAGUA y SCT.",
    entregables: [
      "Análisis de precios unitarios",
      "Generadores de obra",
      "Presupuesto base y comparativo",
      "Cómputos métricos",
    ],
  },
  {
    numero: "03",
    titulo: "QA / QC",
    descripcion:
      "Verificación rigurosa de normas y especificaciones técnicas en infraestructura hidráulica y civil. Elaboración de registros de calidad, pruebas hidrostáticas, supervisión de materiales y cumplimiento de especificaciones SCT y CONAGUA.",
    entregables: [
      "Registros de calidad",
      "Pruebas hidrostáticas",
      "Supervisión de materiales",
      "Dossier de calidad",
    ],
  },
  {
    numero: "04",
    titulo: "Modelado BIM",
    descripcion:
      "Implementación y coordinación de entornos BIM en empresa constructora. Liderazgo de adopción de CDE (Autodesk Docs), coordinación de modelos en Navisworks y estructuración de flujos de trabajo colaborativos entre oficina y campo.",
    entregables: [
      "Modelo BIM LOD 300-400",
      "Detección de interferencias",
      "Extracción de cantidades",
      "Planos constructivos desde modelo",
    ],
  },
  {
    numero: "05",
    titulo: "Análisis de Datos",
    descripcion:
      "Aplicación de principios de Data Science al control de obra: dashboards de avance en Power BI, análisis exploratorio con Python (en formación activa, Tec de Monterrey). Orientado a visibilidad de costos y detección temprana de desviaciones.",
    entregables: [
      "Dashboards Power BI",
      "Scripts Python para análisis",
      "Reportes ejecutivos con datos",
      "Alertas de desviación de costo",
    ],
  },
];

export default function Servicios() {
  return (
    <div className="bg-[#000000] min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mb-16 border-l-4 border-[#2563EB] pl-8">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-2">
            Especialidades
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Servicios
          </h1>
          <p className="mt-4 text-[#64748B] max-w-xl">
            Control técnico y financiero de proyectos de infraestructura civil, con integración
            de herramientas digitales de vanguardia.
          </p>
        </div>

        {/* Lista de servicios */}
        <div className="space-y-px">
          {servicios.map((servicio) => (
            <div
              key={servicio.numero}
              className="group border border-[#1E293B] bg-[#000000] hover:border-[#2563EB] transition-colors duration-300 p-8 md:p-12"
            >
              <div className="grid md:grid-cols-3 gap-8 items-start">

                {/* Número y título */}
                <div className="md:col-span-1">
                  <p className="text-xs font-bold tracking-[0.3em] text-[#2563EB] mb-2">
                    {servicio.numero}
                  </p>
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
                    {servicio.titulo}
                  </h2>
                </div>

                {/* Descripción */}
                <div className="md:col-span-1">
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {servicio.descripcion}
                  </p>
                </div>

                {/* Entregables */}
                <div className="md:col-span-1">
                  <p className="text-[10px] uppercase tracking-widest text-[#64748B] font-bold mb-4">
                    Entregables
                  </p>
                  <ul className="space-y-2">
                    {servicio.entregables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-xs text-[#64748B]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#2563EB] mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 border border-[#1E293B] p-12 text-center">
          <p className="text-[#64748B] text-sm mb-2 uppercase tracking-widest">
            ¿Listo para hablar de tu proyecto?
          </p>
          <h2 className="text-3xl font-bold text-white mb-8">
            Solicita una consulta
          </h2>
          <Link
            href="/contacto"
            className="inline-block bg-[#2563EB] px-12 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#1d4ed8] transition-all"
          >
            Contactar ahora
          </Link>
        </div>
      </div>
    </div>
  );
}
