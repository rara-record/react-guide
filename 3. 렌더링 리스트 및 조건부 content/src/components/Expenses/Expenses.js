import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  }))

  let expensesContent = <p>조건에 맞는 데이터가 없습니다.</p>

  if (filterExpenses.length > 0) {
    expensesContent =
      filterExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
  }




  // App.js에서 가져온 배열에서 데이터 추출
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </>
  );
}

export default Expenses;