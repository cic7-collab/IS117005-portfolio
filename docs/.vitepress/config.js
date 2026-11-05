import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Careers Research | IS117005',
  description: 'Research into growing job titles and career options across artificial intelligence and technology.',
  base: '/IS117005-portfolio/',
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'AI Careers Research',
    nav: [
      { text: 'Explore careers', link: '/careers/' },
      { text: 'Research method', link: '/method' },
      { text: 'Sources', link: '/sources' }
    ],
    sidebar: [
      {
        text: 'Research',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Career profiles', link: '/careers/' },
          { text: 'Research method', link: '/method' },
          { text: 'Sources', link: '/sources' }
        ]
      }
    ],
    footer: {
      message: 'IS117005 portfolio research project',
      copyright: 'Student research · Sources linked throughout'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
})
