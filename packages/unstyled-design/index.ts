import 'uno.css'
import type { App } from 'vue'
import * as components from '../components'

export * from '../components'

const unstyled = {
  install: (app: App) => {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key as keyof typeof components])
    })
  },
}

export default unstyled
