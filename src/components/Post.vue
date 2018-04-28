<template>
  <div class="post">

  </div>
</template>

<script>
import Api from '../../utils/api'
export default {
  name: 'Post',
  data () {
    return {
      posts: []
    }
  },
  created () {
    let _this = this;
    this.$http.get(Api.getPosts)
      .then(res => {
        if(res.errorCode === 0){
          this.posts = res.data;
        }else{
          alert(res.msg)
        }
      })
      .catch(err => {
        debugger
      })
  },
  mounted () {
    // this.$http.post(Api.register, {
    //     name: 'harris',
    //     password: 'zq0317'
    //   })
    //   .then(res => {
    //     debugger
    //   })
    //   .catch(err => {
    //     debugger
    //   })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
