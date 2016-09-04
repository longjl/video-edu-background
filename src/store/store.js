"use strict"
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//定义 App State
const state = {
    static_path:'http://10.0.0.8:8082/upload/',
    api_path: 'http://10.0.0.8:8082', //http://10.0.0.8:8082 http://192.168.1.112:8082
    user: {
        id: localStorage.getItem('id') || '',
        name: localStorage.getItem('name') || ''
    }
};
//定义会被用到的 State Mutations
const mutations = {
    USER (state, id, name) {//修改用户信息
        state.user.id = id
        state.user.name = name
    }
};

//定义可被调用的 Actions
const actions = {
    user: 'USER'
};

export default new Vuex.Store({
    state,
    mutations,
    actions
})