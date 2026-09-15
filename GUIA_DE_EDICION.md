# Guía sencilla para actualizar la página

La página está separada para que puedas mejorarla poco a poco sin desordenar el diseño.

## 1. Cambiar textos y enlaces

Abre el archivo `contenido/datos.js`. Ahí encontrarás bloques claramente nombrados:

- `identidad`: nombre, logos, enlace de la UNI y año.
- `aviso`: mensaje pequeño de la parte superior.
- `portada`: título principal, descripción y especialidades.
- `presentacion`: explicación y cifras.
- `ejes`: los tres ejes de trabajo.
- `agenda`: actividades, convocatorias y estados.
- `canalWhatsapp`: enlace, nombre, descripción y temas del canal oficial.
- `contacto`: mensaje final y redes sociales.

Cambia solamente el texto que está entre comillas. Conserva las comas, llaves y corchetes.

Ejemplo:

```js
titulo: "Charlas y talleres",
estado: "Inscripciones abiertas",
enlace: "https://forms.gle/tu-formulario",
```

Si una actividad todavía no tiene enlace, déjalo vacío:

```js
enlace: "",
```

### Actualizar el canal de WhatsApp

En el bloque `canalWhatsapp`, reemplaza solamente el enlace si el CEIGMM crea un canal nuevo:

```js
enlace: "https://whatsapp.com/channel/ENLACE-DEL-CANAL",
```

También puedes cambiar `descripcion` y los tres textos de `temas`. Si cambia el enlace, debe generarse nuevamente la imagen `imagenes/redes/qr-whatsapp-ceigmm.png` para que el código QR apunte al canal correcto.

## 2. Cambiar los logos

Entra a `imagenes/logos/` y reemplaza:

- `logo-ceigmm.png`
- `logo-uni.png`
- `favicon.png`

Usa exactamente esos nombres para que no tengas que cambiar ningún código. Conviene usar PNG con fondo transparente.

## 3. Agregar imágenes y documentos

- Guarda fotos de eventos en `imagenes/actividades/`.
- Guarda fotos de integrantes en `imagenes/directiva/`.
- Guarda reglamentos, pronunciamientos y PDF en `documentos/`.

Los espacios ya están creados aunque el modelo inicial todavía no muestre galerías o una directiva. Así podremos añadir esas secciones más adelante sin mezclar archivos.

## 4. Cambiar colores o diseño

Los estilos están en `css/estilos.css`. Los colores principales aparecen al inicio:

```css
--wine: #711610;
--wine-dark: #48100d;
--gold: #c7902f;
--paper: #f8f5ef;
```

Si solo actualizarás información, no necesitas tocar este archivo.

## 5. Subir una actualización a GitHub

Después de modificar archivos:

1. Súbelos al mismo repositorio.
2. Reemplaza los archivos anteriores cuando GitHub lo pida.
3. GitHub Pages actualizará la web automáticamente.

Antes de cada cambio grande, conserva una copia de la carpeta o crea una nueva versión en GitHub. Así podrás volver atrás si algo no queda como esperabas.
