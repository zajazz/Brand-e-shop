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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../pages/Cart.vue'),
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../pages/Checkout.vue'),
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../pages/Catalog.vue'),
  },
  {
    path: '/product*',
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
