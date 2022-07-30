import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0adbd527 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _17e16a69 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _0008e0c8 = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _21fae0f0 = () => interopDefault(import('../pages/comments/index.vue' /* webpackChunkName: "pages/comments/index" */))
const _ed14738c = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _11c47e03 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _b7351e3e = () => interopDefault(import('../pages/orders/index.vue' /* webpackChunkName: "pages/orders/index" */))
const _efed6f40 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _46769483 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _369b2fa1 = () => interopDefault(import('../pages/saved/index.vue' /* webpackChunkName: "pages/saved/index" */))
const _62919b54 = () => interopDefault(import('../pages/signup/index.vue' /* webpackChunkName: "pages/signup/index" */))
const _e3dbed00 = () => interopDefault(import('../pages/supports/index.vue' /* webpackChunkName: "pages/supports/index" */))
const _1acb1e05 = () => interopDefault(import('../pages/products/cart/index.vue' /* webpackChunkName: "pages/products/cart/index" */))
const _e2e673a8 = () => interopDefault(import('../pages/profile/edit/index.vue' /* webpackChunkName: "pages/profile/edit/index" */))
const _31ca646b = () => interopDefault(import('../pages/supports/_id/index.vue' /* webpackChunkName: "pages/supports/_id/index" */))
const _2d7ff469 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0adbd527,
    name: "about"
  }, {
    path: "/admin",
    component: _17e16a69,
    name: "admin"
  }, {
    path: "/cart",
    component: _0008e0c8,
    name: "cart"
  }, {
    path: "/comments",
    component: _21fae0f0,
    name: "comments"
  }, {
    path: "/contact",
    component: _ed14738c,
    name: "contact"
  }, {
    path: "/login",
    component: _11c47e03,
    name: "login"
  }, {
    path: "/orders",
    component: _b7351e3e,
    name: "orders"
  }, {
    path: "/products",
    component: _efed6f40,
    name: "products"
  }, {
    path: "/profile",
    component: _46769483,
    name: "profile"
  }, {
    path: "/saved",
    component: _369b2fa1,
    name: "saved"
  }, {
    path: "/signup",
    component: _62919b54,
    name: "signup"
  }, {
    path: "/supports",
    component: _e3dbed00,
    name: "supports"
  }, {
    path: "/products/cart",
    component: _1acb1e05,
    name: "products-cart"
  }, {
    path: "/profile/edit",
    component: _e2e673a8,
    name: "profile-edit"
  }, {
    path: "/supports/:id",
    component: _31ca646b,
    name: "supports-id"
  }, {
    path: "/",
    component: _2d7ff469,
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
