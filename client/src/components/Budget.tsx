import React, { useContext } from 'react';
import { ExpenseContext } from '../context/AppContext';

const Budget: React.FC = () => {
    const {
        state: { budget },
    } = useContext(ExpenseContext);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: ${budget}</span>
        </div>
    );
};

export default Budget;
