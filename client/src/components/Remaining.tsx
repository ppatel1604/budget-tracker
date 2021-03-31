import React, { useContext } from 'react';
import { ExpenseContext } from '../context/AppContext';

const Remaining = () => {
    const {
        state: { expenses, budget },
    } = useContext(ExpenseContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
