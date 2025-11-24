<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la narración oral

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      p Contar historias acompaña al ser humano desde siempre. Antes de los libros, las cámaras o las redes, la palabra hablada fue el puente que unió generaciones y pueblos. A través de la narración oral, las comunidades compartieron su forma de entender el mundo, sus creencias, miedos, alegrías y saberes ancestrales. En cada relato se fortalecían los lazos de pertenencia y se conservaba la memoria colectiva.
      p Hoy, esa capacidad de contar sigue viva, aunque se ha transformado y adaptado a nuevos escenarios. En el contexto del turismo étnico y sostenible, la narración oral cumple un papel esencial: permite que las voces locales sean protagonistas y que el visitante conozca el territorio desde la mirada de quienes lo habitan. Cada historia se convierte en una puerta hacia la identidad cultural, la cosmovisión y los valores de una comunidad.

    .tarjeta(titulo="Ejemplo - 1" data-aos="fade-left")
      .imgCont.m-auto
        .row.justify-content-center
          ImagenInfografica.color-acento-contenido
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/tema1/tema1-puntos-calientes1.svg', alt='Texto que describa la imagen')
          
            .tarjeta.color-acento-botones.p-3(x="15.3%" y="21%" numero="")
              .h5.mb-2 Redescubrir
              p Redescubrir el poder de la palabra es una parte fundamental del diseño de experiencias turísticas con sentido 

            .tarjeta.color-acento-botones.p-3(x="42.4%" y="78.8%" numero="")
              .h5.mb-2 Propiciar Encuentros              
              p Narrar no solo significa contar hechos, sino propiciar encuentros entre culturas, reconocer la diversidad y promover el respeto por las distintas formas de ver y vivir el mundo.

            .tarjeta.color-acento-botones.p-3(x="58%" y="21%" numero="")
              .h5.mb-2 Herramienta Educativa
              p Desde esta perspectiva, la narración oral se entiende como una herramienta educativa y cultural que fortalece la identidad, preserva la memoria y contribuye a crear experiencias auténticas y responsables.  
            
            .tarjeta.color-acento-botones.p-3(x="82%" y="59.5%" numero="")
              .h5.mb-2 Tradiciones
              p A través de ella, las comunidades mantienen vivas sus tradiciones, sus lenguas propias y sus relatos simbólicos, construyendo un puente entre el pasado y el presente.

    p
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      p De este modo, narrar se convierte en una estrategia de interpretación del patrimonio, una forma de transmitir saberes locales y un medio para promover la sostenibilidad social y cultural. Cada palabra, cada historia y cada voz contribuyen a que el turismo sea una experiencia de diálogo, aprendizaje y reconocimiento mutuo.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    mostrarIndicadorTarjetaAudio: true,
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
