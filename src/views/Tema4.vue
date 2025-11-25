<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_1_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3.	Lenguaje corporal y comunicación no verbal en la narración

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p Cuando se escucha a alguien contar una historia, no solo se perciben palabras; también se sienten emociones, intenciones y sensaciones que, con frecuencia, se expresan sin necesidad de hablar. El lenguaje corporal y la comunicación no verbal son esos instrumentos silenciosos que pueden potenciar —o, si no se cuidan, debilitar— el impacto de un relato.
      P A continuación se aprecian algunos elementos del lenguaje corporal que debe tener en cuenta el narrador:

    .row.justify-content-center
      .col-lg-12
        .crd.tarjeta.acordeonA
          PasosB.color-acento-botones.p-4(data-aos="fade-right")
            .row.justify-content-center(titulo="").pt-1
              .col-lg-5.mb-4.mb-lg-0
                br
                h5.color-adicional-4 
                p.color-adicional-4 Un guía turístico que narra una leyenda local puede usar las manos para crear espacios imaginarios.

              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema1/tema3/tema3-pasos-hor1-img1.svg', alt='')

            .row.justify-content-center(titulo="").pt-1
              .col-lg-5.mb-4.mb-lg-0
                br
                h5.color-adicional-4 
                p.color-adicional-4 Inclinar el cuerpo hacia adelante para generar expectativa o mantener contacto visual con los oyentes para integrarlos a la historia.

              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema1/tema3/tema3-pasos-hor1-img2.svg', alt='')

            .row.justify-content-center(titulo="").pt-1
              .col-lg-5.mb-4.mb-lg-0
                br
                h5.color-adicional-4 
                p.color-adicional-4 La expresión facial —una sonrisa, un ceño fruncido o una mirada de asombro— transmite emociones que las palabras quizá no logren expresar con igual fuerza.
                
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema1/tema3/tema3-pasos-hor1-img3.svg', alt='')

            .row.justify-content-center(titulo="").pt-1
              .col-lg-5.mb-4.mb-lg-0
                br
                h5.color-adicional-4 
                p.color-adicional-4 La postura, la proxémica (distancia con el público) y los gestos controlados convierten la narración en una experiencia inmersiva, haciendo que los visitantes sientan que forman parte del relato, no que solo lo escuchan.

              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema1/tema3/tema3-pasos-hor1-img4.svg', alt='')

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p Un estudio realizado en Desa Wisata Temajuk (Indonesia) analizó la comunicación no verbal en guías turísticos novatos (pramuwisata). Los resultados mostraron que la práctica del storytelling mejoró notablemente su confianza corporal: los participantes desarrollaron un lenguaje físico más seguro, expresivo y con mayor apertura hacia el público al finalizar el entrenamiento.
      p Además, la comunicación no verbal actúa como un puente intercultural en contextos donde el idioma puede ser una barrera. Un gesto adecuado, una mirada amable o una postura abierta comunican hospitalidad, respeto e interés sin necesidad de traducción. En el ámbito del turismo étnico y sostenible, dominar este lenguaje contribuye a fortalecer la empatía, el entendimiento mutuo y la autenticidad en la interacción con los visitantes.
      p El mapa conceptual que se presenta a continuación muestra los principales componentes de la comunicación no verbal y destaca las diversas formas en que las personas transmiten mensajes sin emplear palabras, reforzando así la importancia del lenguaje corporal en los procesos de interacción y expresión emocional.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/tema3/tema3-figura2.svg', alt='Texto que describa la imagen')

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p En la narración turística, estos elementos resultan fundamentales: la voz comunica información, datos e historias, mientras que el cuerpo transmite emociones, credibilidad y cercanía. La postura, los gestos y la expresión facial pueden reforzar un relato o, por el contrario, debilitarlo si no se emplean de manera consciente y coherente. Este esquema invita a reflexionar sobre la necesidad de coordinar lo que se dice con cómo se dice, para alcanzar una comunicación auténtica, efectiva y emocionalmente significativa en la interacción directa con los visitantes.


</template>

<script>
export default {
  name: 'Tema4',
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
