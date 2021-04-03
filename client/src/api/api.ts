import { API_ROOT } from './api-config';
const axios = require('axios');

export const getData = async () => {
    try {
        const res = axios.get(`${API_ROOT}/expense`);
        return (await res).data;
    } catch (error) {
        console.log(error);
    }
};
