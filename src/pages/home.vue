<template>
    <div>
      <div>
        <headertop v-bind:user="username" ></headertop>
        <div id="homeleft">
          <el-row class="tac" style="height: 100%;">
            <el-col :span="3"  style="min-height: 100%; background-color: #324057;" >
              <el-menu  style="min-height: 100%;" theme="dark"  text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item index="manage"><i class="el-icon-menu" ></i>首页</el-menu-item>
                <el-submenu  v-for="(item, index) in menus" :index="index">
                  <template slot="title"><i class="el-icon-document"></i>{{item.rule_name}}</template>
                  <el-menu-item :index="index"  v-for="(itemchild,index) in item.child"  :key="index" @click="routerjump(itemchild.action_name)">{{itemchild.rule_name}}</el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
            <el-col :span="21" style="height: 100%;overflow: auto;">
              <router-view>
              </router-view>
            </el-col>
          </el-row>
        </div>
      </div>

    </div>
</template>

<script>
  import headertop from "@/components/headertop"
  export default {
    name: 'home',
    data(){
      return{
        username:'',
        menus:[],

      }
    },
    components:{
      headertop,

    },

    mounted () {
    this.getusername()
    },

    methods:{
      // 获取初始化数据左侧菜单数据/用户名数据
      getusername(){
        this.$axios.post("/api/?r=admin/admininfo",).then(
          (res)=>{
            this.username=res.data.data.admin_name
            this.menus=res.data.data.menus

          console.log(res.data.data.menus)
        }).catch(()=>{
          console.log("失败")
        })
      },

      // 路由跳转
      routerjump(routername){
        console.log(routername)
        this.$router.push({path:routername})
      }

    }
  }
</script>

<style scoped lang="less">
  @import '../style/mixin';
  #homeleft{
    height: 1000px;
    margin-top: 1px;
  }

</style>
