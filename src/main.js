import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import VueSignin from "./pages/VueSignin"
import VueSignup from "./pages/VueSignup"

const routes = [
    { path: '/signin', component: VueSignin},
    { path: '/signup', component: VueSignup}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
