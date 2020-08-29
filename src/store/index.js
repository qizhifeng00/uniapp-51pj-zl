import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: false,
		hasLogin: false,
		userName: "",
		token: ""
	},
	mutations: {
		login(state, token) {
			state.token = token;
			state.hasLogin = true;
		},
		logout(state) {
			state.userName = "";
			state.hasLogin = false;
		}
	},
	actions: {
		login({ commit }) {
			commit('login')
		},
		logout(commit) {
			commit('logout')
		},
		async getAdminData({ commit }) {
			try {
				const res = await getAdminInfo(state.token)
				if (res.status == 1) {
					commit('saveAdminInfo', res.data);
				} else {
					throw new Error(res.type)
				}
			} catch (err) {
				// console.log(err.message)
			}
		}
	}
})

export default store
