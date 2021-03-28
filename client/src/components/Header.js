import React from 'react';
import Budget from './Budget';
import ExpenseTotal from './ExpenseTotal';
import Remaining from './Remaining';

const Header = () => {
    return (
        <>
            <h1 className='mt-3'>My Budget Planner</h1>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <Budget />
                </div>
                <div className='col-sm'>
                    <Remaining />
                </div>
                <div className='col-sm'>
                    <ExpenseTotal />
                </div>
            </div>
        </>
    );
};

export default Header;
