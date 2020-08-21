import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Main from '../components/Main.vue';

Vue.use(VueRouter);

const routes = [



  {
    path: '/',
    name: 'Main',
    component: () => import('../components/Main.vue'),
  },
  {
    path: '/info',
    name: 'Info',

    component: () => import('../components/ViewMore.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
