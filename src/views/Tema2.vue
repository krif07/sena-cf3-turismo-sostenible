<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2.	Diferencias entre paquetes turísticos convencionales y comunitarios
        
    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
      p Los paquetes turísticos pueden clasificarse según su enfoque, su forma de gestión y el tipo de experiencia que ofrecen al visitante. Entre las modalidades más representativas se encuentran los paquetes convencionales y los paquetes comunitarios, los cuales difieren en su propósito, estructura y relación con el entorno local.
      p De acuerdo con la Organización Mundial del Turismo (OMT, 2019), el turismo sostenible busca satisfacer las necesidades de los visitantes, de la industria y de las comunidades anfitrionas, protegiendo al mismo tiempo las oportunidades para el futuro. 
      p Desde esta perspectiva, los paquetes comunitarios surgen como una alternativa responsable frente a los modelos convencionales, al promover la participación activa de las comunidades locales en la planificación, gestión y distribución de los beneficios del turismo.

    br
    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      h3 Paquete turístico convencional
      p Este tipo de paquete es diseñado y comercializado principalmente por agencias de viajes o tour operadores. A continuación se explican los aspectos más relevantes de este:
    
    .tarjeta.tarjeta--azul.p-4.pt-3.tarjeta-slyder-tipo-a-b(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-1
          .col-md-6.mb-4.mb-md-0
            h2.color-adicional-4 Su objetivo es ofrecer una experiencia integral al turista, con servicios estandarizados que incluyen transporte, alojamiento, alimentación y actividades.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema2/tema2-slyder1-img1.svg', alt='Slide 1')
        .row.justify-content-center.align-items-center.my-1
          .col-md-6.mb-4.mb-md-0
            h2.color-adicional-4 Generalmente, la interacción con la comunidad local es limitada, y la prioridad está en la comodidad, el entretenimiento y la eficiencia del servicio. Los beneficios económicos tienden a concentrarse en los intermediarios o empresas operadoras.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema2/tema2-slyder1-img2.svg', alt='Slide 2')
        .row.justify-content-center.align-items-center.my-1
          .col-md-6.mb-4.mb-md-0
            h2.color-adicional-4 Las características principales de este son:
            h4.color-adicional-4 Organización centralizada por empresas turísticas.
            h4.color-adicional-4 Enfoque comercial y competitivo.
            h4.color-adicional-4 Experiencias estructuradas, con poca flexibilidad.
            h4.color-adicional-4 Escasa participación directa de la comunidad local.
            h4.color-adicional-4 Beneficios económicos concentrados en el sector privado.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema2/tema2-slyder1-img3.svg', alt='Slide 3')

    br
    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      h3 Paquete turístico convencional
      p El paquete comunitario es diseñado, gestionado y ofrecido por miembros de una comunidad local, quienes se convierten en protagonistas de la experiencia turística. A continuación se explican los aspectos más importantes de este:
    
    .tarjeta.tarjeta--azul.p-4.pt-3.tarjeta-slyder-tipo-a-b(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-1
          .col-md-6.mb-4.mb-md-0
            h2.color-adicional-4 Este modelo busca fortalecer la identidad cultural, conservar los recursos naturales y garantizar una distribución equitativa de los ingresos generados por la actividad turística.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema2/tema2-slyder1-img1.svg', alt='Slide 1')
        .row.justify-content-center.align-items-center.my-1
          .col-md-6.mb-4.mb-md-0
            h2.color-adicional-4 En este tipo de paquetes turísticos se promueven la transmisión de saberes, tradiciones y cosmovisiones, fortaleciendo el respeto por la diversidad cultural del territorio. Los actores centrales de la experiencia son las comunidades étnicas del país, como los pueblos indígenas, el pueblo Rrom (gitano) y las comunidades raizales.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema2/tema2-slyder1-img2.svg', alt='Slide 2')
        .row.justify-content-center.align-items-center.my-1
          .col-md-6.mb-4.mb-md-0
            br
            h2.color-adicional-4 Las características principales de este son:
            h4.color-adicional-4 Gestión directa por parte de la comunidad.
            h4.color-adicional-4 Integración de saberes tradicionales, costumbres y prácticas sostenibles.
            h4.color-adicional-4 Enfoque en el intercambio cultural y la autenticidad de la experiencia.
            h4.color-adicional-4 Fomento del desarrollo local y la conservación del entorno natural y cultural.
            h4.color-adicional-4 Participación activa de los visitantes en actividades comunitarias y procesos de aprendizaje cultural.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema2/tema2-slyder1-img3.svg', alt='Slide 3')

    br
    .row.justify-content-center.align-items-center.mb-2(data-aos="flip-up")
      p Algunos ejemplos de turismo comunitario en Colombia que son reconocidos mundialmente
    
    separador

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
      h3 Turismo comunitario en San Basilio de Palenque (Bolívar)

    .tarjeta(titulo="Ejemplo - 1")(data-aos="fade-left")
      .imgCont.m-auto
        .row.justify-content-center
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/tema2/tema2-puntos-calientes1.svg', alt='Texto que describa la imagen')
          
            .tarjeta.color-acento-botones.p-2(x="48%" y="47.4%" numero="")
              .h5.mb-2 
              p En el norte de Colombia, en el municipio de Mahates (departamento de Bolívar), se encuentra San Basilio de Palenque, una comunidad afrodescendiente reconocida por la UNESCO en 2005 como Obra Maestra del Patrimonio Oral e Inmaterial de la Humanidad. Este territorio conserva una profunda herencia de resistencia, libertad y preservación cultural.

            .tarjeta.color-acento-botones.p-3(x="38.3%" y="56.6%" numero="")
              .h5.mb-2 
              p Los visitantes pueden participar en recorridos guiados por los propios palenqueros, conocer la historia del primer pueblo libre de América, aprender sobre su lengua criolla, la música tradicional (como el bullerengue y los sones de palenque), y degustar platos típicos elaborados con productos locales. También se ofrecen espacios de intercambio cultural donde se comparten saberes sobre medicina tradicional, peinados simbólicos y prácticas comunitarias.

            .tarjeta.color-acento-botones.p-3(x="49%" y="56.6%" numero="")
              .h5.mb-2 
              p El modelo de turismo comunitario palenquero se orienta bajo principios de autonomía, sostenibilidad y salvaguardia del patrimonio cultural, asegurando que los beneficios económicos se distribuyan entre las familias participantes y se destinen a proyectos de educación, cultura y fortalecimiento identitario.
            
            .tarjeta.color-acento-botones.p-3(x="59%" y="56.6%" numero="")
              .h5.mb-2 
              p Ejemplo representativo: Asociación de Turismo Comunitario de San Basilio de Palenque (Asoturpalenque), reconocida por promover un turismo vivencial que pone en el centro la memoria histórica y la dignificación de la cultura afrodescendiente.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2
      
    .tarjeta(titulo="Ejemplo - 1")(data-aos="flip-up")
      .imgCont.m-auto
        .row.justify-content-center
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/tema2/tema2-puntos-calientes2.svg', alt='Texto que describa la imagen')
          
            .tarjeta.color-acento-botones.p-2(x="40.5%" y="45.5%" numero="")
              .h5.mb-2 
              p Los visitantes pueden hospedarse en rancherías administradas por familias locales, participar en talleres de tejido artesanal, conocer las narraciones orales sobre la cosmovisión Wayuu y recorrer paisajes naturales emblemáticos como Cabo de la Vela y Punta Gallinas.

            .tarjeta.color-acento-botones.p-3(x="40.5%" y="58.5%" numero="")
              .h5.mb-2 
              p El modelo turístico Wayuu se orienta bajo los principios de sostenibilidad, respeto cultural y autonomía territorial, garantizando que los benecios económicos se reinviertan en educación, servicios básicos y fortalecimiento comunitario.

            .tarjeta.color-acento-botones.p-3(x="40.5%" y="75%" numero="")
              .h5.mb-2 
              p Ejemplo representativo: Asociación Indígena de Turismo ANATAWAYUU, reconocida por promover el turismo vivencial y el intercambio intercultural con enfoque sostenible.
            
            .tarjeta.color-acento-botones.p-3(x="58.5%" y="52.6%" numero="")
              .h5.mb-2 
              p En el norte de Colombia, el pueblo Wayuu, asentado en la Alta y Media Guajira, ha desarrollado iniciativas de turismo comunitario que combinan la cultura ancestral, el arte tradicional y el conocimiento del desierto
      
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2

    .tarjeta(titulo="Ejemplo - 1")(data-aos="flip-down")
      .imgCont.m-auto
        .row.justify-content-center
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/tema2/tema2-puntos-calientes3.svg', alt='Texto que describa la imagen')
          
            .tarjeta.color-acento-botones.p-2(x="39.5%" y="45.3%" numero="")
              .h5.mb-2 
              p Los visitantes aprenden sobre los principios de equilibrio ambiental, la relación espiritual con los ecosistemas y las formas tradicionales de manejo del territorio.

            .tarjeta.color-acento-botones.p-3(x="39.5%" y="58.5%" numero="")
              .h5.mb-2 
              p El turismo aquí se concibe como una herramienta pedagógica y de sensibilización ambiental, no como un fin comercial. Por esta razón, las comunidades controlan directamente los flujos turísticos y limitan el acceso a zonas de valor espiritual, conforme a sus planes de vida y a los lineamientos del Consejo Territorial de Cabildos (CTC).

            .tarjeta.color-acento-botones.p-3(x="39.5%" y="75%" numero="")
              .h5.mb-2 
              p En la Sierra Nevada de Santa Marta, territorio sagrado de los pueblos indígenas Kogui, Arhuaco, Wiwa y Kankuamo, se desarrollan experiencias de turismo de naturaleza y espiritualidad. Los líderes y guías comunitarios organizan recorridos interpretativos por senderos ecológicos y sitios sagrados, donde se promueve el respeto por la Madre Tierra y la cosmovisión indígena.
            
            .tarjeta.color-acento-botones.p-3(x="59.5%" y="48%" numero="")
              .h5.mb-2 
              p Ejemplo representativo: Proyecto de Turismo Espiritual Kogui-Maloka, apoyado por el Ministerio de Comercio, Industria y Turismo (MinCIT) y la OMT en programas de turismo con enfoque étnico.
      
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2

    .tarjeta(titulo="Ejemplo - 1")(data-aos="flip-up")
      .imgCont.m-auto
        .row.justify-content-center
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/tema2/tema2-puntos-calientes4.svg', alt='Texto que describa la imagen')
          
            .tarjeta.color-acento-botones.p-2(x="42%" y="44%" numero="")
              .h5.mb-2 
              p Estas iniciativas buscan preservar los ecosistemas costeros, generar ingresos dignos y reafirmar la identidad afrocolombiana. Además, fortalecen el liderazgo de mujeres y jóvenes, quienes participan activamente en la operación turística y en la educación ambiental de los visitantes.

            .tarjeta.color-acento-botones.p-3(x="42%" y="60%" numero="")
              .h5.mb-2 
              p El turismo aquí se concibe como una herramienta pedagógica y de sensibilización ambiental, no como un fin comercial. Por esta razón, las comunidades controlan directamente los flujos turísticos y limitan el acceso a zonas de valor espiritual, conforme a sus planes de vida y a los lineamientos del Consejo Territorial de Cabildos (CTC).

            .tarjeta.color-acento-botones.p-3(x="60.4%" y="82.5%" numero="")
              .h5.mb-2 
              p En el Pacífico colombiano, las comunidades afrodescendientes han desarrollado modelos de turismo comunitario sostenible basados en el ecoturismo, la gastronomía tradicional y la música del litoral. Destinos como Nuquí, Bahía Solano y Guapi ofrecen experiencias que incluyen avistamiento de ballenas jorobadas, cocina tradicional con productos del mar y del manglar, y presentaciones de currulao y alabaos, expresiones declaradas Patrimonio Cultural Inmaterial de la Nación.
            
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2

    p
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      p Estos cuatro casos demuestran los efectos del turismo comunitario y étnico en Colombia y su importancia para el crecimiento del país debido a que: 
      p
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta.v--green
            span 
          span.letra-color-acento Promueven la conservación ambiental y la valorización del patrimonio cultural inmaterial.
        li 
          .lista-ol--cuadro__vineta.v--green
            span  
          span.letra-color-acento Fortalecen la gobernanza local y la autonomía de las comunidades anfitrionas
        li 
          .lista-ol--cuadro__vineta.v--green
            span  
          span.letra-color-acento Generan beneficios económicos equitativos y procesos educativos interculturales.
        li 
          .lista-ol--cuadro__vineta.v--green
            span  
          span.letra-color-acento Responden a los lineamientos del turismo sostenible definidos por la OMT y la Ley 2068 de 2020, que priorizan la inclusión, la sostenibilidad y el respeto por la diversidad cultural.

    .row.justify-content-center.align-items-center.mb-2(data-aos="flip-up")
      p A diferencia de un paquete convencional, que prioriza la visita rápida y el confort, el paquete comunitario busca la inmersión cultural, el intercambio de saberes y el beneficio directo para la comunidad anfitriona.
      p A continuación, se relaciona un cuadro comparativo en el que se pueden evidenciar las diferencias más sustanciales entre los dos tipos de turismo, de acuerdo con diferentes aspectos socioambientales.

    br
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-9
        figure
          img(src='@/assets/curso/temas/tema1/tema2/tema2-tabla2.svg', alt='Texto que describa la imagen')

    br
    br
    .row.justify-content-center.align-items-center.mb-2(data-aos="flip-up")
      p El turismo convencional o tradicional responde a un modelo industrializado que prioriza la rentabilidad económica, la comodidad del visitante y el crecimiento del sector privado, con una participación limitada de las comunidades locales.
      p Por el contrario, el turismo comunitario se consolida como una alternativa sostenible e inclusiva, basada en la autogestión comunitaria, el respeto por la identidad cultural, la protección ambiental y la redistribución justa de los beneficios.
      p De acuerdo con la OMT (2019) y la Ley 2068 de 2020, este modelo contribuye a fortalecer la gobernanza local, fomentar la economía solidaria y promover un turismo responsable alineado con los Objetivos de Desarrollo Sostenible (ODS).

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
