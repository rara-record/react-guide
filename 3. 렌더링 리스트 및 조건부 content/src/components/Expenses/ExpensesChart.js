import React from 'react'
import Chart from '../Chart/Chart';

// 필더된 아이템(filteredExpenses)을 받아온다
const ExpensesChart = (props) => {
  // 데이터 포인트 정의하기
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {
    // 데이터에서 년도(index번호)를 추출한다.
    const expenseMonth = expense.date.getMonth(); // strat at 0 => January => 0
    // 정의한 데이터에, 추출한 연도index에 따라 value에 가격을 추가한다.
    chartDataPoints[expenseMonth].value += expense.amount;
  }


  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;
