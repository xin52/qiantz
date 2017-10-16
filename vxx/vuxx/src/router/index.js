import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import loading from '@/components/loading'
import max from '@/components/max'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index
    }, {
        path: '/loading',
        name: 'loading',
        component: loading
    }, {
        path: '/max',
        name: 'max',
        component: max
    }]
})