# Página institucional del CEIGMM

Versión estática y organizada del último modelo institucional del CEIGMM. Está preparada para publicarse directamente con GitHub Pages, sin instalar programas ni ejecutar una compilación.

## Dónde editar

- **Textos, enlaces, cifras y actividades:** `contenido/datos.js`
- **Colores, tamaños y diseño:** `css/estilos.css`
- **Logos:** `imagenes/logos/`
- **Fotografías de actividades:** `imagenes/actividades/`
- **Fotografías de la directiva:** `imagenes/directiva/`
- **PDF y documentos:** `documentos/`
- **Funcionamiento de la página:** `js/pagina.js`

La explicación paso a paso está en `GUIA_DE_EDICION.md`.

## Vista previa rápida

Abre `index.html` en tu navegador. Para una revisión más fiel antes de publicar, se recomienda usar la vista previa local de Codex.

## Publicar con GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube **el contenido de esta carpeta**, dejando `index.html` en la raíz.
3. En GitHub entra a **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama `main` y la carpeta `/ (root)`.
6. Guarda y espera a que GitHub muestre el enlace público.

## Estructura

```text
ceigmm-ultimo-modelo/
├── index.html
├── contenido/datos.js
├── css/estilos.css
├── js/pagina.js
├── imagenes/
│   ├── logos/
│   ├── actividades/
│   └── directiva/
└── documentos/
```
