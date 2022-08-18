<template>
<div class="logincontainer">
    <div class="con">
        <h2>后台管理系统</h2>
        <login-form></login-form>
    </div>
</div>
</template>
<script>
import loginForm from './components/loginForm'
export default {
    name:'rs-login',
    components:{
        loginForm,
    },
}
</script>
<style lang="less" scoped>
.logincontainer{
    background-color: aqua;
    height: 100%;
    .con{
        width: 430px;
        height: 270px;
        background-color: aliceblue;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        border-radius: 10px;
        h2{
            line-height: 30px;
            text-align: center;
            padding-top: 20px;
        }
    }
}

</style>