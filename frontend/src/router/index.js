import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BooksView from '@/views/BooksView.vue'
import LoginView from '@/views/LoginView.vue'
import SearchView from '@/views/SearchView.vue'
import BookItemView from '@/views/BookItemView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/books',
      name: 'books',
      component: BooksView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/search/:filter?',
      name: 'search',
      props: route => ({
        filter: route.params.filter || "",
        q: route.query.q
      }),
      component: SearchView
    },
    {
      path: '/book/:id',
      name: 'bookItem',
      props: true,
      component: BookItemView
    }
  ]
})

export default router
