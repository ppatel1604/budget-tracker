import React, { useContext, useEffect } from 'react';
import { getData } from '../api/api';
import { ExpenseContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList: React.FC = () => {
    const {
        state: { expenses },
        dispatch: { setExpenses },
    } = useContext(ExpenseContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const response: any = await getData();
                setExpenses(response);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {expenses && expenses.length > 0 && (
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
