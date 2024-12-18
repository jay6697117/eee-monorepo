import { createApp } from 'vue'
import App from './App.vue'
import EeeUI from '@eee/ui'
// console.log('EeeUI :>> ', EeeUI);
import '@eee/ui/dist/ui.css'
import './style.css'

const app = createApp(App)
app.use(EeeUI)
app.mount('#app')
