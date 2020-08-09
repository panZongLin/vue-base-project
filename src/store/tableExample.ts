import { getTableListQuest } from "../service/interface.ts";
import { Module, GetterTree, ActionTree, MutationTree } from 'vuex';
 


const namespaced: boolean = true;

interface state {
	A: number,
	tableList: object[]
}
const state: state = {
	A: 2,
	tableList: []
};

const getters: GetterTree<any, any> = {
	doubleA(state: state): number {
		return state.A * 2;
	},
}


const actions: ActionTree<any, any> = {
	async getTableList(context, payload) {
		let result = await getTableListQuest(payload);
		context.commit("updateList", {
			tableList: result.data
		});
	},
}

const mutations: MutationTree<any> = {
	tripleA(state: state) {
		state.A = state.A * 3;
	},
	updateList(state: state, payload: any) {
		state.tableList = payload.tableList;
	}
}

const tableExample: Module<state, any> =  {
	namespaced,
	state,
	getters,
	actions,
	mutations
}
export default tableExample;

