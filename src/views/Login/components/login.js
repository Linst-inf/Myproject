import schema from '@/utils/vee-validate-schema';
import { reactive,ref } from 'vue';
import Message from '@/components/library/Message';
import {userNameLogin} from '@/api/user';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
 export default function userLogin(){

 //使用store
 const store=useStore()
 //使用router
 const router=useRouter()
 let loginRef=ref(null)
 //定义表单数据
 const form = reactive({
   username:'',
   password:'',
 })
 //校验规则对象
 const mySchema={
   username:schema.username,
   password:schema.password,
 }
 //登陆提交
 const loginFn=async()=>{
              //await 返回true or false属性
   const valid=await loginRef.value.validate()
   // console.log(valid)
   if(valid){
    let {username}=form
    //验证成功
    let {token}=await userNameLogin(form)
    //存储信息     模块
    store.commit('user/setUserInfo',{token,username})
    //提示
    Message({type:'success',text:'验证成功'})
    //跳转
    router.push('/')
   //  console.log(res)
   }else{
     Message({type:"error",text:"验证失败"})
   }
 }

 return {form,scheam:mySchema,loginRef,loginFn}
}
