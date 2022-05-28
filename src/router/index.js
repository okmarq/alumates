import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserLayout from '../views/user/Layout.vue'
import Conditions from '../views/user/Conditions.vue'
import Login from '../views/user/Login.vue'
import NewPassword from '../views/user/NewPassword.vue'
import Register from '../views/user/Register.vue'
import ResetPassword from '../views/user/ResetPassword.vue'
import Terms from '../views/user/Terms.vue'
import AlumniLayout from '../views/alumni/Layout.vue'
import JoinAlumni from '../views/alumni/Join.vue'
import ListAlumni from '../views/alumni/List.vue'
import AlumniPopup from '../views/alumni/Popup.vue'
import ConnectUser from '../views/alumni/ConnectUser.vue'
import DownloadApp from '../views/alumni/DownloadApp.vue'
import FindUser from '../views/alumni/FindUser.vue'
import NotRegistered from '../views/alumni/NotRegistered.vue'
import RegisterSchool from '../views/alumni/Register.vue'

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
    name: 'AlumniLayout',
    component: AlumniLayout,
    children: [
      {
        path: 'join',
        name: 'JoinAlumni',
        component: JoinAlumni,
        children: [
          {
            path: 'popup',
            name: 'AlumniPopup',
            component: AlumniPopup
          }
        ]
      },
      {
        path: 'list',
        name: 'ListAlumni',
        component: ListAlumni,
        props: route => ({ page: parseInt(route.query.page) || 1 }),
        children: [
          {
            path: '/popup',
            name: 'AlumniPopup',
            component: AlumniPopup,
            children: [
              {
                path: 'find',
                name: 'FindUser',
                component: FindUser
              },
              {
                path: 'connect',
                name: 'ConnectUser',
                component: ConnectUser,
                children: [
                  {
                    path: 'download',
                    name: 'DownloadApp',
                    component: DownloadApp
                  }
                ]
              },
              {
                path: 'register',
                name: 'RegisterSchool',
                component: RegisterSchool
              }
            ]
          }
        ]
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
