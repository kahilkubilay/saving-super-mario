import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import Content from '../views/Content/Content.vue'
import Game from '../views/Game/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/sections/:id',
    name: 'Content',
    component: Content,
    props: true
  },
  {
    path: '/game/:id',
    name: 'Game',
    component: Game,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
