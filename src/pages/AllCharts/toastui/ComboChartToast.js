import React from 'react';
import PropTypes from 'prop-types';

import 'tui-chart/dist/tui-chart.css';
import { ComboChart } from '@toast-ui/react-chart';
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

const ComboChartToast = ({ chartWidth: width, chartHeight: height }) => {
  const data = {
    categories: ['Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct'],
    series: {
      column: [
        {
          name: 'Seoul',
          data: [11.3, 17.0, 21.0, 24.4, 25.2, 20.4, 13.9],
        },
        {
          name: 'NewYork',
          data: [9.9, 16.0, 21.2, 24.2, 23.2, 19.4, 13.3],
        },
        {
          name: 'Sydney',
          data: [18.3, 15.2, 12.8, 11.8, 13.0, 15.2, 17.6],
        },
        {
          name: 'Moskva',
          data: [4.4, 12.2, 16.3, 18.5, 16.7, 10.9, 4.2],
        },
      ],
      line: [
        {
          name: 'Average',
          data: [11, 15.1, 17.8, 19.7, 19.5, 16.5, 12.3],
        },
      ],
    },
  };

  const options = {
    chart: {
      width,
      height,
      title: '24-hr Average Temperature',
    },
    yAxis: [
      {
        title: 'Temperature (Celsius)',
        chartType: 'column',
        labelMargin: 5,
      },
      {
        title: 'Average',
        chartType: 'line',
        labelMargin: 5,
      },
    ],
    xAxis: {
      title: 'Month',
    },
    series: {
      line: {
        showDot: true,
      },
    },
    tooltip: {
      grouped: true,
      suffix: '°C',
    },
  };

  return <ComboChart data={data} options={options} />;
};

ComboChartToast.propTypes = {
  chartWidth: PropTypes.string,
  chartHeight: PropTypes.string,
};

ComboChartToast.defaultProps = {
  chartWidth: 1160,
  chartHeight: 380,
};

export default ComboChartToast;
