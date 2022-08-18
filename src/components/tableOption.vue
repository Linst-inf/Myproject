<template>
<el-table :data="tableData" border style="width: 100%">
    <el-table-column type="index" label="序号" width="180" />
<!-- v-for报错 [vue/valid-v-for]Custom elements in iteration require ‘v-bind:key’ directives.eslint-plugin-vue 原因：这是因为我安装的enlint插件，它会对代码的规范进行检查。我这里用到v-for，但它是需要key值的，当不根据它的代码规范来执行的时候，自然而然就报错了。 -->
    <template v-for="item in tableColumnOptions" >
       <el-table-column  :prop="item.prop"  :label="item.label" width="180" />
    </template>
    
  </el-table>
  <el-pagination
       v-model:currentPage="currentPage"
      v-model:page-size="pageSize"
      layout="total,sizes,prev, pager, next, jumper"
      :total="total"
      :page-sizes="[10,20,30,40]"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
</template>

<script>
    export default {
        props:{
            tableData:{
                type:Array,
                default:[]
            },
            tableColumnOptions:{
                type:Array,
                default:[]
            },
            total:{
                type:Number,
                default:0,
            },
            pageSize:{
                type:Number,
                default:0,
            },
            currentPage:{
                type:Number,
                default:0,
            },
            total:{
                type:Number,
                default:0,
            },
        },
        setup(props, {emit}){
            const handleCurrentChange=(v)=>{
                emit('setCurrent',v)
            }
            const handleSizeChange=(v)=>{
                emit('setPagesize',v)
            }
         return {handleCurrentChange,handleSizeChange}
        }

    }
</script>

<style scoped>

</style>