import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        points:[]
    },
    actions: {
        GET_POINTS_FROM_API({commit}){
            return axios('http://localhost:31360/points', {
                method: 'GET'
            }).then((response) =>{
                commit('SET_POINTS_TO_STORE', response.data)
            })
        },
        POST_POINTS({commit}, points){
            axios.post('http://localhost:31360/points',
                JSON.stringify(points),
                {headers: {'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*"}}
            ).then((response) =>{
                commit('ADD_POINTS', response.data)
            })
        }
    },
    mutations: {
        SET_POINTS_TO_STORE: (state, points) => {
            state.points = points
        },
        ADD_POINTS: (state, points) =>{
            state.points.push(...points)
        }
    },
    getters: {
        POINTS(state){
            return state.points
        }
    }
})

export default store