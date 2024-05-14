import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BooksView from '@/views/BooksView.vue'
import LoginView from '@/views/AccountView.vue'
import SearchView from '@/views/SearchView.vue'
import BookDetails from '@/views/BookDetailsView.vue'
import AccountDetails from '@/components/AccountDetails.vue'

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
      path: '/search/:filter?', // Remove "name" parameter
      name: 'search',
      props: route => ({
        filter: route.params.filter || "", // Access filter parameter
        q: route.query.q // Access name query parameter
      }),
      component: SearchView
    },
    {
      path: '/book/:id',
      name: 'book',
      component: BookDetails
    },
    {
      path: '/user/:id',
      name: 'user',
      component: AccountDetails
    }
  ]
})

export default router
