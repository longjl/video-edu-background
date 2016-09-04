'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'
import {configRouter} from './routes'
import App from './app.vue'
//import editor from 'vue-html5-editor'
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueValidator);

////html5 富文本编辑器 https://github.com/PeakTai/vue-html5-editor
//Vue.use(editor,{
//    //全局组件的名称
//    name: "editor",
//    //图片相关配置
//    image: {
//        //服务器上传地址
//        //服务器需要返回json数据类似 {ok:false,msg:"错误信息"} 或者 {ok:true,data:"图片地址"}
//        server: null,
//        //图片上传请求参数名称
//        fieldName: "image",
//        //大小限制,默认512k
//        sizeLimit: 512 * 1024,
//        //是否压缩,如果设置为false,后面3个参数无用
//        compress: true,
//        //压缩后的最大宽度
//        width: 1600,
//        //压缩后的最大高度
//        height: 1600,
//        //jpeg质量
//        quality: 80
//    }});

//取消 Vue.js 所有的日志与警告
Vue.config.silent = false;
//request playload 类型
Vue.http.options.emulateJSON = true;


// 不加跨域xhr会发起options请求
// Vue.http.options.headers={
//     'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
// };
// post的时候会把JSON对象转成formdata
//Vue.http.options.emulateJSON=true;

var router = new VueRouter({
    hashbang: false,
    history: false,
    saveScrollPosition: false,
    transitionOnLoad: false
});

//var router = new VueRouter({
//    hashbang: false,
//    saveScrollPosition: false
//});

configRouter(router);

router.beforeEach(function () {
    window.scrollTo(0, 0)
});

//启动
router.start(App, '#app');