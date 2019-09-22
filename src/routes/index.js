import routes from './routes'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export function CreateRouter () { 
 return new VueRouter({
        routes // short for `routes: routes`
    })
}
 