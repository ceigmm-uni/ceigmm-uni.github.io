/*
 * ARCHIVO PRINCIPAL DE EDICIÓN
 * Cambia aquí los textos, enlaces, actividades y rutas de imágenes.
 * No es necesario tocar index.html ni css/estilos.css para actualizar contenido.
 */

window.CEIGMM_DATA = {
  identidad: {
    nombre: "CEIGMM",
    descripcionCorta: "Centro de Estudiantes",
    logoCeigmm: "imagenes/logos/logo-ceigmm.png?v=2",
    logoUni: "imagenes/logos/logo-uni.png",
    enlaceUni: "https://www.uni.edu.pe/",
    enlaceFigmm: "https://www.figmm.uni.edu.pe/",
    facultad: "Facultad de Ingeniería Geológica, Minera y Metalúrgica",
    universidad: "Universidad Nacional de Ingeniería",
    ciudad: "Lima, Perú",
    anio: "2026",
  },

  aviso: {
    etiqueta: "CEIGMM informa",
    texto: "Sigue los avisos y actividades desde nuestro canal oficial de WhatsApp.",
    enlaceTexto: "Ir al canal",
  },

  portada: {
    especialidades: "Geología · Minas · Metalurgia",
    titulo: "Formamos comunidad.",
    tituloDestacado: "Representamos tu voz.",
    descripcion:
      "Somos el Centro de Estudiantes de la Facultad de Ingeniería Geológica, Minera y Metalúrgica de la Universidad Nacional de Ingeniería.",
    botonPrincipal: "Conoce al CEIGMM",
    botonSecundario: "Ver actividades",
    especialidadesRepresentadas: [
      "Ingeniería Geológica",
      "Ingeniería de Minas",
      "Ingeniería Metalúrgica",
    ],
  },

  presentacion: {
    etiqueta: "Quiénes somos",
    titulo: "Una organización hecha por estudiantes y para estudiantes.",
    texto:
      "Trabajamos para que cada integrante de la FIGMM encuentre representación, oportunidades y una comunidad que acompañe su desarrollo universitario.",
    enlaceTexto: "Descubre cómo trabajamos",
    cifras: [
      { valor: "03", texto: "Especialidades representadas" },
      { valor: "01", texto: "Comunidad integrada" },
      { valor: "UNI", texto: "Excelencia que nos une" },
    ],
  },

  ejes: {
    etiqueta: "Nuestros ejes de trabajo",
    titulo: "Avanzamos con propósito.",
    introduccion:
      "Una gestión cercana, activa y orientada a construir mejores experiencias para toda la comunidad estudiantil.",
    items: [
      {
        numero: "01",
        etiqueta: "Representación",
        titulo: "Una voz activa para cada estudiante",
        texto:
          "Canalizamos propuestas, necesidades e iniciativas ante la facultad con cercanía, responsabilidad y transparencia.",
      },
      {
        numero: "02",
        etiqueta: "Formación",
        titulo: "Experiencias que complementan el aula",
        texto:
          "Impulsamos charlas, talleres, visitas y vínculos con profesionales que acercan al estudiante a su futuro campo laboral.",
      },
      {
        numero: "03",
        etiqueta: "Comunidad",
        titulo: "Tres especialidades, un solo centro",
        texto:
          "Creamos espacios académicos, culturales y deportivos que fortalecen la integración de toda la comunidad FIGMM.",
      },
    ],
  },

  iniciativas: {
    etiqueta: "Proyectos en marcha",
    titulo: "Iniciativas CEIGMM",
    introduccion:
      "Conoce los proyectos que estamos impulsando, el objetivo de cada uno y cómo puedes participar.",
    items: [
      {
        categoria: "Sostenibilidad",
        titulo: "Libera tu escritorio y tu mente",
        objetivo:
          "Recolectar hojas usadas de la comunidad FIGMM para darles una nueva vida mediante su reutilización o reciclaje, reduciendo residuos de papel y liberando espacios de estudio.",
        estado: "En marcha",
        responsable: "CEIGMM",
        contacto: "Dayana Alvarez",
        telefono: "933 571 611",
        ubicacion: "Oficina del CEIGMM",
        horario: "De 9:00 a. m. a 7:00 p. m.",
        imagen: "imagenes/iniciativas/libera-tu-escritorio-y-tu-mente.png",
        imagenAlt:
          "Afiche de la iniciativa Libera tu escritorio y tu mente para reciclar hojas usadas con el CEIGMM",
        boton: "Ver afiche completo",
      },
      {
        categoria: "Pro fondos",
        titulo: "Gran rifa CEIGMM",
        objetivo:
          "Recaudar fondos para la organización de la Semana de la Facultad, promoviendo la participación y el apoyo de toda la comunidad FIGMM.",
        estado: "Venta activa",
        responsable: "CEIGMM 2026–2027",
        precio: "S/ 3 por número",
        fecha: "Sorteo: 9 de octubre de 2026",
        contactos: [
          { nombre: "Leo", telefono: "995 217 273" },
          { nombre: "Treyzy", telefono: "995 882 539" },
          { nombre: "Arturo", telefono: "965 434 230" },
        ],
        imagen: "imagenes/iniciativas/gran-rifa-ceigmm.png",
        formatoImagen: "horizontal",
        imagenAlt:
          "Afiche de la Gran Rifa CEIGMM pro fondos para la Semana de la Facultad",
        boton: "Ver afiche completo",
      },
    ],
  },

  agenda: {
    etiqueta: "Comunidad en movimiento",
    titulo: "Agenda CEIGMM",
    introduccion:
      "Este espacio reunirá las convocatorias, actividades y oportunidades más importantes para los estudiantes.",
    items: [
      {
        tipo: "Desafío académico",
        titulo: "DAI UNI",
        texto:
          "El Desafío Académico Interdisciplinario comenzará en la semana 6 y estará dirigido a estudiantes de los primeros cuatro ciclos. Pronto compartiremos más información.",
        estado: "Próximamente",
        enlace: "",
        imagen: "",
      },
      {
        tipo: "Aniversario FIGMM",
        titulo: "Semana de la Facultad",
        texto:
          "Celebraremos el aniversario de nuestra facultad con actividades para toda la comunidad FIGMM. Pronto compartiremos más información.",
        estado: "Próximamente",
        enlace: "",
        imagen: "",
      },
      {
        tipo: "Formación",
        titulo: "Charlas y talleres",
        texto:
          "Mantente al día con los próximos espacios de aprendizaje técnico y desarrollo profesional.",
        estado: "Próximamente",
        enlace: "",
        imagen: "",
      },
      {
        tipo: "Experiencia",
        titulo: "Visitas y conexiones",
        texto:
          "Conoce iniciativas que acercan a los estudiantes a empresas, operaciones y especialistas del sector.",
        estado: "Próximamente",
        enlace: "",
        imagen: "",
      },
    ],
  },

  historia: {
    etiqueta: "Nuestra historia",
    titulo: "Una tradición que comenzó formando a los ingenieros del Perú.",
    introduccion:
      "La historia de la FIGMM está vinculada al nacimiento de la actual Universidad Nacional de Ingeniería y a la formación de profesionales al servicio del desarrollo del país.",
    fuente: "Reseña histórica oficial de la FIGMM",
    enlaceFuente: "https://www.figmm.uni.edu.pe/presentacion/",
    hitos: [
      {
        anio: "1875",
        titulo: "Creación de la Escuela de Minas",
        texto:
          "El 20 de enero, durante el gobierno de Manuel Pardo, se expidió el decreto que creó la Escuela de Minas.",
      },
      {
        anio: "1876",
        titulo: "Inicio de una historia compartida",
        texto:
          "La Escuela de Ingeniería Civil y de Minas se instaló oficialmente el 9 de mayo, bajo la dirección de Eduardo de Habich.",
      },
      {
        anio: "1958",
        titulo: "Un espacio para seguir creciendo",
        texto:
          "El Patronato promovido por la industria minera inició la construcción de los edificios en los que actualmente funciona la facultad.",
      },
      {
        anio: "HOY",
        titulo: "Tres especialidades, una comunidad",
        texto:
          "La FIGMM reúne a Ingeniería Geológica, Ingeniería de Minas e Ingeniería Metalúrgica, continuando una tradición académica iniciada en 1876.",
      },
    ],
  },

  canalWhatsapp: {
    etiqueta: "Información al instante",
    titulo: "El CEIGMM también está en WhatsApp.",
    texto:
      "Consulta comunicados, convocatorias y actividades de nuestra facultad desde el canal oficial del CEIGMM.",
    nombre: "CEIGMM - CANAL",
    descripcion:
      "¡Aquí estarás siempre al tanto de lo que ocurre en nuestra facultad!",
    enlace: "https://whatsapp.com/channel/0029Va34IGh4NViog0MjeX1r",
    boton: "Ver canal en WhatsApp",
    qr: "imagenes/redes/qr-whatsapp-ceigmm.png",
    nota:
      "El enlace puede abrirse desde el navegador. Para seguir el canal o reaccionar a las publicaciones, WhatsApp puede solicitar que abras la aplicación.",
    temas: ["Comunicados", "Convocatorias", "Actividades FIGMM"],
  },

  directiva: {
    etiqueta: "Conoce a quienes te representan",
    titulo: "Nuestra directiva estudiantil.",
    introduccion:
      "Un equipo de estudiantes de Geología, Minas y Metalurgia que trabaja de manera articulada al servicio de toda la comunidad FIGMM.",
    areas: [
      {
        nombre: "Presidencia y Vicepresidencias",
        descripcion:
          "Dirigen la representación estudiantil y articulan el trabajo de las secretarías.",
        integrantes: [
          {
            nombre: "Leonardo Taype",
            cargo: "Presidente",
            imagen: "imagenes/directiva/leonardo-taype-canva.png",
            formatoImagen: "retrato",
            zoomFoto: 185,
            posicionFoto: "center 32%",
          },
          {
            nombre: "Treyzy Lima",
            cargo: "Primera vicepresidenta",
            imagen: "imagenes/directiva/treyzy-lima-canva.webp",
            formatoImagen: "retrato",
            zoomFoto: 112,
          },
          {
            nombre: "Jeyson Leyva",
            cargo: "Segundo vicepresidente",
            imagen: "imagenes/directiva/jeyson-leyva-canva.png",
            formatoImagen: "retrato",
            zoomFoto: 145,
          },
        ],
      },
      {
        nombre: "Secretaría de Deportes",
        descripcion:
          "Promueve la integración y el acceso organizado a los espacios deportivos de la FIGMM.",
        integrantes: [
          {
            nombre: "Anthony Aliaga",
            cargo: "Secretaría de Deportes",
            imagen: "imagenes/directiva/anthony-aliaga-canva.png",
            formatoImagen: "retrato",
            zoomFoto: 155,
          },
          {
            nombre: "Diego Reyes",
            cargo: "Secretaría de Deportes",
            imagen: "imagenes/directiva/diego-reyes-recorte.png",
            formatoImagen: "retrato",
            zoomFoto: 90,
          },
        ],
      },
      {
        nombre: "Secretaría de Organización",
        descripcion:
          "Coordina el calendario, el archivo institucional y el seguimiento interno de actividades.",
        integrantes: [
          {
            nombre: "Dayana Alvarez",
            cargo: "Secretaría de Organización",
            imagen: "imagenes/directiva/dayana-alvarez-canva.png",
            formatoImagen: "retrato",
            zoomFoto: 140,
          },
          {
            nombre: "Marco Venturo",
            cargo: "Secretaría de Organización",
            imagen: "imagenes/directiva/marco-venturo-canva.webp",
            formatoImagen: "retrato",
            zoomFoto: 175,
          },
        ],
      },
      {
        nombre: "Secretaría de Cultura",
        descripcion:
          "Impulsa experiencias culturales, visitas, concursos e integración con otras comunidades universitarias.",
        integrantes: [
          {
            nombre: "Sandy Laveriano",
            cargo: "Secretaría de Cultura",
            imagen: "imagenes/directiva/sandy-laveriano-canva.webp",
            formatoImagen: "retrato",
            zoomFoto: 145,
          },
          {
            nombre: "Leydi Cornejo",
            cargo: "Secretaría de Cultura",
            imagen: "imagenes/directiva/leydi-cornejo-canva.png",
            formatoImagen: "retrato",
            zoomFoto: 145,
          },
        ],
      },
      {
        nombre: "Secretaría de Investigación",
        descripcion:
          "Fortalece la investigación estudiantil mediante redes, talleres, divulgación y repositorios de proyectos.",
        integrantes: [
          {
            nombre: "Karen Perez",
            cargo: "Secretaría de Investigación",
            imagen: "imagenes/directiva/karen-perez-recorte.png",
            formatoImagen: "retrato",
            zoomFoto: 90,
          },
          {
            nombre: "Mirko Puente",
            cargo: "Secretaría de Investigación",
            imagen: "imagenes/directiva/mirko-puente-canva.png",
            formatoImagen: "retrato",
            zoomFoto: 180,
          },
        ],
      },
      {
        nombre: "Secretaría de Prensa",
        descripcion:
          "Comunica acuerdos, actividades y logros de la comunidad estudiantil de forma clara y constante.",
        integrantes: [
          {
            nombre: "Katia Ruiz",
            cargo: "Secretaría de Prensa",
            imagen: "imagenes/directiva/katia-ruiz-canva.webp",
            formatoImagen: "retrato",
            zoomFoto: 130,
          },
          {
            nombre: "Madely Flores",
            cargo: "Secretaría de Prensa",
            imagen: "imagenes/directiva/madely-flores-recorte.png",
            formatoImagen: "retrato",
            zoomFoto: 175,
          },
        ],
      },
      {
        nombre: "Secretaría de Relaciones",
        descripcion:
          "Conecta a los estudiantes con egresados, especialistas y oportunidades de desarrollo profesional.",
        integrantes: [
          {
            nombre: "Leydy Crisologo",
            cargo: "Secretaría de Relaciones",
            imagen: "imagenes/directiva/leydy-crisologo-canva.webp",
            formatoImagen: "retrato",
            zoomFoto: 150,
          },
          {
            nombre: "Dario Vidal",
            cargo: "Secretaría de Relaciones",
            imagen: "imagenes/directiva/dario-vidal-canva.png",
            formatoImagen: "retrato",
            zoomFoto: 150,
          },
        ],
      },
      {
        nombre: "Secretaría Académica",
        descripcion:
          "Organiza asesorías, recursos académicos y oportunidades formativas para los estudiantes.",
        integrantes: [
          {
            nombre: "Adeli Ricra",
            cargo: "Secretaría Académica",
            imagen: "imagenes/directiva/adeli-ricra-canva.webp",
            formatoImagen: "retrato",
            zoomFoto: 250,
          },
          {
            nombre: "Valeria Camara",
            cargo: "Secretaría Académica",
            imagen: "imagenes/directiva/valeria-camara-canva.webp",
            formatoImagen: "retrato",
            zoomFoto: 225,
          },
        ],
      },
      {
        nombre: "Secretaría de Logística",
        descripcion:
          "Brinda soporte a las actividades y promueve el orden de equipos, materiales y espacios comunes.",
        integrantes: [
          {
            nombre: "Dennis Zuasnabar",
            cargo: "Secretaría de Logística",
            imagen: "imagenes/directiva/dennis-zuasnabar-canva.webp",
            formatoImagen: "retrato",
            zoomFoto: 150,
          },
        ],
      },
      {
        nombre: "Secretaría de Economía",
        descripcion:
          "Planifica y administra los recursos del CEIGMM con responsabilidad y transparencia.",
        integrantes: [
          {
            nombre: "Arturo Reyes",
            cargo: "Secretaría de Economía",
            imagen: "imagenes/directiva/arturo-reyes-canva.webp",
            formatoImagen: "retrato",
            zoomFoto: 145,
          },
          {
            nombre: "Diego Camani",
            cargo: "Secretaría de Economía",
            imagen: "imagenes/directiva/diego-camani-canva.png",
            formatoImagen: "retrato",
            zoomFoto: 120,
          },
        ],
      },
      {
        nombre: "Apoyos",
        descripcion:
          "Colaboran con la directiva y brindan soporte a las actividades del CEIGMM.",
        integrantes: [
          {
            nombre: "Jean Alvites",
            cargo: "Apoyo a la Directiva",
            imagen: "imagenes/directiva/jean-alvites-recorte.png",
            formatoImagen: "retrato",
            zoomFoto: 90,
          },
          {
            nombre: "Cristhian Olivares",
            cargo: "Apoyo a la Directiva",
            imagen: "imagenes/directiva/cristhian-olivares-canva.webp",
            formatoImagen: "retrato",
            zoomFoto: 135,
          },
        ],
      },
    ],
  },

  biblioteca: {
    etiqueta: "Biblioteca académica",
    titulo: "El Drive del CEIGMM, ordenado para encontrar lo que necesitas.",
    texto:
      "Consulta nuestra colección colaborativa de planchas, exámenes, prácticas y materiales de apoyo académico recopilados por estudiantes de la FIGMM.",
    boton: "Abrir el Drive académico",
    enlace: "https://drive.google.com/drive/u/0/folders/1L1UgYFYMwmiXcXQTshYC32yW6SZh9Wwv",
    estado: "Repositorio en crecimiento",
    nota:
      "El material se comparte como apoyo académico. Cada estudiante es responsable de utilizarlo de manera ética y respetar la autoría de los documentos.",
    escuelas: [
      {
        numero: "01",
        nombre: "Ingeniería Geológica",
        detalle: "Cursos y evaluaciones organizados del 1.er al 10.º ciclo.",
      },
      {
        numero: "02",
        nombre: "Ingeniería de Minas",
        detalle: "Cursos y evaluaciones organizados del 1.er al 10.º ciclo.",
      },
      {
        numero: "03",
        nombre: "Ingeniería Metalúrgica",
        detalle: "Cursos y evaluaciones organizados del 1.er al 10.º ciclo.",
      },
    ],
  },

  contacto: {
    etiqueta: "Estamos para escucharte",
    titulo: "Conversemos.",
    texto:
      "Envíanos tus consultas, sugerencias o propuestas. Déjanos tus datos y el equipo del CEIGMM se pondrá en contacto contigo.",
    correo: "ceigmm@uni.edu.pe",
    correoEtiqueta: "Correo institucional",
    formulario: {
      etiqueta: "Formulario de contacto",
      titulo: "Envíanos tu consulta o sugerencia",
      boton: "Enviar",
      modo: "google",
      destino:
        "https://docs.google.com/forms/d/e/1FAIpQLSfA2ocx0ppr0GvTOuN2u58oPN4iVWB6R3v19HvBfauj0ExeRg/formResponse",
      campos: {
        nombre: "entry.884915814",
        correo: "entry.1324010699",
        telefono: "entry.923469965",
        motivo: "entry.774967192",
        mensaje: "entry.237830205",
      },
      estado:
        "Tu mensaje se guardará de forma privada en la cuenta del CEIGMM.",
      confirmacion:
        "¡Gracias! Tu mensaje fue enviado al CEIGMM. Nuestro equipo lo revisará para responderte lo antes posible.",
    },
    redes: [
      {
        nombre: "Facebook",
        icono: "facebook",
        enlace: "https://www.facebook.com/423691981158949",
        estilo: "claro",
      },
      {
        nombre: "Instagram",
        icono: "instagram",
        enlace: "https://www.instagram.com/ceigmm/",
        estilo: "contorno",
      },
      {
        nombre: "TikTok",
        icono: "tiktok",
        enlace: "https://www.tiktok.com/@ceigmm_2026",
        estilo: "contorno",
      },
      {
        nombre: "LinkedIn",
        icono: "linkedin",
        enlace: "https://www.linkedin.com/company/ceigmm/",
        estilo: "contorno",
      },
    ],
  },
};
