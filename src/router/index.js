import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobsView from '@/views/Jobs/JobsView.vue'
import JobsDetail from '@/views/Jobs/JobsDetail.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about-up',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'JobsView',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'JobsDetail',
    component: JobsDetail,
    props: true
  },
  {
    path: '/jobs-all',
    redirect: '/jobs'
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundView',
    component: NotFoundView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
