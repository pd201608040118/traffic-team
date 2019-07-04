<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex2"
               class="el-menu-demo"
               mode="horizontal"
               @select="handleSelect"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-menu-item index="1">
          <router-link :to="{name:'success1'}">关于联盟</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">教育研究中心</template>
          <el-menu-item index="2-1">组织机构</el-menu-item>
          <el-menu-item index="2-2">师资力量</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">专业委员会</template>
          <el-menu-item index="3-1">入会资格</el-menu-item>
          <el-menu-item index="3-2">评判标准</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">最新动态</el-menu-item>
        <el-submenu index="5">
          <template slot="title">登录</template>
          <el-menu-item index="5-1">
            <router-link :to="{name:'login'}">普通登录</router-link>
          </el-menu-item>
          <el-menu-item index="5-2">
            <router-link :to="{name:'aloin'}">管理登录</router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
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
    line-height: 200px;
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
    line-height: 40px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 40px;
  }
</style>
