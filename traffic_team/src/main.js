// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Main from './components/Main.vue'
import Admin from './components/Admin.vue'
import Reedits from './components/Reedits.vue';
import Login from './components/Login.vue'
import AdminLogin from './components/AdminLogin.vue'
import User from './components/User.vue'
import Text1 from './components/Text1.vue'
import Text2 from './components/Text2.vue'
import Text3 from './components/Text3.vue'
import VueRouter from "vue-router";
import VueReource from "vue-resource";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
Vue.prototype.$http= axios;
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueReource);
Vue.use(ElementUI);
const routes = [

  { name: 'main', path: '/', component: Main
    /*, children:[{
      name :'text',path:'/text',component: Text
    }]*/},
  { name: 'reedits', path: '/main/reedits', component: Reedits},
  { name: 'admin', path: '/main/aloin/admin', component: Admin },
  { name: 'login', path: '/main/login', component: Login },
  { name: 'aloin', path: '/main/aloin', component: AdminLogin },
  { name: 'user', path: '/main/login/user', component: User,
    children:[
      { name: 'text1', path: '/main/login/user/text1', component: Text1 },
      { name: 'text2', path: '/main/login/user/text2', component: Text2 },
      { name: 'text3', path: '/main/login/user/text3', component: Text3 },
    ]},



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
  components: { App },
  template: '<App/>',
});
