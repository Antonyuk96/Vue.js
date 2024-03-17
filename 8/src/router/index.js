import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/homepage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: homepage
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../pages/projectpage.vue')
  },
  {
    path: '/project/:page',
    name: 'projectarticle',
    component: () => import('../pages/rojectpage.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../pages/blogpage.vue')
  },
  {
    path: '/blog/:page',
    name: 'blogarticle',
    component: () => import('../pages/blogpage.vue')
  },
  {
    path: '/project-details',
    name: 'project-details',
    component: () => import('../pages/projectdetails.vue')
  },
  {
    path: '/blog-details',
    name: 'blog-details',
    component: () => import('../pages/blogdetailspage.vue')
  },
  {
    path: '/404',
    name: 'notfoundpage',
    component: () => import('../pages/notfoundpage.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router