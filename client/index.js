import Vue from 'vue'
import Main from './pages/main.vue'

const app = new Vue({
    el: '#app',
    render: h => h(Main)
})