import { createRouter, createWebHashHistory } from "vue-router";

import DefaultLayout from '../layouts/DefaultLayout.vue'
import AppDesign from '../pages/AppDesign.vue'
import WebDesign from '../pages/WebDesign.vue'
import GraphicDesign from '../pages/GraphicDesign.vue'
import Company from '../pages/Company.vue'
import Location from '../pages/Location.vue'
import Contact from '../pages/Contact.vue'
import Home from '../pages/Home.vue'

const routes = [
    {
        path:'/',
        name: 'Public',
        component: DefaultLayout,
        redirect: '/',
        children:[
            {
                path:'/',
                name: 'Home',
                component: Home
            },
            {
                path:'/AppDesign',
                name: 'AppDesign',
                component: AppDesign
            },
            {
                path:'/WebDesign',
                name: 'WebDesign',
                component: WebDesign
            },
            {
                path:'/GraphicDesign',
                name: 'GraphicDesign',
                component: GraphicDesign
            },
            {
                path:'/company',
                name: 'Company',
                component: Company
            },
            {
                path:'/location',
                name: 'Location',
                component: Location
            },
            {
                path:'/contact',
                name: 'Contact',
                component: Contact
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router