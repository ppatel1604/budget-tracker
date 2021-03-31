import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseState from './context/AppContext';

const App = () => {
    return (
        <ExpenseState>
            <div className='container'>
                <Header />
                <ExpenseList />
                <AddExpenseForm />
            </div>
        </ExpenseState>
    );
};

export default App;
