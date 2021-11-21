import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* 路由懒加载：解决进入首页不用加载过多资源造成用时过长！！！！ */
const router = new VueRouter({
  mode:"hash",
  routes:[
    {path:"/",redirect:"/home"},
    {path:"/home",component:()=>import("@/views/Home")},
    {path:"/list",component:()=>import("@/views/List"),children:[
      //二级路由path前面千万不能加杠
      {path:"",redirect:"guoji"},
      {name:"guoji",path:"guoji",component:()=>import("@/views/Guoji")},
      {name:"guolei",path:"guolei",component:()=>import("@/views/Guolei")}
    ]},
    {path:"/mine",component:()=>import("@/views/Mine"),beforeEnter(to,from,next){
      alert("进入到mine组件了")
      next()
    }
  
  },
    {name:"zjf",path:"/detail/:id",component:()=>import("@/views/Detail")},
  ]
})

/* router.beforeEach((to,from,next)=>{
    console.log("前置路由守卫")
    if(from.path=='/home'){
      alert("从首页离开了")
    }
    next()
}) */

//全局的猴子钩子
//跳转之后就没有next了
/* router.afterEach((to,from)=>{
    if(to.path=='/mine'){
      alert("进入到mine了！")
    }

}) */




export default router
