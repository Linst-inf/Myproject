//使用createStore来创建vuex实例
import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

import user from './modules/user'
import category from './modules/category'



//创建vuex的仓库并导出
export default createStore({
  //存储数据
  // state: {

  // },
  //计算属性
  // getters: {

  //  },

  //改变state属性
  // mutations: {
    
  // },
  //异步
  // actions: {
    
  // },
  //分模块
  modules: {
   user,
   category
  },
  plugins:[
    //默认存储到localStorage中
    //key是存储数据的键名
    //paths 是存储state中的哪些数据 如果是模块下具体的数据需要加上模块名称 比如user.token
    createPersistedstate({
      key:"rsadmin-store",
      paths:['user']//我要本地存储的模块
    })
  ]
})
