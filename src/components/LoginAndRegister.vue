<template>
        <el-tabs value="login">
          <el-tab-pane label="登录" name="login">
              <div>
                  <label>用户名</label>
                  <input type="text"  name="username" v-model="username"/>
                  <label>密码</label>
                  <input type="text"  name="password" v-model="password"/>
                  <button  @click="login">登录</button>
              </div>
          </el-tab-pane>
          <el-tab-pane label="注册" id="register">
              <div>
                  <label>用户名</label>
                  <input type="text"  name="username" v-model="username"/>
                  <label>密码</label>
                  <input type="text"  name="password" v-model="password"/>
                  <label>确认密码</label>
                  <input type="text"  name="enterPassword" v-model="enterPassword"/>
                  <button  @click="register">注册</button>
              </div>
          </el-tab-pane>
        </el-tabs>
</template>

<script>
import {login,register} from '@/api/login'
export default {
    data() {
        return {
            username:"",
            password:"",
            enterPassword:""
        }
    },
    methods: {
        login() {
            login(this.username,this.password).then((result) => {
                alert("登录成功.")
            }).catch((err) => {
                
            });
        },
        register(){
            register(this.username,this.password,this.enterPassword).then(res => {
                login(this.username,this.password).then((result) => {
                    alert("注册并登录成功")
                }).catch((err) => {
                    
                });
            })
        }
    },
}
</script>