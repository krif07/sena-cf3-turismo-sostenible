export default {
  global: {
    Name: 'Turismo sostenible y comunidades étnicas',
    Description:
      'Este componente formativo aborda la relación entre turismo sostenible y comunidades étnicas en Colombia, resaltando la importancia de la diversidad cultural y natural. Incluye normatividad, derechos territoriales, criterios de sostenibilidad y conservación del patrimonio, brindando herramientas para diseñar experiencias turísticas responsables que promuevan el respeto, la inclusión y el desarrollo de las comunidades anfitrionas.',
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
        titulo: 'Turismo sostenible y comunidades étnicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación y distribución de comunidades étnicas',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',

        numero: '1.2',
        titulo:
          'Diferencias entre paquetes turísticos convencionales y comunitarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',

        numero: '1.3',
        titulo:
          'Normativa turística y protocolos de seguridad, bioseguridad y gestión de riesgos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',

        numero: '1.4',
        titulo:
          'Condiciones operativas y de mercado: infraestructura, proveedores y tendencias turísticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',

        numero: '1.5',
        titulo: 'Estrategias de fijación de precios y análisis de costos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',

        numero: '1.6',
        titulo:
          'Principios de turismo responsable: comercio justo, alianzas comunitarias y uso equitativo de recursos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',

        numero: '2',
        titulo: 'Logística de itinerarios turísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Planificación de itinerarios: tiempos, actividades, traslados',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema8',

        numero: '2.2',
        titulo:
          'Capacidad de carga turística: factores físicos, sociales, psicológicos y ecológicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',

        numero: '2.3',
        titulo:
          'Accesibilidad en el turismo: gestión de contingencias, turismo inclusivo e infraestructura adaptada',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',

        numero: '2.4',
        titulo:
          'Manejo de reservas, disponibilidad de transporte y coordinación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',

        numero: '2.5',
        titulo:
          'Verificación de bioseguridad y sostenibilidad en la logística turística',
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
        download: 'downloads/dist/downloads/CF02_EstrPaqueTuris_DI_VF.pdf',
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
        '1.4 Diferencia entre atractivo y destino turístico: Atractivo turístico, destino turístico, relación entre ambos conceptos.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022, 27 septiembre). Diseño de la experiencia turística [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gdoaM7qG80s',
    },
    {
      tema:
        '1.5. Geografía turística: clima, biodiversidad, accesibilidad y conectividad',
      referencia:
        'Instituto Humboldt. (s. f.). Instituto Alexander Von Humboldt.',
      tipo: 'Página interactiva',
      link: 'https://www.humboldt.org.co/',
    },
    {
      tema:
        '1.5. Geografía turística: clima, biodiversidad, accesibilidad y conectividad',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022, 25 octubre). Geografia turistica [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aQokH-6FxOU',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad turística',
      significado:
        'Conjunto de acciones y adaptaciones físicas, comunicativas y culturales que permiten que todas las personas, incluidas aquellas con diversidad funcional, puedan disfrutar de los servicios turísticos de manera segura, autónoma y equitativa.',
    },
    {
      termino: 'Alojamiento sostenible',
      significado:
        'Establecimiento de hospedaje que aplica prácticas ambientales, socioculturales y económicas responsables para minimizar impactos negativos y maximizar beneficios locales.',
    },
    {
      termino: 'Cadena de valor',
      significado:
        'Secuencia de actividades y transacciones que conectan a los proveedores de insumos con los turistas, incluyendo la planificación del viaje, la experiencia en el destino y los servicios posteriores.',
    },
    {
      termino: 'Capacidad de carga turística',
      significado:
        'Límite máximo de visitantes que un destino puede recibir sin comprometer su sostenibilidad ambiental, cultural o la calidad de la experiencia.',
    },
    {
      termino: 'Comercio justo en turismo',
      significado:
        'Principio que promueve relaciones equitativas entre actores del sector turístico, garantizando distribución justa de ingresos, respeto laboral y valorización cultural.',
    },
    {
      termino: 'Comunidades étnicas',
      significado:
        'Grupos humanos con identidad cultural diferenciada, tradiciones, lengua y cosmovisión propias, reconocidos legalmente por el Estado colombiano.',
    },
    {
      termino: 'Cosmovisión',
      significado:
        'Conjunto de creencias, valores y sistemas de conocimiento de un pueblo indígena que explica su relación con el universo, la naturaleza, los dioses y la comunidad. Considera al ser humano como parte de un equilibrio cósmico, con profunda conexión entre espiritualidad, naturaleza y cultura.',
    },
    {
      termino: 'Gestión del riesgo turístico',
      significado:
        'Proceso de identificación, evaluación y mitigación de amenazas naturales, antrópicas o sanitarias que pueden afectar la seguridad de turistas y comunidades anfitrionas.',
    },
    {
      termino: 'Itinerario turístico',
      significado:
        'Plan organizado que detalla actividades, tiempos, traslados y servicios de un paquete turístico, diseñado para ofrecer una experiencia coherente y segura.',
    },
    {
      termino: 'Logística turística',
      significado:
        'Conjunto de procesos que garantizan la coordinación operativa de los servicios incluidos en un paquete turístico, como transporte, alojamiento y actividades.',
    },
    {
      termino: 'Normas Técnicas Sectoriales (NTS)',
      significado:
        'Estándares colombianos que establecen requisitos de calidad y sostenibilidad que deben cumplir los prestadores de servicios turísticos.',
    },
    {
      termino: 'Paquete turístico comunitario',
      significado:
        'Producto diseñado y gestionado por una comunidad local, que integra experiencias culturales, naturales y sociales con enfoque sostenible.',
    },
    {
      termino: 'Política de Turismo Sostenible',
      significado:
        'Estrategia nacional que orienta el desarrollo del turismo colombiano hacia la sostenibilidad ambiental, sociocultural y económica.',
    },
    {
      termino: 'Proveedores turísticos',
      significado:
        'Empresas o personas que ofrecen servicios específicos como transporte, alimentación, alojamiento o guianza dentro de un paquete turístico.',
    },
    {
      termino: 'Registro Nacional de Turismo (RNT)',
      significado:
        'Inscripción obligatoria para todos los prestadores de servicios turísticos en Colombia, que garantiza formalidad y cumplimiento normativo.',
    },
    {
      termino: 'Turismo comunitario',
      significado:
        'Modalidad de turismo gestionada directamente por comunidades locales, que promueve el intercambio cultural, el desarrollo local y la conservación del entorno.',
    },
    {
      termino: 'Turismo responsable',
      significado:
        'Enfoque que busca minimizar los impactos negativos del turismo y maximizar los beneficios sociales, económicos y ambientales para las comunidades anfitrionas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (1996). Ley 300 de 1996. Ley General de Turismo. Diario Oficial de la República de Colombia.',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2011). Ley 1480 de 2011. Estatuto del Consumidor. Diario Oficial de la República de Colombia.',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). Ley 1558 de 2012. Por la cual se modifica la Ley General de Turismo. Diario Oficial de la República de Colombia.',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). Ley 1523 de 2012. Por la cual se adopta la Política Nacional de Gestión del Riesgo de Desastres y se dictan otras disposiciones. Diario Oficial de la República de Colombia.',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2020). Ley 2068 de 2020. Por la cual se modifica la Ley General de Turismo y se dictan otras disposiciones. Diario Oficial de la República de Colombia.',
    },
    {
      referencia:
        'FasterCapital. (2024). Environmental impact of air transport in tourism. Recuperado de https://www.fastercapital.com',
    },
    {
      referencia:
        'ICONTEC. (2014). Norma Técnica Sectorial NTS–TS 004: Sostenibilidad para establecimientos gastronómicos. Instituto Colombiano de Normas Técnicas y Certificación.',
    },
    {
      referencia:
        'ICONTEC. (2014). Norma Técnica Sectorial NTS–TS 005: Sostenibilidad para empresas de transporte turístico. Instituto Colombiano de Normas Técnicas y Certificación.',
    },
    {
      referencia:
        'ICONTEC. (2014). Norma Técnica Colombiana NTC 6505: Sistema de gestión de sostenibilidad para prestadores de servicios turísticos. Instituto Colombiano de Normas Técnicas y Certificación.',
    },
    {
      referencia:
        'ICONTEC. (2020). Normas Técnicas Sectoriales Turísticas (NTS-TS y NTSH). Instituto Colombiano de Normas Técnicas y Certificación.',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo (MINCIT). (2015). Resolución 3860 de 2015. Lineamientos para la implementación del turismo comunitario en Colombia. Bogotá: MINCIT.',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo (MINCIT). (2022). Política de turismo sostenible: Colombia, potencia mundial del turismo sostenible 2030. Bogotá: MINCIT.',
    },
    {
      referencia:
        'Ministerio de Cultura de Colombia. (2022). Lineamientos para el desarrollo del turismo cultural responsable. Bogotá: MinCultura.',
    },
    {
      referencia:
        'Ministerio de Industria, Comercio y Turismo. (2023). Turismo inclusivo y sostenible: lineamientos para la inclusión de comunidades locales. Bogotá: MINCIT.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Resolución 1111 de 2017. Estándares mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST). Bogotá: Ministerio de Salud.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social, & Ministerio de Comercio, Industria y Turismo. (2020). Resolución 666 de 2020. Protocolos de bioseguridad para el manejo y control del COVID-19 en el sector turismo. Bogotá: MinSalud.',
    },
    {
      referencia:
        'Organización Mundial del Turismo (OMT). (2018). Turismo y sostenibilidad: indicadores para la gestión de destinos. Madrid: OMT.',
    },
    {
      referencia:
        'Organización Mundial del Turismo (OMT). (2019). Turismo comunitario: guía para el desarrollo y gestión sostenible. Madrid: OMT.',
    },
    {
      referencia:
        'Organización Mundial del Turismo (OMT). (2020). Directrices para la planificación de itinerarios turísticos sostenibles. Madrid: OMT.',
    },
    {
      referencia:
        'Organización Mundial del Turismo (OMT). (2022). Turismo accesible para todos: directrices para la gestión inclusiva de destinos. Madrid: OMT.',
    },
    {
      referencia:
        'Organización Panamericana de la Salud (OPS). (2020). Guías de bioseguridad para el sector turístico post COVID-19. OPS.',
    },
    {
      referencia:
        'Ruiz, J., & López, M. (2021). Alojamiento sostenible y desarrollo comunitario: experiencias en América Latina. Revista Turismo y Sociedad, 28(2), 115–132.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
