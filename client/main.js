'use strict';
import "babel-polyfill"
import './main.less'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCm from './lib/cm-plugin'

//懒加载路由 只有访问这个路由才会加载js
Vue.use(VueRouter);
Vue.use(VueCm);

var router = new VueRouter({
    history: true, //html5模式 去掉锚点
    saveScrollPosition: true //记住页面的滚动位置 html5模式适用
})

//定义路由
router.map({
    '/': {
        component: require('./states/index/route').default
    },
    '/search/:keyword': {
        component: require('./states/search/route').default,
        subRoutes: {
            '/': {
                component: require('./states/search/panda/route').default
            },
            '/panda': {
                component: require('./states/search/panda/route').default
            },
            '/huya': {
                component: require('./states/search/huya/route').default
            },
            '/douyu': {
                component: require('./states/search/douyu/route').default
            },
            '/bili': {
                component: require('./states/search/bili/route').default
            },
            '/zhanqi': {
                component: require('./states/search/zhanqi/route').default
            }
        }
    },
    '/video': {
        component: require('./states/video/route').default
    },
})
router.redirect({
    '*': '/'
})

var App = Vue.extend({})

//启动APP
router.start(App, '#app')