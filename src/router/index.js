/*
路由器对象模块
*/
import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../views/MSite/MSite.vue'
import Message from '../views/Message/Message.vue'
import Profile from '../views/Profile/Profile.vue'
import AddressBook from '../views/AddressBook/AddressBook.vue'
import Login from '../views/Login/Login.vue'
import WorkMate from '../views/WorkMate/WorkMate.vue'


Vue.use(Router)

export default new Router({
  //所有路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/AddressBook',
      component: AddressBook,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Message',
      component: Message,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/workmate',
      component: WorkMate
    }
  ]
})
