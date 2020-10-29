<template>
    <el-row type="flex" justify="end">
        <el-col :span="3" class="logo" offset="3">
            <el-menu >
              <div style="height:56px">
                  <i class="el-icon-info"></i>
              </div>
            </el-menu>
        </el-col>
        <el-col :span="12" offset="6" class="menu">
            <el-menu default-active="3" mode="horizontal" background-color="#FF00FF" text-color="#FFFF00">
              <el-submenu index="1">
                <template slot="title">我的工作台</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                <el-menu-item index="1-4-2">选项2</el-menu-item>
                <el-menu-item index="1-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
              <el-submenu index="3">
                <template slot="title"><i class="el-icon-user"></i></template>
                <el-menu-item index="3-1">login</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              
            </el-submenu>
            </el-menu>
        </el-col>
    </el-row>

 



</template>

<script>
export default {
    
}
</script>