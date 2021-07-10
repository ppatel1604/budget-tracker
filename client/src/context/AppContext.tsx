import { createContext, FC, ReactNode, useMemo, useReducer } from 'react';
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
        deleteExpense: (id: string) => void;
        setExpenses: (expenses: IExpenseItem[]) => IExpenseItem[];
    };
}

export type ExpenseRootAction = ExpenseAction;

const contextDefaultValues: IExpenseState = {
    expenses: [],
    budget: 2000,
};

export const ExpenseRootReducer = (
    state: IExpenseState,
    action: ExpenseRootAction,
): IExpenseState => {
    switch (action.type) {
        case Expense.SET_EXPENSES:
            return {
                ...state,
                expenses: action.payload.expenses,
            };
        case Expense.ADD_EXPENSE:
            return {
                ...state,
                expenses: state.expenses && state.expenses.length > 0 ? [...state.expenses, action.payload.expense] : [action.payload.expense],
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

    const setExpenses = (expenses: IExpenseItem[]): IExpenseItem[] => {
        dispatch({
            type: Expense.SET_EXPENSES,
            payload: { expenses },
        });
        return expenses;
    };

    const addExpense = (expense: IExpenseItem) => {
        dispatch({
            type: Expense.ADD_EXPENSE,
            payload: { expense },
        });
    };

    const deleteExpense = (id: string) => {
        dispatch({
            type: Expense.DELETE_EXPENSE,
            payload: { id },
        });
    };

    const value = useMemo(
        () => ({
            state,
            dispatch: {
                setExpenses,
                addExpense,
                deleteExpense,
            },
        }),
        [state],
    );

    return (
        <ExpenseContext.Provider value={value}>
            {children}
        </ExpenseContext.Provider>
    );
};

export default ExpenseState;
