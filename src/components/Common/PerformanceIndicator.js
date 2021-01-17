import React from 'react';
import PropTypes from 'prop-types';
import { ComboChart } from '@toast-ui/react-chart';
import TuiChart from 'tui-chart';
import { useSelector } from 'react-redux';
import intersectionBy from 'lodash/intersectionBy';
import isEmpty from 'lodash/isEmpty';

import 'tui-chart/dist/tui-chart.css';
import './toastui.scss';

const CHART_HEIGHT = 650;

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

const PerformanceIndicator = ({ data: piData }) => {
  const width =
    window.innerWidth > 991
      ? Number(window.innerWidth - 420)
      : Number(window.innerWidth - 100);

  const { selectedFaculty } = useSelector(({ Faculty }) => Faculty);
  const { selectedCawangan } = useSelector(({ Cawangan }) => Cawangan);
  const selection = [...selectedFaculty, ...selectedCawangan];

  const filteredFaculty = !isEmpty(selection)
    ? intersectionBy(
        piData.pi_by_ptj,
        selection.map((item) => ({
          ptj_id: item,
        })),
        'ptj_id'
      )
    : piData.pi_by_ptj || [];

  const faculty = filteredFaculty.map((item) => item.ptj_name);
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
      height: CHART_HEIGHT,
    },
    yAxis: [
      {
        title: 'Indicator',
        chartType: 'column',
        labelMargin: 5,
        min: 0,
      },
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

PerformanceIndicator.propTypes = {
  data: PropTypes.object,
};

PerformanceIndicator.defaultProps = {
  data: {},
};

export default PerformanceIndicator;
