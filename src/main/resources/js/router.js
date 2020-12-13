import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/main",
        name: "main",
        component: () => import("./pages/Main.vue")
    },
    {
        path: '*', redirect: '/'
    }
];

const router = new VueRouter({routes});

export default router;
