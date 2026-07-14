# Proyecto: ingerickgarcia.com
Página web personal de Erick Martín García Reyna, Ingeniero Civil.

## Objetivo de la página
Posicionamiento profesional dual:
- Conseguir empleo en empresas grandes de infraestructura
- Ofrecer consultoría y servicios freelance

## Perfil del dueño
Ingeniero Civil con 9+ años de experiencia especializado en:
- Control administrativo de obra (estimaciones, precios unitarios, 
  control presupuestal, facturación, gestión documental)
- Infraestructura hidráulica: acueductos, drenaje, tanques, pavimentación
- Actualmente en transición activa hacia BIM y Data Science aplicado 
  a construcción (Tec de Monterrey)

Conoce el campo (rendimientos, materiales, equipo) pero su rol 
siempre ha sido desde el lado administrativo y de control, 
no de planta en obra.

## Stack técnico
- Next.js 16 con TypeScript — App Router
- Tailwind CSS
- Desplegado en Vercel
- Repo en GitHub

## Identidad visual
- Estilo: dark corporativo, serio, de alto nivel
- Sensación: clase, precisión, ingeniería de alto nivel
- Fondo: negro puro `#000000`
- Texto principal: blanco `#FFFFFF`
- Acento principal: azul eléctrico `#2563EB`
- Texto secundario: gris azulado `#64748B`
- Líneas / divisores: `#1E293B`
- Fondo tarjetas/paneles: `#0a0a0a`
- Tipografía: espaciada, limpia, minimalista (Geist Sans)
- Sin elementos decorativos innecesarios
- Inspiración: adamhootnick.com — nombre centrado, 
  imagen full screen, menú discreto, minimalista

## Estructura de páginas (multi-página)
El sitio está estructurado con rutas separadas en Next.js App Router.
NO es una single-page app con anclas — cada sección es una ruta propia.

### Rutas
- `/` — Hero full screen: imagen de obra + overlay negro 65%, 
  nombre centrado ("Erick García") en blanco con tracking amplio,
  subtítulo, dos botones (Ver proyectos / Contacto)
- `/sobre-mi` — Perfil profesional, bio, stats, habilidades, 
  formación y certificaciones
- `/proyectos` — Los 6 proyectos reales con imagen, escala, rol e impacto.
  Los 3 de mayor escala enlazan a su ficha ("Ver caso completo →")
- `/proyectos/[slug]` — Ficha individual (SSG) de los 3 proyectos grandes,
  con narrativa reto → decisiones → resultados. Slugs:
  `acueducto-armeria-manzanillo`, `linea-impulsion-el-salto-calderon`,
  `acueducto-cerro-prieto`
- `/servicios` — 5 especialidades con entregables + CTA al contacto
- `/contacto` — Datos de contacto + formulario Formspree

### Datos de proyectos (fuente única)
- `app/data/proyectos.ts` — array `proyectos` que alimenta tanto las
  tarjetas de `/proyectos` como las fichas `/proyectos/[slug]`.
  Cada proyecto tiene `slug`, `imagen` (independiente) y opcionalmente
  `ficha` (solo los 3 grandes). Editar contenido de proyectos SOLO aquí.

### Componentes compartidos (en app/components/)
- `Header.tsx` — Fijo en la parte superior. Transparente en `/`, 
  sólido (bg-black/95) en páginas interiores. Logo izquierda, 
  nav derecha con `next/link`. Marca la ruta activa.
- `Footer.tsx` — 3 columnas: contacto+redes / nav rápida / certificaciones.
  Copyright centrado al fondo.
- `ContactForm.tsx` — Formulario Formspree, se usa en `/contacto`.
  Estilo dark del sitio (inputs negros, borde #1E293B, botón azul #2563EB)

### Layout global (app/layout.tsx)
Incluye `<Header />` y `<Footer />` globales.
El `<main>` envuelve el `{children}`.

## Proyectos reales para mostrar (datos correctos, implementados en /proyectos)
- Acueducto Armería–Manzanillo (ASIPONA): 42 km + tanque de almacenamiento,
  ~$900M MXN, superintendente de campo, ~200 personas
- Línea de Impulsión El Salto–Calderón (CONAGUA), Jalisco: ~$500M MXN,
  licitación y coordinación remota
- Reforzamiento Acueducto Cerro Prieto (SADM): 4,000 ml tubería acero 84"
  (2.13 m diámetro), ~$200M MXN, responsable administrativo integral
- Drenaje Pluvial Concepción Barragán (Mpio. Apodaca): ducto CR + tubería
  aluminizada 84", ~$99M MXN, diseño completo en etapa SOP
- Puente Arroyo El Infiernillo (Mpio. Apodaca): ~$42M MXN,
  administrativo + firma de superintendente
- Ampliación Galerías Valle Oriente (Postensa): 3,000 m² de losa,
  residente de obra, ~40 personas

## Imágenes disponibles en /public
- `cerrodelasilla.jpg` — usada en Hero y proyectos
- `acueductomonterrey.jpeg` — proyectos hidráulicos Monterrey
- `acueductoguadalajara.jpg` — proyecto El Salto-Calderón
- `tanqueeleden.jpg` — proyecto Armería-Manzanillo
- `logo.webp` — logo del sitio
- `og.jpg` — imagen OpenGraph 1200×630 para vista previa al compartir en redes
- `/public/proyectos/` — fotos reales de obra (una por slug). Ver
  `public/proyectos/README.md` para la convención de nombres. Al subir
  una foto, actualizar solo el campo `imagen` en `app/data/proyectos.ts`

## Certificaciones (datos correctos)
- BIM Profesional → CMIC
- Administración de Obra → Tecnológico de Monterrey
- Neodata Avanzado → CMIC
- Data Science Aplicado a Construcción → Tecnológico de Monterrey

## Reglas de trabajo
- Todo el contenido visible en español
- Antes de modificar archivos, listar qué vas a cambiar 
  y esperar confirmación
- No cambiar archivos de configuración sin avisar 
  (tailwind.config.ts, next.config.ts)
- Commits descriptivos en español
- Mantener el proyecto desplegable en Vercel en todo momento
- NO usar naranja — el acento es siempre azul `#2563EB`

## Contacto y redes
- LinkedIn: https://linkedin.com/in/erickmgr/
- Email: erck9217@gmail.com
- Teléfono: 8180105716
- Ubicación: Guadalupe, N.L.

## Footer (implementado)
- Fondo: `#000000` con línea divisora `#1E293B` arriba
- Columna izquierda: nombre, título, dirección, teléfono, email, 
  links LinkedIn y GitHub
- Columna centro: navegación rápida (Sobre mí, Proyectos, 
  Servicios, Contacto)
- Columna derecha: certificaciones (BIM CMIC, Neodata CMIC, 
  Admin Obra Tec MTY)
- Inferior: copyright centrado en gris secundario
- Sin colores llamativos, sobrio y limpio
