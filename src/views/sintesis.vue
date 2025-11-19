<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p(data-aos="fade-down") Este componente abordó la estructuración de paquetes turísticos desde un enfoque sostenible, ético y con identidad cultural. A lo largo de su desarrollo se integraron los servicios turísticos, la cultura y la sostenibilidad para generar experiencias auténticas orientadas al fortalecimiento del desarrollo local. Se analizaron los tipos de paquetes turísticos —convencionales y comunitarios—, las condiciones operativas y de mercado, las estrategias de precios y los principios del turismo responsable, como el comercio justo y las alianzas comunitarias. También se consideraron los aspectos de normativa, seguridad y gestión del riesgo, garantizando una operación legal, segura y participativa. De igual manera, se revisaron los elementos logísticos de los itinerarios turísticos, incluyendo la planificación de tiempos, traslados, actividades, así como la capacidad de carga, la accesibilidad y la coordinación entre actores locales. Finalmente, se profundizó en la verificación de bioseguridad y sostenibilidad como procesos participativos orientados a la protección de la salud, el territorio y la cultura. En conjunto, estos aprendizajes permitieron consolidar una visión integral del turismo como herramienta de transformación social, conservación ambiental y fortalecimiento de la identidad de los pueblos.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
