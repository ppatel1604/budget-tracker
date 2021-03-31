import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../context/AppContext';
import { IExpenseItem } from '../interfaces/ExpenseItem';

const AddExpenseForm = () => {
    const {
        state: { expenses },
        dispatch: { addExpense },
    } = useContext(ExpenseContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const lastExpenseIndex = expenses.length;
        const lastExpenseId =
            lastExpenseIndex > 0 ? expenses[lastExpenseIndex - 1].id : 1;

        const expense: IExpenseItem = {
            id: lastExpenseId + 1,
            name,
            cost: parseInt(cost),
        };

        addExpense(expense);

        setName('');
        setCost('');
    };

    return (
        <>
            <h3 className='mt-3'>Add Expense</h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <form onSubmit={onSubmit}>
                        <div className='row'>
                            <div className='col-sm'>
                                <label htmlFor='name'>Name</label>
                                <input
                                    required
                                    type='text'
                                    className='form-control'
                                    id='name'
                                    value={name}
                                    onChange={(event) =>
                                        setName(event.target.value)
                                    }
                                />
                            </div>
                            <div className='col-sm'>
                                <label htmlFor='name'>Name</label>
                                <input
                                    required
                                    type='text'
                                    className='form-control'
                                    id='name'
                                    value={cost}
                                    onChange={(event) =>
                                        setCost(event.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm'>
                                <button
                                    type='submit'
                                    className='btn btn-primary mt-3'
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddExpenseForm;
