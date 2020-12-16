import Vue from 'vue'
import Vuex from 'vuex'
import {auth} from "./modules/auth"
import {points} from "./modules/points"

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        auth,
        points
    },
    state: {isDarkTheme: true},
    actions: {changeTheme({commit}){commit('changeThemeColor')}},
    mutations: {changeThemeColor(state){state.isDarkTheme = !state.isDarkTheme}},
    getters: {isDarkTheme(state){return state.isDarkTheme}}
})