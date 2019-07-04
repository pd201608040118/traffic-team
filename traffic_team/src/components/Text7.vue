<template>
  <el-form label-width="80px">
    <el-form-item label="标题">
      <el-input v-model="title"></el-input>
    </el-form-item>
    <el-form-item label="时间">
      <el-input v-model="inforTime" placeholder="如:2017/3/20"></el-input>
    </el-form-item>
    <el-form-item label="内容">
      <el-input type="textarea" v-model="conent"></el-input>
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
        title: '',
        conent: '',
        inforTime: '',
      }
    },
    methods: {
      onSubmit() {
        this.$http({
          method: 'get',
          url: 'http://localhost:9527/traffic/admin/updateInfor?title=' + this.title + '&conent=' + this.conent + '&inforTime=' + this.inforTime,
        }).then(response => {
          const data = response.data;
          console.log(data);
          if (data == 0 || data == -1) {      //失败
            const {$router} = this;
            $router.push({name: "defeat1"})
          }
          else {   //成功
            const {$router} = this;
            $router.push({name: "success1"})
          }
        })
      }
    }
  }
</script>
