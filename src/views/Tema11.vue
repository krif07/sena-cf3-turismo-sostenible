<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_2_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h1 2.3.	Tiempos narrativos, ritmo y fluidez en la narración

    

</template>

<script>
export default {
  name: 'Tema11',
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
