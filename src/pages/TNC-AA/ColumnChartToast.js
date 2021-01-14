import React from 'react';
import 'tui-chart/dist/tui-chart.css';
import { ColumnChart, ComboChart } from '@toast-ui/react-chart';
import TuiChart from 'tui-chart';
import './toastui.scss';

const theme = {
  chart: {
    background: {
      color: '#fff',
      opacity: 0,
    },
  },
  title: {
    color: '#8791af',
  },
  xAxis: {
    title: {
      color: '#8791af',
    },
    label: {
      color: '#8791af',
    },
    tickColor: '#8791af',
  },
  yAxis: {
    title: {
      color: '#8791af',
    },
    label: {
      color: '#8791af',
    },
    tickColor: '#8791af',
  },
  plot: {
    lineColor: 'rgba(166, 176, 207, 0.1)',
  },
  legend: {
    label: {
      color: '#8791af',
    },
  },
  series: {
    colors: ['#34c38f', '#556ee6', '#f46a6a'],
  },
};
TuiChart.registerTheme('skoteTheme', theme);

const ColumnChartToast = (props) => {
  const data = {
    categories: ['AA', 'AC', 'AD'],
    series: [
      {
        name: 'PI',
        data: [5000, 3000, 5000],
      },
    ],
    line: [
      {
        name: 'Target',
        data: [11, 15.1, 17.8],
      },
    ],
  };

  const options = {
    chart: {
      width: props.chartWidth,
      height: 380,
      title:
        'Number of academic staff received award or recognition at national level',
      format: '1,000',
    },
    yAxis: {
      title: 'Amount',
      min: 0,
      max: 9000,
    },
    xAxis: {
      title: 'Month',
    },
    legend: {
      align: 'top',
    },
  };

  return (
    <>
      <ColumnChart data={data} options={options} />
    </>
  );
};
export default ColumnChartToast;
