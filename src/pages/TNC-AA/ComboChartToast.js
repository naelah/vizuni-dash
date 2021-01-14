import React from 'react';
import PropTypes from 'prop-types';

import 'tui-chart/dist/tui-chart.css';
import { ComboChart } from '@toast-ui/react-chart';
import TuiChart from 'tui-chart';
import './toastui.scss';
import { useSelector } from 'react-redux';
import intersectionBy from 'lodash/intersectionBy';
import isEmpty from 'lodash/isEmpty';

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

const ComboChartToast = ({
  chartWidth: width,
  chartHeight: height,
  data: piData,
}) => {
  const { selectedFaculty } = useSelector(({ Faculty }) => Faculty);

  const filteredFaculty = !isEmpty(selectedFaculty)
    ? intersectionBy(
        piData.pi_by_ptj,
        selectedFaculty.map((item) => ({ ptj_id: item })),
        'ptj_id'
      )
    : piData.pi_by_ptj;

  const faculty = filteredFaculty.map((item) => item.ptj_abb);
  const facultyTarget = filteredFaculty.map((item) => item.target);
  const facultyAchievement = filteredFaculty.map(
    (item) => item.achievementLatest
  );

  const data = {
    categories: faculty,
    series: {
      column: [
        {
          name: 'Achievement',
          data: facultyAchievement,
        },
      ],
      line: [
        {
          name: 'Target',
          data: facultyTarget,
        },
      ],
    },
  };

  const options = {
    chart: {
      width,
      height,
      // title:
      //   'Number of academic staff received award or recognition at national level',
    },
    yAxis: [
      {
        title: 'Indicator',
        chartType: 'column',
        labelMargin: 5,
      },
      // {
      //   title: 'Average',
      //   chartType: 'line',
      //   labelMargin: 5,
      // },
    ],
    xAxis: {
      title: 'Faculty',
    },
    series: {
      line: {
        showDot: true,
      },
    },
    tooltip: {
      grouped: true,
    },
  };

  return <ComboChart data={data} options={options} />;
};

ComboChartToast.propTypes = {
  chartWidth: PropTypes.string,
  chartHeight: PropTypes.string,
  data: PropTypes.object.isRequired,
};

ComboChartToast.defaultProps = {
  chartWidth: 1160,
  chartHeight: 380,
};

export default ComboChartToast;
