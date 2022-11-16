import 'uno.css'
import type { App } from 'vue'
import * as components from '../components'

export * from '../components'

const unstyled = {
  install: (app: App) => {
    for (const name in components)
      app.component(name, components[name])
  }
}

export default unstyled
