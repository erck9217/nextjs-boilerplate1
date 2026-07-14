# Fotos reales de obra

Coloca aquí las fotos propias de cada proyecto (capturas de dron, obra, etc.).

## Convención de nombres

Usa el `slug` del proyecto definido en `app/data/proyectos.ts`:

- `armeria-manzanillo.jpg`
- `el-salto-calderon.jpg`
- `cerro-prieto.jpg`
- `drenaje-concepcion-barragan.jpg`
- `puente-el-infiernillo.jpg`
- `galerias-valle-oriente.jpg`

## Cómo reemplazar una imagen

1. Sube la foto a esta carpeta con el nombre correspondiente.
2. En `app/data/proyectos.ts`, cambia el campo `imagen` de ese proyecto
   a `/proyectos/<nombre>.jpg`.

Solo se edita esa línea; las tarjetas y las fichas usan el mismo campo.

Formato recomendado: JPG, ~1600px de ancho, optimizado (< 400 KB).
