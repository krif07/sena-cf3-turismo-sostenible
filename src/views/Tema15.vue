<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_3_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h1 3.2.	Regulación de la respiración y fluidez narrativa

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md-9.mb-4.mb-md-0.my-2
        p La respiración constituye el fundamento biocultural de la expresión vocal, reconocida tanto por la medicina tradicional como por la fisiología moderna como un elemento esencial para la transmisión efectiva de narrativas en contextos interculturales. La respiración diafragmática-abdominal representa la técnica base, avalada por la Organización Mundial de la Salud (OMS) y por los sistemas de conocimiento ancestral de pueblos indígenas y afrodescendientes, consolidándose como el soporte fundamental de una vocalización sostenible.
        p Un proceso respiratorio adecuado comprende:

      .col-md-3
        figure
          img(src='@/assets/curso/temas/tema1/tema2/tema2-img1.svg', alt='El diseño y la organización de paquetes turísticos') 

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md-9
        figure
          img(src='@/assets/curso/temas/tema3/tema2/tema32-img1.svg', alt='El diseño y la organización de paquetes turísticos')

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p De acuerdo con investigaciones del Instituto Colombiano de Antropología e Historia (ICANH), diversas comunidades étnicas en Colombia han desarrollado sistemas respiratorios particulares, asociados a:

    br
    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul acordeonA")(data-aos="flip-left")
          .row(titulo="Patrones ceremoniales").letra-acordeon-titulos
            .col-md-1
            .col-md-7
              br
              br
              p.color-adicional-4 Ciclos respiratorios empleados en rituales de armonización.
            .col-md-3
              figure
                  img(src='@/assets/curso/temas/tema3/tema2/tema32-acordeon1-img1.svg', alt='Texto que describa la imagen')

          .row(titulo="Técnicas narrativas ancestrales").letra-acordeon-titulos
            .col-md-1
            .col-md-7
              br
              br
              p.color-adicional-4 Control del aire en relatos comunitarios prolongados.
            .col-md-3
              figure
                  img(src='@/assets/curso/temas/tema3/tema2/tema32-acordeon1-img2.svg', alt='Texto que describa la imagen')

          .row(titulo="Saberes médicos tradicionales").letra-acordeon-titulos
            .col-md-1
            .col-md-7
              br
              br
              p.color-adicional-4 Regulación respiratoria como estrategia de equilibrio vital.
            .col-md-3
              figure
                  img(src='@/assets/curso/temas/tema3/tema2/tema32-acordeon1-img3.svg', alt='Texto que describa la imagen')
          
          .row(titulo="Prácticas artísticas colectivas").letra-acordeon-titulos
            .col-md-1
            .col-md-7
              br
              br
              p.color-adicional-4 Manejo coral de la respiración en cantos, danzas o manifestaciones culturales.
            .col-md-3
              figure
                  img(src='@/assets/curso/temas/tema3/tema2/tema32-acordeon1-img4.svg', alt='Texto que describa la imagen')

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p Desde la perspectiva de la seguridad y salud en el trabajo con enfoque diferencial, la Organización Internacional del Trabajo (OIT) advierte que la respiración superficial o clavicular —causante de limitaciones expresivas y tensión laríngea— debe abordarse considerando:

    br
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        ImagenInfograficaB.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/tema2/tema32-modal1-bg.svg', alt='Texto que describa la imagen')
              
          div(x="7%" y="15%" tooltip="Clic" numero="1")
            .tarjeta.white-card.p-2
              .row
                .col-lg-5
                  figure
                    img(src='@/assets/curso/temas/tema3/tema2/tema32modal1-img1.svg', alt='imagen decorativa')
                .col-lg-7  
                  br
                  br
                  br
                  br         
                  p Las prácticas tradicionales de cuidado vocal validadas por las comunidades.

          div(x="30%" y="15%" tooltip="Clic", numero="2")
            .tarjeta.white-card.p-4
              .row
                .col-lg-5
                  figure
                    img(src='@/assets/curso/temas/tema3/tema2/tema32modal1-img2.svg', alt='imagen decorativa')
                .col-lg-7
                  br
                  br
                  br
                  br
                  br
                  p Las condiciones ambientales específicas de cada territorio ancestral.

          div(x="59%" y="15%" tooltip="Clic", numero="3")
            .tarjeta.white-card.p-4
              .row
                .col-lg-5
                  figure
                    img(src='@/assets/curso/temas/tema3/tema2/tema32modal1-img3.svg', alt='imagen decorativa')
                .col-lg-7
                  br
                  br
                  br
                  br
                  p Las características acústicas de los espacios sagrados y comunitarios.
          
          div(x="92%" y="15%" tooltip="Clic", numero="4")
            .tarjeta.white-card.p-4
              .row
                .col-lg-5
                  figure
                    img(src='@/assets/curso/temas/tema3/tema2/tema32modal1-img4.svg', alt='imagen decorativa')
                .col-lg-7
                  br
                  br
                  br
                  br
                  p Las particularidades fonéticas de las lenguas nativas y criollas.


    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p El dominio técnico de la respiración, articulado con los saberes tradicionales, permite:
      .col-md-10
        .p •	Gestionar el ritmo narrativo según las estructuras temporales propias de cada cultura.
        .p •	Establecer pausas significativas que respeten los patrones de escucha comunitaria.
        .p •	Fortalecer la intencionalidad de los relatos ancestrales mediante el manejo consciente del aire.
        .p •	Preservar la salud vocal a través de técnicas interculturalmente validadas.
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      p Este enfoque integral se alinea con los postulados de la Política de Turismo Sostenible de Colombia (MINCIT, 2022) y los Lineamientos para la Salvaguardia del Patrimonio Cultural Inmaterial del Ministerio de Cultura, garantizando que la práctica respiratoria fortalezca la autenticidad cultural y promueva el bienestar integral del narrador, en cumplimiento del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST) y del Convenio 169 de la OIT sobre consulta previa y consentimiento libre, informado y previo.

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md-12
        figure
          img(src='@/assets/curso/temas/tema3/tema2/tema32-img2.svg', alt='El diseño y la organización de paquetes turísticos')

</template>

<script>
export default {
  name: 'Tema15',
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
