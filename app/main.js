import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './components/App'

// const css = require('assets/styles/reset.css').toString();
// console.log(css)


Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    // return 期望滚动到哪个的位置
    console.log(to, from, savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

//全局钩子作用于所有路由，里面的参数to表示即将要进入的路由对象，from表示即将要离开的路由对象 路由进入之前
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#root',
  // store,
  router,
  components: { App },
  template: '<App/>'
});
