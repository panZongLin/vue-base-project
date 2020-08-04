import {
	getTableListQuest,
} from '../service/interface';

export default {
	namespaced: true,

	state: () => ({
		A: 2,
		tableList: []
	}),

	getters: {
		doubleA(state) {
			return state.A * 2
		} // -> getters['tableExample/doubleA']
	},

	actions: {
		// -> dispatch('tableExample/getTableList')
		async getTableList(context, payload) {			
			let res = await getTableListQuest(payload);
			context.commit("updateList", {
				tableList: res
			})
		}, 
	},

	mutations: {
		// -> commit('tableExample/tripleA')
		tripleA(state) {
			state.A = state.A * 3
		}, 	

		updateList(state, payload) {
			state.tableList = payload.tableList
		}
	},
}