<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #t_2_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h1 2.4.	Manejo de reservas, disponibilidad de transporte y coordinación 
   
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      p El manejo eficiente de reservas, la gestión de la disponibilidad de transporte y la coordinación operativa son elementos clave para garantizar el buen funcionamiento de cualquier servicio turístico. Estos procesos permiten optimizar recursos, evitar conflictos de agenda y asegurar que los visitantes disfruten de una experiencia fluida y segura.
      p Además, la adecuada planificación y coordinación entre proveedores, operadores y comunidades anfitrionas contribuye a la sostenibilidad del servicio, al cumplimiento de los estándares de calidad y a la satisfacción del cliente. En contextos de turismo comunitario, este manejo debe realizarse con sensibilidad cultural, respetando los tiempos y protocolos de las comunidades locales y garantizando la participación activa de todos los actores involucrados.
      p 
      h3 Manejo de reservas 
      p Los sistemas de reservas para el turismo étnico deben diseñarse considerando las estructuras organizativas tradicionales de las comunidades. En lugar de imponer plataformas tecnológicas complejas, es preferible desarrollar sistemas híbridos que combinen herramientas digitales accesibles con mecanismos de decisión comunitaria presencial. A continuación, se presentan los aspectos a tener en cuenta durante la realización y gestión de las reservas:

    ImagenInfograficaB.color-primario
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/tema4/tema24-modal1-bg.svg', alt='Texto que describa la imagen')
          
      div(x="13.5%" y="48%" tooltip="Ciclos de la comunidad" numero="")
        .tarjeta.white-card.p-2
          .row
            .col-1
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/tema4/tema24-modal1-img1.svg', alt='imagen decorativa')
            .col-lg-7
              h3 Ciclos de la comunidad
              br
              p Las reservas deben gestionarse respetando los ciclos ceremoniales, agrícolas y organizativos de la comunidad, evitando la saturación turística, ya que esta puede convertirse en una actividad invasiva, afectando negativamente la vida cotidiana de la comunidad anfitriona. 

      div(x="40.7%" y="20.5%" tooltip="Transparencia: disponibilidad y precios", numero="")
        .tarjeta.white-card.p-4
          .row
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/tema4/tema24-modal1-img2.svg', alt='imagen decorativa')
            .col-lg-7
              h3 Transparencia: disponibilidad y precios
              p La información sobre disponibilidad y precios debe comunicarse con transparencia, explicando claramente cómo se distribuyen los ingresos generados y qué porcentaje se destina a proyectos comunitarios.

      div(x="57.5%" y="75%" tooltip="Flexibilidad y adaptabilidad", numero="")
        .tarjeta.white-card.p-4
          .row
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/tema4/tema24-modal1-img3.svg', alt='imagen decorativa')
            .col-lg-7
              h3 Flexibilidad y adaptabilidad
              h4 Los sistemas de reservas deben permitir cierta flexibilidad para adaptarse a imprevistos, que pueden incluir:
              p.mb-0
              p.mb-0 Cambios en la agenda de la comunidad por eventos ceremoniales o festividades tradicionales.
              p.mb-0 Condiciones climáticas adversas que afecten el transporte o las actividades planificadas.
              p.mb-0 Enfermedades o emergencias de miembros de la comunidad o del grupo de visitantes.
              p.mb-0 Retrasos o cancelaciones de transporte que afecten la llegada o salida de los turistas.
      
      div(x="91.2%" y="13%" tooltip="Flexibilidad y adaptabilidad", numero="")
        .tarjeta.white-card.p-4
          .row
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/tema4/tema24-modal1-img4.svg', alt='imagen decorativa')
            .col-lg-7
              h3 Políticas de cancelación y modificación
              p Políticas de cancelación y modificación que sean justas para ambas partes, considerando las particularidades de la economía y organización comunitaria, y permitiendo reprogramar las reservas sin afectar la experiencia del visitante ni la dinámica interna de la comunidad.
    
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
