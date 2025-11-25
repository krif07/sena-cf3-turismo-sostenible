<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_1_5
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h1 1.5.	Interpretación actoral: concepto, técnicas y componentes

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      p La interpretación actoral es el proceso mediante el cual un actor o narrador da vida a un personaje, utilizando recursos expresivos que integran el cuerpo, la voz, la emoción, la imaginación y la técnica. No se trata solo de “actuar”, sino de encarnar al personaje, hacerlo creíble y lograr que el público sienta su existencia real, con todas sus motivaciones, contradicciones y transformaciones.
      p Según Héctor Julio Pérez López (2015), en su artículo Los tres cuerpos de la narración: una poética cognitivista de la interpretación actoral, el cuerpo del intérprete no es únicamente un vehículo físico, sino un mediador cognitivo donde emociones, memoria, imaginación y empatía confluyen para generar presencia escénica. Este enfoque resalta que interpretar no significa “vestir un papel”, sino activar los recursos internos y armonizarlos con los elementos externos de la actuación —gestos, voz y contexto— para comunicar con autenticidad y profundidad emocional. Por esta razón, resulta fundamental conocer las principales técnicas de interpretación actoral, las cuales pueden aplicarse en el ámbito del turismo cultural y étnico como herramientas para fortalecer la mediación escénica y narrativa.
      br
      p
      h3 Técnicas de interpretación actoral
      p A continuación, se presentan las principales técnicas de interpretación actoral según Peréz Lopez (2015):

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-9
        figure
          img(src='@/assets/curso/temas/tema1/tema5/tema5-tabla3.svg', alt='Texto que describa la imagen')
    
    br
    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md-3
        figure
          img(src='@/assets/curso/temas/tema1/tema1/tema1-img2.svg', alt='El diseño y la organización de paquetes turísticos')

      .col-md-9.mb-4.mb-md-0.my-2
        h3 Componentes de interpretación actoral
        br
        p La interpretación actoral se compone de diversos elementos que, al integrarse, otorgan vida, coherencia y profundidad a los personajes y a las situaciones escénicas. Estos componentes no solo permiten expresar emociones o contar historias, sino también transmitir identidades, valores y contextos culturales.
        p En el marco del turismo étnico y sostenible, comprender y aplicar estos aspectos resulta esencial, ya que muchos narradores, guías e intérpretes culturales recurren a la actuación como medio para conectar al visitante con la esencia de una comunidad o territorio. La interpretación escénica se convierte así en una herramienta que fortalece la mediación cultural, promueve la empatía y contribuye a preservar el patrimonio inmaterial.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      p La tabla 4, presenta los principales componentes de la interpretación actoral y su relevancia para generar experiencias turísticas auténticas, participativas y culturalmente significativas.
        
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-9
        figure
          img(src='@/assets/curso/temas/tema1/tema5/tema5-tabla4.svg', alt='Texto que describa la imagen')

    br
    br
    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md-3
        figure
          img(src='@/assets/curso/temas/tema1/tema2/tema2-img1.svg', alt='El diseño y la organización de paquetes turísticos')

      .col-md-9.mb-4.mb-md-0.my-2
        h3 Enfoque en el turismo étnico y sostenible
        p La interpretación actoral desempeña un papel fundamental en el turismo étnico y sostenible, ya que permite que las tradiciones, mitos y memorias de una comunidad no solo sean contadas, sino también vividas. Un guía interpretativo que aplica técnicas actorales puede personificar historias ancestrales, representar personajes míticos locales, dramatizar leyendas tradicionales o recrear escenarios culturales a través de la actuación, facilitando así que el visitante conecte emocionalmente con la cultura y la historia del lugar.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12
        figure
          img(src='@/assets/curso/temas/tema1/tema5/tema5-img1.svg', alt='Texto que describa la imagen')

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      p Este enfoque aporta autenticidad, promueve el respeto por la cultura local y contribuye al desarrollo sostenible, pues fortalece el sentido de identidad comunitaria y genera valor agregado turístico sin caer en explotaciones superficiales o representaciones estereotipadas.


</template>

<script>
export default {
  name: 'Tema6',
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
