import Vue from 'vue'
import Router from 'vue-router'
import Home1 from '@/pages/Home1'
import Slider1 from '@/pages/Slider1'
import Haha1 from '@/pages/Haha1'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/home',
        name: 'home',
        component: Home1
    },
    {
        path: '/slider',
        name: 'slider',
        component: Slider1
    },
    {
        path: '/haha',
        name: 'haha',
        component: Haha1
    }
  ]
})
