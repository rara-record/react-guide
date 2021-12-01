import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // state를 활용하여 value 저장하기
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // form이 제출됐을때
  const submitHandler = (event) => {
    event.preventDefault();

    // 변경한 state(value)값을 오브젝트에 담는다
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // 상위 컴포넌트로 state 올리기
    props.onSaveExpenseData(expenseData);

    // input 초기화
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">

        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler} />
        </div>

      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancle</button>
        <button type="submit">Add Expense</button>
      </div>

    </form>
  );
}

export default ExpenseForm;
