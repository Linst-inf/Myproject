import request from "@/utils/request";

// 账号登陆
//username
//password

export const userNameLogin=({username,password})=>{
    return request('/admin/login','post',{username,password})
}

