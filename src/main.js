// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/**
 * Created by wujincun on 2016/10/31.
 */
import Vue from 'vue';
import App from './app.vue';
import router from "./router";
/*import VueResource from 'vue-resource';
//import store from './store'
//import Vuex from 'vuex'

Vue.use(VueResource);*/
//Vue.use(Vuex);

//创建一个vue实例,v1挂载在body上面，v2不能挂在到html或body上，要挂在到正常元素上
new Vue({
  //store,
  el: '#app',
  router:router,
  components: { App }
});

