import React, { useContext } from 'react';
import { ExpenseContext } from '../context/AppContext';

const Remaining = () => {
    const {
        state: { expenses, budget },
    } = useContext(ExpenseContext);

    const totalExpenses =
        expenses && expenses.length > 0
            ? expenses.reduce((total, item) => {
                  return total + item.cost;
              }, 0)
            : 0;

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
