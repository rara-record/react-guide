import React, { useState } from 'react';

import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {

  // 초기 배열
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // 초기배열의 state
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // form에서 받은 데이터를 초기배열 첫번째 값으로 추가하고, 기존 배열을 나열한다
  const addExpenseHandler = expense => {
    setExpenses([expense, ...expenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;