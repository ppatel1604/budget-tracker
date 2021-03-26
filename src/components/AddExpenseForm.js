import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const expense = {
            id: uuidv4(),
            name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });

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
                                    required='required'
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
                                <label htmlFor='cost'>Cost</label>
                                <input
                                    required='required'
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