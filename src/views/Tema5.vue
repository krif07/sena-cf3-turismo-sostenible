<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h1 1.4.	Elementos de la cuentería y del personaje
   
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p Escuchar un buen cuento no implica solo disfrutar de la historia, también supone identificarse con los personajes, percibir el ambiente y vivir el conflicto y su resolución. En la cuentería, estos componentes se entrelazan para crear una experiencia que trasciende el relato, una vivencia que conmueve, enseña y transporta.
      p Para lograr ese efecto, el cuentero o narrador debe dominar con habilidad ciertos elementos esenciales:

    br
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul acordeonA" data-aos="flip-left")
      .row(titulo="Acción o trama").letra-acordeon-titulos
        .col-1
        .col-md-6.mb-4.mb-md-0
          p
          p Conjunto de hechos que impulsan la historia hacia adelante.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/tema4/tema4-acordeon1-img1.svg', alt='Texto que describa la imagen')

      .row(titulo="Ambiente").letra-acordeon-titulos
        .col-1
        .col-md-6.mb-4.mb-md-0
          p
          p Espacio físico y temporal donde ocurren los acontecimientos; incluye la época, el clima y el entorno social.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/tema4/tema4-acordeon1-img2.svg', alt='Texto que describa la imagen')
        
      .row(titulo="Tema").letra-acordeon-titulos
        .col-1
        .col-md-6.mb-4.mb-md-0
          p
          p Idea principal, mensaje o reflexión que propone el cuento.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/tema4/tema4-acordeon1-img3.svg', alt='Texto que describa la imagen')
        
      .row(titulo="Tono o atmósfera").letra-acordeon-titulos
        .col-1
        .col-md-6.mb-4.mb-md-0
          p
          p Carácter emocional o estilístico del relato (humorístico, dramático, fantástico, trágico, entre otros).
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/tema4/tema4-acordeon1-img4.svg', alt='Texto que describa la imagen')
        
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p En cuanto a los personajes, se destacan las siguientes categorías:

    br
    .row.justify-content-center.letra-acordeon-titulos
      .col-lg-12
        TabsB.letra-acordeon-titulos(data-aos="fade-left")
          .py-1.py-md-2(titulo="Protagonista" :icono="require('@/assets/curso/temas/tema1/tema4/tema4-pestanashor-tab1.svg')")
            .row
              .col-md-1
              .col-md-6
                br
                p.color-adicional-4 Personaje central con el que el público suele identificarse; representa los deseos, metas o valores del relato.
                                              
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/tema4/tema4-pestanashor-img1.svg', alt='Texto que describa la imagen')
              .col-md-1

          .py-1.py-md-2(titulo="Antagonista" :icono="require('@/assets/curso/temas/tema1/tema4/tema4-pestanashor-tab2.svg')")
            .row
              .col-md-1
              .col-md-6
                p
                p.color-adicional-4 Fuerza —otra persona, la naturaleza o un conflicto interno— que se opone al protagonista y genera tensión.
                
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/tema4/tema4-pestanashor-img2.svg', alt='Texto que describa la imagen')
              .col-md-1

          .py-1.py-md-2(titulo="Personajes secundarios" :icono="require('@/assets/curso/temas/tema1/tema4/tema4-pestanashor-tab3.svg')")
              .row
                .col-md-1
                .col-md-6
                  p
                  p.color-adicional-4 Acompañan y complementan la trama; aportan profundidad, dinamismo y contrastes emocionales

                .col-md-4
                  figure
                    img(src='@/assets/curso/temas/tema1/tema4/tema4-pestanashor-img3.svg', alt='Texto que describa la imagen')
                .col-md-1

          .py-1.py-md-2(titulo="Evolución psicológica" :icono="require('@/assets/curso/temas/tema1/tema4/tema4-pestanashor-tab4.svg')")
              .row
                .col-md-1
                .col-md-6
                  p
                  p.color-adicional-4 Cambios emocionales, morales o motivacionales que experimenta un personaje a lo largo del cuento y que reflejan su aprendizaje o transformación.

                .col-md-4
                  figure
                    img(src='@/assets/curso/temas/tema1/tema4/tema4-pestanashor-img4.svg', alt='Texto que describa la imagen')
                .col-md-1

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p Cuando estos elementos se combinan adecuadamente, la cuentería deja de ser solo un relato y se convierte en una vivencia compartida, un puente entre el narrador, su cultura y los oyentes, donde la palabra se transforma en una herramienta de identidad, aprendizaje y conexión emocional.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-9
        figure
          img(src='@/assets/curso/temas/tema1/tema4/tema4-figura3.svg', alt='Texto que describa la imagen')
   
    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      p En el contexto del turismo étnico y sostenible, la cuentería se consolida como una herramienta poderosa para transmitir la identidad cultural y los saberes ancestrales de las comunidades locales. A través de los personajes y las historias, los narradores dan voz a las tradiciones, mitos y valores que conforman el patrimonio cultural inmaterial de cada territorio.
      p Cada cuento permite al visitante comprender la cosmovisión de los pueblos, su relación con la naturaleza y su manera particular de entender el mundo. Además, esta práctica fortalece el turismo sostenible, pues promueve el respeto por la diversidad cultural y ofrece experiencias auténticas que no solo entretienen, sino que también educan y sensibilizan sobre la importancia de preservar la cultura y el entorno natural.
      p En este sentido, el cuentero actúa como un intérprete cultural y guardián de la memoria colectiva, transformando cada narración en un espacio de encuentro entre el visitante y la comunidad anfitriona, donde la palabra se convierte en vehículo de diálogo intercultural, respeto y aprendizaje compartido.


</template>

<script>
export default {
  name: 'Tema5',
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

<style lang="sass">
.tarjeta-reproductor
  &--izquierda
    position: relative
    &__img
      width: 300px
      position: absolute
      height: 100%
      left: 0
      bottom: 0
      transform: translateX(-30%) translateY(0%)
  &--derecha
    position: relative
    &__img
      width: 300px
      margin: 0 auto
      position: absolute
      height: 100%
      right: 0
      bottom: 0
      transform: translateX(30%) translateY(10%)
.franja
  position: relative
  &:before
    content: ''
    position: absolute
    bottom: 0%
    left: 0
    width: 100%
    height: 35%
    background-color: #ffd947
    z-index: 0
  .content
    position: inherit
.slyder__btn
  background-color: $color-acento-contenido
  i
    color: white !important
</style>

<style lang="sass"></style>
