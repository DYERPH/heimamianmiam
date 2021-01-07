import Vue from 'vue'
import VueRouter from 'vue-router'
// 到入vuex
import store from '@/store'
// 导入token
import { getToken } from '@/utils/token'
// 导入获取用户信息
import { auInfo } from '@/api/my'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/login',
    component: () => import('@/views/login/login')
  },
  {
    path: '/home',
    redirect: '/home/my',
    component: () => import('@/views/home/home'),
    children: [
      {
        path: '/home/my',
        component: () => import('@/views/home/my/my'),
        meta: {
          needLogin: true,
          needTabNav: true
        }
      },
      {
        path: '/home/edit',
        component: () => import('@/views/home/my/myEdit'),
        meta: {
          needLogin: true
        }
      },
      {
        path: '/home/editInfo',
        component: () => import('@/views/home/my/myEditItem'),
        meta: {
          needLogin: true
        }
      },
      {
        path: '/home/find',
        component: () => import('@/views/home/find/find'),
        meta: {
          needTabNav: true
        }
      },
      {
        path: '/home/question',
        component: () => import('@/views/home/question/question'),
        meta: {
          needLogin: true,
          needTabNav: true
        }
      },
      {
        path: '/home/company',
        component: () => import('@/views/home/company/company'),
        meta: {
          needTabNav: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
router.beforeEach((to, from, next) => {
  if (!to.meta.needLogin) {
    next()
  } else {
    if (store.state.isLogin) {
      next()
    } else {
      if (getToken('token')) {
        auInfo().then(res => {
          store.commit('setUserInfo', res.data.data)
          store.commit('setIsLogin', true)
          next()
        }).catch(() => {
        })
      } else {
        next('/login?redirect=' + to.fullPath)
      }
    }
  }
})

export default router
