// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Hello from './components/Hello'
import Users from './components/Users'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

//设置路由
const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {
      path:"/",
      component:Users
    },
    {
      path:"/hello",
      component:Hello
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <ul>
        <li>
          <router-link to="/">Users</router-link>
          <router-link to="/hello">Hello</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  `
}).$mount("#app")
