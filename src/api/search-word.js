import {oget,opost} from './request-object'
import {get,post,del,put} from '@/api/request'
import qs from 'querystring'

export function searchWord(name){
    return post("/search-word",qs.stringify({word:name}))
}

