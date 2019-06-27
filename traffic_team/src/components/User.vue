<template>
  <el-container>
    <el-header>
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
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-menu"></i>功能</template>

            <el-submenu index="1-1">
              <template slot="title">搜索</template>
              <el-menu-item index="1-1-1"><router-link :to="{name:'text1'}">搜索文件</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="1-2"><router-link :to="{name:'text2'}">个人信息</router-link></el-menu-item>
            <el-menu-item index="1-3"><router-link :to="{name:'text3'}">请求和帮助</router-link></el-menu-item>
          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>

</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 100px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 100px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
