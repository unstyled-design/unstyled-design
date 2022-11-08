import type { App } from 'vue'
import UnButton from './src/Button'

export { UnButton }

export default {
  install(app: App) {
    app.component(UnButton.name, UnButton)
  }
}
