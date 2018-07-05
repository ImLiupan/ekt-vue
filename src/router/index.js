import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import storage from 'good-storage'

import Index from '@/components/index/index'
import House from '@/components/house/index'
import HouseDetail from '@/components/house/detail'

import Customer from '@/components/customer/index'
import My from '@/components/my/index'
import About from '@/components/my/about'
import Info from '@/components/my/info'
import Commission from '@/components/my/commission'
import Account from '@/components/my/account'
import Record from '@/components/my/record'
import Forward from '@/components/my/forward'
import Result from '@/components/my/result'

import Login from '@/components/login'

import NotFound from '@/components/not_found'

Vue.use(Router)

// 页面刷新时，重新赋值token
if (storage.get('token')) {
    store.commit('set_login', storage.get('token'));
}
if (storage.get('account_ide')) {
    store.commit('set_account_ide', storage.get('account_ide'));
}

const router = new Router({
    mode: 'history',
    routes: [{
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/house',
            name: 'House',
            component: House
        },
        {
            path: '/detail/:id',
            name: 'HouseDetail',
            component: HouseDetail
        },
        {
            path: '/customer',
            name: 'Customer',
            component: Customer
        },
        {
            path: '/my',
            name: 'My',
            component: My
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/info',
            name: 'Info',
            component: Info
        },
        {
            path: '/commission',
            name: 'Commission',
            component: Commission
        },
        {
            path: '/account',
            name: 'Account',
            component: Account
        },
        {
            path: '/record',
            name: 'Record',
            component: Record
        },
        {
            path: '/forward',
            name: 'Forward',
            component: Forward
        },
        {
            path: '/result/:id',
            name: 'Result',
            component: Result
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                requireAuth: false
            }
        }
    ],
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    if (to.fullPath === '/login' && store.state.token) {
        next('/index');
        return;
    }
    if (to.matched.some(r => r.meta.requireAuth !== false)) {
        if (!store.state.token) {
            next({
                path: 'login',
                query: {
                    redirect: to.fullPath
                }
            });
            return;
        }
    }
    next();
})

export default router;
