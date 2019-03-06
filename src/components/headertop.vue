<template>
    <div>
      <div class="header_container">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item id="iconcolor" > <span>管理系统</span></el-breadcrumb-item>
          <!--<el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>-->
        </el-breadcrumb>
        <el-dropdown  menu-align='start'>
          <!--<img :src="baseImgPath + adminInfo.avatar" class="avator">-->
        <i class="iconfont icon--yonghu" ></i>
          <span class="user">{{user}}</span>
          <el-dropdown-menu slot="dropdown">

            <el-dropdown-item command="signout" @click.native="logginout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </div>

    </div>
</template>

<script>
  export default {
    name: 'home',
    props:["user"],
    methods: {
      // 退出登录
      logginout(){
        this.$axios.post("/api/?r=login/logout",).then((res)=>{
          if(res.data.status==0){
            this.$router.push({path:'/'})
          }
        })

      }
    }
  }
</script>

<style scoped lang="less">
  @import '../style/mixin';
  .user{
    color: white;
    margin-right: 30px;
  }
  #iconcolor span{
    margin-left: 30px;
    font-size: 30px;
    color: white;
  }
  .iconfont{
    position: absolute;
    font-size: 20px;
    right: 140px;
    color: white;
  }
  .header_container{
    background-color: #3c3f41;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
  }
  .avator{
    .wh(36px, 36px);
    border-radius: 50%;
    margin-right: 37px;
  }
  .el-dropdown-menu__item{
    text-align: center;
  }
</style>
