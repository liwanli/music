import 'babel-polyfill';
import Vue from 'vue';


Vue.config.productionTip = false;

console.error(process.env.NODE_ENV);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  // router,
  // components: { App },
  // template: '<App/>'
});
