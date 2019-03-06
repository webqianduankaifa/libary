<template>
  <div class="login_page fillcontain">
    <img src="../../static/img/bg-1.jpg" alt="">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer" v-show="showlogin">
        <div class="manage_tip">
          <p id="iconcolor">后台管理系统</p>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loginclick('loginForm')" class="submit_btn">登陆</el-button>
          </el-form-item>
        </el-form>

      </section>
    </transition>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'login',
    data () {
      return {
        loginForm: {
          username: '',
          password: '',
          tabtype:false
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
        },
        showlogin:false
      }
    },

    mounted(){
      this.showlogin=true
    },
    methods: {
      // 点击跳转登录页面
          loginclick(){
              this.$axios.post("/api/?r=login/login", {
                username: this.loginForm.username,
                password: this.loginForm.password
              }).
              then((res)=>{
              console.log(res.data.msg)
                if(res.data.status==0){
                  this.$router.push({path:'/home'})
                }else{
                    this.$alert(res.data.msg,  {
                      confirmButtonText: '确定',
                      callback: action => {
                        this.$message({
                          type: 'info',
                          message: `action: ${ action }`
                        });
                      }
                    });
                  }

              }).catch((err)=>{
                console.log("失败")
              })
            }

    },

  }
</script>

<style lang="less" scoped>
  @import '../style/mixin';
  #iconcolor{
    color: black;
  }
  img{
    height: 100%;
    width: 100%;
  }
  .login_page{
    /*background-color: #324057;*/
  }
  .manage_tip{
    position: absolute;
    width: 100%;
    top: -100px;
    left: 0;
    p{
      font-size: 34px;
      color: #fff;
    }
  }
  .form_contianer{
    .wh(320px, 210px);
    .ctp(320px, 210px);
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
    .submit_btn{
      width: 100%;
      font-size: 16px;
    }
  }
  .tip{
    font-size: 12px;
    color: red;
  }
  .form-fade-enter-active, .form-fade-leave-active {
    transition: all 1s;
  }
  .form-fade-enter, .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
</style>
