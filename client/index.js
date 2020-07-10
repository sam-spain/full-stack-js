import Vue from 'vue'
import Main from './pages/main.vue'
import './styles/main.css'

const app = new Vue({
    el: '#app',
    render: (h) => h(Main),
})
