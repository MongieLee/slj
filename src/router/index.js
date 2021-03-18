import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/xmk'
  },

  {
    path: '/xmk',
    name: 'xmk',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/xmk/xmk.vue'),
    children: [
      {
        path: 'detail',
        component: () => import('../views/formC.vue')
      }]
  },
  {
    path: '/formFactory/detail',
    name: 'jjj',
    component: () => import('../views/formC.vue')
  },
  {
    path: '/formFactory/addOrEdit',
    name: 'xxx',
    component: () => import('../components/formFactory/index.vue')
  },
  {
    path: '/gcjd',
    name: 'gcjd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/gcjd/gcjd.vue')
  },
  {
    path: '/lcgl',
    name: 'lcgl',
    component: () => import('../views/lcgl/index.vue')
  }, {
    path: '/lct/detail',
    name: 'detail',
    component: () => import('../components/G6/lcD.vue')
  }, {
    name: 'fuck',
    path: "/flow/addOrEdit",
    component: () => import('../components/G6/G6AddOrEdit.vue')
  }


]

const router = new VueRouter({
  routes
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
export default router
