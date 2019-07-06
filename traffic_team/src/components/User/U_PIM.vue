<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="StuId" label="学号"></el-table-column>
    <el-table-column prop="StuName" label="姓名"></el-table-column>
    <el-table-column prop="Tel" label="联系方式" ></el-table-column>
    <el-table-column prop="Profession" label="职业"></el-table-column>
    <el-table-column prop="School" label="院校"></el-table-column>
    <el-table-column fixed="right" label="操作">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="dialogFormVisible = true">编辑</el-button>
        <el-dialog title="编辑个人信息" :visible.sync="dialogFormVisible" :modal-append-to-body='false'>
          <el-form label-width="80px">
            <el-form-item label="账号">
              <el-input v-model="StuId"></el-input>
            </el-form-item>
            <el-form-item label="旧密码">
              <el-input type="password" v-model="password1"></el-input>
            </el-form-item>
            <el-form-item label="新密码">
              <el-input type="password" v-model="password2"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="stuname"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="tel"></el-input>
            </el-form-item>
            <el-form-item label="职位">
              <el-select v-model="profession" placeholder="不能为空">
                <el-option label="教师" value="教师"></el-option>
                <el-option label="学生" value="学生"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="院校">
              <el-select v-model="school" placeholder="不能为空">
                <el-option label="中原工学院" value="中原工学院"></el-option>
                <el-option label="郑州铁路职业技术学院" value="郑州铁路职业技术学院"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="onSubmit">确 定</el-button>
          </div>
        </el-dialog>
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
          Tel: "1",
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        StuId:'',
        password1:'',
        password2:'',
        stuname:'',
        tel:'',
        profession:'',
        school:'',
      }
    },
    onSubmit() {
      this.$http({
        method: 'get',
        url: 'http://localhost:9527/traffic/student/update?school=' + this.school + '&StuId=' + this.StuId + '&stuname=' + this.stuname + '&tel=' + this.tel + '&profession=' + this.profession+'&password='+this.password,
      }).then(response => {
        const data = response.data;
        console.log(data);
        if (data == 0 || data == -1) {
          const {$router} = this;
          $router.push({name: 'defeat1'})
        }
        else {
          const {$router} = this;
          $router.push({name: 'x2'})
        }
      })
    }
  }
</script>
