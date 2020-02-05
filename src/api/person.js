import axios from './index';


//Verify login
export function verifyLogin() {
    return axios.get('/personal/login');
}