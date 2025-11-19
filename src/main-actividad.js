import Vue from 'vue'
import Actividad from './views/Actividad.vue'
import ecored from 'ecored-pkg-fliz'
import config from './config/global.js'
const packageJson = require('../package.json')

// Importar los estilos globales
import './styles/_styles.sass'

// Inicializar el plugin de componentes
Vue.use(ecored, { config, packageJson })

Vue.config.productionTip = false

new Vue({
  render: h => h(Actividad),
}).$mount('#app')
