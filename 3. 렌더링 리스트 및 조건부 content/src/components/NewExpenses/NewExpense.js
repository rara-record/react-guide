import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  // form 활성/비활성화
  const [isEditing, setIsEditing] = useState(false);

  // form에서 받은 데이터를 App.js로
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false); // 제출 완료 후 폼 닫음
  };

  // 버튼 클릭시 state변경
  const startEditingHandler = () => {
    setIsEditing(true);
  }
  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;