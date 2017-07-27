import Vue from 'vue'
import ElementUI from 'element-ui'
import Cookie from 'js-cookie'
import Router from 'vue-router'
import Resource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'
import './style/theme.css'
import routerConfig from './routers.js'
import App from './App.vue'
Vue.use(Router);
Vue.use(ElementUI)
Vue.use(Resource)

const router = new Router({
  mode: 'history',
  routes:routerConfig
});
//路由过滤
/*router.beforeEach((to, from, next) => {
  let u = Cookie.get('u')
  if(to.name != 'login' && !u){
    next('login');
  }
  if(to.name == 'login' && u){
    next('orderManage');
  }
  next();
})*/
const $vue = new Vue({
      el: '#app',
      render: h => h(App),
      router:router
});
//http响应过滤
Vue.http.interceptors.push((request, next) => {
　　next((response) => {
      if(response.ok){
        if(response.body.code=="571"){
          return response;
        }else{
          $vue.$notify({
            message: response.body.message,
            type: 'warning'
          });
          response.ok = false
          return response;
        }
      }else{console.info(response)
        $vue.$notify({
          message: '系统异常，请重试！',
          type: 'error'
        });
        return response;
      }
  });
});
