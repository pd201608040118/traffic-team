<template>
  <el-form label-width="80px">
    <el-form-item label="账号">
      <el-input v-model="stuid"></el-input>
    </el-form-item>
    <el-form-item label="旧密码">
      <el-input type="password" v-model="password1"></el-input>
    </el-form-item>
    <el-form-item label="新密码">
      <el-input type="password" v-model="password2"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="stuname"></el-input>
    </el-form-item>
    <el-form-item label="联系方式">
      <el-input v-model="tel"></el-input>
    </el-form-item>
    <el-form-item label="职位">
      <el-select v-model="profession" placeholder="不能为空">
        <el-option label="教师" value="教师"></el-option>
        <el-option label="学生" value="学生"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="院校">
      <el-select v-model="school" placeholder="不能为空">
        <el-option label="中原工学院" value="中原工学院"></el-option>
        <el-option label="郑州铁路职业技术学院" value="郑州铁路职业技术学院"></el-option>
      </el-select>
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
        stuid:'',
        stuname:'',
        school:'',
        tel: '',
        profession: '',
        password1:'',
        password2: '',
      }
    },
    methods: {
      onSubmit() {
          this.$http({
            method: 'get',
            url: 'http://localhost:9527/traffic/student/update?school=' + this.school + '&stuid=' + this.stuid + '&stuname=' + this.stuname + '&tel=' + this.tel + '&profession=' + this.profession+'&password='+this.password,
          }).then(response => {
            const data = response.data;
            console.log(data);
            if (data == 0 || data == -1) {
              const {$router} = this;
              $router.push({name: 'defeat1'})
            }
            else {
              const {$router} = this;
              $router.push({name: 'x2'})
            }
          })
        }
    }
  }
</script>
