import {get,post,del,put} from '@/api/request' 

export function getAllRoot(){
    return get('/test',{}).then(res => {
        console.log(res);
    })
}
export function getMessage(){
    return get('message/1').then(res => {
        console.log(res);
    })
}