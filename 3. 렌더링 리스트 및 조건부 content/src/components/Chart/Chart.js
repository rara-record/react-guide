import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  // data에서 가격만 추출
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  // 차트에 나타날 실질적인 12달의 가격(제일 높은 가격)
  const totalMaximum = Math.max(...dataPointValues); // 배열이어서 spread 연산자사용

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
