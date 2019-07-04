<template>
  <el-form label-width="80px">
    <el-form-item label="账号">
      <el-input v-model="schoolid"></el-input>
    </el-form-item>
    <el-form-item label="旧密码">
      <el-input type="password" v-model="password1"></el-input>
    </el-form-item>
    <el-form-item label="新密码">
      <el-input type="password" v-model="password2"></el-input>
    </el-form-item>
    <el-form-item label="联系方式">
      <el-input v-model="tel"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="adminname"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即修改</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        tel: '',
        adminname: '',
        schoolid: '',
        password1:"",
        password2:'',
      }
    },
    methods: {
      onSubmit() {
        this.$http({
          method: 'get',
          url: 'http://localhost:9527/traffic/admin/alteradmin?tel=' + this.tel + '&adminname=' + this.adminname + '&schoolid=' + this.schoolid+'&password1='+this.password1+'&password2='+this.password2,
        }).then(response => {
          const data = response.data;
          console.log(data);
          if (data == 0 || data == -1) {
            const {$router} = this;
            $router.push({name: 'defeat1'})
          }
          else {
            const {$router} = this;
            $router.push({name: 'x1'})
          }
        })
      }
    }
  }
</script>
