<template lang="pug">
.curso-main-container.introduccion
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
     
      figure(data-aos="fade-right")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
      .row.justify-content-center.align-items-center.mb-5
        p El diseño y funcionamiento adecuado de los paquetes turísticos en comunidades étnicas requiere una visión integral que articule los aspectos técnicos con el respeto por la identidad cultural, el bienestar social y la sostenibilidad ambiental. Esta perspectiva permite consolidar el turismo como una herramienta de fortalecimiento comunitario y de preservación del patrimonio material e inmaterial.
        p 
        .col-lg-7(data-aos="fade-left")
          p Este componente formativo aborda los elementos esenciales para la estructuración de experiencias turísticas responsables, desde la comprensión del marco normativo y la determinación de precios, hasta la aplicación de principios de turismo responsable y comercio justo. Se promueven prácticas que garanticen la equidad, la autenticidad cultural y el aprovechamiento sostenible de los recursos.
          p Asimismo, se profundiza en la planificación logística de los itinerarios turísticos, considerando factores como la capacidad de carga, la accesibilidad, la coordinación operativa y las medidas de bioseguridad. Todo ello con el propósito de fortalecer las competencias técnicas, interculturales y sostenibles necesarias para generar propuestas de desarrollo local inclusivas y respetuosas del patrimonio natural y cultural.
          p 
        .col-lg-5(data-aos="fade-right")
          figure
            img(src="@/assets/curso/temas/intro/intro-imagen-1.svg", alt="alt")
          

</template>

<script>
export default {
  name: 'Introduccion',
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
