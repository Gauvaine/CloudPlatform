import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './utils/rem.js'
import dataV from '@jiaminghi/data-view'


import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import api from './api/api'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.$api = api

app.use(router).use(dataV)
app.mount('#app')
