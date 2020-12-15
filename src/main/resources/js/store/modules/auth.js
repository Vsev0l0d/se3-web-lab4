import AuthService from '../../auth/auth-service'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null }

export const auth = {
    state: initialState,
    actions: {
        login({ commit }, user) {
            return AuthService.login(user).then(
                user => {
                    commit('loginSuccess', user)
                    return Promise.resolve(user)
                },
                error => {
                    commit('loginFailure')
                    return Promise.reject(error)
                }
            )
        },
        logout({ commit }) {
            AuthService.logout()
            commit('logout')
        },
        register(user) {
            return AuthService.register(user).then(
                response => {return Promise.resolve(response.data)},
                error => {return Promise.reject(error)}
            )
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.isLoggedIn = true
            state.user = user
        },
        loginFailure(state) {
            state.isLoggedIn = false
            state.user = null
        },
        logout(state) {
            state.isLoggedIn = false
            state.user = null
        }
    },
    getters: {
        isLoggedIn(state){return state.isLoggedIn}
    }
}