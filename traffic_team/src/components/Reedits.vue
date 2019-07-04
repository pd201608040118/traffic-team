<template>
  <el-form label-width="80px">

    <el-form-item label="院校">
      <el-select v-model="school" placeholder="不能为空">
        <el-option label="中原工学院" value="中原工学院"></el-option>
        <el-option label="郑州铁路职业技术学院" value="郑州铁路职业技术学院"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="学号">
      <el-input v-model="stuId" placeholder="不能为空"></el-input>
    </el-form-item>

    <el-form-item label="姓名">
      <el-input v-model="stuName" placeholder="不能为空"></el-input>
    </el-form-item>

    <el-form-item label="联系方式">
      <el-input v-model="tel" placeholder="不能为空"></el-input>
    </el-form-item>

    <el-form-item label="职位">
      <el-select v-model="profession" placeholder="不能为空">
        <el-option label="教师" value="教师"></el-option>
        <el-option label="学生" value="学生"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="密码">
      <el-input v-model="password" type="password" placeholder="不能为空"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即注册</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>

</template>
<script>
  export default {
    data() {
      return {
        school:'',
        stuId:'',
        stuName:'',
        tel:'',
        profession:'',
        password:''
      }
    },
    methods:{
      onSubmit(){
        this.$http({
          method: 'get',
          url: 'http://localhost:9527/traffic/student/regedit?school=' + this.value + '&stuId=' + this.stuId + '&stuName=' + this.stuName + '&tel=' + this.tel + '&profession=' + this.profession + '&password=' + this.password,
        }).then(response => {
          const data = response.data;
          console.log(data);
          if (data == 0) {
            this.error.password = "用户已存在,请重新输入";
          }
          else if(data==-1)
            this.error.password = "用户已存在,请重新输入";
          else {
            const {$router} = this
            $router.push({name: "user"})
          }
        })
      }
    }
  }
</script>
