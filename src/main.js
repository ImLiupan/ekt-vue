import Vue from 'vue'
import axios from './http'
import App from './App'
import router from './router'
import store from './store'


import {$loading,$toast} from './components/common/loading'
import $backdrop from './components/common/backdrop'
import $popup from './components/common/popup'
import $dialog from './components/common/popup/dialog.js'
import $recommend from './components/common/recommend/index.js'

Vue.prototype.$backdrop = window.$backdrop = $backdrop
Vue.prototype.$loading = window.$loading = $loading
Vue.prototype.$toast = window.$toast = $toast
Vue.prototype.$recommend = window.$recommend = $recommend
Vue.prototype.$popup = window.$popup = $popup
Vue.prototype.$dialog = window.$dialog = $dialog

Vue.config.productionTip = false

const is_ios = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent)
}

// 一些兼容性代码
/* for iOS 10, users can now pinch-to-zoom even when a website sets user-scalable=no in the viewport. */
document.documentElement.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
        e.preventDefault()
    }
}, false)

/* iOS Safari - Disable double click to zoom */
if (is_ios()) {
    let lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', (e) => {
        let now = (new Date()).getTime()
        if (now - lastTouchEnd < 300) {
            e.preventDefault()
        }
        lastTouchEnd = now
    }, false)
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
