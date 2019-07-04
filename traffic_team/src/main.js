// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Main from './components/Main.vue'
import Admin from './components/Admin.vue'
import Reedits from './components/Reedits.vue';
import Login from './components/Login.vue'
import AdminLogin from './components/AdminLogin.vue'
import User from './components/User.vue'
import U1 from './components/U1.vue'
import U2 from './components/U2.vue'
import U3 from './components/U3.vue'
import Text1 from './components/Text1.vue'
import Text2 from './components/Text2.vue'
import Text3 from './components/Text3.vue'
import Text4 from './components/Text4.vue'
import Text5 from './components/Text5.vue'
import Text6 from './components/Text6.vue'
import Text7 from './components/Text7.vue'
import Text8 from './components/Text8.vue'
import Text9 from './components/Text9.vue'
import test from './components/test.vue'
import x1 from './components/x1.vue'
import x2 from './components/x2.vue'
import Success1 from './components/Success1.vue'
import Defeat1 from './components/Defeat1.vue'
import VueRouter from "vue-router";
import VueReource from "vue-resource";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

import 'vue-easytable/libs/themes-base/index.css';
import {VTable, VPagination} from 'vue-easytable';

Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);

const Main123 = resolve => require(['@/components/Main'], resolve);
axios.defaults.withCredentials = true
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueReource);
Vue.use(ElementUI);
const routes = [
  {
    name: 'main', path: '/', component: Main,
    children: [
      {name: 'login', path: '/login', component: Login},
      {name: 'aloin', path: '/main/aloin', component: AdminLogin},
      {name: 'reedits', path: '/main/reedits', component: Reedits},
    ]
  },
  {
    name: 'admin', path: '/main/aloin/admin', component: Admin,
    children: [
      {name: 'a1', path: '/main/aloin/admin/a1', component: Text1},
      {name: 'a2', path: '/main/aloin/admin/a2', component: Text2},
      {name: 'a3', path: '/main/aloin/admin/a3', component: Text3},
      {name: 'a4', path: '/main/aloin/admin/a4', component: Text4},
      {name: 'a5', path: '/main/aloin/admin/a5', component: Text5},
      {name: 'a6', path: '/main/aloin/admin/a6', component: Text6},
      {name: 'a7', path: '/main/aloin/admin/a7', component: Text7},
      {name: 'a8', path: '/main/aloin/admin/a8', component: Text8},
      {name: 'success1', path: '/main/aloin/admin/success1', component: Success1},
      {name: 'defeat1', path: '/main/aloin/admin/defeat1', component: Defeat1},
      {name: 'x1', path: '/main/aloin/admin/x1', component: x1},
      {name: 'a9', path: '/main/aloin/admin/a9', component: Text9},
    ]
  },
  {
    name: 'user', path: '/main/login/user', component: User,
    children: [
      {name: 'u1', path: '/main/login/user/u1', component: U1},
      {name: 'u2', path: '/main/login/user/u2', component: U2},
      {name: 'u3', path: '/main/login/user/u3', component: U3},
      {name: 'x2', path: '/main/login/user/x2', component: x2},
      {name: 'au6', path: '/main/login/user/au6', component: Text6},

    ]
  },


];
var router = new VueRouter({
  routes
});
var App = {
  template: '<router-view></router-view>'
};
new Vue({
  el: '#app',
  router, //等价于 router: router
  components: {App},
  template: '<App/>',
});
