<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Expresión oral, corporal y manejo de la voz

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p La expresión oral, corporal y el manejo de la voz constituyen pilares esenciales de la comunicación humana y, en contextos de turismo étnico y sostenible, se convierten en herramientas de mediación intercultural y transmisión de saberes ancestrales. En las comunidades étnicas colombianas, la palabra hablada, el gesto y el tono no son solo recursos técnicos, sino expresiones vivas de la memoria colectiva y de la relación espiritual con el territorio. Cada movimiento y cada inflexión vocal reflejan la forma en que un pueblo interpreta y narra su mundo, integrando en la comunicación elementos simbólicos, emocionales y ambientales. Así, el dominio de la voz y del cuerpo permite al narrador no solo transmitir información, sino también evocar experiencias sensoriales y afectivas, generando vínculos de respeto y empatía con las comunidades anfitrionas y con los visitantes.


</template>

<script>
export default {
  name: 'Tema13',
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
