export default {
  global: {
    Name: 'Técnicas de narrativa y expresión oral',
    Description:
      'Este componente aborda de manera integral los fundamentos y técnicas de la narración oral, explorando la adaptación de relatos, el manejo de la voz, la expresión corporal, la interacción con el público en contextos comunitarios y étnicos, así como la gestión de la retroalimentación tanto por parte del público como del operador turístico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',

        numero: '1',
        titulo: 'Fundamentos de la narración oral',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',

        numero: '1.1',
        titulo:
          'Concepto, tipos, propósitos y estilos de narración oral',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',

        numero: '1.2',
        titulo:
          'Técnicas narrativa y de expresión oral',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',

        numero: '1.3',
        titulo:
          'Lenguaje corporal y comunicación no verbal en la narración',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',

        numero: '1.4',
        titulo: 'Elementos de la cuentería y del personaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',

        numero: '1.5',
        titulo:
          'Interpretación actoral: concepto, técnicas y componentes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',

        numero: '1.6',
        titulo: 'Técnicas de expresión oral: características y componentes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',

        numero: '2',
        titulo:
          'Técnicas narrativas y adaptación de relatos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',

        numero: '2.1',
        titulo:
          'Creación y construcción de personajes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',

        numero: '2.2',
        titulo:
          'Elaboración de diálogos y uso de la improvisación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',

        numero: '2.3',
        titulo:
          'Tiempos narrativos, ritmo y fluidez en la narración',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',

        numero: '2.4',
        titulo:
          'Selección de recursos y espacios físicos para la narración',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema13',

        numero: '3',
        titulo:
          'Expresión oral, corporal y manejo de la voz',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema14',

        numero: '3.1',
        titulo:
          'Aplicación de pausas activas y manejo de gestos en la narración',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema15',

        numero: '3.2',
        titulo:
          'Regulación de la respiración y fluidez narrativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema16',

        numero: '3.3',
        titulo:
          'Alternancia de voces, emociones y tonos en los relatos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema17',

        numero: '3.4',
        titulo:
          'Normas de seguridad y salud: prevención de riesgos y autocuidado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema18',

        numero: '4',
        titulo:
          'Interacción con el público y retroalimentación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema19',

        numero: '4.1',
        titulo:
          'Estrategias de empatía e interacción con los espectadores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema20',

        numero: '4.2',
        titulo:
          'Técnicas de adaptabilidad frente a diferentes contextos e imprevistos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema21',

        numero: '4.3',
        titulo:
          'Administración del tiempo y ritmo en la narración',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema22',

        numero: '4.4',
        titulo:
          'Estrategias para recibir y dar retroalimentación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist/downloads/CF03_EstrPaqueTuris_DI_VF.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        '1.2 Técnicas narrativas y de expresión oral',
      referencia:
        'Educatina Español. (2021, 10 de julio). Tips de narración oral. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=v8vkfa0Eck8',
    },
    {
      tema:
        '1.4 Elementos de la cuentería y del persona',
      referencia:
        'HubSpot en Español. (2022, 15 de septiembre). Qué es y cómo hacer un storytelling. YouTubeco/',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=77TAn3GuKSg',
    },
    {
      tema:
        '1.6 Técnicas de expresión oral: características y componentes',
      referencia:
        'Escuela de Narradores. (2020, 22 de agosto). La narración oral para principiantes. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xO_cjQm0G8Q',
    },
    {
      tema:
        '3.1La voz: cualidades, impostación y técnicas de calentamiento vocal.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. Fundamentación en técnicas vocal (5 noviembre 2024) ',
      tipo: 'Video',
      link: 'https://youtu.be/_Zxmxkw-MWI?si=cpZjvc1ArlPS_tQh',
    },
    {
      tema:
        '3.2 Técnicas de expresión corporal y uso del espacio',
      referencia:
        'Edutin Academy. Cómo mantener la atención del público - Curso de turismo. (22 marzo 2022)',
      tipo: 'Video',
      link: 'https://youtu.be/Jy6He7DKV14?si=8LMyMLn6npoFRNGI',
    },
    {
      tema:
        '3.3 Aplicación de pausas activas y manejo de gestos en la narración',
      referencia:
        'ExpresArte mejor – Oratoria y alocución Cómo MOVER LAS MANOS al hablar. Gestos corporales de ORATORIA para hablar en público (3 de abril de 2022).',
      tipo: 'Video',
      link: 'https://youtu.be/j9NllX-KObU?si=Ik62a5IpTJIA4zLE',
    },
  ],
  glosario: [
    {
      termino: 'Narración oral',
      significado:
        'Arte de contar historias de forma hablada, integrando voz, gestos y emoción para comunicar un mensaje o tradición.',
    },
    {
      termino: 'Guion narrativo',
      significado:
        'Estructura escrita o plan que guía el desarrollo de una narración, indicando el orden de los hechos, diálogos y acciones.',
    },
    {
      termino: 'Personaje',
      significado:
        'Figura humana, animal o simbólica que cumple un papel dentro del relato y contribuye al desarrollo de la historia.',
    },
    {
      termino: 'Improvisación',
      significado:
        'Técnica que permite crear o adaptar una historia en el momento, con espontaneidad y creatividad, según el público y el contexto.',
    },
    {
      termino: 'Tiempos narrativos',
      significado:
        'Momentos y ritmo con los que se organiza el relato; puede incluir tiempos pasados, presentes o futuros dentro de la historia.',
    },
    {
      termino: 'Expresión oral',
      significado:
        'Conjunto de habilidades que permiten comunicar mensajes de forma clara, fluida y emocional a través de la voz y el lenguaje corporal.',
    },
    { 
      termino: 'Lenguaje corporal',
      significado:
        'Comunicación no verbal que se expresa mediante movimientos, gestos, posturas y expresiones faciales.',
    },
    { 
      termino: 'Cuentería',
      significado:
        'Práctica artística y cultural de narrar cuentos en espacios públicos o comunitarios, conservando la tradición oral.',
    },
    { 
      termino: 'Interpretación actoral',
      significado:
        'Proceso mediante el cual una persona da vida a un personaje a través del cuerpo, la voz y la emoción.',
    },
    { 
      termino: 'Diálogo',
      significado:
        'Intercambio verbal entre personajes que aporta dinamismo, realismo y profundidad a la narración.',
    },
    { 
      termino: 'Espacio narrativo',
      significado:
        'Escenario físico o simbólico donde ocurre la historia; puede ser realista, mítico o imaginario.',
    },
    { 
      termino: 'Recursos escénicos',
      significado:
        'Elementos visuales, sonoros o materiales que complementan la narración oral, como luces, vestuario, música o espacios físicos.',
    },
    { 
      termino: 'Ritmo narrativo',
      significado:
        'Velocidad y fluidez con la que se desarrollan los acontecimientos en un relato, influyendo en la atención del público.',
    },
    { 
      termino: 'Adaptabilidad cultural',
      significado:
        'Capacidad profesional para ajustar las técnicas narrativas a los protocolos, ritmos y estructuras comunicativas específicas de cada comunidad étnica, garantizando el respeto a sus tradiciones orales.',
    },
    { 
      termino: 'Curva de interés',
      significado:
        'Herramienta narrativa que alterna estratégicamente momentos de alta energía con fases de reflexión, modulando la velocidad discursiva para mantener la atención del público en contextos turísticos.',
    },
    { 
      termino: 'Énfasis narrativo',
      significado:
        'Técnica vocal y corporal para resaltar palabras o ideas culturalmente significativas dentro del relato, mediante variaciones tonales, intensidad sonora o pausas activas.',
    },
    { 
      termino: 'Empatía intercultural',
      significado:
        'Habilidad para sintonizar con las dimensiones emocionales y cognitivas de públicos culturalmente diversos, interpretando adecuadamente sus reacciones y respuestas.',
    },
    { 
      termino: 'Impostación vocal',
      significado:
        'Técnica profesional de colocación de la voz en los resonadores faciales para lograr proyección y claridad, avalada por estándares de salud ocupacional y saberes ancestrales.',
    },
    { 
      termino: 'Improvisación guiada',
      significado:
        'Estrategia narrativa basada en estructuras sólidas que permite adaptar la presentación a imprevistos técnicos o logísticos sin pérdida de coherencia en la experiencia turística.',
    },
    { 
      termino: 'Turismo étnico sostenible',
      significado:
        'Modalidad turística que promueve la preservación del patrimonio cultural inmaterial, el respeto a los protocolos comunitarios y la distribución equitativa de beneficios, según la Política de Turismo Sostenible (MINCIT, 2022).',
    },
  ],
  referencias: [
    {
    referencia:
      'Bal, M. (1997). Narratology: Introduction to the Theory of Narrative (2.ª ed.). University of Toronto Press.',
    },
    {
      referencia:
        'Bal, M. (2009). Narratology: Introduction to the Theory of Narrative (3.ª ed.). University of Toronto Press.',
    },
    {
      referencia:
        'Barba-Téllez, M. N. (2013). La narración oral como acto de comunicación. Didasc@lia: Didáctica y Educación. Disponible en https://www.researchgate.net/publication/350621648_LA_NARRACION_ORAL_COMO_ACTO_DE_COMUNICACION',
    },
    {
      referencia:
        'Cassany, D. (2006). Construir la escritura. Barcelona: Paidós.',
    },
    {
      referencia:
        'Colino Rodríguez, M. (2017). Storytelling: el poder de las historias. Usos contemporáneos de la narración oral. Universidad Complutense de Madrid.',
    },
    {
      referencia:
        'Cruz, D. (2020). Expresión oral: una problemática por abordar. Sciéndo, 23(4), 293–298. URL: https://revistas.unitru.edu.pe/index.php/SCIENDO/article/view/3202/pdf',
    },
    {
      referencia:
        'Denning, S. (2011). The Leader’s Guide to Storytelling: Mastering the Art and Discipline of Business Narrative (2ª ed.). Jossey-Bass/Wiley.',
    },
    {
      referencia:
        'Field, S. (2005). El manual del guionista: Cómo escribir guiones de cine y televisión. Barcelona: Plot Ediciones.',
    },
    {
      referencia:
        'Forster, E. M. (2002). Aspectos de la novela. México: Fondo de Cultura Económica.',
    },
    {
      referencia:
        'García, N. (2025). Técnicas de expresión oral desde un enfoque comunicativo. European Public & Social Innovation Review, 10(1), 1–14. https://www.studocu.com/pe/document/universidad-nacional-de-tumbes/anatomia-humana-i/1415-lastecnicasdeexpresionoraldesdeuncontextocomunicativo/14002289',
    },
    {
      referencia:
        'Genette, G. (1972). Figures III: Discours du récit. Éditions du Seuil.',
    },
    {
      referencia:
        'Genette, G. (1989). Figuras III: Discurso del relato. Barcelona: Editorial Lumen.',
    },
    {
      referencia:
        'Hall, E. T. (1976). La dimensión oculta. México: Siglo XXI Editores.',
    },
    {
      referencia:
        'Instituto Colombiano de Antropología e Historia – ICANH. (2022). Lineamientos para el trabajo con comunidades étnicas en proyectos culturales. https://www.icanh.gov.co',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo – MINCIT. (2022). Política de Turismo Sostenible de Colombia. https://www.mincit.gov.co',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2023). NTC 6725-2023 Destinos y áreas turísticas – Requisitos de sostenibilidad. Bogotá, Colombia. Recuperado de https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-colombianas-y-guia/ntc-6725-2023-destinos-y-areas-turisticas-requisitos-de-sostenibilidad',
    },
    {
      referencia:
        'Ministerio de Cultura. (2010). Documento PES: Saberes y tradiciones del viche. Ministerio de Cultura de Colombia. https://www.mincultura.gov.co/direcciones/patrimonio-y-memoria/Documents/Documento-PES-Saberes-tradiciones-viche.pdf',
    },
    {
      referencia:
        'Moreno Blanco, J. (2011). Narrativas de la oralidad cultural en el contexto colombiano: Una introducción. Programa Editorial Universidad del Valle. https://programaeditorial.univalle.edu.co/gpd-narrativas-de-oralidad-cultural-en-el-contexto-colombiano-una-introduccion-9789586709415-633248cd03355.html',
    },
    {
      referencia:
        'Organización Mundial del Turismo. (2019). New publications January 2019. UNWTO. https://www.e-unwto.org/pb-assets/9789284420483.pdf',
    },
    {
      referencia:
        'Organización Mundial del Turismo (OMT). (2022). Turismo sostenible y comunidades locales. Madrid: OMT.',
    },
    {
      referencia:
        'Pérez López, H. J. (2015). Los tres cuerpos de la narración: una poética cognitivista de la interpretación actoral. Revista Athalante.',
    },
    {
      referencia:
        'Seger, L. (2003). Making a Good Script Great (2.ª ed.). Los Ángeles, CA: Samuel French.',
    },
    {
      referencia:
        'Spolin, V. (1999). Improvisation for the Theater (3.ª ed.). Evanston, IL: Northwestern University Press.',
    },
    {
      referencia:
        'UNESCO. (2003). Convention for the Safeguarding of the Intangible Cultural Heritage. https://ich.unesco.org/doc/src/32697-EN.pdf',
    },
    {
      referencia:
        'Zúñiga, G. F. (2013). Manual de creación de personajes. Universidad Autónoma de Bucaramanga (UNAB). https://repository.unab.edu.co/handle/20.500.12749/979',
    },
  ],
  creditos: [
    {
      titulo: 'VIRTUALIZACIÓN DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Valencia Pimienta',
          cargo: 'Jefe de formación profesiona',
          centro: 'AHK Colombia',
        },
        {
          nombre: 'Edgar Gómez Rodríguez',
          cargo: 'Coordinador general',
          centro: 'AHK Colombia',
        },
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema SENA',
          centro: 'Dirección General - SENA',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Cristina Jaqueline Enríquez Jaimes',
          cargo: 'Experta técnica en turismo',
          centro: 'AHK Colombia',
        },
        {
          nombre: 'Esteban Carlos Jordan Malafalla',
          cargo: 'Experta técnica en turismo',
          centro: 'AHK Colombia',
        },
        {
          nombre: 'José Adolfo Copete Restrepo',
          cargo: 'Experto en comunidades étnicas',
          centro: 'AHK Colombia',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Diseñadora Instruccional',
          centro: 'AHK Colombia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge Mario Ríos Galvis',
          cargo: 'Diseñador crossmedia',
          centro: 'AHK Colombia',
        },
        {
          nombre: 'Cristian Fernando Dávila López',
          cargo: 'Desarrollador web <i>full stack</i>',
          centro: 'AHK Colombia',
        },
        {
          nombre: 'Sandra Milena Henao Melchor',
          cargo: 'Editor de campo para contenidos étnicos y comunitarios',
          centro: 'AHK Colombia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Tatiana Martínez',
          cargo: 'Supervisora de calidad en producción de recursos educativos digitales',
          centro: 'AHK Colombia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
