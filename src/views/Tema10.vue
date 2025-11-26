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
      

    separador
    separador
    separador
    separador
    
    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      h3 Disponibilidad de transporte 
      p La integración entre medios de transporte convencionales y tradicionales debe planearse cuidadosamente para garantizar transiciones fluidas que no generen estrés en los visitantes. Los puntos de encuentro entre diferentes modalidades de transporte deben diseñarse como espacios de descanso e interpretación cultural, donde los visitantes puedan aprender sobre la importancia del transporte tradicional mientras esperan su conexión. De aquí, la necesidad de analizar un aspecto indispensable para que la logística funcione adecuadamente, exploremos de qué se trata: 


    br
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-9.audio-fondo-1
        .row.justify-content-center.mx-4.my-4
          .col-md-8.my-4.audio-fondo-1-contenido
            TarjetaAudio.color-secundario.bg-color-1.mb-3.my-4(
              texto="Los horarios y ritmos"
              :audio="require('@/assets/curso/temas/audio/5.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        
            TarjetaAudio.color-acento-botones.bg-color-2.mb-3(
              texto="Ejemplo: orden y seguridad"
              :audio="require('@/assets/curso/temas/audio/6.mp3')"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")          
            
            TarjetaAudio.color-acento-botones.bg-color-2.mb-3(
              texto="Ejemplo: entrenamiento y supervisión"
              :audio="require('@/assets/curso/temas/audio/7.mp3')"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/tema4/tema24-audio2.svg', alt='Texto que describa la imagen')


    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p De esta manera, la gestión operativa se centra en la organización, seguridad y mantenimiento, permitiendo que los medios de transporte tradicionales funcionen de manera eficiente y accesible, respetando la esencia cultural y la autenticidad de la experiencia ofrecida a los visitantes.
      p 
      h3 Coordinación operativa 
      p La coordinación operativa en turismo comunitario consiste en organizar de manera eficiente y armoniosa todas las actividades relacionadas con la atención de visitantes, el transporte, las reservas y la gestión de recursos, asegurando el respeto por los tiempos y la organización de la comunidad. Su objetivo es garantizar que la experiencia turística sea segura, sostenible y beneficiosa tanto para los visitantes como para la comunidad anfitriona.
      p Para lograrlo, el operador turístico debe implementar los siguientes pasos:


    .row.justify-content-center
      .col-lg-12
        .crd.tarjeta.acordeonA
          PasosB.color-acento-botones.p-4(data-aos="fade-right")
            .row.justify-content-center(titulo="").pt-1
              .col-lg-8.mb-4.mb-lg-0
                br
                h5.color-adicional-4 Designación de enlaces comunitarios 
                p.color-adicional-4 Asignar personas de la comunidad que sirvan como punto de contacto entre los operadores, guías y visitantes, facilitando la comunicación y resolución de problemas.

              .col-lg-2.col-6
                figure
                  img(src='@/assets/curso/temas/tema2/tema4/tema24-pasohor1-img1.svg', alt='')

            .row.justify-content-center(titulo="").pt-1
              .col-lg-8.mb-4.mb-lg-0
                br
                h5.color-adicional-4 Planificación previa de actividades y traslados 
                p.color-adicional-4 Realizar reuniones con líderes comunitarios, guías locales y operadores logísticos para coordinar horarios, rutas, capacidad de transporte y secuencia de actividades, asegurando que se respeten los ciclos ceremoniales, agrícolas y culturales.

              .col-lg-2.col-6
                figure
                  img(src='@/assets/curso/temas/tema2/tema4/tema24-pasohor1-img2.svg', alt='')

            .row.justify-content-center(titulo="").pt-1
              .col-lg-8.mb-4.mb-lg-0
                br
                h5.color-adicional-4 Establecimiento de canales de comunicación claros 
                p.color-adicional-4 Utilizar medios accesibles como radios comunitarios, grupos de mensajería o sistemas de aviso locales, garantizando que toda la información llegue a tiempo a visitantes y anfitriones.
                
              .col-lg-2.col-6
                figure
                  img(src='@/assets/curso/temas/tema2/tema4/tema24-pasohor1-img3.svg', alt='')

            .row.justify-content-center(titulo="").pt-1
              .col-lg-8.mb-4.mb-lg-0
                br
                h5.color-adicional-4 Monitoreo continuo del flujo de visitantes
                p.color-adicional-4 Controlar la cantidad de turistas en cada actividad para evitar la saturación, respetar la capacidad de carga del territorio y proteger la vida cotidiana de la comunidad

              .col-lg-2.col-6
                figure
                  img(src='@/assets/curso/temas/tema2/tema4/tema24-pasohor1-img4.svg', alt='')

            .row.justify-content-center(titulo="").pt-1
              .col-lg-8.mb-4.mb-lg-0
                br
                h5.color-adicional-4 Gestión de imprevistos 
                p.color-adicional-4 Definir protocolos específicos para responder a cambios climáticos, retrasos en transporte, emergencias de salud o modificaciones en la agenda comunitaria, con roles y responsabilidades claramente asignados.
                
              .col-lg-2.col-6
                figure
                  img(src='@/assets/curso/temas/tema2/tema4/tema24-pasohor1-img5.svg', alt='')

            .row.justify-content-center(titulo="").pt-1
              .col-lg-8.mb-4.mb-lg-0
                br
                h5.color-adicional-4 Evaluación y retroalimentación 
                p.color-adicional-4 Al finalizar cada jornada o temporada turística, realizar reuniones de retroalimentación con todos los actores para ajustar procesos y mejorar la coordinación en futuras operaciones.

              .col-lg-2.col-6
                figure
                  img(src='@/assets/curso/temas/tema2/tema4/tema24-pasohor1-img6.svg', alt='')

    br
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p Como señala la OMT (2020), “La coordinación logística en turismo comunitario debe basarse en el diálogo permanente, la confianza y el respeto por los tiempos y formas de organización local.”
      p Al aplicar estos pasos, la coordinación operativa se convierte en un proceso estructurado y replicable que protege la experiencia cultural, asegura la seguridad de visitantes y anfitriones, y fortalece la gobernanza compartida.


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
