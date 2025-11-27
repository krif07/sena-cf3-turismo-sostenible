<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_3_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h1 3.1.	Aplicación de pausas activas y manejo de gestos en la narración

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md-9.mb-4.mb-md-0.my-2
        p La gestión consciente de los recursos paralingüísticos y kinésicos constituye un elemento esencial para la interpretación respetuosa del patrimonio cultural inmaterial en contextos de turismo étnico y sostenible, en coherencia con los principios de la Política de Turismo Sostenible de Colombia (MINCIT, 2022) sobre comunicación intercultural y preservación de las manifestaciones culturales ancestrales.
        p Las pausas y los gestos, cuando se emplean con sensibilidad étnica y conciencia diferencial, se transforman en herramientas pedagógicas que fortalecen la transmisión auténtica de saberes comunitarios y favorecen la participación respetuosa de los visitantes.Las pausas activas funcionan como puntuaciones vocales con intencionalidad narrativa y cultural. Según estudios del Instituto Colombiano de Antropología e Historia (ICANH), su implementación debe considerar los siguientes tipos:

      .col-md-3
        figure
          img(src='@/assets/curso/temas/tema3/tema1/tema3-img1.svg', alt='El diseño y la organización de paquetes turísticos')


</template>

<script>
export default {
  name: 'Tema14',
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
