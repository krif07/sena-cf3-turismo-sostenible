<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_4_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h1 4.4.	Estrategias para recibir y dar retroalimentación

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md-9.mb-4.mb-md-0.my-2
        p La retroalimentación en la narración oral turística constituye un proceso esencial de aprendizaje compartido y reflexión intercultural. Más allá de evaluar el desempeño del narrador, este intercambio permite comprender cómo el público interpreta, valora y resignifica los saberes transmitidos durante la experiencia. En los contextos étnicos, la retroalimentación adquiere un valor cultural y pedagógico, ya que facilita la preservación de las tradiciones orales al tiempo que promueve la conciencia sobre la diversidad y la sostenibilidad. A través del diálogo respetuoso y la escucha activa, tanto el narrador como los visitantes se reconocen como portadores de conocimiento, fortaleciendo vínculos de reciprocidad y respeto mutuo. En este sentido, la retroalimentación no solo mejora la calidad comunicativa, sino que también consolida el turismo como un espacio de encuentro, aprendizaje y transformación cultural sostenible.
        p A continuación, se indican algunas estrategias para recibir y dar retroalimentación en la narración oral turística:
        
      .col-md-3
        figure
          img(src='@/assets/curso/temas/tema4/tema4/tema44-img1.svg', alt='El diseño y la organización de paquetes turísticos')

</template>

<script>
export default {
  name: 'Tema22',
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
