import React from 'react';

import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

import ReactApexChart from 'react-apexcharts';
import ApexRadial from './ApexRadial';

const walletOptions = {
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: '35%',
        background: 'transparent',
        image: void 0,
      },
      track: {
        show: !0,
        startAngle: void 0,
        endAngle: void 0,
        background: '#f2f2f2',
        strokeWidth: '97%',
        opacity: 1,
        margin: 12,
        dropShadow: {
          enabled: !1,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      dataLabels: {
        name: {
          show: !0,
          fontSize: '16px',
          fontWeight: 600,
          offsetY: -10,
        },
        value: {
          show: !0,
          fontSize: '14px',
          offsetY: 4,
          formatter(e) {
            return `${e}%`;
          },
        },
        total: {
          show: !0,
          label: 'Total',
          color: '#373d3f',
          fontSize: '16px',
          fontFamily: void 0,
          fontWeight: 600,
          formatter(e) {
            return `${
              e.globals.seriesTotals.reduce((total, next) => total + next, 0) /
              e.globals.seriesTotals.length
            }%`;
          },
        },
      },
    },
  },
  stroke: {
    lineCap: 'round',
  },
  colors: ['#3452e1', '#f1b44c', '#50a5f1'],
  labels: ['KPI', 'PI'],
  legend: { show: !1 },
};

const MonthlyEarning = ({ data: { kpiScore, piScore } }) => {
  const kpi = kpiScore.kpiAchivementPAvg * 100;
  const pi = piScore.piAchivementPAvg * 100;

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle className="mb-4">TNC A&A SCORE</CardTitle>
          <Row>
            <div id="wallet-balance-chart" className="apex-charts">
              <center>
                <ReactApexChart
                  options={walletOptions}
                  series={[kpi, pi]}
                  type="radialBar"
                  height={220}
                />
              </center>
            </div>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default MonthlyEarning;
