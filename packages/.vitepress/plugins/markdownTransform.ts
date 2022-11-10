import type { Plugin } from 'vite'
import components from '../../index.json'

type Append = Record<'headers' | 'footers' | 'scriptSetups', string[]>

const combineScriptSetup = (codes: string[]) =>
`<script setup>
${codes.join('\n')}
</script>\n
`

const combineMarkdown = (code: string, headers: string[], footers: string[]) => {
  const frontmatterEnds = code.indexOf('---\n\n')
  const firstSubheader = code.search(/## \w/)
  const sliceIndex = firstSubheader < 0 ? frontmatterEnds < 0 ? 0 : frontmatterEnds + 5 : firstSubheader

  if (headers.length > 0)
    code = code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex)

  code += footers.join('\n')

  return `${code}\n`
}

export function MarkdownTransform(): Plugin {
  return {
    name: 'unstyled-design-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.md\b/))
        return null

      const [name, i] = id.split('/').slice(-2)

      if (components.includes(name) && i === 'index.md') {
        const append: Append = {
          headers: [],
          footers: [
            '\n## Contributors\n',
            `<Contributors component="${name}" />`
          ],
          scriptSetups: [
            // 'const demos = import.meta.glob(\'./demo/*.vue\')' TODO
            'import Basic from \'./demo/basic.vue\''
          ]
        }

        return combineMarkdown(
          code,
          [combineScriptSetup(append.scriptSetups), ...append.headers],
          append.footers
        )
      }

      return null
    }
  }
}
