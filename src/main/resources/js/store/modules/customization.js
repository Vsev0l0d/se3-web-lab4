import Customization from '../../auth/customization'

const settings = JSON.parse(localStorage.getItem('settings'))
const defaultSettings = new Customization(true, 10,'#b8daff', 'black', 'red')

const initialState = settings ? settings : defaultSettings

export const customization = {
    state: initialState,
    actions: {
        changeTheme({commit}){commit('setThemeColor')},
        changeNumberOfRowInTable({commit}, number){commit('setNumberOfRowInTable', number)},
        changeAreaColor({commit}, color){commit('setAreaColor', color)},
        changeHitColor({commit}, color){commit('setHitColor', color)},
        changeMissColor({commit}, color){commit('setMissColor', color)}
    },
    mutations: {
        setThemeColor(state){
            state.isDarkTheme = !state.isDarkTheme
            localStorage.setItem('settings', JSON.stringify(new Customization(
            state.isDarkTheme, state.numberOfRowInTable,
            state.areaColor, state.hitColor, state.missColor)))
        },
        setNumberOfRowInTable(state, number){
            state.numberOfRowInTable = number
            localStorage.setItem('settings', JSON.stringify(new Customization(
                state.isDarkTheme, state.numberOfRowInTable,
                state.areaColor, state.hitColor, state.missColor)))
        },
        setAreaColor(state, color){
            state.areaColor = color
            localStorage.setItem('settings', JSON.stringify(new Customization(
                state.isDarkTheme, state.numberOfRowInTable,
                state.areaColor, state.hitColor, state.missColor)))
        },
        setHitColor(state, color){
            state.hitColor = color
            localStorage.setItem('settings', JSON.stringify(new Customization(
                state.isDarkTheme, state.numberOfRowInTable,
                state.areaColor, state.hitColor, state.missColor)))
        },
        setMissColor(state, color){
            state.missColor = color
            localStorage.setItem('settings', JSON.stringify(new Customization(
                state.isDarkTheme, state.numberOfRowInTable,
                state.areaColor, state.hitColor, state.missColor)))
        }
    },
    getters: {
        isDarkTheme(state){return state.isDarkTheme},
        numberOfRowInTable(state){return state.numberOfRowInTable},
        areaColor(state){return state.areaColor},
        hitColor(state){return state.hitColor},
        missColor(state){return state.missColor}
    }
}