import { createApp } from 'vue'
import unstyled from 'unstyled-design'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'unstyled-design/dist/style.css'

const app = createApp(App)
app.use(unstyled)
app.mount('#app')
