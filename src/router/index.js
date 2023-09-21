import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/contact',
      name:'contact',
      component:() => import('../views/ContactView.vue')
    }
  ],
  linkActiveClass: "active", 
  linkExactActiveClass: "active"
})


export default router
