import Customization from '../../auth/customization'

const settings = JSON.parse(localStorage.getItem('settings'))
const defaultSettings = new Customization(true, 10,"#b8daff", "black", "red")

const initialState = settings ? settings : defaultSettings

export const customization = {
    state: initialState,
    methods: {
        save(){
            localStorage.setItem('user', new Customization(
                this.isDarkTheme, this.numberOfRowInTable,
                this.diagram.areaColor, this.diagram.hitColor, this.diagram.missColor));
        }
    },
    actions: {
        changeTheme({commit}){commit('setThemeColor')},
        changeNumberOfRowInTable({commit}, number){commit('setNumberOfRowInTable', number)},
        changeAreaColor({commit}, color){commit('setAreaColor', color)},
        changeHitColor({commit}, color){commit('setHitColor', color)},
        changeMissColor({commit}, color){commit('setMissColor', color)}
    },
    mutations: {
        setThemeColor(state){state.isDarkTheme = !state.isDarkTheme; this.save()},
        setNumberOfRowInTable(state, number){state.numberOfRowInTable = number; this.save()},
        setAreaColor(state, color){state.diagram.areaColor = color; this.save()},
        setHitColor(state, color){state.diagram.hitColor = color; this.save()},
        setMissColor(state, color){state.diagram.missColor = color; this.save()}
    },
    getters: {
        isDarkTheme(state){return state.isDarkTheme},
        numberOfRowInTable(state){return state.numberOfRowInTable},
        areaColor(state){return state.diagram.areaColor},
        hitColor(state){return state.diagram.hitColor},
        missColor(state){return state.diagram.missColor}
    }
}