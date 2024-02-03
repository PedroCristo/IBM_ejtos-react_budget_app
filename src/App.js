import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//Code to import Budget.js
import Budget from './components/Budget';
//Code to import Remaning.js
import Remaining from './components/Remaining';
//Code to import ExpenseTotal.js
import ExpenseTotal from './components/ExpenseTotal';
//Code to import ExpenseList.js
import ExpenseList from './components/ExpenseList';
//Code to import  ExpenseItem.js
import ExpenseItem from './components/ExpenseItem';
//Code to import  AllocationForm.js
import AllocationForm from './components/AllocationForm';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    {
                        /* Add Budget component here */
                    }      <Budget />

                    {
                        /* Add Remaining component here*/
                        <Remaining />
                    }

                    {
                        /* Add ExpenseTotal component here */
                        <ExpenseTotal />
                    }

                    {
                        /* Add ExpenseList component here */
                        <ExpenseList />
                    }

                    {
                        /* Add ExpenseItem component here */
                        <ExpenseItem />
                    }

                    {
                        /* Add AllocationForm component here under */
                        <AllocationForm />
                    }

                </div>
            </div>
        </AppProvider>
    );
};
export default App;