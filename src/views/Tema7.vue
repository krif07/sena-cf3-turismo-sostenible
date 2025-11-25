<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_1_6
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h1 1.6. Técnicas de expresión oral: características y componentes
  
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-up")
      p Las técnicas de expresión oral permiten que un hablante se comunique de manera clara, convincente y memorable. Según García (2025), estas técnicas comprenden el desarrollo del vocabulario, la modulación de la voz y la estructuración de las ideas, aspectos esenciales para lograr una comunicación efectiva en cualquier contexto.
      p A continuación, se presentan algunas de las características principales de la expresión oral:

    br
    .row.justify-content-center
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="fade-right")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/tema6/tema6-tarj-avatar1-img1.svg", alt="alt").img90.m-auto
          h4.text-center Claridad y articulación
          p.text-center.mb-0 Pronunciar correctamente, elegir palabras precisas y vocalizar adecuadamente para garantizar que el mensaje se entienda sin confusión.

      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/tema6/tema6-tarj-avatar1-img2.svg", alt="alt").img90.m-auto
          h4.text-center Fluidez
          p.text-center.mb-0 Mantener un ritmo natural, con pausas oportunas, evitando silencios prolongados o titubeos que interrumpan el hilo del discurso.
      
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/tema6/tema6-tarj-avatar1-img3.svg", alt="alt").img90.m-auto
          h4.text-center Variedad tonal
          p.text-center.mb-0 Utilizar cambios de entonación, volumen y velocidad para expresar emociones, resaltar ideas y generar dinamismo en la narración.
      
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/tema6/tema6-tarj-avatar1-img4.svg", alt="alt").img90.m-auto
          h4.text-center Estructura del contenido
          p.text-center.mb-0 Organizar las ideas de forma lógica, con un inicio, desarrollo y cierre claros; usar conectores y mantener la coherencia discursiva.
      
    br
    .row.justify-content-center
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/tema6/tema6-tarj-avatar1-img5.svg", alt="alt").img90.m-auto
          h4.text-center Interacción con la audiencia
          p.text-center.mb-0 Adaptarse al público y al contexto; formular preguntas, ofrecer retroalimentación o aclaraciones para mantener la atención e incentivar la participación.
      
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/tema6/tema6-tarj-avatar1-img6.svg", alt="alt").img90.m-auto
          h4.text-center Expresión no verbal complementaria
          p.text-center.mb-0 Emplear gestos, posturas, miradas y movimientos espaciales (proxémica) que refuercen o maticen el mensaje verbal.


    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-up")
      p Estas características se fortalecen mediante la comprensión y práctica de los componentes fundamentales de la expresión oral, que abarcan los ámbitos vocal, lingüístico, cognitivo-emocional, no verbal y contextual. Cada uno de ellos contribuye a que el mensaje sea más preciso, atractivo y adaptado al público. En el turismo étnico y sostenible, estas habilidades resultan esenciales, ya que permiten que narradores, guías e intérpretes culturales comuniquen de forma auténtica y respetuosa las tradiciones, historias y valores de las comunidades locales, fortaleciendo la mediación cultural y promoviendo una experiencia turística significativa y ética.
    
    br
    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md-3
        figure
          img(src='@/assets/curso/temas/tema1/tema2/tema2-img1.svg', alt='El diseño y la organización de paquetes turísticos')

      .col-md-9.mb-4.mb-md-0.my-2
        h3 Componentes de la expresión oral 
        p En el marco del turismo étnico y sostenible, las técnicas de expresión oral adquieren un valor esencial como medio de transmisión cultural y mediación intercultural. Un guía, narrador o intérprete cultural que domina estas habilidades puede ofrecer relatos auténticos, sensibles y respetuosos con la identidad y los valores locales.
        p La tabla 5, presenta los principales componentes de la expresión oral, destacando su función e importancia en el logro de una comunicación efectiva, clara y significativa

    br
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-9
        figure
          img(src='@/assets/curso/temas/tema1/tema6/tema6-tabla5.svg', alt='Texto que describa la imagen')

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      p Cuando se aplican adecuadamente, las expresiones orales contribuyen a la sostenibilidad social, ya que refuerzan el valor del patrimonio inmaterial, fortalecen el orgullo cultural de las comunidades y generan experiencias turísticas significativas que trascienden el simple entretenimiento, convirtiéndose en puentes de diálogo y comprensión intercultural.


</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({}),
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
