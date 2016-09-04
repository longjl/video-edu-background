'use strict'
import store from './store/store'

export function configRouter(router) {
    router.map({
        '/': {  //登录
            component: require('./views/signin.vue')
        },
        '/dashboard':{
            name:'Dashboard',
            component: require('./views/dashboard.vue')
        },
        '*': {
            component: require('./views/not-found.vue')
        }
    });

    // router.beforeEach(function (transition) {
    //     if (transition.to.auth) {
    //         //如果是个人中心学习页面,需要隐藏掉头部和尾部
    //         if (transition.to.name !== undefined && transition.to.name === 'learning') {
    //             store.actions.showHeader(false)
    //         } else {
    //             store.actions.showHeader(true)
    //         }
    //         // 对用户身份进行验证...
    //         if (localStorage.id) {
    //             transition.next()
    //         } else {
    //             var redirect = encodeURIComponent(transition.to.path);
    //             transition.redirect('/login?redirect=' + redirect);
    //         }
    //     } else {
    //         if (transition.to.name !== undefined && transition.to.name === 'library') {
    //             store.actions.showHeader(false)
    //         } else {
    //             store.actions.showHeader(true)
    //         }
    //         if (transition.to.name !== undefined && transition.to.name === 'course') {
    //             store.actions.showFooter(false)
    //         } else {
    //             store.actions.showFooter(true)
    //         }
    //         transition.next()
    //     }
    // });


}