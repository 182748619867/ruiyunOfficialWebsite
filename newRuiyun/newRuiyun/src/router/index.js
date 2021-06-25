import Vue from 'vue'
import Router from 'vue-router'
// import $ from 'jquery'

// 主入口
import layout from '@/layout/index'
import '../assets/css/base.css'
import '../assets/css/iconfont.css'
import '../assets/css/bootstrap.min.css'
import '../assets/js/jquery.js';
import '../assets/js/bootstrap.min.js';

Vue.use(Router)

// 解决重复点击路由报错的BUG
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err)
}

export default new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            redirect: '/system',
        },
        {
            name: 'system',
            path: '/system',
            component: layout,
            redirect: '/system/home',
            children: [{
                    path: 'home',
                    component: () =>
                        import ('@/views/home.vue')
                },
                {
                    path: 'about',
                    component: () =>
                        import ('@/views/about.vue')
                },
                {
                    path: 'case',
                    component: () =>
                        import ('@/views/case.vue')
                },
                {
                    path: 'app',
                    component: () =>
                        import ('@/views/app.vue')
                },
                {
                    path: 'contact',
                    component: () =>
                        import ('@/views/contact.vue')
                }
            ]
        }
    ]
})