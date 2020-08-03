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
		async getTableList(context, payload) {
			let res = await getTableListQuest(payload);
			context.commit("updateList", {
				tableList: res
			})
		}, // -> dispatch('tableExample/getTableList')
	},

	mutations: {
		tripleA(state) {
			state.A = state.A * 3
		}, // -> commit('tableExample/tripleA')
		
		updateList(state, payload) {
			state.tableList = payload.tableList
		}
	},
}