import Axios from 'axios'
import qs from 'qs'
import {getToken} from '@/api/token'
import config from '@/api/config'
 
const instance = Axios.create({
    baseURL: "http://localhost:8080",
    // timeout: 25000,
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Content-Type':"application/x-www-form-urlencoded; charset=UTF-8",
        'authorization': getToken()
    }
    
})


// get
export function get(url, params){
    return instance.get(url,{
        params
    });
}

// post
export function post(url,data) {
    return instance.post(url,data);
}

// put
export function put(url,data) {
    return instance.put(url,data);
}

// delete
export function del(url,data) {
    return instance.delete(url,data);
}