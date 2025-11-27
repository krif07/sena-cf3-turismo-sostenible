<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_2_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h1 2.4. Selección de recursos y espacios físicos para la narración

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p El arte de narrar no depende únicamente de la palabra o del tono del narrador, sino también del entorno y de los recursos que acompañan la experiencia. La elección adecuada de los espacios físicos y de los elementos complementarios puede transformar una narración ordinaria en un acto memorable, capaz de conectar emocionalmente con el público y de generar un impacto cultural, educativo y sensorial profundo. A continuación, se profundiza sobre este aspecto:

    br
    .row.justify-content-center(data-aos="fade-right")
      .col-md-10.mb-5.mb-md-0
        LineaTiempoD
          .row(numero="Recursos narrativos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" titulo="")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/tema4/tema24-pasovertical1-img1.svg', alt='Texto que describa la imagen')
                
            .col-md-9.mb-4.mb-md-0
              .color-adicional-4.lh-1 Los recursos narrativos comprenden todos aquellos elementos que fortalecen el mensaje y enriquecen la experiencia sensorial: objetos simbólicos, instrumentos musicales, imágenes, sonidos, luces o vestuario.
              .color-adicional-4.lh-1 Según Cassany (2006), el uso de apoyos visuales y sonoros amplía las posibilidades expresivas, ayudando al narrador a “construir puentes entre la emoción, la memoria y la comprensión del oyente”.
              .color-adicional-4.lh-1 En los contextos de turismo étnico y sostenible, estos recursos adquieren un valor especial. Por ejemplo, el uso de instrumentos tradicionales (como tambores, maracas o flautas nativas), tejidos, cantos o artesanías locales no solo embellece la narración, sino que también visibiliza el patrimonio cultural inmaterial de las comunidades anfitrionas.
              .color-adicional-4.lh-1 Estos recursos deben seleccionarse con respeto y coherencia, garantizando que no se trivialice la tradición, sino que se honre su significado simbólico y espiritual, en armonía con los valores de la comunidad que los comparte.

          .row(numero="Espacio físico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" titulo="")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/tema4/tema24-pasovertical1-img2.svg', alt='Texto que describa la imagen')
                
            .col-md-9.mb-4.mb-md-0
              .color-adicional-4.lh-1 El espacio físico donde se desarrolla la narración influye directamente en la recepción del mensaje y en la intensidad emocional del público. Según Hall (1976), en su teoría de la proxémica, el espacio es un elemento comunicativo que condiciona la interacción y las emociones entre narrador y oyente.
              .color-adicional-4.lh-1 Un entorno íntimo, como una fogata, una maloca indígena o una casa comunitaria, favorece la cercanía y la conexión emocional. En cambio, un escenario abierto, como una plaza, mirador natural o anfiteatro, potencia la dimensión colectiva y ritual del relato.
              .color-adicional-4.lh-1 En el turismo sostenible, la selección de espacios debe responder a criterios de respeto ambiental y cultural. Narrar en lugares sagrados, ecosistemas frágiles o sitios patrimoniales implica considerar la capacidad de carga, el impacto sonoro y la pertinencia cultural de la actividad. Así, la narración se convierte en una herramienta de educación ambiental y valoración cultural.

          .row(numero="Caso de aplicación de recursos" titulo="")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/tema4/tema24-pasovertical1-img3.svg', alt='Texto que describa la imagen')
                
            .col-md-9.mb-4.mb-md-0
              .color-adicional-4.lh-1 Un guía del Amazonas puede narrar la leyenda del Yuruparí al atardecer, junto al río, utilizando antorchas, cantos e instrumentos locales. El ritmo del agua acompaña la historia, el entorno natural refuerza la atmósfera mística, y los elementos culturales conectan al visitante con la cosmovisión indígena. En este caso, el espacio y los recursos no son accesorios: son parte viva del relato.

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p En la tabla 6, se puede apreciar la relación de la selección de recursos con la elección del tipo de espacio y el efecto narrativo que pueden generar:

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md-10
        figure
          img(src='@/assets/curso/temas/tema2/tema4/tema24-tabla6.svg', alt='El diseño y la organización de paquetes turísticos')

</template>

<script>
export default {
  name: 'Tema12',
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
