import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        points:[],
        r: null
    },
    actions: {
        GET_POINTS({commit}){
            axios.get('/points')
                .then((response) =>{
                commit('ADD_POINTS', response.data)
            })
        },
        POST_POINTS({commit}, points){
            axios.post('/points',
                JSON.stringify(points),
                {headers: {'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*"}}
            ).then((response) =>{
                commit('ADD_POINTS', response.data)
            })
        },
        CLEAR({commit}){
            axios.delete('/clear')
                .then(commit('CLEAR_POINTS'))
        },
        DELETE_POINTS({commit}, ids){
            const urlData = '?ids=' + ids.join()
            axios.delete('/points' + urlData)
                .then((response) =>{
                    commit('REMOVE_POINTS', response.data)
                })
        },
        UPDATE_R({commit}, r){
            commit('SET_R', r)
        }
    },
    mutations: {
        CLEAR_POINTS: (state) => {state.points = []},
        ADD_POINTS: (state, points) => {
            for (let i = 0; i < points.length; i++) {
                points[i].selected = false
                state.points.push(points[i])
            }
        },
        REMOVE_POINTS:(state, ids) => {
            state.points = state.points.filter(point => ids.indexOf(point.id) === -1)
        },
        SET_R: (state, r) => {
            state.r = r
        }
    },
    getters: {
        POINTS(state){
            return state.points
        },
        R(state){
            return state.r
        }
    }
})

export default store