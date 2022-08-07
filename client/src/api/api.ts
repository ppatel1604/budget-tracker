import { IExpenseItem } from '../interfaces/ExpenseItem';
import { API_ROOT } from './api-config';
const axios = require('axios');

export const getData = async () => {
    try {
        const res = axios.get(`${API_ROOT}/expense`);
        return (await res).data;
    } catch (error) {
        console.error(error);
    }
};

export const postData = async (item: IExpenseItem) => {
    try {
        const itemString = JSON.stringify(item);
        const customConfig = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const result = await axios.post(
            `${API_ROOT}/expense`,
            itemString,
            customConfig,
        );
        return result.data;
    } catch (error) {
        console.error(error);
    }
};

export const deleteData = async (id: string) => {
    try {
        const res = axios.delete(`${API_ROOT}/expense/${id}`);
        return (await res).data;
    } catch (error) {
        console.error(error);
    }
};
