<template>
  <div class="text1">
    <h1 style="text-align:center">搜索</h1>
    <div class="input-wrap">
      学校名称:<input type="text" v-model="author"/>
      <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>
    <div class="input-wrap">
      <button @click="findcontent">查找</button>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        author: '',
        error: {
          name: '',
        }
      }
    },
    methods:{
      findcontent() {
        this.$http({
          method: 'get',
          url: 'http://localhost:9527/traffic/student/selectinfor?author=' + this.author,
        }).then(response => {
          const data = response.data;
          console.log(data);
         /*接收返回的list集合,并显示*/
        })
      },
    }
  }
</script>
<style>

</style>
