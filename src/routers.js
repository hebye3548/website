const Login = resolve => require(['./pages/login.vue'], resolve)
const Index = resolve => require(['./pages/index.vue'], resolve)
const ClusterManage = resolve => require(['./pages/clusterManage.vue'], resolve)
const OrderManage = resolve => require(['./pages/orderManage.vue'], resolve)
module.exports = [
  {
    path:'/home',
    component:require('./pages/home.vue'),
    children: [
      {
        path:'*',
        name:'404',
        component:require('./pages/404.vue')
      },
      {
        path:'/',
        name:'index',
        component:Index
      },
      {
        path:'/index',
        name:'index',
        component:Index
      },
      {
        path:'/login',
        name:'login',
        component:Login
      },
      {
        path:'/cluster/list',
        name:'clusterManage',
        component:ClusterManage
      },
      {
        path:'/order/list',
        name:'orderManage',
        component:OrderManage
      },
    ]
  }
]
