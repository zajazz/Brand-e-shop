import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
    meta: {
      bcLinkText: 'Home',
    },
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('@/pages/Info.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../pages/Cart.vue'),
    meta: {
      bcLinkText: 'Cart',
    },
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../pages/Checkout.vue'),
    meta: {
      bcLinkText: 'Checkout',
    },
  },
  {
    path: '/catalog/',
    name: 'Catalog',
    props: true,
    component: () => import('../pages/Catalog.vue'),
    meta: {
      bcLinkText: 'Catalog'
    },
    children: [
      {
        path: ':id',
        name: 'Category',
        component: () => import('../pages/Catalog.vue'),
        meta: {
          bcDynamic: true,
          bcGetter: 'activeCategory', // <breadcrumb> will use this getter to get current category from vuex
          bcLinkText: (cat) => cat.name, // link text
          bcLoadingText: '...' // This will be shown while data is loading
        },
        children: [
          {
            path: ':subid',
            component: () => import('../pages/Catalog.vue'),
            meta: {
              bcDynamic: true,
              bcGetter: 'activeSubCategory',
              bcLinkText: (subcat) => subcat.name,
              bcLoadingText: '...'
            },
          },
        ],
      },
    ],
  },
  {
    path: '/product/:id',
    name: 'Product',
    props: true, // Pass route.params to props
    component: () => import('../pages/Product.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
