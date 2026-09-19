(function () {
  "use strict";

  const datos = window.CEIGMM_DATA;
  const sitio = document.querySelector("#sitio");

  if (!datos || !sitio) {
    document.body.innerHTML =
      "<p style='padding:2rem;font-family:Arial'>No se pudo cargar el contenido de la página.</p>";
    return;
  }

  const escapar = (valor) =>
    String(valor ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const linkExterno = (url) =>
    /^https?:\/\//i.test(url || "") ? ' target="_blank" rel="noreferrer"' : "";

  const cifras = datos.presentacion.cifras
    .map(
      (item) => `
        <div>
          <strong>${escapar(item.valor)}</strong>
          <span>${escapar(item.texto)}</span>
        </div>`,
    )
    .join("");

  const ejes = datos.ejes.items
    .map(
      (item) => `
        <article class="pillar-card">
          <div class="pillar-meta">
            <span>${escapar(item.numero)}</span>
            <small>${escapar(item.etiqueta)}</small>
          </div>
          <h3>${escapar(item.titulo)}</h3>
          <p>${escapar(item.texto)}</p>
          <span class="pillar-mark" aria-hidden="true">↗</span>
        </article>`,
    )
    .join("");

  const iniciativas = datos.iniciativas.items
    .map((item, indice) => {
      const telefono = String(item.telefono || "").replace(/\D/g, "");
      const detalles = [
        item.responsable
          ? `<div><dt>Impulsa</dt><dd>${escapar(item.responsable)}</dd></div>`
          : "",
        item.contacto
          ? `<div><dt>Contacto</dt><dd>${escapar(item.contacto)}${telefono ? ` · <a href="tel:+51${telefono}">${escapar(item.telefono)}</a>` : ""}</dd></div>`
          : "",
        item.ubicacion
          ? `<div><dt>Ubicación</dt><dd>${escapar(item.ubicacion)}</dd></div>`
          : "",
        item.horario
          ? `<div><dt>Horario</dt><dd>${escapar(item.horario)}</dd></div>`
          : "",
      ].join("");

      return `
        <article class="initiative-card">
          <div class="initiative-visual">
            <img src="${escapar(item.imagen)}" alt="${escapar(item.imagenAlt)}" width="768" height="1376" loading="lazy" />
          </div>
          <div class="initiative-copy">
            <div class="initiative-meta">
              <span class="initiative-number">${String(indice + 1).padStart(2, "0")}</span>
              <span class="initiative-category">${escapar(item.categoria)}</span>
              <span class="initiative-status">${escapar(item.estado)}</span>
            </div>
            <h3>${escapar(item.titulo)}</h3>
            <div class="initiative-objective">
              <small>Objetivo</small>
              <p>${escapar(item.objetivo)}</p>
            </div>
            <dl class="initiative-details">${detalles}</dl>
            <a class="button initiative-button" href="${escapar(item.imagen)}" target="_blank" rel="noreferrer">
              ${escapar(item.boton)} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>`;
    })
    .join("");

  const agenda = datos.agenda.items
    .map((item, indice) => {
      const contenido = `
        <div class="agenda-number">${String(indice + 1).padStart(2, "0")}</div>
        <div>
          <span>${escapar(item.tipo)}</span>
          <h3>${escapar(item.titulo)}</h3>
          <p>${escapar(item.texto)}</p>
        </div>
        <span class="status">${escapar(item.estado)}</span>`;

      return item.enlace
        ? `<article><a class="agenda-entry" href="${escapar(item.enlace)}"${linkExterno(item.enlace)}>${contenido}</a></article>`
        : `<article>${contenido}</article>`;
    })
    .join("");

  const hitosHistoria = datos.historia.hitos
    .map(
      (hito) => `
        <article class="history-card">
          <span>${escapar(hito.anio)}</span>
          <h3>${escapar(hito.titulo)}</h3>
          <p>${escapar(hito.texto)}</p>
        </article>`,
    )
    .join("");

  const temasCanal = datos.canalWhatsapp.temas
    .map((tema) => `<span>${escapar(tema)}</span>`)
    .join("");

  const redes = datos.contacto.redes
    .map(
      (red) => `
        <a class="button ${red.estilo === "claro" ? "light-button" : "outline-button"}"
           href="${escapar(red.enlace)}"${linkExterno(red.enlace)}>
          ${escapar(red.nombre)} <span aria-hidden="true">↗</span>
        </a>`,
    )
    .join("");

  const especialidades = datos.portada.especialidadesRepresentadas
    .map((nombre) => `<span>${escapar(nombre)}</span>`)
    .join("");

  const escuelasBiblioteca = datos.biblioteca.escuelas
    .map(
      (escuela) => `
        <article class="library-card">
          <span>${escapar(escuela.numero)}</span>
          <h3>${escapar(escuela.nombre)}</h3>
          <p>${escapar(escuela.detalle)}</p>
          <small>${escapar(datos.biblioteca.estado)}</small>
        </article>`,
    )
    .join("");

  const formularioActivo = Boolean(datos.contacto.formulario.destino);

  const areasDirectiva = datos.directiva.areas
    .map(
      (area, indiceArea) => `
        <article class="team-area">
          <div class="team-area-heading">
            <span>${String(indiceArea + 1).padStart(2, "0")}</span>
            <div>
              <h3>${escapar(area.nombre)}</h3>
              <p>${escapar(area.descripcion)}</p>
            </div>
          </div>
          <div class="team-members">
            ${area.integrantes
              .map(
                (persona) => {
                  const claseFoto = persona.formatoImagen === "retrato"
                    ? "team-photo team-photo-retrato"
                    : "team-photo team-photo-ficha";
                  const estiloEncuadre = persona.formatoImagen === "retrato"
                    ? `--photo-zoom: ${Number(persona.zoomFoto) || 140}%; --photo-position: ${escapar(persona.posicionFoto || "center top")}; `
                    : "";
                  const retrato = persona.imagen
                    ? `<div class="${claseFoto}" role="img" aria-label="Fotografía de ${escapar(persona.nombre)}"
                         style="${estiloEncuadre}background-image: url('${escapar(persona.imagen)}')"></div>`
                    : `<div class="team-photo team-photo-placeholder" role="img" aria-label="Fotografía pendiente de ${escapar(persona.nombre)}">
                         <span>${escapar(persona.iniciales || persona.nombre.charAt(0))}</span>
                       </div>`;

                  return `
                  <div class="team-member">
                    ${retrato}
                    <div class="team-member-copy">
                      <strong>${escapar(persona.nombre)}</strong>
                      <span>${escapar(persona.cargo)}</span>
                    </div>
                  </div>`;
                },
              )
              .join("")}
          </div>
        </article>`,
    )
    .join("");

  sitio.innerHTML = `
    <div class="announcement">
      <p><span>${escapar(datos.aviso.etiqueta)}</span> ${escapar(datos.aviso.texto)}</p>
      <div class="announcement-actions">
        <a class="announcement-channel" href="#canal">${escapar(datos.aviso.enlaceTexto)} <span aria-hidden="true">→</span></a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="section-menu" aria-label="Abrir menú de secciones" data-menu-toggle>
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <div class="section-menu" id="section-menu" aria-hidden="true">
      <button class="section-menu-backdrop" type="button" aria-label="Cerrar menú" data-menu-close></button>
      <aside class="section-menu-panel" role="dialog" aria-modal="true" aria-labelledby="section-menu-title">
        <div class="section-menu-heading">
          <div>
            <small>Explora la página</small>
            <h2 id="section-menu-title">Secciones</h2>
          </div>
          <button class="section-menu-close" type="button" aria-label="Cerrar menú" data-menu-close>×</button>
        </div>
        <nav class="section-menu-nav" aria-label="Secciones del sitio">
          <a href="#inicio"><span>01</span>Inicio</a>
          <a href="#conoce"><span>02</span>Quiénes somos</a>
          <a href="#ejes"><span>03</span>Ejes de trabajo</a>
          <a href="#iniciativas"><span>04</span>Iniciativas CEIGMM</a>
          <a href="#agenda"><span>05</span>Actividades</a>
          <a href="#historia"><span>06</span>Historia de la FIGMM</a>
          <a href="#canal"><span>07</span>Canal de WhatsApp</a>
          <a href="#biblioteca"><span>08</span>Drive CEIGMM</a>
          <a href="#directiva"><span>09</span>Directiva</a>
          <a href="#contacto"><span>10</span>Sugerencias y contacto</a>
        </nav>
      </aside>
    </div>

    <header class="site-header">
      <div class="institutional-brand">
        <a class="ceigmm-brand" href="#inicio" aria-label="CEIGMM, ir al inicio">
          <img src="${escapar(datos.identidad.logoCeigmm)}" alt="Escudo del CEIGMM" width="68" height="68" />
          <span>
            <strong>${escapar(datos.identidad.nombre)}</strong>
            <small>${escapar(datos.identidad.descripcionCorta)}</small>
          </span>
        </a>
        <span class="brand-divider" aria-hidden="true"></span>
        <a class="uni-brand" href="${escapar(datos.identidad.enlaceUni)}" target="_blank" rel="noreferrer" aria-label="Universidad Nacional de Ingeniería">
          <img src="${escapar(datos.identidad.logoUni)}" alt="Universidad Nacional de Ingeniería" />
        </a>
      </div>
      <nav class="main-nav" aria-label="Navegación principal">
        <a href="#conoce">Quiénes somos</a>
        <a href="#ejes">Ejes</a>
        <a href="#iniciativas">Iniciativas</a>
        <a href="#agenda">Actividades</a>
        <a href="#biblioteca">Drive</a>
        <a href="#directiva">Directiva</a>
        <a href="#contacto">Sugerencias</a>
      </nav>
      <a class="header-action" href="#canal">Canal CEIGMM <span aria-hidden="true">↗</span></a>
    </header>

    <section class="hero" id="inicio">
      <div class="contour contour-one" aria-hidden="true"></div>
      <div class="contour contour-two" aria-hidden="true"></div>
      <div class="hero-copy">
        <p class="eyebrow"><span></span> ${escapar(datos.portada.especialidades)}</p>
        <h1>${escapar(datos.portada.titulo)}<br /><em>${escapar(datos.portada.tituloDestacado)}</em></h1>
        <p class="hero-lead">${escapar(datos.portada.descripcion)}</p>
        <div class="hero-actions">
          <a class="button primary" href="#conoce">${escapar(datos.portada.botonPrincipal)} <span aria-hidden="true">→</span></a>
          <a class="button secondary" href="#agenda">${escapar(datos.portada.botonSecundario)}</a>
        </div>
      </div>

      <aside class="hero-emblem" aria-label="Identidad CEIGMM">
        <div class="emblem-frame">
          <span class="emblem-caption top">${escapar(datos.identidad.descripcionCorta)}</span>
          <img src="${escapar(datos.identidad.logoCeigmm)}" alt="Escudo del Centro de Estudiantes de Ingeniería Geológica, Minera y Metalúrgica" width="260" height="260" />
          <span class="emblem-caption bottom">${escapar(datos.identidad.universidad)}</span>
        </div>
        <div class="specialties" aria-label="Especialidades representadas">${especialidades}</div>
      </aside>
    </section>

    <section class="welcome" id="conoce">
      <div class="welcome-heading">
        <p class="section-kicker">${escapar(datos.presentacion.etiqueta)}</p>
        <h2>${escapar(datos.presentacion.titulo)}</h2>
      </div>
      <div class="welcome-copy">
        <p>${escapar(datos.presentacion.texto)}</p>
        <a class="text-link" href="#ejes">${escapar(datos.presentacion.enlaceTexto)} <span aria-hidden="true">→</span></a>
      </div>
      <div class="stats" aria-label="CEIGMM en cifras">${cifras}</div>
    </section>

    <section class="pillars" id="ejes">
      <div class="section-intro">
        <div>
          <p class="section-kicker light">${escapar(datos.ejes.etiqueta)}</p>
          <h2>${escapar(datos.ejes.titulo)}</h2>
        </div>
        <p>${escapar(datos.ejes.introduccion)}</p>
      </div>
      <div class="pillar-grid">${ejes}</div>
    </section>

    <section class="initiatives" id="iniciativas">
      <div class="initiatives-heading">
        <div>
          <p class="section-kicker">${escapar(datos.iniciativas.etiqueta)}</p>
          <h2>${escapar(datos.iniciativas.titulo)}</h2>
        </div>
        <p>${escapar(datos.iniciativas.introduccion)}</p>
      </div>
      <div class="initiatives-list">${iniciativas}</div>
    </section>

    <section class="agenda" id="agenda">
      <div class="agenda-title">
        <p class="section-kicker">${escapar(datos.agenda.etiqueta)}</p>
        <h2>${escapar(datos.agenda.titulo)}</h2>
        <p>${escapar(datos.agenda.introduccion)}</p>
      </div>
      <div class="agenda-list">${agenda}</div>
    </section>

    <section class="history" id="historia">
      <div class="history-heading">
        <div>
          <p class="section-kicker light">${escapar(datos.historia.etiqueta)}</p>
          <h2>${escapar(datos.historia.titulo)}</h2>
        </div>
        <div class="history-copy">
          <p>${escapar(datos.historia.introduccion)}</p>
          <a href="${escapar(datos.historia.enlaceFuente)}"${linkExterno(datos.historia.enlaceFuente)}>${escapar(datos.historia.fuente)} <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div class="history-timeline">${hitosHistoria}</div>
    </section>

    <section class="whatsapp-channel" id="canal">
      <div class="channel-copy">
        <p class="section-kicker">${escapar(datos.canalWhatsapp.etiqueta)}</p>
        <h2>${escapar(datos.canalWhatsapp.titulo)}</h2>
        <p class="channel-lead">${escapar(datos.canalWhatsapp.texto)}</p>
        <div class="channel-topics" aria-label="Contenido del canal">${temasCanal}</div>
        <a class="button channel-button" href="${escapar(datos.canalWhatsapp.enlace)}"${linkExterno(datos.canalWhatsapp.enlace)}>
          ${escapar(datos.canalWhatsapp.boton)} <span aria-hidden="true">↗</span>
        </a>
        <p class="channel-note">${escapar(datos.canalWhatsapp.nota)}</p>
      </div>

      <aside class="channel-card" aria-label="Canal oficial del CEIGMM en WhatsApp">
        <div class="channel-card-header">
          <span class="channel-mark" aria-hidden="true">CE</span>
          <div>
            <small>Canal oficial</small>
            <h3>${escapar(datos.canalWhatsapp.nombre)}</h3>
          </div>
        </div>
        <blockquote>${escapar(datos.canalWhatsapp.descripcion)}</blockquote>
        <div class="channel-qr">
          <img src="${escapar(datos.canalWhatsapp.qr)}" alt="Código QR del canal de WhatsApp del CEIGMM" width="180" height="180" />
          <p><strong>Escanea para abrir el canal</strong><span>También puedes usar el botón desde tu celular.</span></p>
        </div>
      </aside>
    </section>

    <section class="library" id="biblioteca">
      <div class="library-heading">
        <div>
          <p class="section-kicker">${escapar(datos.biblioteca.etiqueta)}</p>
          <h2>${escapar(datos.biblioteca.titulo)}</h2>
        </div>
        <div class="library-copy">
          <p>${escapar(datos.biblioteca.texto)}</p>
          ${
            datos.biblioteca.enlace
              ? `<a class="button library-button" href="${escapar(datos.biblioteca.enlace)}"${linkExterno(datos.biblioteca.enlace)}>${escapar(datos.biblioteca.boton)} <span aria-hidden="true">↗</span></a>`
              : `<span class="library-status">${escapar(datos.biblioteca.estado)}</span>`
          }
        </div>
      </div>
      <div class="library-grid">${escuelasBiblioteca}</div>
      <p class="library-note">${escapar(datos.biblioteca.nota)}</p>
    </section>

    <section class="team" id="directiva">
      <div class="team-intro">
        <div>
          <p class="section-kicker light">${escapar(datos.directiva.etiqueta)}</p>
          <h2>${escapar(datos.directiva.titulo)}</h2>
        </div>
        <div>
          <p>${escapar(datos.directiva.introduccion)}</p>
        </div>
      </div>
      <div class="team-areas">${areasDirectiva}</div>
    </section>

    <section class="contact" id="contacto">
      <div class="contact-intro">
        <p class="section-kicker light">${escapar(datos.contacto.etiqueta)}</p>
        <h2>${escapar(datos.contacto.titulo)}</h2>
        <p>${escapar(datos.contacto.texto)}</p>
        <a class="contact-email" href="mailto:${escapar(datos.contacto.correo)}">
          <small>${escapar(datos.contacto.correoEtiqueta)}</small>
          <strong>${escapar(datos.contacto.correo)}</strong>
          <span aria-hidden="true">↗</span>
        </a>
        <div class="contact-links">${redes}</div>
      </div>

      <form class="contact-form" method="post"${formularioActivo ? ` action="${escapar(datos.contacto.formulario.destino)}"` : ""}>
        <p class="section-kicker light">${escapar(datos.contacto.formulario.etiqueta)}</p>
        <h3>${escapar(datos.contacto.formulario.titulo)}</h3>
        <div class="form-grid">
          <label>
            <span>Nombre completo</span>
            <input type="text" name="nombre" autocomplete="name" required />
          </label>
          <label>
            <span>Correo electrónico</span>
            <input type="email" name="correo" autocomplete="email" required />
          </label>
          <label>
            <span>Teléfono <small>(opcional)</small></span>
            <input type="tel" name="telefono" autocomplete="tel" inputmode="tel" />
          </label>
          <label>
            <span>Motivo</span>
            <select name="motivo" required>
              <option value="">Selecciona una opción</option>
              <option>Consulta general</option>
              <option>Sugerencia</option>
              <option>Consulta académica</option>
              <option>Actividad o evento</option>
              <option>Propuesta estudiantil</option>
              <option>Convenio o colaboración</option>
              <option>Otro</option>
            </select>
          </label>
          <label class="form-message">
            <span>Mensaje</span>
            <textarea name="mensaje" rows="5" required></textarea>
          </label>
          <label class="form-consent">
            <input type="checkbox" name="consentimiento" required />
            <span>Autorizo al CEIGMM a utilizar estos datos únicamente para responder mi consulta.</span>
          </label>
        </div>
        <button class="button form-button" type="submit"${formularioActivo ? "" : " disabled"}>${escapar(datos.contacto.formulario.boton)}</button>
        ${formularioActivo ? "" : `<p class="form-status">${escapar(datos.contacto.formulario.estado)}</p>`}
      </form>
    </section>

    <footer>
      <div class="footer-identity">
        <img src="${escapar(datos.identidad.logoCeigmm)}" alt="CEIGMM" width="54" height="54" />
        <div><strong>${escapar(datos.identidad.nombre)} · UNI</strong><span>${escapar(datos.identidad.descripcionCorta)}</span></div>
      </div>
      <p>${escapar(datos.identidad.facultad)}<br />${escapar(datos.identidad.universidad)} · ${escapar(datos.identidad.ciudad)}</p>
      <div class="footer-links">
        <a href="#inicio">Volver arriba ↑</a>
        <span>© ${escapar(datos.identidad.anio)} ${escapar(datos.identidad.nombre)}</span>
      </div>
      <small class="footer-credit">Página hecha en 2026 por CEIGMM L</small>
    </footer>`;

  const alinearSeccionInicial = () => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const destino = id ? document.getElementById(id) : null;

    if (!destino) return;

    const desplazamientoAnterior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    destino.scrollIntoView({ block: "start" });
    document.documentElement.style.scrollBehavior = desplazamientoAnterior;
  };

  requestAnimationFrame(() => requestAnimationFrame(alinearSeccionInicial));

  const menu = document.querySelector("#section-menu");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menuCloseButtons = document.querySelectorAll("[data-menu-close]");
  const menuLinks = menu.querySelectorAll("a");

  const setMenuOpen = (open, returnFocus = false) => {
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Cerrar menú de secciones" : "Abrir menú de secciones");
    document.body.classList.toggle("menu-open", open);

    if (open) menu.querySelector("a")?.focus();
    if (!open && returnFocus) menuToggle.focus();
  };

  menuToggle.addEventListener("click", () => setMenuOpen(!menu.classList.contains("is-open")));
  menuCloseButtons.forEach((button) => button.addEventListener("click", () => setMenuOpen(false, true)));
  menuLinks.forEach((link) => link.addEventListener("click", () => setMenuOpen(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) setMenuOpen(false, true);
  });
})();
