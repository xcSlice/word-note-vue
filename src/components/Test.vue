<template>
  <el-row>
    <el-col :span="4"><div>
           
            <!-- <button :onclick="getMenu"> 测试不用登陆的连接</button> -->
            <button @click="login">login</button>
            <button @click="logout">logout</button>
            <button @click="getmenu">getmenu</button>
            <button @click="getword">getword</button>
            <button @click="gettoken">get-token</button>

  </div></el-col>
  </el-row>
  
</template>


<script>
import {login,logout} from '@/api/login'
import {getToken,setToken} from '@/api/token'
import {getAllRoot,getMessage} from '@/api/menu'
import {searchWord} from '@/api/search-word/'
export default {
    props: {
      source: String,
    },
  name: 'Test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    login(){
      login("zhangsan","zhangsan").then(res => {
        console.log(getToken());
      })
    },
    logout(){
    },
    getmenu(){
      getAllRoot()
    },
    getmessage(){
      getMessage()
    },
    getword(){
      searchWord("note").then(res => {
        console.log(res.data);
      })
    },
    gettoken(){
      console.log(getToken())
    }
  }
}
</script>
