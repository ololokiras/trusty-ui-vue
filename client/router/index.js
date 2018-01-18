import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import User from '../views/User'
import Stats from '../views/Stats'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'user',
    	path: '/user/:nickname',
    	component: User
    },
    {
      name: 'stats',
      path: '/stats/',
      component: Stats,
    },
  ]
})
