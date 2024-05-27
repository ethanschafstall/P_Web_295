import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('@/views/BooksView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/AccountView.vue')
    },
    {
      path: '/search/:filter?', // Remove "name" parameter
      name: 'search',
      props: route => ({
        filter: route.params.filter || "", // Access filter parameter
        q: route.query.q // Access name query parameter
      }),
      component: () => import('@/views/SearchView.vue')
    },
    {
      path: '/book/:id',
      name: 'book',
      component: () => import('@/views/BookDetailsView.vue')
    }
  ]
})

export default router
