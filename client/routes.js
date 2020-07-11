import VueRouter from 'vue-router'
import Login from '@web-page/Login.vue'
import Register from '@web-page/Register.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/auth/login',
            component: Login
        },
        {
            path: '/auth/register',
            component: Register
        }
    ]
})
