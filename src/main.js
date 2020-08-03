import Vue from "vue";
// 全部引入
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./config/router";
import store from "./store";

import Popup from './components/Popup';

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.prototype.$popup = Popup;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
