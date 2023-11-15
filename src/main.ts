import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

import 'vuetify/styles'

const vuetify = createVuetify({
  components,
  directives

  // ... your configuration
})
app.use(vuetify)

app.mount('#app')
