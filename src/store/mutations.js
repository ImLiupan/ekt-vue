import * as types from './mutation-types'
import storage from 'good-storage'

const mutations = {
    [types.SET_LOGIN]: (state, data) => {
        storage.set('token', data)
        state.token = data;
    },
    [types.SET_LOGOUT]: (state) => {
        storage.remove('token')
        state.token = null
    },
    [types.SET_ACCOUT_IDE]: (state, data) => {
    	storage.set('account_ide', data)
        state.account_ide = data;
    }
}

export default mutations
