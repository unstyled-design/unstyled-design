import type { App } from 'vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import * as components from '@unstyled-design/components'

const UNSTYLED_INSTALLED = Symbol('UNSTYLED_INSTALLED')

const unstyled = {
  version: VERSION,
  install: (app: App) => {
    if (app[UNSTYLED_INSTALLED])
      return
    app[UNSTYLED_INSTALLED] = true

    Object.keys(components).forEach((key) => {
      app.component(key, components[key as keyof typeof components])
    })
  },
}

export default unstyled
