import { createMemoryHistory,createRouter, createWebHistory } from "vue-router";
import Home from'./components/Home.vue';
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
const routers = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routers
});

export default router;