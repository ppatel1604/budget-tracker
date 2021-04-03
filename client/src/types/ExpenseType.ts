import { IExpenseItem } from '../interfaces/ExpenseItem';

export enum Expense {
    ADD_EXPENSE = 'ADD_EXPENSE',
    SET_EXPENSES = 'SET_EXPENSES',
    DELETE_EXPENSE = 'DELETE_EXPENSE',
}

export type ExpenseAction = SetExpenses | AddExpense | DeleteExpense;

export type SetExpenses = {
    type: Expense.SET_EXPENSES;
    payload: {
        expenses: IExpenseItem[];
    };
};

export type AddExpense = {
    type: Expense.ADD_EXPENSE;
    payload: {
        expense: IExpenseItem;
    };
};

export type DeleteExpense = {
    type: Expense.DELETE_EXPENSE;
    payload: {
        id: string;
    };
};
