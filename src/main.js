import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify' // vuetifyのインポート

import '@mdi/font/css/materialdesignicons.css' // mdiアイコンのCSS読み込み
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify) // アプリへの定義追加

app.mount('#app')
