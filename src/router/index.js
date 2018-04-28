import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Register from '@/components/Register'
import Add from '@/components/Add'
import Post from '@/components/Post'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/posts',
      name: 'Post',
      component: Post
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
