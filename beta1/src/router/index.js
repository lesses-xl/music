import Vue from 'vue'
import Router from 'vue-router'
import Music from '@/components/music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/music'
    },
    {
      path: '/music',
      component: Music
    },
    {

    }
  ]
})
