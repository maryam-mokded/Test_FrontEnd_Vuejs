import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter)

const routes = [
  {
    name: "LoginPage",
    path: "/login",
    component: () =>
      import("@/components/Views/Login/login.vue"),
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/index',
    redirect: '/index/liste'
  },
  {
    path: '/index',
    name: 'IndexPage',
    component: () => import('@/components/Views/index.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        name: 'DashboardPage',
        path: 'dashboard',
        component: () => import('@/components/Views/Dashboard/dashboard.vue'),
        beforeEnter: (to, from, next) => {
          if (store.getters.isAdmin == true) {
            next();
          } else {
            router.go("-1");
          }
        },
      },
      {
        name: 'AccueilPage',
        path: 'accueil',
        component: () => import('@/components/Views/Accueil/accueil.vue'),

      },
      {
        name: 'UserListe',
        path: 'liste',
        component: () => import('@/components/Views/Listes/userListe.vue'),
        beforeEnter: (to, from, next) => {
          if (store.getters.isAdmin == true) {
            next();
          } else {
            router.go("-1");
          }
        },
      },
    ]
  },
 
  {
    path: "**",
    name: "PageNotFound",
    component: () =>
      import("@/components/PageNotFound.vue"),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next({
        path: '/login',
      });
    }
    next();   
  } else {
    next();
  }
});

export default router