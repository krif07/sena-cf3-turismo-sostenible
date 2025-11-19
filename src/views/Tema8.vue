<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h1 2.2.	Capacidad de carga turística: factores físicos, sociales, psicológicos y ecológicos
   
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p La capacidad de carga turística se define como el número máximo de visitantes que un destino puede recibir sin que se produzcan efectos negativos sobre el entorno natural, la cultura local o la experiencia del turista. Este concepto es esencial en la planificación sostenible de destinos, ya que busca equilibrar el desarrollo económico con la preservación de los recursos culturales y ambientales. Según la Organización Mundial del Turismo (OMT, 2018), la capacidad de carga “no debe medirse únicamente en términos de espacio físico, sino también considerando la tolerancia social, cultural y psicológica de las comunidades anfitrionas”. Esto implica reconocer que cada territorio tiene límites distintos, según su contexto ambiental, su infraestructura y su tejido social.
      p En destinos con presencia étnica o afrodescendiente, este concepto cobra especial relevancia, ya que muchas comunidades habitan territorios frágiles, ambiental o culturalmente, donde el turismo mal gestionado puede alterar su equilibrio ancestral, su relación con la naturaleza o sus prácticas tradicionales. Por ello, la evaluación de la capacidad de carga debe integrar el respeto por los saberes locales, la autonomía comunitaria y los valores culturales que sustentan el territorio.
      p
      h3 Factores que determinan la capacidad de carga 
      p Los factores que determinan la capacidad de carga de un espacio turístico se dividen en físicos, ecológicos, socioculturales y psicológicos, a continuación, se explica cada uno de ellos:
    
    p
    .row.justify-content-center.letra-acordeon-titulos
      .col-lg-12
        TabsB.letra-acordeon-titulos(data-aos="fade-left")
          .py-1.py-md-2(titulo="Factores físicos")
            .row
              .col-md-1
              .col-md-8
                br
                p.color-adicional-4 Se relacionan con el espacio disponible, la infraestructura turística, el acceso, los servicios básicos (agua, energía, saneamiento) y las condiciones del terreno. En destinos naturales o comunitarios, estos factores deben evaluarse cuidadosamente para evitar la sobreexplotación de los ecosistemas o el deterioro de los sitios culturales.
                                              
              .col-md-2
                figure
                  img(src='@/assets/curso/temas/tema2/tema2/tema22-pestanashor-img1.svg', alt='Texto que describa la imagen')
              .col-md-1

          .py-1.py-md-2(titulo="Factores ecológicos")
            .row
              .col-md-1
              .col-md-8
                p
                p.color-adicional-4 Corresponden a la resiliencia de los ecosistemas frente a la presión turística: flora, fauna, calidad del agua, suelos y paisajes. En los territorios de comunidades afro e indígenas, donde la biodiversidad y la espiritualidad están estrechamente ligadas, el manejo de la capacidad ecológica debe realizarse con participación comunitaria y bajo criterios de conservación.
                
              .col-md-2
                figure
                  img(src='@/assets/curso/temas/tema2/tema2/tema22-pestanashor-img2.svg', alt='Texto que describa la imagen')
              .col-md-1

          .py-1.py-md-2(titulo="Factores socioculturales")
              .row
                .col-md-1
                .col-md-8
                  p
                  p.color-adicional-4 Se refieren al nivel de aceptación y adaptación de la comunidad local ante la presencia de visitantes. En el turismo étnico, este aspecto es determinante, pues un flujo descontrolado de turistas puede alterar prácticas rituales, formas de vida o relaciones comunitarias. Se deben definir límites que garanticen el respeto por las tradiciones y los espacios sagrados.

                .col-md-2
                  figure
                    img(src='@/assets/curso/temas/tema2/tema2/tema22-pestanashor-img3.svg', alt='Texto que describa la imagen')
                .col-md-1

          .py-1.py-md-2(titulo="Factores psicológicos")
              .row
                .col-md-1
                .col-md-8
                  p
                  p.color-adicional-4 Están vinculados a la percepción y comodidad tanto del visitante como del anfitrión. Un destino sobresaturado o invadido puede generar incomodidad, pérdida de autenticidad y deterioro de la experiencia turística. En cambio, un manejo equilibrado del número de visitantes favorece la convivencia armónica y el intercambio cultural respetuoso.

                .col-md-2
                  figure
                    img(src='@/assets/curso/temas/tema2/tema2/tema22-pestanashor-img4.svg', alt='Texto que describa la imagen')
                .col-md-1
    

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      p Estos aspectos hacen posible un ambiente agradable y saludable para todos los actores del ecosistema turístico, al mismo tiempo que garantizan la sostenibilidad económica para los entornos locales.
      p
      h3 Capacidad de carga y sostenibilidad en territorios étnicos 

    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-11
        figure
          img(src='@/assets/curso/temas/tema2/tema2/tema22-infoestatica.svg', alt='Texto que describa la imagen')
    
    br
    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      p Gestionar la capacidad de carga turística desde una perspectiva sostenible y étnica implica comprender que el turismo debe adaptarse al territorio, y no al contrario. Cada destino posee sus propios ritmos, límites y significados culturales, los cuales deben ser respetados para garantizar una convivencia armónica entre visitantes y comunidades. Como señala la Organización Mundial del Turismo (OMT, 2018), “La gestión responsable de la capacidad de carga no busca limitar el turismo, sino asegurar su permanencia a largo plazo, protegiendo los valores naturales y culturales que le dan sentido al destino.”


</template>

<script>
export default {
  name: 'Tema8',
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
