import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pinia from './store'

const app = createApp(App)

// 使用pinia
app.use(pinia);

app.mount('#app')
