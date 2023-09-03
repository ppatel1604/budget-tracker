import { IExpenseItem } from '../interfaces/ExpenseItem';
import axios, * as others from 'axios';

export const getData = async () => {
    try {
        const res = axios.get(`/expense`);
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
        const res = axios.delete(`expense/${id}`);
        return (await res).data;
    } catch (error) {
        console.error(error);
    }
};
