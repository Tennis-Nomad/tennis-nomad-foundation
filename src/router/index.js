import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Programs from '../views/Programs.vue'
import Impact from '../views/Impact.vue'
import Donate from '../views/Donate.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/programs',
    name: 'Programs',
    component: Programs
  },
  {
    path: '/impact',
    name: 'Impact',
    component: Impact
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router



