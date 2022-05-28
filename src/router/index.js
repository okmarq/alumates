import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignLayout from '../views/sign/Layout.vue'
import Conditions from '../views/sign/Conditions.vue'
import Login from '../views/sign/Login.vue'
import NewPassword from '../views/sign/NewPassword.vue'
import Register from '../views/sign/Register.vue'
import ResetPassword from '../views/sign/ResetPassword.vue'
import Terms from '../views/sign/Terms.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/user',
    name: 'SignLayout',
    component: SignLayout,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'new',
        name: 'NewPassword',
        component: NewPassword
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      },
      {
        path: 'forgot',
        name: 'ResetPassword',
        component: ResetPassword
      },
      {
        path: 'terms',
        name: 'Terms',
        component: Terms
      },
      {
        path: 'conditions',
        name: 'Conditions',
        component: Conditions
      }
    ]
  },
  // {
  //   path: '/user/list',
  //   name: 'UserList',
  //   component: UserList
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
