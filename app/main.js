import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routers from './routers';
// import App from '@/components/App'


Vue.config.productionTip = false;
Vue.use(VueRouter);


const router = new Router({ 
	mode: "history",
	routers
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  // components: { App },
  // template: '<App/>'
});
