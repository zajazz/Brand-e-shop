import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
    ref: 'Home',
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../pages/Cart.vue'),
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../pages/Checkout.vue'),
  },
  {
    path: '/catalog/',
    name: 'Catalog',
    props: true,
    component: () => import('../pages/Catalog.vue'),
    children: [
      {
        path: ':id',
        component: () => import('../pages/Catalog.vue'),
      },
      {
        path: ':id/:subid',
        component: () => import('../pages/Catalog.vue'),
      },
    ],
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('../pages/Product.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
