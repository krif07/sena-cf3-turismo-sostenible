<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1.	Concepto, tipos, propósitos y estilos de narración oral
        
    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md-8.mb-4.mb-md-0.my-2
        p La narración oral puede entenderse como "una forma de comunicación viva, dinámica y comunitaria, donde el narrador y el público construyen conjuntamente el sentido del relato" " (Colino Rodríguez, 2017).. Esta práctica milenaria involucra palabra, voz, cuerpo y emoción para transmitir conocimientos, valores, tradiciones y recuerdos comunes. En consecuencia, la narración oral se convierte en un espacio cultural que promueve identidad, creatividad y vínculos con el otro, transferible a diversos ámbitos de desempeño. Los tipos más frecuentes incluyen mitos, leyendas, cuentos tradicionales, relatos históricos o contemporáneos, entre otros.
        br
        h3 Tipos de narración oral
        p Las narraciones orales constituyen un medio fundamental de transmisión de saberes, memorias y valores culturales. En los entornos del turismo étnico y comunitario, estas formas de relato no solo entretienen, sino que fortalecen la identidad colectiva y promueven el diálogo intercultural. A continuación, se presentan los principales tipos de narraciones orales con pertinencia cultural:
      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema1/tema1/tema1-img1.svg', alt='El diseño y la organización de paquetes turísticos')

    br        
    .row.justify-content-center(data-aos="flip-down")
      .col-lg-12
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-acento-contenido.p-3
            .row.justify-content-center.mb-3
              .col-9
                img(src='@/assets/curso/temas/tema1/tema1/tema1-carrucel-tarj1-img1.svg' alt='AvatarTop')
            h5.text-center.letra-acordeon-titulos Leyenda
            p.text-center.letra-acordeon-titulos Relato de carácter ficticio o simbólico que se origina en un hecho histórico o territorial. Transmitida de generación en generación, la leyenda mantiene elementos de identidad local y suele explicar fenómenos naturales o culturales desde una perspectiva comunitaria.

          .tarjeta.color-acento-contenido.p-3
            .row.justify-content-center.mb-3
              .col-9
                img(src='@/assets/curso/temas/tema1/tema1/tema1-carrucel-tarj1-img2.svg' alt='AvatarTop')
            h5.text-center.letra-acordeon-titulos Anécdota
            p.text-center.letra-acordeon-titulos Narración breve basada en hechos reales o experiencias personales. Se utiliza para transmitir aprendizajes, humor o reflexión, y en contextos turísticos, permite al narrador establecer cercanía emocional con su audiencia.

          .tarjeta.color-acento-contenido.p-3
            .row.justify-content-center.mb-3
              .col-9
                img(src='@/assets/curso/temas/tema1/tema1/tema1-carrucel-tarj1-img3.svg' alt='AvatarTop')
            h5.text-center.letra-acordeon-titulos Mito
            p.text-center.letra-acordeon-titulos Relato de carácter sagrado o sobrenatural, a través del cual los pueblos explican el origen del mundo, los fenómenos naturales o los valores espirituales. Los mitos reflejan la cosmovisión de cada comunidad y constituyen un pilar del patrimonio inmaterial.

          .tarjeta.color-acento-contenido.p-3
            .row.justify-content-center.mb-3
              .col-9
                img(src='@/assets/curso/temas/tema1/tema1/tema1-carrucel-tarj1-img4.svg' alt='AvatarTop')
            h5.text-center.letra-acordeon-titulos Cuento
            p.text-center.letra-acordeon-titulos Historia breve de tradición oral, con una estructura narrativa definida. En los contextos étnicos, el cuento puede incluir enseñanzas morales o ambientales, representando una herramienta educativa y de transmisión cultural.
          
          .tarjeta.color-acento-contenido.p-3
            .row.justify-content-center.mb-3
              .col-9
                img(src='@/assets/curso/temas/tema1/tema1/tema1-carrucel-tarj1-img5.svg' alt='AvatarTop')
            h5.text-center.letra-acordeon-titulos Relato
            p.text-center.letra-acordeon-titulos Narración extendida que integra diversos elementos descriptivos, simbólicos o reflexivos. En el ámbito turístico, se utiliza para contextualizar experiencias, conectar al visitante con el territorio y promover una comprensión holística y respetuosa de las culturas anfitrionas.

    br
    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      p Cada tipo de narración oral cumple una función distinta, que puede ir desde el entretenimiento y la enseñanza, hasta la preservación de la memoria o la reflexión crítica sobre la realidad social. Según Barba Téllez (2013), la narración oral “no se realiza para el otro, sino con el otro”, lo que resalta su carácter participativo y su dimensión comunitaria. Por su parte, Moreno Blanco (2011) señala que la oralidad en Colombia debe entenderse como una manifestación cultural que refleja la diversidad y pluralidad del país, integrando voces que, a través del relato, mantienen viva la historia de los pueblos.
      p Para fortalecer la oralidad en el ámbito turístico, resulta esencial fomentar el uso del storytelling, entendido —según Denning (2011)— como el arte de transmitir conocimientos y valores mediante relatos que inspiran, enseñan y movilizan a las personas. En otras palabras, consiste en contar historias de forma estratégica, creativa y emocional, con el propósito de conectar con una audiencia, transmitir un mensaje y generar una experiencia significativa. Ahora exploremos su aplicación específica en actividades turísticas:


</template>

<script>
export default {
  name: 'Tema2',
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
