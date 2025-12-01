<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_4_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h1 4.2.	Técnicas de adaptabilidad frente a diferentes contextos e imprevistos

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md-9.mb-4.mb-md-0.my-2        
        p La adaptabilidad es una capacidad que resulta indispensable en escenarios turísticos donde las condiciones ambientales, tecnológicas o socioculturales pueden variar de manera imprevista.
        p La adaptabilidad garantiza la continuidad del servicio, la coherencia narrativa y la sostenibilidad de la experiencia turística, incluso ante contingencias como fallas técnicas en sistemas de amplificación, interrupciones externas o cambios en la composición del público.
        p La improvisación guiada, técnica reconocida por la Política de Turismo Sostenible (MINCIT, 2022), constituye una estrategia clave para gestionar imprevistos sin afectar la calidad del relato ni la autenticidad de la experiencia. Su aplicación implica:

      .col-md-3
        figure
          img(src='@/assets/curso/temas/tema4/tema2/tema42-img1.svg', alt='El diseño y la organización de paquetes turísticos')

    .pb-3(data-aos="fade-left")
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5
        
        .row.mb-8.justify-content-center
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-primario.p-5
              .tarjeta-numerada__numero
                .h2 1
              br
              p #[strong El dominio de estructuras narrativas sólidas], que permitan ajustes sin pérdida de coherencia.

          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-secundario.p-5
              .tarjeta-numerada__numero
                .h2 2
              br
              p #[strong La transición fluida] entre diferentes formatos o escenarios de presentación.


          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 3
              br

              p #[strong La gestión proactiva de contingencias] en el desarrollo de actividades turísticas.

          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-botones.p-5
              .tarjeta-numerada__numero
                .h2 4
              p #[strong La conservación de la calidad experiencial], incluso ante cambios ambientales o técnicos.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      p La adaptabilidad cultural representa el nivel más avanzado de esta competencia profesional y constituye un eje central en la formación con enfoque étnico.
      p Según los Lineamientos del Ministerio del Interior para la Comunicación Intercultural y los estudios del Instituto Colombiano de Antropología e Historia (ICANH), cada narración debe ajustarse a las particularidades simbólicas, lingüísticas y temporales de la comunidad donde se desarrolla.
      br
      p Las investigaciones del ICANH documentan que:

    .row.justify-content-center(data-aos="flip-down")
      .col-lg-11
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/temas/tema4/tema2/tema42-carrucel1-img1.svg' alt='AvatarTop')
            br
            p.text-center Los ritmos narrativos deben adecuarse a las concepciones temporales de cada cultura.

          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/temas/tema4/tema2/tema42-carrucel1-img2.svg' alt='AvatarTop')
            br
            p.text-center Los ejemplos y referencias deben seleccionarse en función de los marcos de significado cultural.

          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/temas/tema4/tema2/tema42-carrucel1-img3.svg' alt='AvatarTop')
            br
            p.text-center El humor y la ironía requieren un conocimiento profundo de los contextos comunitarios.

          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/temas/tema4/tema2/tema42-carrucel1-img4.svg' alt='AvatarTop')
            br
            p.text-center Las metáforas y analogías deben reformularse para garantizar comprensión y pertinencia cultural.
 
    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      p La aplicación de estos principios en contextos específicos del turismo étnico implica:


    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md-10
        figure
          img(src='@/assets/curso/temas/tema4/tema2/tema42-tarjetaconn1.svg', alt='El diseño y la organización de paquetes turísticos')

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      p Este enfoque de adaptabilidad se articula con los postulados del Convenio 169 de la OIT y los Lineamientos para la Salvaguardia del Patrimonio Cultural Inmaterial, garantizando que: se respetan los códigos culturales y protocolos comunitarios, se mantenga la autenticidad de las narrativas tradicionales, se fomente el diálogo intercultural en condiciones de equidad y se asegure la calidad y sostenibilidad de los servicios turísticos.
      p A continuación se dan a conocer dos ejemplos sobre la forma en que se emplean estas técnicas:

    .row.justify-content-center.letra-acordeon-titulos
      .col-lg-12
        TabsB.letra-acordeon-titulos(data-aos="fade-left")
          .py-1(titulo="Resiliencia narrativa (Nariño)" :icono="require('@/assets/curso/temas/tema4/tema2/tema42-pestanashor-tab1.svg')")
            .row
              .col-md-1
              .col-md-7
                br
                p.color-adicional-4 Durante el #[strong Festival del Sol y la Luna], una intensa lluvia interrumpió la presentación principal. Los narradores aplicaron su plan de contingencia:
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta.clr-color-adicional-4
                      span
                    span Trasladaron la actividad a la maloka ceremonial.

                  li 
                    .lista-ol--cuadro__vineta.clr-color-adicional-4
                      span  
                    span Ajustaron la historia integrando elementos míticos asociados a la lluvia.
 
                  li 
                    .lista-ol--cuadro__vineta.clr-color-adicional-4
                      span  
                    span Incorporaron instrumentos tradicionales para mantener la atmósfera sonora.
                                                                                
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema4/tema2/tema42-pestanashor2-img1.svg', alt='Texto que describa la imagen')
              .col-md-1

          .py-1(titulo="Protocolo de adaptación cultural (Amazonas)" :icono="require('@/assets/curso/temas/tema4/tema2/tema42-pestanashor-tab2.svg')")
            .row
              .col-md-1
              .col-md-7
                p
                p.color-adicional-4 Los guías turísticos de la región disponen de un manual de adaptación narrativa que contempla:
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta.clr-color-adicional-4
                      span
                    span Cinco versiones alternativas de cada relato principal.

                  li 
                    .lista-ol--cuadro__vineta.clr-color-adicional-4
                      span  
                    span Técnicas de improvisación aprobadas por chamanes locales.

                  li 
                    .lista-ol--cuadro__vineta.clr-color-adicional-4
                      span  
                    span Vocabulario ceremonial adaptado a contextos rituales o sagrados.

              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema4/tema2/tema42-pestanashor2-img2.svg', alt='Texto que describa la imagen')
              .col-md-1
      
</template>

<script>
export default {
  name: 'Tema20',
  data() {
    return {}
  },
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
