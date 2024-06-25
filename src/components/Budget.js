import React, { useContext, useState } from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const { budget,currency,dispatch,expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost)
    }, 0);

    const handleBudgetChange = (event) => {
        let newBudget = event.target.value;
        if (newBudget > 20000) {
            alert("Budget cannot exceed "+currency+"20,000");
            return;
        }else if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending")
            return;
        }

        dispatch({
            type: "SET_BUDGET",
            payload: newBudget
        })
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type='number' step="10"  value={budget} onChange={handleBudgetChange}></input>
        </div>
    );
}

export default Budget;