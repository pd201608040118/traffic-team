<template>
  <div class="paper">
    <h3 class="login_title">系统登录</h3>
    <!--账号-->
    <!--<el-form :inline="true">
      <el-form-item>
        <el-select v-model="people" placeholder="请选择登录方式">
          <el-option label="普通用户" value="普通用户"></el-option>
          <el-option label="管理员" value="管理员"></el-option>
        </el-select>
      </el-form-item>
    </el-form>-->
    <div style="margin-bottom:50px;">
      账号<input type="text" v-model="stuId"/>
      <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>
    <div style="margin-bottom:50px;">
      密码<input type="password" v-model="password"/>
      <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
    </div>
    <div style="margin-bottom:50px;">
      <label><input @click="getRadioVal" type="radio" name="type" value=1 v-model="cradio">普通用户</label>
      <label><input @click="getRadioVal" type="radio" name="type" value=2 v-model="cradio">管理员</label>
      <label><input @click="getRadioVal" type="radio" name="type" value=3 v-model="cradio">超级管理员</label>
    </div>
    <div>
      <button @click="login">登录</button>
      <button @click="traffic_register">注册</button>
    </div>
  </div>
</template>
<script>

  import $router from "element-ui/packages/col/src/col";

  export default {
    data() {
      return {
        cradio: '',
        stuId: '',
        password: '',
        stuName: '',
        people: '',
        error: {
          name: '',
          password: ''
        }
      }
    },

    methods: {
      getRadioVal(event) {
        var x1 = event.target.value;
        console.log(x1);
      },
      login() {
        if (this.cradio == 1) {
          this.$http({
            method: 'get',
            url: 'http://localhost:9527/traffic/student/login?stuId=' + this.stuId + '&password=' + this.password,
          }).then(response => {
            const data = response.data;
            this.stuName = data['stuId'];
            console.log(data['stuName']);
            if (this.stuName != null) {
              /*            sessionStorage.setItem("setname",response.data().res.stuName);
                          this.$store.dispatch("username",response.data().res.stuName);*/
              const {$router} = this;
              $router.push({name: "user"});
            }
            else {
              this.error.name = "请重新输入";
            }
          })
        }
        else if (this.cradio == 2) {
          this.$http({
            method: 'get',
            url: 'http://localhost:9527/traffic/admin/login?stuId=' + this.stuId + '&password=' + this.password,
          }).then(response => {
            const data = response.data;
            this.stuName = data['schoolName'];
            console.log(this.stuName);
            if (this.stuName != null) {
              const {$router} = this;
              $router.push({name: "admin"})
            }
            else {
              this.error.name = "请核对你的账号和密码";
            }
          })
        }
        else if (this.cradio == 3) {
          //
        }
      }
    },
    traffic_register() {
      const {$router} = this;
      $router.push({name: 'reedits'});
    }
  }
</script>

<style>
  .paper {
    /*background: url("/static/img/p2.jpg") no-repeat;*/
    height: 600px;
    width: 100%;
    background-size: cover;
    text-align: center;
    /*position: fixed;*/
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

</style>
