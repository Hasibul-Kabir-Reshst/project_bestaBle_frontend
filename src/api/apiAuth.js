import axios from 'axios';
import { API } from '../utilities/config';

const headers = {
    "Content-Type": "application/json"
};
export const register = (user) => {
    return axios.post(`${API}/user/signup`, user, { headers })
};

export const login = (user) => {
    return axios.post(`${API}/user/signin`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
};