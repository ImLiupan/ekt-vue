import axios from 'axios';

export function api_cryptcode(dyn_data) {
    const url = '../../static/json/cryptcode.json';
    const data = {

    }
    Object.assign(data, dyn_data);
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}

export function api_login(dyn_data) {
    const url = '../../static/json/login.json';
    const data = {

    }
    Object.assign(data, dyn_data);
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}

export function api_register(dyn_data) {
    const url = '../../static/json/register.json';
    const data = {

    }
    Object.assign(data, dyn_data);
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}

export function api_house(dyn_data) {
    const url = '../../static/json/house.json';
    const data = {

    }
    Object.assign(data, dyn_data);
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}

export function api_record(dyn_data) {
    const url = 'https://www.easy-mock.com/mock/5b2cc79d8d2fb11faa539af7/ekt/record';
    const data = {

    }
    Object.assign(data, dyn_data);
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}
