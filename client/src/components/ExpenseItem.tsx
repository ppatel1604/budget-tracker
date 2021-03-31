import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { ExpenseContext } from '../context/AppContext';
import { IExpenseItem } from '../interfaces/ExpenseItem';

const ExpenseItem: React.FC<IExpenseItem> = ({ id, name, cost }) => {
    const {
        dispatch: { deleteExpense },
    } = useContext(ExpenseContext);

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {name}
            <div>
                <span className='badge badge-primary badge-pill mr-3'>
                    ${cost}
                </span>
                <TiDelete
                    size='1.5em'
                    onClick={() => deleteExpense(id)}
                ></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItem;
