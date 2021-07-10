import React, { useContext } from 'react';
import { ExpenseContext } from '../context/AppContext';

const ExpenseTotal: React.FC = () => {
    const {
        state: { expenses },
    } = useContext(ExpenseContext);

    const totalExpense =
        expenses && expenses.length > 0
            ? expenses.reduce((total, item) => {
                  return (total += item.cost);
              }, 0)
            : 0;

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: ${totalExpense}</span>
        </div>
    );
};

export default ExpenseTotal;
