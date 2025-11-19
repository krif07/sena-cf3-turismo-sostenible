<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4.	Condiciones operativas y de mercado: infraestructura, proveedores y tendencias turísticas

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p El diseño y la operación de un paquete turístico no dependen únicamente de la creatividad o de la selección de atractivos, sino también de las condiciones operativas y de mercado que determinan su viabilidad técnica, económica y ambiental.
      p Estos factores incluyen la infraestructura disponible en el destino, la relación con los proveedores de servicios turísticos y la comprensión de las tendencias actuales del turismo.
      p Conocer y gestionar estos elementos permite crear productos competitivos, sostenibles y coherentes con las expectativas de los viajeros y con las condiciones del territorio.

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      h3 Infraestructura turística 
      p La infraestructura turística comprende el conjunto de obras, instalaciones y servicios básicos que facilitan la llegada, permanencia y movilidad de los turistas en un destino.
      p Constituye un pilar esencial para la operación eficiente de los paquetes turísticos, ya que de su calidad y funcionalidad depende la experiencia integral del visitante y la competitividad del destino.
      p Los principales componentes a tener en cuenta en cuestión de infraestructura son:

    br
    p
    .row.justify-content-center(data-aos="fade-down")
      .col-sm-6.col-lg-9.col-xl-3.mb-3.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema4/tema4-tar-anim1.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3 Infraestructura de acceso:
              p 
              p vías terrestres, aeropuertos, puertos y estaciones que conectan los destinos turísticos con los centros emisores de visitantes.

      .col-sm-6.col-lg-9.col-xl-3.mb-3.mb-xl-0(data-aos="fade-right")
        .tarjeta.tarjeta-slide.abajo.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema4/tema4-tar-anim2.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3 Infraestructura de alojamiento: 
              p 
              p hoteles, hostales, fincas turísticas, ecoalbergues, glampings y otros espacios que ofrecen hospedaje confortable, seguro y sostenible.

      .col-sm-6.col-xl-3.mb-3.mb-xl-0(data-aos="fade-left")
        .tarjeta.tarjeta-slide.derecha.color-acento-botones(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema4/tema4-tar-anim3.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3 Infraestructura de servicios complementarios: 
              p 
              p restaurantes, centros de información turística, señalización, servicios de salud, telecomunicaciones, cajeros automáticos, entre otros

      .col-sm-6.col-xl-3.mb-3.mb-sm-0(data-aos="flip-up")
        .tarjeta.tarjeta-slide.izquierda.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema4/tema4-tar-anim4.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3 Infraestructura de recreación y cultura:
              p
              p parques naturales, museos, teatros, centros de convenciones, malecones turísticos, senderos ecológicos y zonas culturales habilitadas para la visita.
   
    br
    row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p Un destino con infraestructura sólida y planificada ofrece mejores condiciones logísticas, reduce los tiempos de desplazamiento y aumenta la satisfacción del visitante.
      p Sin embargo, su desarrollo debe realizarse bajo criterios de sostenibilidad, evitando la sobreexplotación de recursos naturales, la fragmentación del paisaje o la pérdida de dentidad cultural local.
      p En territorios étnicos y comunitarios, la infraestructura turística debe adaptarse a las condiciones geográficas, ambientales y socioculturales del lugar.
      p Esto implica priorizar:

    br
    .pb-3(data-aos="fade-left")
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5
        
        .row.mb-8.justify-content-center
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-primario.p-5
              .tarjeta-numerada__numero
                .h2 1
              p El uso de materiales locales y técnicas constructivas tradicionales.

          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-secundario.p-5
              .tarjeta-numerada__numero
                .h2 2
              p La armonía con el entorno natural y paisajístico.
              br
              br

          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 3
              p La participación comunitaria en el diseño y mantenimiento de la infraestructura.

          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-botones.p-5
              .tarjeta-numerada__numero
                .h2 4
              p La accesibilidad universal, garantizando la inclusión de todos los visitantes.

    br
    row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p La Política de Turismo Sostenible (MinCIT, 2020) y la NTS–TS 001 recomiendan implementar criterios de sostenibilidad ambiental y cultural en la planificación de infraestructuras, de modo que cada obra o instalación contribuya a la preservación del territorio y al fortalecimiento del tejido social.
      
    p
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      p Una infraestructura bien gestionada:
      p
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta.v--green
            span 
          span.letra-color-acento Optimiza la operación logística del paquete turístico.
        li 
          .lista-ol--cuadro__vineta.v--green
            span  
          span.letra-color-acento Facilita la diversificación de la oferta (cultural, de naturaleza, comunitaria, de aventura).
        li 
          .lista-ol--cuadro__vineta.v--green
            span  
          span.letra-color-acento Contribuye al desarrollo regional y local mediante la generación de empleo y servicios asociados.
        li 
          .lista-ol--cuadro__vineta.v--green
            span  
          span.letra-color-acento Fortalece la imagen del destino y su posicionamiento en el mercado nacional e internacional.

    br
    row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p Por tanto, la infraestructura no debe entenderse solo como una obra física, sino como un sistema integral que articula la movilidad, la hospitalidad, la sostenibilidad y la experiencia turística.
      br
      h3 Proveedores de servicios turísticos 
      p Los proveedores de servicios turísticos son aliados estratégicos en la ejecución de los paquetes turísticos, ya que garantizan la prestación eficiente y segura de los servicios incluidos: transporte, alojamiento, alimentación, guianza y actividades.

    row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      p La relación con ellos debe basarse en la confianza, la formalidad, la calidad del servicio y el cumplimiento normativo, fortaleciendo así la cadena de valor del turismo y la reputación del operador.
      p Entre los tipos de proveedores más comunes se encuentran:

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-11
        figure
          img(src='@/assets/curso/temas/tema1/tema4/tema4-tarj-conn-completa.svg', alt='Texto que describa la imagen')
    
    br
    br
    row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      p Los criterios que se deben tener en cuenta para la selección de proveedores son los que se indican a continuación:
    
    br    
    .row.justify-content-center(data-aos="fade-right")
      .col-md-10.mb-4
        LineaTiempoD.letra-acordeon-titulos
          .row(numero="1" titulo="Registro y cumplimiento normativo")
                
            .col-md-9.mb-4.mb-md-0
              br
              p Verificar que el proveedor esté formalmente inscrito en el Registro Nacional de Turismo (RNT) y cumpla con las normas vigentes del sector, garantizando legalidad, transparencia y responsabilidad social.
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema1/tema4/tema4-paso-vertical-img1.svg', alt='Texto que describa la imagen')

          .row(numero="2" titulo="Certificaciones de calidad o sostenibilidad")
                
            .col-md-9.mb-4.mb-md-0
              br
              p Evaluar si cuenta con sellos o certificaciones reconocidas (como NTS, NTC 6505, Sello de Calidad Turística Colombiana o certificaciones internacionales de sostenibilidad) que respalden su compromiso con la mejora continua y la sostenibilidad ambiental y sociocultural.
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema1/tema4/tema4-paso-vertical-img2.svg', alt='Texto que describa la imagen')
          
          .row(numero="3" titulo="Capacidad operativa y experiencia en el destino")
                
            .col-md-9.mb-4.mb-md-0
              br
              p Considerar la trayectoria, el conocimiento del entorno local, la disponibilidad logística y la formación del personal, priorizando a quienes implementen protocolos de seguridad, bioseguridad y atención al visitante.
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema1/tema4/tema4-paso-vertical-img3.svg', alt='Texto que describa la imagen')
          
          .row(numero="4" titulo="Tarifas competitivas y políticas claras de contratación")
                
            .col-md-9.mb-4.mb-md-0
              br
              p Analizar los costos en relación con la calidad del servicio, verificando condiciones de pago, reembolsos o modificaciones, para asegurar equilibrio contractual y transparencia comercial.
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema1/tema4/tema4-paso-vertical-img4.svg', alt='Texto que describa la imagen')

          .row(numero="5" titulo="Seguridad y atención al cliente")
                
            .col-md-9.mb-4.mb-md-0
              br
              p Comprobar que el proveedor aplique protocolos de gestión del riesgo, bioseguridad y atención responsable, conforme a la Ley 1523 de 2012 y la Resolución 666 de 2020, garantizando una experiencia ética, confiable y orientada al bienestar del turista.
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema1/tema4/tema4-paso-vertical-img5.svg', alt='Texto que describa la imagen')

    br
    row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      p El trabajo colaborativo con proveedores locales fortalece la economía del territorio y promueve la equidad en la cadena de valor turística.
      p En los contextos étnicos y comunitarios, esta cooperación aporta valor a la experiencia en la que se pueden destacar los siguientes aspectos:  
      br
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta.v--green
            span 
          span.letra-color-acento Revaloriza los saberes ancestrales y las tradiciones culturales.
        li 
          .lista-ol--cuadro__vineta.v--green
            span  
          span.letra-color-acento Diversifica la oferta turística con productos auténticos y sostenibles.
        li 
          .lista-ol--cuadro__vineta.v--green
            span  
          span.letra-color-acento Distribuye equitativamente los beneficios económicos entre los actores locales.
        li 
          .lista-ol--cuadro__vineta.v--green
            span  
          span.letra-color-acento Potencia la participación comunitaria en la planificación y gestión del turismo.
      
      br
      p De esta manera, la selección responsable de proveedores no solo responde a criterios de eficiencia y calidad, sino también a principios de justicia económica, respeto cultural y sostenibilidad ambiental.

  
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-left")
      h3 Tendencias turísticas del mercado actual 
      p El mercado turístico es dinámico y cambiante, influenciado por factores sociales, tecnológicos, económicos y ambientales. Comprender sus tendencias permite a los operadores turísticos diseñar paquetes actualizados, atractivos y sostenibles, que respondan a las nuevas motivaciones del viajero contemporáneo y a las demandas de un turismo responsable.
      p
      p A continuación se detallas las principales tendencias actuales:

    br
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul acordeonA")(data-aos="flip-left")
      .row(titulo="Turismo sostenible y responsable").letra-acordeon-titulos
        .col-1
        .col-md-8.mb-4.mb-md-0
          p
          p Viajeros que priorizan destinos comprometidos con la conservación ambiental, la equidad social y la protección del patrimonio cultural.
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema1/tema4/tema4-acordeon1-img1.svg', alt='Texto que describa la imagen')
        .col-1

      .row(titulo="Turismo experiencial").letra-acordeon-titulos
        .col-1
        .col-md-8.mb-4.mb-md-0
          p
          p Preferencia por experiencias auténticas, personalizadas y participativas, relacionadas con la gastronomía, la cultura, la vida rural o la espiritualidad.
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema1/tema4/tema4-acordeon1-img2.svg', alt='Texto que describa la imagen')
        .col-1
      .row(titulo="Turismo de bienestar").letra-acordeon-titulos
        .col-1
        .col-md-8.mb-4.mb-md-0
          p
          p Búsqueda de actividades orientadas al descanso, la salud y el equilibrio emocional, como spas, yoga, retiros naturales o terapias tradicionales.
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema1/tema4/tema4-acordeon1-img3.svg', alt='Texto que describa la imagen')
        .col-1

      .row(titulo="Turismo tecnológico").letra-acordeon-titulos
        .col-1
        .col-md-8.mb-4.mb-md-0
          p
          p Incorporación de herramientas digitales como la reserva en línea, los pagos electrónicos, la realidad virtual y las redes sociales para la planificación del viaje y la toma de decisiones.
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema1/tema4/tema4-acordeon1-img4.svg', alt='Texto que describa la imagen')
        .col-1
      .row(titulo="Turismo comunitario").letra-acordeon-titulos
        .col-1
        .col-md-8.mb-4.mb-md-0
          p
          p Interacción directa con comunidades locales y étnicas, donde el visitante participa en procesos culturales y ambientales que promueven el desarrollo del territorio.
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema1/tema4/tema4-acordeon1-img5.svg', alt='Texto que describa la imagen')
        .col-1
      .row(titulo="Turismo de aventura y naturaleza").letra-acordeon-titulos
        .col-1
        .col-md-8.mb-4.mb-md-0
          p
          p Creciente interés por actividades al aire libre, ecoturismo y deportes extremos en entornos naturales, bajo criterios de seguridad y sostenibilidad.
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema1/tema4/tema4-acordeon1-img6.svg', alt='Texto que describa la imagen')
        .col-1
      .row(titulo="Turismo accesible").letra-acordeon-titulos
        .col-1
        .col-md-8.mb-4.mb-md-0
          p
          p Inclusión de personas con movilidad reducida o necesidades especiales, garantizando infraestructura, servicios y comunicación adaptados a la diversidad de los viajeros.
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema1/tema4/tema4-acordeon1-img7.svg', alt='Texto que describa la imagen')
        .col-1

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-left")
      p Entre las tendencias actuales, destaca el turismo de aventura y naturaleza, que se integra estrechamente con el turismo sostenible, étnico y responsable. Estas modalidades convergen en lo que hoy se conoce como ecoturismo, entendido como una forma de viajar que promueve la conservación de los ecosistemas, respeta la identidad cultural de las comunidades anfitrionas y genera beneficios económicos locales de manera equitativa.
      p De acuerdo con las proyecciones del mercado global del ecoturismo (2023–2033), este segmento muestra un crecimiento sostenido y acelerado. En 2023, el valor del mercado se estimó en 232,1 mil millones de USD; para 2033, se proyecta que alcanzará 823,4 mil millones de USD, con una tasa de crecimiento anual compuesta (CAGR) del 13,5 %. Estos datos evidencian el fortalecimiento del interés mundial por modalidades de viaje sostenibles y responsables, impulsadas por la conciencia ambiental, la búsqueda de autenticidad y la preferencia por destinos con sentido ético y comunitario.
      p El análisis del mercado distingue dos tipos de viajeros:

    .tarjeta.tarjeta--azul.p-4.pt-3.tarjeta-slyder-tipo-a-b(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-1
          .col-md-6.mb-4.mb-md-0
            h2.color-adicional-4 Son los que concentran la mayor parte del mercado, participando en recorridos naturales o culturales guiados, que favorecen la interacción social, la seguridad y la viabilidad económica de las comunidades anfitrionas
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema4/tema4-slyder1-img1.svg', alt='Slide 1')
        .row.justify-content-center.align-items-center.my-1
          .col-md-6.mb-4.mb-md-0
            h2.color-adicional-4 Son aquellos que buscan experiencias personalizadas y de introspección, con mayor conexión emocional con el entorno natural o espiritual.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema4/tema4-slyder1-img2.svg', alt='Slide 2')

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-left")
      p Ambos perfiles coinciden en una motivación común: viajar con propósito, generando impactos positivos en el ambiente, la economía local y la cultura del destino.
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-9
        figure
          img(src='@/assets/curso/temas/tema1/tema4/tema4-figura6.svg', alt='Texto que describa la imagen')

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-left")
      p Las condiciones operativas y de mercado son factores determinantes para el éxito de cualquier paquete turístico. Un producto bien estructurado debe mantener un equilibrio entre la infraestructura adecuada, la alianza con proveedores confiables y la adaptación a las tendencias del mercado global.Solo mediante esta articulación es posible ofrecer experiencias turísticas seguras, innovadoras y sostenibles, que fortalezcan la competitividad del destino, generen valor para las comunidades locales y promuevan un turismo responsable y con identidad.


</template>

<script>
export default {
  name: 'Tema4',
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
