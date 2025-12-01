<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p(data-aos="fade-down") En este componente formativo se abordaron las Técnicas de Narrativa y Expresión Oral, con el propósito de sintetizar de manera visual las relaciones jerárquicas y conceptuales entre los elementos técnicos, normativos y diferenciales que conforman la competencia profesional del narrador. Los temas desarrollados —Fundamentos de la narración oral, Técnicas narrativas y adaptación de relatos, Expresión oral, corporal y manejo de la voz, e Interacción con el público y retroalimentación— sustentan el fortalecimiento de habilidades específicas que se articulan con el dominio vocal y corporal, culminando en estrategias avanzadas de interacción con diversos tipos de audiencia. Asimismo, el componente integró desde los conceptos básicos de cuentería hasta los principios de seguridad y salud en el trabajo, contribuyendo al desarrollo de una narrativa oral efectiva, sostenible y culturalmente respetuosa, en coherencia con los principios del turismo responsable y la diversidad étnica y cultural de Colombia.

    .row.justify-content-center(data-aos="fade-down")
      //.col-lg-10.mb-5.bgs.p-4.brad
      //  figure
      //    img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
