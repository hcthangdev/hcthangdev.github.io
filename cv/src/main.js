import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import App from './App.vue'

Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode: 'history',
})


Vue.use(VueResource)
Vue.http.options.root = 'https://learn-vue-client.firebaseio.com'
Vue.http.interceptors.push((request, next) => {
    next(res => {})
})

export const eventBus = new Vue({
    data() {
        return {
            xxx: 'okok'
        }
    },
    created() {
        window.addEventListener('resize', this.busSize)
    },
    methods: {
        busMoney(newMoney) {
            this.$emit('editMoney', newMoney)
        },
        busSize() {
            this.$emit('currentSizeScreen', window.innerWidth)
        }
    },
})

Vue.mixin({
    data() {
        return {
            cars: ['bmw', 'lexus', 'honda'],
            keywordFiltCar: ''
        }
    },
    computed: {
        filterCar() {
            return this.cars.filter(car => {
                return car.match(this.keywordFiltCar)
            })
        },
    },
    methods: {
        appendName(p) {
            return this.cars.map(car => car = car + p)
        }
    },
})

Vue.filter('chuHoa', (text) => {
    return text.toUpperCase()
})

Vue.directive('customCSS', {
    bind(el, binding, vnode) {
        var delay = binding.modifiers['delay'] ? 2000 : 0
        binding.modifiers['okok'] ? console.log(1) : false
        binding.modifiers['hehe'] ? console.log(2) : false
        binding.modifiers['haha'] ? console.log(3) : false
        setTimeout(() => {
            binding.arg == 'background' ? el.style.background = binding.value : el.style.color = binding.value
        }, delay)
    }
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})