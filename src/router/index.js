import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/IndexView.vue'),
      },
      {
        path: '/products',
        component: () => import('../views/FrontProducts.vue'),
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('../views/FrontProduct.vue'),
      },
      {
        path: '/cart',
        component: () => import('../views/FrontCart.vue'),
      },
      {
        path: '/articles',
        component: () => import('../views/FrontArticles.vue'),
      },
      {
        path: '/article/:id',
        name: 'article',
        component: () => import('../views/FrontArticle.vue'),
      },
    ],
  },
  // 登入
  {
    path: '/login',
    component: () => import('../views/LoginView.vue'),
  },
  //  DashBoard Pages
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/DashboardProducts.vue'),
      },
      {
        path: 'product/:productId',
        component: () => import('../views/DashboardProduct.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/DashboardOrders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/DashboardCoupons.vue'),
      },
      {
        path: 'articles',
        component: () => import('../views/DashboardArticles.vue'),
      },
      {
        path: 'article/:articleId',
        component: () => import('../views/DashboardArticle.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/FrontCart.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
