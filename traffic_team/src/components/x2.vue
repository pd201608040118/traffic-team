<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="StuId" label="学号"></el-table-column>
    <el-table-column prop="StuName" label="姓名"></el-table-column>
    <el-table-column prop="Tel" label="联系方式" ></el-table-column>
    <el-table-column prop="Profession" label="职业"></el-table-column>
    <el-table-column prop="School" label="院校"></el-table-column>
    <el-table-column fixed="right" label="操作">
      <template slot-scope="scope">
        <el-button type="text" size="small">
          <router-link :to="{name:'u_pim'}">编辑</router-link>
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
          StuId:'201608040118',
          StuName:'庞棣',
          Profession:'学生',
          School:'中原工学院',
          Tel: "2",
        }],
      }
    },
  }
</script>
