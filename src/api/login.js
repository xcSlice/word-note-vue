// 登录， 成功之后将token值设置到 localstroge 中
import {post} from './request'
import {setToken} from './token'
import qs from 'querystring'
import config, { TokenKey } from './config'

//login
export function login(name,pwd){
    let data = {username:name,password:pwd}
    return post('/login',qs.stringify(data))
    .then(res => {
        setToken(res.data)
    })
}
export function logout(){
    return post('/logout',{}).then()
}

// 使用账号密码注册｛username，password｝
export function register(username,password,enterPassword){
    if(password == enterPassword){
        let data = {username:username,password:password}
        return post('/register',qs.stringify(data))
    } else{
        alert("两次密码不同")
    }
    
}

