import request from "@/utils/request";

// 账号登陆
//username
//password

export const getSupplier=({currentPage,pageSize})=>{
    return request(`supplier/list/search/${currentPage}/${pageSize}`,'post',{})
}

