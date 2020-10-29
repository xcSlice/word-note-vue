<template>
    <div>
        <div>
            <label>参数查询</label>
            <input type="text" v-model="param1" />
            <input type="text" v-model="param2"/>
            <button @click="getId">查询id</button>
            <button @click="searchAndHighlight">查询单词</button>
            <br />
            <label>无参数查询</label>
            <button @click="getAllWord">查询所有</button>
            <button @click="deleteAll">删除所有</button>
            <button @click="postOneWord">上传单词测试</button>
            <br />
            <label>服务器操作</label>
            <button @click="upload">上传到服务器</button>
            <button @click="download">从服务器下载</button>
        </div>
        <div>
            <p>响应结果:{{response}}</p>
        </div>
        <!-- 单词显示 -->
        <el-table
            :data="words"
            style="width: 100%">
            <el-table-column
                prop="name"
                label="单词"
                width="180">
            </el-table-column>
            <el-table-column
                prop="mean"
                label="意思"
                width="180">
            </el-table-column>
            <el-table-column
                prop="wordType"
                label="词性"
                width="180">
            </el-table-column>
            <el-table-column
                prop="prefix"
                label="前缀"
                width="180">
            </el-table-column>
            <el-table-column
                prop="postfix"
                label="后缀"
                width="180">
            </el-table-column>
    </el-table>
    </div>
</template>

<script>
import {getAll,deleteAll,deleteByIds,getId,
    searchAndHighlight,postOneWord,upload,download} from '@/api/search';
export default {
    data() {
        return {
            words: [],
            response : "",
            param1: "",
            param2: "",

        }
    },methods: {
        getAllWord() {
            getAll().then((result) => {
                this.words = result.data;
                console.log(this.words);
            }).catch((err) => {
                
            });
        },
        deleteAll(){
            deleteAll().then(res =>{
                this.response = res.data;
            })
        },
        getId(){
            getId(this.param1,this.param2).then((result) => {
                this.response = result.data
            }).catch((err) => {
                
            });
        },
        searchAndHighlight(){
            searchAndHighlight(this.param1,this.param2).then((result) => {
                this.response = result.data
            }).catch((err) => {
                
            });
        },
        postOneWord(){
            postOneWord("peach","桃子","名词","p","ch").then((result) => {
                this.response = result.data
            }).catch((err) => {
                
            });
        },
        upload(){
            upload().then((result) => {
                this.response = result.data
            }).catch((err) => {
                
            });
        },
        download(){
            download().then((result) => {
                this.response = result.data
            }).catch((err) => {
                
            });
        }
    },mounted () {
        getAll().then((result) => {
            this.words = result.data
        }).catch((err) => {
            
        });;
    },
}
</script>