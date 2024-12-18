import { h } from 'vue'
import Theme from 'vitepress/theme'
import EeeUI from '@eee/ui'
import '@eee/ui/dist/ui.css'
import './styles/tailwind.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(EeeUI)
  }
}
