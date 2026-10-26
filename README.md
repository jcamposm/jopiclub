# JOPI Club · Propuesta de rediseño del home

Prototipo responsive para evaluar la nueva dirección visual. HTML, CSS y JavaScript con Vite; no requiere credenciales ni backend.

## Desarrollo

Node.js 22.12+ (validado con Node.js 24).

```sh
npm ci
npm run dev
```

## Compilación

```sh
npm run build
npm run preview
```

Los archivos de producción quedan en `dist/`. Para despliegues en una subcarpeta, usar `npm run build -- --base=./`.

## Alcance

- Nueva portada, presentación del club, talleres filtrables por edad, aventuras, llamada a inscripción y preguntas frecuentes.
- Menú móvil, navegación con teclado y respeto por movimiento reducido.
- Imágenes y contenido de referencia obtenidos del sitio oficial jopiclub.cl. Las tipografías Nunito y DM Sans se incluyen localmente bajo licencia OFL.
- Inscripción, acceso y contacto enlazan a los servicios actuales. No reproduce ni modifica WordPress, pagos, cuentas ni talleres.
- Los talleres mostrados son una selección; precios y horarios reflejan el sitio consultado y deben confirmarse antes de una publicación comercial.

La propuesta debe revisarse antes de reemplazar el sitio en producción.

## Evaluación visual

[Captura de escritorio](review/desktop.png) · [Captura móvil](review/mobile.png)

Validado en Chromium: filtros de edad, preguntas frecuentes, menú móvil y cierre con Escape; sin desbordamiento horizontal en 390, 768 y 1440 px ni errores de JavaScript. Compilación de producción verificada.
