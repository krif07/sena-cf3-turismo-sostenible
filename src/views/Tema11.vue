<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_2_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h1 2.3.	Tiempos narrativos, ritmo y fluidez en la narración

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p El tiempo narrativo se refiere a la perspectiva temporal desde la cual el narrador presenta los acontecimientos de una historia. A continuación, se explora el concepto, las dimensiones y las características del tiempo narrativo:

    br    
    .row.justify-content-center(data-aos="fade-right")
      .col-md-10.mb-5.mb-md-0
        LineaTiempoD
          .row(numero="Contexto temporal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" titulo="")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/tema3/tema23-pasovertical1-img1.svg', alt='Texto que describa la imagen')
                
            .col-md-9.mb-4.mb-md-0
              .color-adicional-4.lh-1 El tiempo narrativo implica enmarcar los hechos dentro de un momento o contexto temporal determinado: una narración puede situarse en la prehistoria, en el presente o incluso en un futuro imaginado, y esta elección influye directamente en la comprensión de la trama y en la experiencia emocional del oyente o lector.

          .row(numero="Contexto histórico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" titulo="")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/tema3/tema23-pasovertical1-img2.svg', alt='Texto que describa la imagen')
                
            .col-md-9.mb-4.mb-md-0
              .color-adicional-4.lh-1 El contexto histórico resulta esencial para interpretar el sentido profundo del relato, ya que los valores, costumbres y conflictos varían según la época en que transcurre la acción. Por ello, el tiempo constituye uno de los pilares fundamentales del arte de contar historias.

          .row(numero="Manipular la percepción temporal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" titulo="")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/tema3/tema23-pasovertical1-img3.svg', alt='Texto que describa la imagen')
                
            .col-md-9.mb-4.mb-md-0
              .color-adicional-4.lh-1 Este concepto no se limita al orden cronológico de los acontecimientos, sino que abarca la manera en que el narrador manipula la percepción del paso del tiempo, acelerando, deteniendo o retrocediendo los hechos para producir efectos narrativos y emocionales.
          
          .row(numero="Operaciones principales del tiempo narrativo" titulo="")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/tema3/tema23-pasovertical1-img4.svg', alt='Texto que describa la imagen')
                
            .col-md-9.mb-4.mb-md-0
              p.color-adicional-4.lh-1 #[strong Orden:] disposición de los acontecimientos (lineal, retrospectiva o anticipada).
              p.color-adicional-4.lh-1 #[strong Duración:] ritmo con el que se narran los hechos (pausa, resumen, escena o elipsis).
              p.color-adicional-4.lh-1 #[strong Frecuencia:] cantidad de veces que se relatan los mismos hechos (una, varias o infinitas repeticiones).
          
          .row(numero="Tipos de tiempo narrativo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" titulo="")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/tema3/tema23-pasovertical1-img5.svg', alt='Texto que describa la imagen')
                
            .col-md-4.mb-2.mb-md-0
              p.color-adicional-4.lh-1 #[strong Tiempo externo:] corresponde al marco histórico o cronológico en el que se sitúan los hechos narrados (época, año, período). 
              p.color-adicional-4.lh-1 Puede ser que la trama nos sitúe en el presente, pero también puede ser que esté ambientada en los años 80 o en el futuro.
            .col-md-5.mb-2.mb-md-0
              p.color-adicional-4.lh-1 #[strong Tiempo interno:] hace referencia a la duración, orden y ritmo con que se desarrollan los acontecimientos dentro de la historia. Este se subdivide en dos dimensiones:
              p.color-adicional-4.lh-1 #[strong Tiempo de la historia:] momento en que los hechos ocurren realmente dentro del universo narrativo. Por ejemplo, durante la década de los 60.
              p.color-adicional-4.lh-1 #[strong Tiempo del discurso:] orden en que los hechos son presentados o contados al público.

    br 
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p Para comprender mejor el tiempo narrativo, es necesario atender a tres características principales que permiten identificar su funcionamiento y las herramientas empleadas por el narrador o narradora para estructurar la secuencia temporal de los hechos:

    br
    .row.justify-content-center.letra-acordeon-titulos
      .col-lg-12
        TabsB.letra-acordeon-titulos(data-aos="fade-left")
          .py-1(titulo="1. Orden de la narración")
            .row
              .col-md-1
              .col-md-7
                br
                p.color-adicional-4 #[strong El orden de la historia] no siempre coincide con el orden del discurso. En algunos casos, la trama puede iniciar por la mitad o incluso por el final, generando interés o sorpresa en el público. Estas variaciones se manifiestan a través de las siguientes #[strong relaciones temporales:]
                p.color-adicional-4 #[strong Analepsis o retrospección:] ocurre cuando el narrador recuerda o relata un hecho pasado, anterior al momento principal de la historia (en el cine se conoce como flashback).
                p.color-adicional-4 #[strong Prolepsis o anticipación:] se presenta cuando el narrador adelanta un acontecimiento futuro, anticipando hechos que sucederán más adelante en el relato.
                                              
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema2/tema3/tema23-pestanashor1-img1.svg', alt='Texto que describa la imagen')
              .col-md-1

          .py-1(titulo="2. Duración de la narración")
            .row
              .col-md-1
              .col-md-7
                br
                .color-adicional-4 La #[strong duración] alude a la relación entre el #[strong tiempo real de los acontecimientos] y el #[strong tiempo que se dedica a narrarlos.] Un evento breve puede ocupar un extenso desarrollo narrativo, o un largo período puede resumirse en pocas líneas. 
                .color-adicional-4 Los principales recursos literarios son:
                .color-adicional-4 #[strong Desaceleración:] ocurre cuando el narrador dedica más tiempo narrativo del habitual a un suceso, con el fin de generar tensión emocional o detalle descriptivo.
                .color-adicional-4 #[strong Aceleración:] consiste en resumir o condensar hechos prolongados en poco espacio narrativo. Dentro de este recurso se encuentra la elipsis, que implica omitir un pasaje de la historia para mantener el ritmo o concentrar la atención en los eventos esenciales.
                
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema2/tema3/tema23-pestanashor1-img2.svg', alt='Texto que describa la imagen')
              .col-md-1

          .py-1(titulo="3. Expresión del tiempo narrativo")
              .row
                .col-md-1
                .col-md-7
                  p
                  .color-adicional-4 El tiempo dentro de una narración se expresa mediante dos tipos de elementos fundamentales:
                  .color-adicional-4 #[strong Tiempos verbales:] los verbos indican la secuencia y duración de las acciones, siendo esenciales para establecer la perspectiva temporal de la historia.
                  .color-adicional-4 #[strong Indicadores temporales:] complementan la información temporal mediante adverbios o locuciones como mientras tanto, después, al día siguiente, entonces, entre otros.

                .col-md-3
                  figure
                    img(src='@/assets/curso/temas/tema2/tema3/tema23-pestanashor1-img3.svg', alt='Texto que describa la imagen')
                .col-md-1

    br 
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p En el turismo étnico y sostenible, el manejo de los tiempos narrativos es esencial para generar experiencias auténticas y participativas. Por ejemplo, un guía o narrador puede comenzar con un ritmo pausado para contextualizar la historia de la comunidad, acelerar durante los relatos de aventuras o mitos, y concluir con una pausa reflexiva que invite a valorar la relación entre cultura y naturaleza.
      p Para finalizar este apartado, se hace necesario abordar dos conceptos más: el ritmo y la fluidez, estos dos elementos son determinantes al momento de interactuar con el público:

    br    
    .row.justify-content-center(data-aos="fade-right")
      .col-md-10.mb-5.mb-md-0
        LineaTiempoD
          .row(numero="Ritmo narrativo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" titulo="")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/tema3/tema23-pasovertical2-img1.svg', alt='Texto que describa la imagen')
                
            .col-md-9.mb-4.mb-md-0
              .color-adicional-4.lh-1 El ritmo narrativo se refiere a la velocidad con que se desarrollan los acontecimientos dentro del relato. Un ritmo ágil genera tensión o emoción, mientras que un ritmo pausado invita a la reflexión y la contemplación.
              .color-adicional-4.lh-1 El narrador controla el ritmo mediante pausas, repeticiones, silencios, cambios de tono o aceleraciones verbales. Como señala Forster (2002) en Aspectos de la novela, “el ritmo es el pulso de la narración: su variación produce vida, interés y emoción”.
              .color-adicional-4.lh-1 Mantener un ritmo equilibrado es fundamental para captar la atención del público y permitir que interiorice los momentos más significativos del relato. El dominio del ritmo constituye un recurso clave en la narración turística, ya que favorece la participación del visitante y fortalece la conexión emocional con la historia.

          .row(numero="Fluidez narrativa&nbsp;&nbsp;&nbsp" titulo="")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/tema3/tema23-pasovertical2-img2.svg', alt='Texto que describa la imagen')
                
            .col-md-9.mb-4.mb-md-0
              .color-adicional-4.lh-1 La fluidez narrativa hace referencia a la naturalidad y coherencia con que se enlazan los hechos, ideas y emociones. Una narración fluida se caracteriza por transiciones suaves, un hilo conductor claro y una voz narrativa constante. En la narración oral, la fluidez depende del dominio del discurso, la seguridad expresiva y la armonía entre palabra, gesto y emoción. Sin embargo, la fluidez no implica rigidez: el narrador debe ser capaz de adaptarse al público, al ambiente o a los imprevistos, manteniendo la coherencia del relato sin perder la conexión emocional.


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
