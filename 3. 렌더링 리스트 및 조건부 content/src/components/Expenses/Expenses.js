import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import ExpenseList from './ExpenseList';
import './Expenses.css';

const Expenses = (props) => {
  // 초기값 년도
  const [filteredYear, setFilteredYear] = useState('2021');

  // fliter에서 받은 현재 선택한 년도
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  // 필터링된 데이터: 데이터의 년도===현재 선택한 년도 반환
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;