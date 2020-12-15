import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./pages/Login.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: "/main",
        name: "main",
        component: () => import("./pages/Main.vue")
    },
    {
        path: '*', redirect: '/login'
    }
];

const router = new VueRouter({/*mode: 'history',*/ routes});

export default router;
