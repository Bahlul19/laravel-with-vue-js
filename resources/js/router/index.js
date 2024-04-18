import { createRouter, createWebHistory } from "vue-router";
import login from '../components/auth/LoginComponent.vue';
import registration from '../components/auth/RegistrationComponent.vue';

const routes = [

    {
        path: '/',
        component : login
    },
    {
        path : '/registration',
        component : registration
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
