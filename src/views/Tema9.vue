<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h1 2.1.	Creación y construcción de personajes
   
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p Según Guillermo Fabricio Zúñiga, en su Manual de creación de personajes, “los hechos que se narran toman valor vital porque le suceden a un personaje y lo impulsan a actuar, a tomar decisiones, a sentir, a vivir emociones, a transformarse”. En este sentido, la creación de personajes va más allá de asignarles un nombre, una apariencia o una función dentro de la historia. Consiste en dotarlos de vida, en imaginar su mundo interno, su historia personal, sus deseos, miedos, contradicciones y vínculos con otros personajes y con el entorno.
      p Para lograr este propósito, existen elementos esenciales que deben considerarse al momento de construir un personaje. A continuación, se presentan algunos de los componentes esenciales que orientan este proceso creativo de personajes:

    .tarjeta(titulo="Ejemplo - 1" data-aos="fade-left")
      .imgCont.m-auto
        .row.justify-content-center
          ImagenInfografica.color-acento-contenido
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/tema1/tema21-puntos-calientes1.svg', alt='Texto que describa la imagen')
          
            .tarjeta.color-acento-botones.p-3(x="15.5%" y="9%" numero="1")
              h5.mb-2.letra-color-acento Biografía o historia de vida: 
              p Incluye el origen, el pasado y los eventos significativos que moldean su carácter y personalidad.

            .tarjeta.color-acento-botones.p-3(x="58%" y="10%" numero="2")
              .h5.mb-2.letra-color-acento Motivaciones y objetivos: 
              p Expresan qué desea lograr el personaje, así como las fuerzas externas (circunstancias, relaciones) y motivaciones internas (emociones, valores, convicciones) que lo impulsan a actuar

            .tarjeta.color-acento-botones.p-3(x="72.2%" y="10%" numero="3")
              .h5.mb-2.letra-color-acento Conflictos internos: 
              p Representan las dudas, miedos o deseos contrapuestos que generan tensión y aportan credibilidad y profundidad psicológica.
            
            .tarjeta.color-acento-botones.p-3(x="15%" y="64%" numero="4")
              .h5.mb-2.letra-color-acento Rasgos físicos y de personalidad:
              p Abarcan la apariencia, la postura, la forma de hablar, los gestos y las particularidades que lo distinguen de los demás.

            .tarjeta.color-acento-botones.p-3(x="28%" y="74.5%" numero="5")
              .h5.mb-2.letra-color-acento Relaciones y entorno:
              p Describen cómo se vincula con otros personajes y con su contexto cultural, social y ambiental.
            
            .tarjeta.color-acento-botones.p-3(x="70.5%" y="75.5%" numero="6")
              .h5.mb-2.letra-color-acento Evolución o arco del personaje:
              p Refleja los cambios y aprendizajes que experimenta a lo largo de la historia, así como sus transformaciones internas o externas.

    br 
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p Otro de los elementos fundamentales del guion narrativo es el personaje o los personajes que le dan vida al relato, es por ello que, en el turismo étnico y sostenible, la construcción de personajes narrativos se convierte en una herramienta fundamental para interpretar la cultura viva. Para comprender un poco más su riqueza, es necesario comprender su aporte dentro de la experiencia turística:


    br
    .row.justify-content-center.letra-acordeon-titulos
      .col-lg-12
        TabsB.letra-acordeon-titulos(data-aos="fade-left")
          .py-1(titulo="Personificación" :icono="require('@/assets/curso/temas/tema1/tema4/tema4-pestanashor-tab1.svg')")
            .row
              .col-md-1
              .col-md-7
                br
                p.color-adicional-4 Cuando guías o narradores personifican historias tradicionales —como mitos, leyendas o relatos ancestrales— basándose en personajes bien construidos, con motivaciones claras, conflictos auténticos y rasgos culturales definidos, la experiencia del visitante se enriquece: no solo escucha una historia, sino que se siente parte de ella, comprende la cosmovisión de la comunidad y desarrolla empatía hacia su realidad.
                                              
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema2/tema1/tema21-pestanashor2-img1.svg', alt='Texto que describa la imagen')
              .col-md-1

          .py-1(titulo="Evitar estereotipos" :icono="require('@/assets/curso/temas/tema1/tema4/tema4-pestanashor-tab1.svg')")
            .row
              .col-md-1
              .col-md-7
                p
                p.color-adicional-4 Además, la creación de personajes sólidos y respetuosos ayuda a evitar estereotipos culturales. Al trabajar con detalle la historia de vida, la personalidad, los miedos y los valores de los personajes, se logra una representación justa y sensible de la identidad comunitaria. 
                
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema2/tema1/tema21-pestanashor2-img2.svg', alt='Texto que describa la imagen')
              .col-md-1

          .py-1(titulo="Sostenibilidad social" :icono="require('@/assets/curso/temas/tema1/tema4/tema4-pestanashor-tab1.svg')")
              .row
                .col-md-1
                .col-md-7
                  p
                  p.color-adicional-4 Esta práctica fortalece la sostenibilidad social del turismo étnico, al impulsar el orgullo cultural, promover la autenticidad de la experiencia turística y prevenir la homogeneización o la explotación superficial de las culturas locales.

                .col-md-3
                  figure
                    img(src='@/assets/curso/temas/tema2/tema1/tema21-pestanashor2-img3.svg', alt='Texto que describa la imagen')
                .col-md-1

</template>

<script>
export default {
  name: 'Tema9',
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
