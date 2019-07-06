// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Main from './components/Main.vue'
import Admin from './components/Admin.vue'
import Reedits from './components/Reedits.vue';
import Login from './components/MainVUE/Login.vue'
import User from './components/User.vue'
import U_PIM from './components/User/U_PIM.vue'
import UFindInfor from './components/UFindInfor.vue'
import A_PIM from './components/Admin/A_PIM.vue'
import AUserControll from './components/Admin/AUserControll.vue'
import UploadInfor from './components/Admin/UploadInfor.vue'
import FindInfor from './components/Admin/FindInfor.vue'
import HelpYou from './components/HelpYou.vue'
import DeleteInfor from './components/Admin/DeleteInfor.vue'
import DeleteUser from './components/Admin/DeleteUser.vue'
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
      {name: 'reedits', path: '/main/reedits', component: Reedits},
    ]
  },
  {name: 'test', path: '/main/test', component: test},
  {
    name: 'admin', path: '/main/aloin/admin', component: Admin,
    children: [
      {name: 'a_pim', path: '/main/aloin/admin/a_pim', component: A_PIM},
      {name: 'ausercontrol', path: '/main/aloin/admin/ausercontrol', component: AUserControll},
      {name: 'uploadinfor', path: '/main/aloin/admin/uploadinfor', component: UploadInfor},
      {name: 'findinfor', path: '/main/aloin/admin/findinfor', component: FindInfor},
      {name: 'deleteinfor', path: '/main/aloin/admin/deleteinfor', component: DeleteInfor},
      {name: 'deleteuser', path: '/main/aloin/admin/deleteuser', component: DeleteUser},
      {name: 'helpyou', path: '/main/helpyou', component: HelpYou},
      {name: 'success1', path: '/main/aloin/admin/success1', component: Success1},
      {name: 'defeat1', path: '/main/aloin/admin/defeat1', component: Defeat1},
      {name: 'x1', path: '/main/aloin/admin/x1', component: x1},
    ]
  },
  {
    name: 'user', path: '/main/login/user', component: User,
    children: [
      {name: 'u_pim', path: '/main/login/user/u_pim', component: U_PIM},
      {name: 'ufindinfor', path: '/main/login/user/ufindinfor', component: UFindInfor},
      {name: 'x2', path: '/main/login/user/x2', component: x2},
      {name: 'helpyou', path: '/main/helpyou', component: HelpYou},
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
