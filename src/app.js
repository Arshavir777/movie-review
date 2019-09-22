import Vue from 'vue'
import App from './App.vue'
import vuetify from "./plugins/vuetify"

import { CreateRouter } from './routes/index'
const router = CreateRouter()

new Vue({
    vuetify,
    router,
    el: '#app',
    render: h => h(App)
})