import Vue from 'vue'
import VueRouter from 'vue-router'
import initPage from '../views/initPage'
import indexPage from '../views/indexPage'
import carousel from '../views/carousel'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'initPage',
        component: initPage,
        props: true
      },

      {
        path: '/index',
        name: 'indexPage',
        component: indexPage,
        props: true
      },

      {
        path: '/galeria',
        name: 'galeria',
        component: carousel,
        props: true
      },
    
    ]
})

export default router