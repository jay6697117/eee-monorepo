import { App } from 'vue'
import './style.css'

// 组件
import Button from './components/Button.vue'

// 导出组件
export { Button }

// 导出 Vue 插件
export default {
  install: (app: App) => {
    app.component('ZjhButton', Button)
  }
}
