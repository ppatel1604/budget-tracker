import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <>
            {expenses.length > 0 && (
                <>
                    <h3 className='mt-3'>Expenses</h3>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <ul className='list-group'>
                                {expenses.map((expense) => (
                                    <ExpenseItem
                                        key={expense.id}
                                        id={expense.id}
                                        name={expense.name}
                                        cost={expense.cost}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ExpenseList;
