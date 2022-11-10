import * as components from 'unstyled-design'
import DefaultTheme from 'vitepress/theme'

import 'uno.css'
import 'unstyled-design/dist/style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    for (const name of Object.keys(components))
      app.component(name, components[name])
  }
}
