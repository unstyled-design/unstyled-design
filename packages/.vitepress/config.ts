import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import { mdPlugin } from './plugins/markdown'

export default defineConfig({
  lang: 'en-US',
  title: 'unstyled-design',
  description: 'An unstyled Vue3 component library.',

  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: nav(),

    sidebar: getSidebar(),

    editLink: {
      pattern: 'https://github.com/unstyled-design/unstyled-design/edit/main/packages/:path',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/unstyled-design/unstyled-design' },
    ],

    footer: {
      copyright: 'Copyright © 2022-present Hongbusi',
    },
  },

  markdown: {
    config: md => mdPlugin(md),
  },
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/what-is-unstyled-design', activeMatch: '/guide/' },
    {
      text: `v${version}`,
      items: [
        { text: 'Release Notes', link: 'https://github.com/unstyled-design/unstyled-design/releases' },
      ],
    },
  ]
}

function getSidebar() {
  return [
    {
      text: 'Introduction',
      items: [
        { text: 'What is unstyled-design?', link: '/guide/what-is-unstyled-design' },
        { text: 'Getting Started', link: '/guide/getting-started' },
      ],
    },
    {
      text: 'Components',
      items: [
        { text: 'Avatar', link: '/components/avatar/' },
      ],
    },
  ]
}
