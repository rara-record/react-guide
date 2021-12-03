import React from 'react'
import './ChartBar.css'

const ChartBar = (props) => {
  // 차트바 채우기
  let barFillHeight = '0%';

  // 차트바의 퍼센트 정해주고 반올림하기
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  )
}

export default ChartBar
