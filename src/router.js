import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home.vue'
import center from './components/center.vue'
import reactTerminal from './components/reactTerminal.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      component: home
    },
    {
      path: '/center',
      component: center
    },
    {
      path: '/terminal',
      component: reactTerminal
    }
  ]
})
