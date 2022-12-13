import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import { mdPlugin } from './plugins/markdown'

export default defineConfig({
  lang: 'en-US',
  title: 'unstyled-design',
  description: 'An unstyled Vue3 component library.',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]
  ],

  themeConfig: {
    logo: '/logo.svg',

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
    { text: 'Components', link: '/components/button/', activeMatch: '/components/' },
    {
      text: `v${version}`,
      items: [
        { text: 'Release Notes', link: 'https://github.com/unstyled-design/unstyled-design/releases' }
      ]
    }
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
      text: 'Basic',
      items: [
        { text: 'Button', link: '/components/button/' },
        { text: 'Link', link: '/components/link/' },
        { text: 'Icon', link: '/components/icon/' },
        { text: 'Space', link: '/components/space/' }
      ]
    },
    {
      text: 'Form',
      items: [
        { text: 'Switch', link: '/components/switch/' },
        { text: 'Radio', link: '/components/radio/' },
        { text: 'Select', link: '/components/select/' }
      ]
    }
  ]
}
