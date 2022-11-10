import { join, resolve } from 'path'
import fs from 'fs-extra'
import fg from 'fast-glob'

const DIR_ROOT = resolve(__dirname, '..')
const DIR_PACKAGE = join(DIR_ROOT, 'packages')

async function listComponents(dir: string, ignore: string[] = []) {
  const files = await fg('*', {
    onlyDirectories: true,
    cwd: dir,
    ignore: [
      '_*',
      'dist',
      'node_modules',
      ...ignore
    ]
  })
  files.sort()
  return files
}

async function run() {
  const dir = join(DIR_ROOT, 'packages/components')
  const components = await listComponents(dir)
  await fs.writeJSON(join(DIR_PACKAGE, 'index.json'), components, { spaces: 2 })
}

run()
