import Vue from "vue";
import Vuex from "vuex";

import tableExample from "./tableExample.ts";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	getters:{
		HAHA() {
			return 6666666;
		},
	},
	mutations: {},
	actions: {},
	modules: {
		tableExample
	}
});
