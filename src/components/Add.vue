<template>
  <div class="add-doc">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="类别" class="series">
        <el-select v-model="form.type" placeholder="请选择类别">
          <el-option label="奶茶" value="rene"></el-option>
          <el-option label="绿茶" value="green"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <mavon-editor v-model="form.content" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import Api from '../../utils/api'

export default {
  name: 'AddDoc',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      doc: '',
      form: {
        type: '',
        title: '',
        content: ''
      }
    }
  },
  mounted () {

  },
  methods: {
    submit () {
      const config = {
        type: this.form.type,
        title: this.form.title,
        content: this.form.content.toString()
      }
      this.$http.post(Api.addDoc, config)
        .then(res => {
          debugger
          if(res.errorCode === 0){
            alert(res.msg)
          }
        })
        .catch(err => {
          debugger
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.series .el-select{
  float: left;
}
.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper .content-input-wrapper{
  box-sizing: border-box;
}
</style>
