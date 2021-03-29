import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('../views/login/index.vue')
  },
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
    redirect: '/xmk/1',
    component: () => import(/* webpackChunkName: "about" */ '../views/xmk/xmk.vue'),
    children: [
      {
        path: '1',
        component: () => import('../views/xmk/contentModules/lxlz/index.vue')
      },
      {
        path: '2',
        component: () => import('../views/xmk/contentModules/zbcg/index.vue')
      },
      {
        path: '3',
        component: () => import('../views/xmk/contentModules/htqd/index.vue')
      }, {
        path: ':any',
      }
    ]
  },
  {
    path: '/formFactory/addOrEdit',
    component: () => import('../components/formFactory/f0.vue')
  },
  {
    path: '/formFactory/addOrEdit1',
    component: () => import('../components/formFactory/f1/f1.vue')
  },
  {
    path: '/formFactory/addOrEdit2',
    component: () => import('../components/formFactory/f1/f2.vue')
  },
  {
    path: '/formFactory/addOrEdit3',
    component: () => import('../components/formFactory/f1/f3.vue')
  },
  {
    path: '/formFactory/addOrEdit4',
    component: () => import('../components/formFactory/f1/f4.vue')
  },
  {
    path: '/formFactory/addOrEdit5',
    component: () => import('../components/formFactory/f2/f5.vue')
  },
  {
    path: '/formFactory/addOrEdit6',
    component: () => import('../components/formFactory/f2/f6.vue')
  },
  {
    path: '/formFactory/addOrEdit7',
    component: () => import('../components/formFactory/f3/f7.vue')
  },
  {
    path: '/formFactory/addOrEdit8',
    component: () => import('../components/formFactory/f3/f8.vue')
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
  },
  {
    name: 'ddd',
    path: "/tjgc",
    component: () => import('../views/tjgc/index.vue')
  }, {
    path: '/tjgc/addOrEdit',
    component: () => import('../views/tjgc/create.vue')
  },
  {
    path: '/tjgc/edit',
    component: () => import('../views/tjgc/edit.vue')
  },
  {
    path: '/tjgc/detail',
    component: () => import('../views/tjgc/detail.vue'),
    children: [
      {
        path: '1',
        component: () => import('../views/tjgc/details/1.vue'),
      },
      {
        path: '2',
        component: () => import('../views/tjgc/details/2.vue'),
      },
      {
        path: '3',
        component: () => import('../views/tjgc/details/3.vue'),
      }

    ]
  },
  {
    path: '/tjgc/detailSh',
    component: () => import('../views/tjgc/detailSh.vue')
  }
  , {
    path: '/hzf',
    component: () => import('../views/hzf/index.vue')
  },
  {
    path: '/jdcx',
    component: () => import('../views/jdcx/index.vue')
  },

  {
    path: '/formFactory/detail1',
    component: () => import('../views/formlist/xm1/formDetail.vue')
  },
  {
    path: '/formFactory/detail2',
    component: () => import('../views/formlist/xm1/formDetail2.vue')
  },
  {
    path: '/formFactory/detail3',
    component: () => import('../views/formlist/xm1/formDetail3.vue')
  },
  {
    path: '/formFactory/detail4',
    component: () => import('../views/formlist/xm1/formDetail4.vue')
  },
  {
    path: '/formFactory/detail5',
    component: () => import('../views/formlist/xm1/formDetail5.vue')
  },
  {
    path: '/formFactory/detail6',
    component: () => import('../views/formlist/xm1/formDetail6.vue')
  },
  {
    path: '/formFactory/detail7',
    component: () => import('../views/formlist/xm1/formDetail7.vue')
  },
  {
    path: '/formFactory/detail8',
    component: () => import('../views/formlist/xm1/formDetail8.vue')
  }

]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => { return record.meta.requiresAuth })) {
//     store.dispatch('checkLogin').then(isLogin => {
//       if (!isLogin) {
//         next({ path: '/login', query: { redirect: to.fullPath } })
//       } else { next() }
//     })
//   } else { next() }
// })

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
export default router
