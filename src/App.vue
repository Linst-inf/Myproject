<template>
 <!-- 一级路由 -->
 <router-view></router-view>
</template>

<script>
  export default {
    
  }
</script>

<style>
/* 在Vue文件中的style标签上有一个特殊的属性，scoped。当一个style标签拥有scoped属性时候，它的css样式只能用于当前的Vue组件，可以使组件的样式不相互污染。如果一个项目的所有style标签都加上了scoped属性，相当于实现了样式的模块化。 */
    *{
      margin: 0;
      padding: 0;
    }
</style>