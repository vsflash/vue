import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacts from "../views/Contacts.vue";
import List from "../views/List.vue";
import Item from "../views/Item.vue";
import MenuProject from "../views/MenuProject.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/contacts',
        name: 'Contacts',
        components: {
            default: Contacts,
            navigation: MenuProject
        }
    },
    {
        path: '/',
        name: 'Home',
        components: {
            default: Home,
            navigation: MenuProject
        }
    },
    {
        path: '/list',
        name: 'List',
        components: {
            default: List,
            navigation: MenuProject
        }
    },
    {
        path: '/list/:item_id',
        name: 'Item',
        components: {
            default: Item,
            navigation: MenuProject
        }
    },

    {
        path: '/about',
        name: 'About',
        components: {
            default: About,
            navigation: MenuProject
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
