import { createContext, FC, ReactNode, useReducer } from 'react';
import { IExpenseItem } from '../interfaces/ExpenseItem';
import { Expense, ExpenseAction } from '../types/ExpenseType';

interface IExpenseState {
    expenses: IExpenseItem[];
    budget: number;
}

interface IExpenseStateProps {
    children: ReactNode;
}

interface IContextProps {
    state: IExpenseState;
    dispatch: {
        addExpense: (expenseItem: IExpenseItem) => void;
        deleteExpense: (id: number) => void;
    };
}

export type ExpenseRootAction = ExpenseAction;

const contextDefaultValues: IExpenseState = {
    expenses: [
        { id: 1, name: 'first', cost: 100 },
        { id: 2, name: 'second', cost: 200 },
        { id: 3, name: 'third', cost: 300 },
    ],
    budget: 2000,
};

export const ExpenseRootReducer = (
    state: IExpenseState,
    action: ExpenseRootAction,
): IExpenseState => {
    switch (action.type) {
        case Expense.ADD_EXPENSE:
            return {
                ...state,
                expenses: [...state.expenses, action.payload.expense],
            };
        case Expense.DELETE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload.id,
                ),
            };
        default:
            return state;
    }
};

export const ExpenseContext = createContext({} as IContextProps);

const ExpenseState: FC<IExpenseStateProps> = ({ children }) => {
    const [state, dispatch] = useReducer(
        ExpenseRootReducer,
        contextDefaultValues,
    );

    const addExpense = (expense: IExpenseItem) => {
        dispatch({
            type: Expense.ADD_EXPENSE,
            payload: { expense },
        });
    };

    const deleteExpense = (id: number) => {
        dispatch({
            type: Expense.DELETE_EXPENSE,
            payload: { id },
        });
    };

    return (
        <ExpenseContext.Provider
            value={{ state, dispatch: { addExpense, deleteExpense } }}
        >
            {children}
        </ExpenseContext.Provider>
    );
};

export default ExpenseState;
