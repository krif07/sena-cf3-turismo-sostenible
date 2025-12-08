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
          iframe(width="560" height="315" src="https://www.youtube.com/embed/Jh9Vm5WuqBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
      br
      .row.justify-content-center.align-items-center.mb-5
        p La narración oral, entendida como una herramienta de comunicación y transmisión cultural, ocupa un papel fundamental en el ámbito del turismo, especialmente cuando se busca promover experiencias auténticas, sostenibles y con enfoque étnico. A través del uso de la palabra, el cuerpo y la voz, el narrador se convierte en un mediador entre las comunidades y los visitantes, capaz de compartir historias, tradiciones y saberes que dan sentido al territorio.
        p 
        .col-lg-7(data-aos="fade-left")
          p El desarrollo de habilidades narrativas y expresivas permite crear experiencias más significativas y diferenciadas, donde la comunicación trasciende la simple descripción de atractivos para convertirse en un acto de interpretación cultural. La voz, los gestos, la improvisación y el manejo del ritmo narrativo se transforman en herramientas que potencian la conexión emocional con los visitantes, generando relatos que inspiran respeto por la diversidad y promueven la sostenibilidad.
          p Este enfoque contribuye a fortalecer la identidad local, impulsar el turismo comunitario y fomentar el reconocimiento de los saberes ancestrales como parte esencial del patrimonio cultural inmaterial del país (UNESCO, 2003; MinCultura, 2010). De este modo, la narración oral se integra como un componente clave en la construcción de experiencias turísticas responsables y memorables, siempre que su contenido sea avalado o co-creado por las comunidades portadoras.
          p A partir del estudio de las técnicas narrativas, la creación de personajes, la expresión corporal y la interpretación actoral, se hace posible comunicar con sensibilidad y creatividad. Asimismo, se promueve la interacción empática con el público, la adaptación a diversos entornos culturales y la transmisión de mensajes que reflejen los valores del turismo responsable. En consecuencia, la narración oral se consolida como un recurso estratégico para el diseño de productos y experiencias turísticas sostenibles, que contribuyen a la valorización del patrimonio cultural y natural en Colombia.
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
