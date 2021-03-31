import React, { useContext } from 'react';
import { ExpenseContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList: React.FC = () => {
    const {
        state: { expenses },
    } = useContext(ExpenseContext);

    return (
        <>
            {expenses.length > 0 && (
                <>
                    <h3 className='mt-3'>Expenses</h3>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <ul className='list-group'>
                                {expenses.map((exp) => (
                                    <ExpenseItem
                                        key={exp.id}
                                        id={exp.id}
                                        name={exp.name}
                                        cost={exp.cost}
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
