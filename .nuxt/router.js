import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3e9ed0fe = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _2493a67a = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _61b81a02 = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _38006f54 = () => interopDefault(import('../pages/comments/index.vue' /* webpackChunkName: "pages/comments/index" */))
const _3d235a14 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _30cd7f46 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _edae0c72 = () => interopDefault(import('../pages/orders/index.vue' /* webpackChunkName: "pages/orders/index" */))
const _4a0e2fc6 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _0bb7af46 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _0c6ff1fb = () => interopDefault(import('../pages/saved/index.vue' /* webpackChunkName: "pages/saved/index" */))
const _4755243a = () => interopDefault(import('../pages/signup/index.vue' /* webpackChunkName: "pages/signup/index" */))
const _5016f0e6 = () => interopDefault(import('../pages/supports/index.vue' /* webpackChunkName: "pages/supports/index" */))
const _6b638a92 = () => interopDefault(import('../pages/profile/edit/index.vue' /* webpackChunkName: "pages/profile/edit/index" */))
const _0ea128d1 = () => interopDefault(import('../pages/supports/_id/index.vue' /* webpackChunkName: "pages/supports/_id/index" */))
const _29440243 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3e9ed0fe,
    name: "about"
  }, {
    path: "/admin",
    component: _2493a67a,
    name: "admin"
  }, {
    path: "/cart",
    component: _61b81a02,
    name: "cart"
  }, {
    path: "/comments",
    component: _38006f54,
    name: "comments"
  }, {
    path: "/contact",
    component: _3d235a14,
    name: "contact"
  }, {
    path: "/login",
    component: _30cd7f46,
    name: "login"
  }, {
    path: "/orders",
    component: _edae0c72,
    name: "orders"
  }, {
    path: "/products",
    component: _4a0e2fc6,
    name: "products"
  }, {
    path: "/profile",
    component: _0bb7af46,
    name: "profile"
  }, {
    path: "/saved",
    component: _0c6ff1fb,
    name: "saved"
  }, {
    path: "/signup",
    component: _4755243a,
    name: "signup"
  }, {
    path: "/supports",
    component: _5016f0e6,
    name: "supports"
  }, {
    path: "/profile/edit",
    component: _6b638a92,
    name: "profile-edit"
  }, {
    path: "/supports/:id",
    component: _0ea128d1,
    name: "supports-id"
  }, {
    path: "/",
    component: _29440243,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
