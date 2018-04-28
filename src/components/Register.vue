<template>
  <div class="register">
  </div>
</template>

<script>
import Api from '../../utils/api'
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '',
      password: ''
    }
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
