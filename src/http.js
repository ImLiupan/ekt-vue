/**
 * http配置
 */

import axios from 'axios'
import store from './store';
import router from './router'

// axios 配置
axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'https://api.github.com';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.currentRoute.fullPath !== 'login' && router.replace({
                        path: 'login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    })
            }
            return Promise.reject(error.response.data)
        }
        $toast.show('网络繁忙，请稍后重试', 1500)
        return Promise.reject(error)
    });

export default axios;
