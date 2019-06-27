<template>
  <div class="login">
    <h1>Login</h1>
    <!--账号-->
    <div class="input-wrap">
      账号<input type="text" v-model="stuId"/>
      <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>
    <!--密码-->
    <div class="input-wrap">
      密码<input type="password" v-model="password"/>
      <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
    </div>
    <div class="input-wrap">
      <!--@click.stop.prevent="doClick($event)"-->
      <button @click="login" >登录</button>
      <button @click="traffic_register">注册</button>
    </div>
  </div>
</template>

<script>

  import $router from "element-ui/packages/col/src/col";

  export default {
    data() {
      return {
        stuId: '',
        password: '',
        stuName: '',
        error: {
          name: '',
          password: ''
        }
      }
    },

    methods: {
      /*      addCart(event) {
              Bus.$emit('getTarget', event.target);
            },*/
      check(stuid, password) {
        if (!stuid) {
          this.error.stuid = '请输入姓名';
          return false
        }
        else if (!password) {
          this.error.password = '请输入密码';
          return false
        }
        return true
      },
      login() {
        this.$http({
          method: 'get',
          url: 'http://localhost:9527/traffic/student/login?stuid=' + this.stuId + '&password=' + this.password,
        }).then(response => {
          const data = response.data;
          this.stuName = data['stuName'];
          console.log(data['stuName']);
          if (this.stuName != null) {
            const {$router} = this;
            $router.push({name: "user"});
          }
          else {
            this.error.name = "请重新输入";
          }
        })
      },
      traffic_register() {
        const {$router} = this;
        $router.push({name: 'reedits'});
      }
    }
  }
</script>

<style>
  .login {
    width: 300px;
    margin: 10% auto;
  }

</style>
