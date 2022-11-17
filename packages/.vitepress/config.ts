import { defineConfig } from 'vitepress'
import { mdPlugin } from './plugins/markdown'

export default defineConfig({
  lang: 'en-US',
  title: 'unstyled-design',
  description: 'An unstyled Vue3 component library.',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/components/': sidebarComponents()
    },

    editLink: {
      pattern: 'https://github.com/unstyled-design/unstyled-design/edit/main/packages/:path'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/unstyled-design/unstyled-design' }
    ],

    footer: {
      copyright: 'Copyright © 2022-present Hongbusi'
    }
  },

  markdown: {
    config: md => mdPlugin(md)
  }
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/what-is-unstyled-design', activeMatch: '/guide/' },
    { text: 'Components', link: '/components/button/', activeMatch: '/components/' }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      items: [
        { text: 'What is unstyled-design?', link: '/guide/what-is-unstyled-design' },
        { text: 'Getting Started', link: '/guide/getting-started' }
      ]
    }
  ]
}

function sidebarComponents() {
  return [
    {
      text: 'Test',
      items: [
        { text: 'Button', link: '/components/button/' },
        { text: 'Space', link: '/components/space/' },
        { text: 'Icon', link: '/components/icon/' },
        { text: 'Link', link: '/components/link/' },
        { text: 'Select', link: '/components/select/' },
        { text: 'Tree', link: '/components/tree/' }
      ]
    }
  ]
}
