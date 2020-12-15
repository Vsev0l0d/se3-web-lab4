import Vue from 'vue'
import App from 'pages/App.vue'
import router from "./router"
import {store} from "./store/index"


new Vue({
    render: a => a(App), store, router
}).$mount("#app");