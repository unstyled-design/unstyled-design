import md5 from 'md5'
import Git from 'simple-git'
import components from '../packages/index.json'

export interface ContributorInfo {
  name: string
  count: number
  hash: string
}

const git = Git({
  maxConcurrentProcesses: 200,
})

export async function getContributors(path: string) {
  try {
    const list = (await git.raw(['log', '--pretty=format:"%an|%ae"', '--', path]))
      .split('\n')
      .map(i => i.slice(1, -1).split('|') as [string, string])

    const map: Record<string, ContributorInfo> = {}

    list
      .filter(i => i[1])
      .forEach((i) => {
        if (!map[i[1]]) {
          map[i[1]] = {
            name: i[0],
            count: 0,
            hash: md5(i[1]),
          }
        }
        map[i[1]].count++
      })

    return Object.values(map).sort((a, b) => b.count - a.count)
  }
  catch (e) {
    console.error(e)
    return []
  }
}

export async function getComponentContributors() {
  const result = await Promise.all(components.map(async (i) => {
    return [i, await getContributors(`packages/components/${i}`)] as const
  }))
  return Object.fromEntries(result)
}
