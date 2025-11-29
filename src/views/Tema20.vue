<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_4_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h1 4.2.	Técnicas de adaptabilidad frente a diferentes contextos e imprevistos


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
