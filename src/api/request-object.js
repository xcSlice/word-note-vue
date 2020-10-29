import Axios from 'axios'
import qs from 'qs'
import {getToken} from '@/api/token'
import config from '@/api/config'
 
const instance = Axios.create({
    baseURL: "http://localhost:8080",
    // timeout: 25000,
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Content-Type':"application/json; charset=UTF-8",
        'authorization': getToken()
    }
    
})


// get
export function oget(url, params){
    return instance.get(url,{
        params
    });
}

// post
export function opost(url,data) {
    console.log(data);
    return instance.post(url,data);
}

// put
export function oput(url,data) {
    return instance.put(url,data);
}

// delete
export function odel(url,data) {
    return instance.delete(url,data);
}