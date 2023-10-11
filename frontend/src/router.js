
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import OrderOrderManager from "./components/listers/OrderOrderCards"
import OrderOrderDetail from "./components/listers/OrderOrderDetail"
import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"

import SupportingDeliveryManager from "./components/listers/SupportingDeliveryCards"
import SupportingDeliveryDetail from "./components/listers/SupportingDeliveryDetail"
import SupportingInventoryManager from "./components/listers/SupportingInventoryCards"
import SupportingInventoryDetail from "./components/listers/SupportingInventoryDetail"
import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"
import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/orders/orders',
                name: 'OrderOrderManager',
                component: OrderOrderManager
            },
            {
                path: '/orders/orders/:id',
                name: 'OrderOrderDetail',
                component: OrderOrderDetail
            },
            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },

            {
                path: '/supportings/deliveries',
                name: 'SupportingDeliveryManager',
                component: SupportingDeliveryManager
            },
            {
                path: '/supportings/deliveries/:id',
                name: 'SupportingDeliveryDetail',
                component: SupportingDeliveryDetail
            },
            {
                path: '/supportings/inventories',
                name: 'SupportingInventoryManager',
                component: SupportingInventoryManager
            },
            {
                path: '/supportings/inventories/:id',
                name: 'SupportingInventoryDetail',
                component: SupportingInventoryDetail
            },
            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },
            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },



    ]
})
