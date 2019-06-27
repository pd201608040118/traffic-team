<template>
  <div class="aloin">
    <h1>AdminLogin</h1>
    <!--账号-->
    <div class="input-wrap">
      账号<input type="text" v-model="schoolid"/>
      <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>
    <!--密码-->
    <div class="input-wrap">
      密码<input type="password" v-model="password"/>
      <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
    </div>
    <div class="input-wrap">
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>

  import $router from "element-ui/packages/col/src/col";


  export default {
    data() {
      return {
        schoolid: '',
        password: '',
        stuName: '',
        handleSelect:'',
        error: {
          name: '',
          pwd: ''
        }
      }
    },

    methods: {
      check(schoolid, password) {
        if (!schoolid) {
          this.error.name = '请输入姓名'
          return false
        }
        else if (!password) {
          this.error.pwd = '请输入密码'
          return false
        }
        return true
      },
      login() {
        this.$http({
          method: 'get',
          url: 'http://localhost:9527/traffic/admin/login?schoolid=' + this.schoolid + '&password=' + this.password,
        }).then(response => {
          const data = response.data;
          this.stuName=data['schoolName'];
          console.log(this.stuName);
          if (this.stuName!=null) {
            const {$router} = this;
            $router.push({name: "admin"})
          }
          else {
            this.error.name = "请核对你的账号和密码";
          }
        })
      }
    }
  }
</script>

<style>
  .aloin {
    width: 300px;
    margin: 10% auto;
  }


</style>
