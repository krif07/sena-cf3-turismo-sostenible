<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_3_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h1 3.1.	Aplicación de pausas activas y manejo de gestos en la narración

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md-9.mb-4.mb-md-0.my-2
        p La gestión consciente de los recursos paralingüísticos y kinésicos constituye un elemento esencial para la interpretación respetuosa del patrimonio cultural inmaterial en contextos de turismo étnico y sostenible, en coherencia con los principios de la Política de Turismo Sostenible de Colombia (MINCIT, 2022) sobre comunicación intercultural y preservación de las manifestaciones culturales ancestrales.
        p Las pausas y los gestos, cuando se emplean con sensibilidad étnica y conciencia diferencial, se transforman en herramientas pedagógicas que fortalecen la transmisión auténtica de saberes comunitarios y favorecen la participación respetuosa de los visitantes.Las pausas activas funcionan como puntuaciones vocales con intencionalidad narrativa y cultural. Según estudios del Instituto Colombiano de Antropología e Historia (ICANH), su implementación debe considerar los siguientes tipos:

      .col-md-3
        figure
          img(src='@/assets/curso/temas/tema3/tema1/tema3-img1.svg', alt='El diseño y la organización de paquetes turísticos')

    br        
    .row.justify-content-center(data-aos="flip-down")
      .col-lg-11
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/temas/tema3/tema1/tema3-carrucel3-img1.svg' alt='AvatarTop')
            br
            p.text-center Pausas ceremoniales: respetan los silencios rituales en narrativas ancestrales.

          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/temas/tema3/tema1/tema3-carrucel3-img2.svg' alt='AvatarTop')
            br
            p.text-center Pausas de traducción cultural: permiten el procesamiento intercultural de significados.

          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema3/tema1/tema3-carrucel3-img3.svg' alt='AvatarTop')
            br
            p.text-center Pausas comunitarias: generan espacios de reflexión colectiva conforme a las tradiciones orales.

          .tarjeta.color-acento-contenido.p-4
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/temas/tema3/tema1/tema3-carrucel3-img4.svg' alt='AvatarTop')
            br
            p.text-center Pausas de respeto espiritual: corresponden a silencios reverenciales en lugares sagrado.

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p Desde la perspectiva de la salud ocupacional con enfoque étnico, la Organización Internacional del Trabajo (OIT) reconoce estas pausas como “microdescansos culturalmente situados”, útiles para prevenir el agotamiento vocal y mental, en concordancia con el Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST). Esta adaptación se articula con los saberes tradicionales de protección vocal presentes en comunidades indígenas, afrodescendientes y raizales, integrando así la ergonomía laboral con la cosmovisión local.
      br
      h3 Gestualidad narrativa con enfoque diferencial
      p La gestualidad narrativa debe analizarse a partir de la cosmovisión de cada pueblo, tal como lo documenta la UNESCO en sus protocolos de salvaguardia del patrimonio inmaterial. Los principales tipos de gestos son:


    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md-12
        figure
          img(src='@/assets/curso/temas/tema3/tema1/tema31-tarjetaconectada1.svg', alt='El diseño y la organización de paquetes turísticos')

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p La Organización Mundial del Turismo (OMT) subraya la importancia de la competencia gestual intercultural, evidenciando que: 

    br
    .row.justify-content-center(data-aos="fade-right")
      .col-md-10.mb-5.mb-md-0
        LineaTiempoD
          .row(numero="A" titulo="")                
            .col-md-7.mb-4.mb-md-0
              br
              br
              br
              br
              .color-adicional-4.lh-1 En las comunidades Wayuu, los movimientos de manos poseen significados clánicos.
            
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema3/tema1/tema3-pasovertical1-img1.svg', alt='Texto que describa la imagen')

          .row(numero="B" titulo="")
            .col-md-7.mb-4.mb-md-0
              br
              br
              br
              .color-adicional-4.lh-1 En los pueblos amazónicos, la mirada sigue protocolos establecidos por la jerarquía comunitaria. 
            
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema3/tema1/tema3-pasovertical1-img2.svg', alt='Texto que describa la imagen')

          .row(numero="C" titulo="")
            .col-md-7.mb-4.mb-md-0
              br
              br
              br
              .color-adicional-4.lh-1 En contextos indígenas, la posición del cuerpo ante los mayores o autoridades espirituales requiere especial consideración.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema3/tema1/tema3-pasovertical1-img3.svg', alt='Texto que describa la imagen')
          
          .row(numero="D" titulo="")
            .col-md-7.mb-4.mb-md-0
              br
              br
              br
              .color-adicional-4.lh-1 En los pueblos amazónicos, Wayuu y los pueblos de pacífico y caribe indígena, los gestos asociados a la cacería o la pesca poseen connotaciones espirituales y rituales.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema3/tema1/tema3-pasovertical1-img4.svg', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema14',
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
