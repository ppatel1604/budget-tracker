import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../context/AppContext';
import { IExpenseItem } from '../interfaces/ExpenseItem';
import { v4 as uuidv4 } from 'uuid';
import { postData } from '../api/api';

const AddExpenseForm = () => {
    const {
        dispatch: { addExpense },
    } = useContext(ExpenseContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const expense: IExpenseItem = {
            id: uuidv4(),
            name,
            cost: parseInt(cost),
        };

        try {
            const response: IExpenseItem = await postData(expense);
            if (response) {
                addExpense(expense);

                setName('');
                setCost('');
            }
        } catch (error) {}
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
                                <label htmlFor='name'>Cost</label>
                                <input
                                    required
                                    type='text'
                                    className='form-control'
                                    id='cost'
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
