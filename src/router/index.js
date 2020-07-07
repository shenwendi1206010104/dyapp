import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TaBar from '../components/TaBar.vue'
import Index from '../views/Index.vue'
import Follow from '../views/Follow.vue'
import TopBar from '../components/index/TopBar.vue'
import VideoList from '../components/index/VideoList.vue'
import Videos from '../components/index/Videos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: '/index', component: Index },
      { path: '/follow', component: Follow }
    ]
  },
  { path: '/taBar', component: TaBar },
  { path: '/topBar', component: TopBar },
  { path: '/videoList', component: VideoList },
  { path: '/videos', component: Videos }
]

const router = new VueRouter({
  routes
})

export default router
