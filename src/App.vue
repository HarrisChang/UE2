<template>
  <div id="app">
    <el-header>
        <el-col :span="2">
          <a href="/" class="grid-content logo">LOGO</a>
        </el-col>
        <el-col :span="22">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><a href="/">首页</a></el-menu-item>
            <el-menu-item index="2"><a href="/#/posts">归档</a></el-menu-item>
            <el-menu-item index="3"><a href="/#/about">关于</a></el-menu-item>
            <el-submenu index="4">
              <template slot="title">个人中心</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer>
      Licensed under MIT. Copyright 2018 HarrisChang.
    </el-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
body{
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-header{
  line-height: 60px;
}

.logo{
  display: inline-block;
}

.el-main{
  min-height: 600px;
}

.el-menu{
  border-bottom: none;
  float: right;
}

.el-menu--horizontal>.el-menu-item.is-active{
  border-bottom: none;
  color: #6e6ce8;
}
</style>
