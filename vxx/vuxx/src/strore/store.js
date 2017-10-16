import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        onedata: '',
        twodata: '',
        states: false,
        tablefrom: "",
        states1: false,
         states2: false
    },
    mutations: {
         nav(state, data) {
            state.onedata = data;
           
        },
        all(state, data) {
            state.twodata = data;
            
        },
        state1(state, data) {
            state.states = data;
           
        },
        mas(state, data) {
            state.tablefrom = data
        },
        state2(state, data) {
            state.states1 = data;
            
        }
    },
    actions: {
        getNav({ dispatch, commit }) {
            return new Promise((resolve, reject) => {
                this.axios.get("/api/front_article/getNav").then(data => {
                    commit("nav", data.data.data)
                    resolve()
                })
            })

        },
        getAll({ dispatch, commit }) {
            return new Promise((resolve, reject) => {
                this.axios.get("/api/front_article/getArticleAll").then(data => {
                    commit("all", data.data.data);
                    resolve();
                })
            })
        },
        getAllData({ dispatch, commit }, data) {
            Promise.all([dispatch("getNav"), dispatch("getAll")]).then(() => {
                commit("state1", true)
                data._this.$router.push({ path: data.id })
            })
        },
        getmax({ dispatch, commit }) {
            return new Promise((resolve, reject) => {
                this.axios.get("/api/front_article/getArticleAll").then(data => {
                    commit("mas", data.data.data);

                    resolve();
                })
            })
        },
        maxs({ dispatch, commit }, datas) {
            dispatch("getmax").then(() => {
                commit("state2", true)
                datas._this.$router.push({ path: datas.id })
            })
        }


    }
})

export default store;