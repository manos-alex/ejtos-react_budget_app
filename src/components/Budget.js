import React, { useContext, useState } from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const { budget,currency,dispatch } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        let newBudget = event.target.value;
        if (newBudget > 20000) {
            alert("Budget cannot exceed "+currency+"20,000");
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