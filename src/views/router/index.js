import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/HomePage';
import Login from '@/views/LoginPage';
import Signup from '@/views/SignupPage';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router