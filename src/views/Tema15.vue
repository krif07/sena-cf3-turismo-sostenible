<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_3_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h1 3.2.	

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p 

</template>

<script>
export default {
  name: 'Tema15',
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
