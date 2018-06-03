import Vue from 'vue';
import Router from 'vue-router';
import Landing from './views/Landing';
import Login from './views/Login';
import SignUp from './views/SignUp';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
  ]
});
