<template>
  <div class="reedits">

    <h1>用户注册界面</h1>

    <template>
      学校:
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in values"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </template>

    <div class="input-wrap">
      学号:<input type="text" v-model="stuId"/>
      <span v-if="error.stuid" class="err-msg">{{error.stuid}}</span>
    </div>

    <div class="input-wrap">
      姓名:<input type="text" v-model="stuName"/>
      <span v-if="error.stuname" class="err-msg">{{error.stuname}}</span>
    </div>

    <div class="input-wrap">
      联系方式:<input type="text" v-model="tel"/>
      <span v-if="error.tel" class="err-msg">{{error.tel}}</span>
    </div>

    <!--    <div class="input-wrap">
          职位:<input type="text" v-model="profession"/>
          <span v-if="error.profession" class="err-msg">{{error.profession}}</span>
        </div>-->

    <template>
      职位:<el-select v-model="profession" placeholder="请选择">
        <el-option
          v-for="item in professions"
          :key="item.value"
          :label="item.label"
          :value="item.profession">
        </el-option>
      </el-select>
    </template>

    <div class="input-wrap">
      密码:<input type="password" v-model="password"/>
      <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>

    </div>
    <div class="input-wrap">
      <el-row>
        <el-button type="success" plain @click="reedits">成功按钮</el-button>
      </el-row>
    </div>
  </div>
</template>>

<script>

  import $router from "element-ui/packages/col/src/col";


  export default {
    data() {
      return {
        values: [{
          value: '中原工学院',
          label: '中原工学院'
        }, {
          value: '郑州铁路职业技术学院',
          label: '郑州铁路职业技术学院'
        }],
        value: '',
        professions: [{
          profession: '老师',
          label: '老师'
        }, {
          profession: '学生',
          label: '学生'
        }],
        profession: '',
        stuId: '',
        stuName: '',
        tel: '',
        password: '',
        handleSelect: '',
        error: {
          stuId: '',
          stuName: '',
          tel: '',
          profession: '',
          password: '',
        }
      }
    },

    methods: {
      reedits() {
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
            $router.push({name: "main"})
          }
        })
      },
    }
  }
</script>

<style>
  .reedits {
    width: 300px;
    margin: 10% auto;
  }

</style>
