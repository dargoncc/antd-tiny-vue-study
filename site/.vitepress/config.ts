import { defineConfig } from 'vitepress'
import { getNav } from './config/nav'
import { getSidebar } from './config/sidebar'

export default defineConfig({
  title: 'Vue3组件库站点',
  themeConfig: {
    nav: getNav(),
    sidebar: getSidebar()
  }
})
