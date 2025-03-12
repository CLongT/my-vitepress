import { defineConfig } from 'vitepress'
import nav from './nav.mjs'
import sidebar from './sidebar.mjs'
const newLocal = 'gitte'
export default defineConfig({
  title: 'LongTing 的学习博客',
  description: '一个学习笔记博客',
  srcDir: 'docs',
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '按键导航',
                },
              },
            },
          },
        },
      },
    },
    nav: nav,
    sidebar: sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/CLongT' }],

    footer: {
      copyright: 'Copyright © 2025-present LongTing',
    },
  },
})
