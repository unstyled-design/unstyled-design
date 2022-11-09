import type { Plugin } from 'vite'

const virtualModuleId = 'virtual:contributors'

export function Contributors(data): Plugin {
  return {
    name: 'unstyled-design-contributors',

    resolveId(id) {
      return id === virtualModuleId ? virtualModuleId : null
    },

    load(id) {
      if (id !== virtualModuleId)
        return null
      return `export default ${JSON.stringify(data)}`
    }
  }
}
