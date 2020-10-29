import {get,post,del,put} from '@/api/request'
import qs from 'querystring'
import {opost} from '@/api/request-object'
// 获取所有
export function getAll(){
    return get("/es/all",{})
}

//根据名字和属性获取id
export function getId(name,value){
    var data = {name:name,value:value};
    return post("/es/ids",qs.stringify(data));
}

// 根据List<id>删除
export function deleteByIds(ids){
    return del("/ids",{ids})
}

// 删除所有
export function deleteAll(){
    return del("/es/all",{})
}

// 高亮查询
export function searchAndHighlight(name,value){
    let data = {name:name, value:value}
    return post("/es/param/h",qs.stringify(data))
}

// 查询
export function searchNoHighlight(name,value){
    let data = {name:name, value:value}
    return post("/es/param",qs.stringify(data))
}

// 上传一个单词到es服务器
export function postOneWord(name,mean,type,prefix,postfix){
    console.log(mean);
    let json = JSON.stringify({
        name:name,
        mean:mean,
        wordType:type,
        prefix:prefix,
        postfix:postfix
    })
    return opost("/es/post",json)
}

// @ApiOperation("将excel中的数据上传到es服务器中")
export function upload(){
    return get("/es/upload",{})
}

// @ApiOperation("将es服务器中的数据下载到本地")
export function download(){
    return get("/es/download",{})
}