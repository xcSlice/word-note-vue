import Cookies from 'js-cookie'
import config from './config'

const TokenKey = config.TokenKey
// 获取 cookies 中的token
export function getToken(){
    return Cookies.get(TokenKey)
}
// 设置token
export function setToken(token,rememberMe){
    if(rememberMe){
        return Cookies.set(TokenKey, token, { expires:config.tokenCookieExpires })
    } else {
        return Cookies.set(TokenKey, token)
    }
}

export function removeToken(){
    return Cookies.remove(TokenKey)
}