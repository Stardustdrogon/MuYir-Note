import DefaultTheme from 'vitepress/theme'
import './style.css'

// 书籍风格组件
import ProgressBar from './components/ProgressBar.vue'
import ChapterCard from './components/ChapterCard.vue'
import KnowledgeGraph from './components/KnowledgeGraph.vue'

export default {
  extends: DefaultTheme,
  
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('ProgressBar', ProgressBar)
    app.component('ChapterCard', ChapterCard)
    app.component('KnowledgeGraph', KnowledgeGraph)
    
    // 添加全局方法
    app.config.globalProperties.$formatDate = (date) => {
      return new Date(date).toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}