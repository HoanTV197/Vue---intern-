import { createRouter, createWebHistory } from 'vue-router';
import JwtService from '../services/jwt.service';
//import {ORDER} from "@/utils/constant.ts";

const router = createRouter({
  // @ts-ignore
  mode: 'history',
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
      meta: { layout: 'LayoutDefault', key: 'type_exam' },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/auth/Login.vue'),
      meta: { layout: 'LayoutAuth', key: 'login' },
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/dashboard/Dashboard.vue'),
      meta: { layout: 'LayoutDefault', key: 'dashboard' },
    },
    {
      path: '/category',
      name: 'ListCategory',
      component: () => import('../views/category/List.vue'),
      meta: { layout: 'LayoutDefault', key: 'category' },
    },
    {
      path: '/category/add-category',
      name: 'AddCategory',
      component: () => import('../views/category/AddCategory.vue'),
      meta: { layout: 'LayoutDefault', key: 'add-category' },
    },
    {
      path: '/category/update-category/:category_id',
      name: 'UpdateCategory',
      component: () => import('../views/category/UpdateCategory.vue'),
      meta: { layout: 'LayoutDefault', key: 'update-category' },
    },
    {
      path: '/attribute',
      name: 'ListTypeExam',
      component: () => import('../views/auth/Login.vue'),
      meta: { layout: 'LayoutDefault', key: 'attribute' },
    },
    {
      path: '/tag',
      name: 'ListExam',
      component: () => import('../views/auth/Login.vue'),
      meta: { layout: 'LayoutDefault', key: 'tag' },
    },
    {
      path: '/product',
      name: 'ListProduct',
      component: () => import('../views/product/Product.vue'),
      meta: { layout: 'LayoutDefault', key: 'product' },
    },
    {
      path: '/product/add-product',
      name: 'AddProduct',
      component: () => import('../views/product/AddProduct.vue'),
      meta: { layout: 'LayoutDefault', key: 'add-product' },
    },
    {
      path: '/product/update-product/:product_id',
      name: 'UpdateProduct',
      component: () => import('../views/product/UpdateProduct.vue'),
      meta: { layout: 'LayoutDefault', key: 'update-product' },
    },
    {
      path: '/order',
      name: 'listOrder',
      component: () => import('../views/order/Order.vue'),
      meta: { layout: 'LayoutDefault', key: 'order' },
    },
    {
      path: '/order/order-detail/:order_id',
      name: 'orderDetail',
      component: () => import('../views/order/OrderDetail.vue'),
      meta: { layout: 'LayoutDefault', key: 'order-detail' },
    },
    {
      path: '/warehouse',
      name: 'listSchedule',
      component: () => import('../views/warehouse/Warehouse.vue'),
      meta: { layout: 'LayoutDefault', key: 'warehouse' },
    },
    {
      path: '/store',
      name: 'listCompany',
      component: () => import('../views/store/Store.vue'),
      meta: { layout: 'LayoutDefault', key: 'store' },
    },
    {
      path: '/promotion',
      name: 'listCompany1',
      component: () => import('../views/promotion/Promotion.vue'),
      meta: { layout: 'LayoutDefault', key: 'promotion' },
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('../views/news/News.vue'),
      meta: { layout: 'LayoutDefault', key: 'news' },
    },
    {
      
        path: '/news/news-detail/:id',
        name: 'NewsDetail',
        component: () => import('../views/news/NewsDetail.vue'),
       
      meta: { layout: 'LayoutDefault', key: 'news-detail' },
    },
    {
      path: '/news/add-news',
      name: 'AddNews',
      component: () => import('../views/news/AddNews.vue'),
      meta: { layout: 'LayoutDefault', key: 'add-news' },
    }
  ],
});

router.beforeEach(async (to, _, next) => {
  if (!JwtService.getToken()) {
    if (to.name !== 'Login') {
      next('/login');
    } else {
      next();
    }
  } else {
    if (to.name == 'Login') {
      next('/');
    } else {
      next();
    }
  }
});
export default router;
