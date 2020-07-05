import axios from './index';


//Verify login
export function verifyLogin() {
    return axios.get('/personal/login');
}

export function loginOut(){
    return axios.get('/personal/out');
}

export function queryInfo() {
    return axios.get('/personal/info');
}

export function login(payload) {
    return axios.post('/personal/login',payload);
}