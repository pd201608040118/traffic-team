<template xmlns="">
  <el-form label-width="80px">
    <el-form-item label="姓名">
      <el-input v-model="stuname"></el-input>
    </el-form-item>
    <el-form-item label="学校">
      <el-input v-model="school"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即删除</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        stuname: '',
        school: '',
      }
    },
    methods: {
      onSubmit() {
        this.$http({
          method: 'get',
          url: 'http://localhost:9527/traffic/admin/deletestudent?stuname=' + this.stuname+'&school='+this.school,
        }).then(response => {
          const data = response.data;
          console.log(data);
          const {$router} = this;
          $router.push({name: 'success1'})
        })
      }
    }
  }
</script>
