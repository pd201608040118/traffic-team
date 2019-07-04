<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="Schoolid" label="账号"></el-table-column>
    <el-table-column prop="adminname" label="管理人"></el-table-column>
    <el-table-column prop="Tel" label="联系方式" ></el-table-column>
    <el-table-column prop="SchoolName" label="院校"></el-table-column>
    <el-table-column fixed="right" label="操作">
      <template slot-scope="scope">
        <el-button type="text" size="small">
          <router-link :to="{name:'a1'}">编辑</router-link>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          Schoolid: "201608040118",
          SchoolName: "中原工学院",
          adminname: "庞棣",
          Tel: "2",
        }],
      }
    },
  }
</script>
