import { defineConfig } from 'vitepress'
import { applyPlugins } from './theme/plugins'

export default defineConfig({
  title: '技术知识库',
  description: '结构化的技术学习笔记',
  lang: 'zh-CN',
  appearance: 'dark', // 默认暗色模式
  
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }]
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '前端开发', link: '/frontend/' },
      { text: '后端开发', link: '/backend/' },
      { text: '算法', link: '/algorithms/' }
    ],
    
    sidebar: {
      // 前端开发章节
      '/frontend/': [
        {
          text: '前端开发',
          items: [
            { text: '概述', link: '/frontend/' }
          ]
        },
        {
          text: 'Vue.js',
          collapsible: true,
          items: [
            { text: '基础', link: '/frontend/vue/basics' },
            { text: '高级用法', link: '/frontend/vue/advanced' },
            { text: '示例项目', link: '/frontend/vue/examples' }
          ]
        },
        {
          text: 'React',
          collapsible: true,
          items: [
            { text: '核心概念', link: '/frontend/react/core-concepts' },
            { text: 'Hooks 详解', link: '/frontend/react/hooks' }
          ]
        }
      ],
      
      // 后端开发章节
      '/backend/': [
        {
          text: '后端开发',
          items: [
            { text: '概述', link: '/backend/' }
          ]
        },
        {
          text: 'Node.js',
          collapsible: true,
          items: [
            { text: '基础', link: '/backend/nodejs' },
            { text: 'Express框架', link: '/backend/express' }
          ]
        },
        {
          text: '数据库',
          collapsible: true,
          items: [
            { text: 'SQL基础', link: '/backend/databases/sql' },
            { text: 'MongoDB', link: '/backend/databases/mongodb' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername' }
    ],
    
    editLink: {
      pattern: 'https://github.com/yourusername/my-knowledge-base/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    
    footer: {
      message: '知识共享许可证',
      copyright: 'Copyright © 2023-present 你的名字'
    },
    
    // 增强功能
    outline: {
      level: 'deep', // 显示到 h6
      label: '本页导航'
    }
  },
  
  markdown: {
    lineNumbers: true, // 代码行号
    theme: 'material-palenight', // 代码主题
  },
  
  // 自定义主题扩展
  extends: applyPlugins
})