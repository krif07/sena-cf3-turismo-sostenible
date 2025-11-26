<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h1 2.2.	Elaboración de diálogos y uso de la improvisación

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p Según Linda Seger en Making a Good Script Great (2003), “el diálogo debe revelar carácter, avanzar la acción y mantener la atención del espectador”, recordando que cada palabra tiene un propósito dramático.
      p A partir de esta idea, se comprende que el diálogo constituye el corazón vivo de toda narración oral. A través de las palabras intercambiadas entre los personajes, el público percibe sus emociones, conflictos y transformaciones. Elaborar buenos diálogos implica construir conversaciones naturales, coherentes con el contexto cultural y emocional de la historia.
      p Para lograrlo, es necesario tener en cuenta los siguientes componentes fundamentales:

    br        
    .row.justify-content-center(data-aos="flip-down")
      .col-lg-12
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema2/tema2/tema22-carrucel1-img1.svg' alt='AvatarTop')
            br
            h3.text-center Intención comunicativa:
            p.text-center cada personaje debe hablar desde su propósito y punto de vista, reflejando su identidad, emociones y situación.

          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema2/tema2/tema22-carrucel1-img2.svg' alt='AvatarTop')
            br
            h3.text-center Verosimilitud
            p.text-center las palabras deben sonar naturales y auténticas, coherentes con la época, el lugar y el nivel sociocultural del personaje.

          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema2/tema2/tema22-carrucel1-img3.svg' alt='AvatarTop')
            br
            h3.text-center Ritmo y subtexto:
            p.text-center lo importante no siempre es lo que se dice, sino lo que se insinúa; las pausas, silencios y repeticiones también comunican.

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p Un buen diálogo no se limita a la palabra hablada: integra la entonación, la expresión corporal y la intención emocional. En este sentido, la narración oral comparte rasgos con el teatro, donde el narrador combina la palabra, el gesto y la mirada para construir significado y mantener la conexión con el público.
      p Ahora bien, para el narrador es indispensable desarrollar habilidades para improvisar, teniendo como base que la improvisación es la capacidad de crear, actuar o hablar de manera espontánea, sin seguir un guion previamente establecido. Implica responder al momento presente con creatividad, adaptándose al contexto, al público y a las circunstancias. En el ámbito narrativo o actoral, improvisar no significa actuar sin preparación, sino poseer la habilidad de utilizar conocimientos, emociones y recursos expresivos para construir algo nuevo en tiempo real.
      p Como señala Viola Spolin (1999) en Improvisation for the Theater, “la improvisación es una forma de descubrimiento que permite al actor estar completamente presente y auténtico en la acción”. En este sentido, la improvisación se reconoce como una herramienta esencial para mantener viva la narración, ya que permite adaptarse al público, al entorno y a los imprevistos. En narraciones con fines culturales o turísticos, la improvisación se convierte en un medio de interacción auténtica: el narrador puede incorporar elementos del entorno, comentarios del público o referencias locales, haciendo que cada relato sea único y significativo. La figura 4 resume cómo los diálogos y la improvisación contribuyen a crear una narrativa viva y auténtica, de acuerdo con sus principales características:

    br
    br
    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md-8
        figure
          img(src='@/assets/curso/temas/tema2/tema2/tema22-img1.svg', alt='El diseño y la organización de paquetes turísticos')

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      p En el turismo étnico y sostenible, los diálogos y la improvisación adquieren una dimensión intercultural. Los guías y narradores pueden recrear conversaciones tradicionales —por ejemplo, entre ancestros, espíritus naturales o personajes míticos— adaptando la historia a la lengua, las costumbres y el paisaje del territorio.

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md12
        figure
          img(src='@/assets/curso/temas/tema2/tema2/tema22-img2.svg', alt='El diseño y la organización de paquetes turísticos')    

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p De esta manera, los diálogos se convierten en puentes de comunicación que transmiten saberes ancestrales, fomentan el respeto hacia las culturas locales y contribuyen al turismo responsable, favoreciendo la preservación de la memoria colectiva y el fortalecimiento del sentido de identidad comunitaria.

</template>

<script>
export default {
  name: 'Tema10',
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
