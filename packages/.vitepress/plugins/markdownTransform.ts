import type { Plugin } from 'vite'
import components from '../../index.json'

export function MarkdownTransform(): Plugin {
  return {
    name: 'unstyled-design-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.md\b/))
        return null

      const [_name, i] = id.split('/').slice(-2)

      const name = components.find(n => n.toLowerCase() === _name.toLowerCase()) || _name

      if (components.includes(name) && i === 'index.md') {
        const ContributorsSection = `
## Contributors

<Contributors component="${name}" />
`

        code = `${code}\n\n${ContributorsSection}`
      }

      return code
    }
  }
}
