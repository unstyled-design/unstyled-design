import unstyled from 'unstyled-design'
import DefaultTheme from 'vitepress/theme'

import 'uno.css'
import './styles/main.css'
import 'unstyled-design/dist/style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(unstyled)
  },
}
