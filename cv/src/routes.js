import Home from './Components/Layouts/Home/Index.vue'
import User from './Components/Layouts/User/Index.vue'
import About from './Components/Layouts/About/Index.vue'
import Contact from './Components/Layouts/Contact/Index.vue'
import DemoMixin from './Components/Layouts/DemoMixin/Index.vue'
import DemoCallComponent from './Components/Layouts/DemoCallComponent/Index.vue'
import InteractingWithFirebase from './Components/Layouts/InteractingWithFirebase/Index.vue'


export const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/user',
        name: 'user',
        component: User
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/demo-mixin',
        name: 'demo-mixin',
        component: DemoMixin
    },
    {
        path: '/demo-call-component',
        name: 'demo-call-component',
        component: DemoCallComponent
    },
    {
        path: '/interacting-with-firebase',
        name: 'interacting-with-firebase',
        component: InteractingWithFirebase
    }
]