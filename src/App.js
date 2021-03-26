import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <Header />
                <ExpenseList />
                <AddExpenseForm />
            </div>
        </AppProvider>
    );
};

export default App;
