<template>
  <el-container>
    <el-header>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#4a4c4f"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">关于联盟</el-menu-item>
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
      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-radio-group v-model="isCollapse">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">信息管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link :to="{name:'u_pim'}">个人信息</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">文件浏览</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <router-link :to="{name:'ufindinfor'}">搜索文件</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">
                <router-link :to="{name:'helpyou'}">请求和帮助</router-link>
              </el-menu-item>
            </el-menu-item-group>
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
  export default {
    data() {
      return {
        isCollapse: true,
        error: {
          name: '',
        }
      }
    },
  }
</script>
<style>

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 100px;
  }

  .el-main {
    background: url("/static/img/p2.jpg") no-repeat;
    height: 600px;
    width: 100%;
    text-align: center;
    background-size: cover;
  }

  .el-aside {
    background-color: #4a4c4f;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
