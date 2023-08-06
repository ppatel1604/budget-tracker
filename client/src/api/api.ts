import { IExpenseItem } from '../interfaces/ExpenseItem';
import { API_ROOT } from './api-config';
const axios = require('axios');

const instance = axios.create({
    baseURL: `${API_ROOT}`,
});

export const getData = async () => {
    try {
        const res = instance.get(`/expense`);
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
        const result = await instance.post(
            `/expense`,
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
        const res = instance.delete(`expense/${id}`);
        return (await res).data;
    } catch (error) {
        console.error(error);
    }
};
