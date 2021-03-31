import { IExpenseItem } from '../interfaces/ExpenseItem';

export enum Expense {
    ADD_EXPENSE = 'ADD_EXPENSE',
    DELETE_EXPENSE = 'DELETE_EXPENSE',
}

export type ExpenseAction = AddExpense | DeleteExpense;

export type AddExpense = {
    type: Expense.ADD_EXPENSE;
    payload: {
        expense: IExpenseItem;
    };
};

export type DeleteExpense = {
    type: Expense.DELETE_EXPENSE;
    payload: {
        id: number;
    };
};
