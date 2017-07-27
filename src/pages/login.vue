<template>
  <article>
    <div id="particles"></div>
    <el-row :gutter="0" class="login-box">
      <el-col :span="6" :offset="9">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <el-form ref="loginForm" label-width="40px" :model="loginObj" :rules="rules">
              <el-form-item label="账户" prop="username">
                <el-input v-model="loginObj.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="loginObj.password" type="password"></el-input>
              </el-form-item>
              <el-button type="primary" @click="login">登录</el-button>
            </el-form>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </article>
</template>
<script>
import Cookie from 'js-cookie'
import particles from 'particles.js'
export default {
  data () {
    return {
      loginObj:{},
      rules:{
        username:[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          //{ min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' },
          //{ min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    login(){
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          this.$http.post('/manager/login',this.loginObj).then(res => {
            Cookie.set('u', 'xxxx', { expires: 7 });
            //路由跳转
            this.$router.push({name:'orderManage'})
          }, res => {});
        }else{
          return false;
        }
      });
    }
  },
  mounted:function(){
    particlesJS("particles", {
    "particles": {
        "number": {
            "value": 30,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ddd"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 10,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 50,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 300,
            "color": "#ddd",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 4,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 800,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 800,
                "size": 80,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
  }
}
</script>
<style lang="scss">
#particles {
    position: absolute;
    top: 0;
    z-index: -1;
    width:100%;
    background: #F7FAFC;
    height:calc( 100% - 80px );
  }
.login-box{
  margin-top:120px;
  text-align:right;
  .box-card{
    padding:30px 10px;
    button{
      width:100%;
    }
  }
}
</style>
