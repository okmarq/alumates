import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserLayout from '../views/user/Layout.vue'
import Conditions from '../views/user/Conditions.vue'
import Login from '../views/user/Login.vue'
import NewPassword from '../views/user/NewPassword.vue'
import Register from '../views/user/Register.vue'
import ResetPassword from '../views/user/ResetPassword.vue'
import Terms from '../views/user/Terms.vue'
import Alumni from '../view/alumni/Alumni.vue'
import JoinAlumni from '../view/alumni/Join.vue'
import ListAlumni from '../view/alumni/List.vue'
import RegisterAlumni from '../view/alumni/Register.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/user',
    name: 'UserLayout',
    component: UserLayout,
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
  {
    path: '/alumni',
    name: 'Alumni',
    component: Alumni,
    children: [
      {
        path: 'join',
        name: 'JoinAlumni',
        component: JoinAlumni
      },
      {
        path: 'list',
        name: 'ListAlumni',
        component: ListAlumni
      },
      {
        path: 'register',
        name: 'RegisterAlumni',
        component: RegisterAlumni
      }
    ]
  },
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
