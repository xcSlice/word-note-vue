<template>
<div>
    <input type="text" v-model="word" />
    <button @click="search">搜索</button>
    <p>Mean:</p>
        <ul>         
            <li v-for="(value,index) in means" :key="index">{{value}}</li>
        </ul>
    <p>例句:</p>
    <el-table :data="egs">
      <el-table-column label="英文" prop="en"></el-table-column>
      <el-table-column label="中文" prop="cn"></el-table-column>
      <el-table-column label="来源" prop="quote"></el-table-column>
    </el-table>
</div>
    
</template>

<script>
import {searchWord  } from "@/api/search-word";
export default {
    data() {
        return {
            word: "",
            means:[],
            egs:[]
        }
    },
    methods: {
        search() {
            console.log("执行before");
            searchWord(this.word).then((result) => {
                this.means = result.data.means;
                this.egs = result.data.egs
            }).catch((err) => {
                
            });
        }
    },
}
</script>