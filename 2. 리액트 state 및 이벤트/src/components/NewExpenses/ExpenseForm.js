import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  // 상태 업데이트가 이전 상태에 달려있는 상황일때는 
  // 익명함수를 사용하여, prevState를 받아서 상태를 업데이트 한다.
  // 이것이 가장 최근의 상태를 활용하도록, 보장하는 가장 안전한 방법이다

  return (
    <form>
      <div className="new-expense__controls">

        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>

      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>

    </form>
  );
}

export default ExpenseForm;
