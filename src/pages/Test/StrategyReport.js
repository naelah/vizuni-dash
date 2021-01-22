/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';
import { getAvg } from 'utils';

const options = {
  chart: { sparkline: { enabled: !0 } },
  stroke: { curve: 'smooth', width: 2 },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100],
    },
  },
  tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
};

const MiniWidget = ({ data }) => {
  const thrust1 = data.filter(({ st_thrust: thrust }) => thrust === 'THRUST1');
  const thrust2 = data.filter(({ st_thrust: thrust }) => thrust === 'THRUST2');
  const thrust3 = data.filter(({ st_thrust: thrust }) => thrust === 'THRUST3');

  const getThrustScores = (array) => {
    const arr = [];

    for (let index = 0; index < array[0].score.length; index += 1) {
      const monthArr = [];
      array.forEach((element) => {
        monthArr.push({
          score:
            element.score.find(({ month }) => month === index + 1).score *
            element.score.find(({ month }) => month === index + 1).weight,
          weight: element.score.find(({ month }) => month === index + 1).weight,
        });
      });

      arr.push(
        Number(
          (
            monthArr.reduce((total, next) => total + next.score, 0) /
            monthArr.reduce((total, next) => total + next.weight, 0)
          ).toFixed(2)
        )
      );
    }
    return arr;
  };

  const reports = [
    {
      title: 'Quality Education',
      icon: 'mdi mdi-school',
      color: 'warning',
      value: `${getAvg(getThrustScores(thrust1))}%`,
      desc: '+ 0.0012 ( 0.2 % )',
      series: [{ name: '', data: getThrustScores(thrust1) }],
      options: { ...options, colors: ['#f1b44c'] },
    },
    {
      title: 'Global Excellence',
      icon: 'mdi mdi-earth',
      color: 'primary',
      value: `${getAvg(getThrustScores(thrust2))}%`,
      desc: '- 4.102 ( 0.1 % )',
      series: [{ name: '', data: getThrustScores(thrust2) }],
      options: { ...options, colors: ['#3452e1'] },
    },
    {
      title: 'Value-driven Products',
      icon: 'mdi mdi-package-variant',
      color: 'info',
      value: `${getAvg(getThrustScores(thrust3))}%`,
      desc: '+ 1.792 ( 0.1 % )',
      series: [{ name: '', data: getThrustScores(thrust3) }],
      options: { ...options, colors: ['#50a5f1'] },
    },
  ];

  return reports.map((report, key) => (
    <Col sm="4" key={key}>
      <Card>
        <CardBody>
          <p className="text-muted mb-4">
            <i
              className={`${report.icon} h2 text-${report.color} align-middle mb-0 mr-3`}
            />
            {report.title}
          </p>

          <Row>
            <Col xs="6">
              <div>
                <h5>{report.value}</h5>
                {/* <p className="text-muted text-truncate mb-0">
                      {report.desc}
                      <i className="mdi mdi-arrow-up ml-1 text-success" />
                    </p> */}
              </div>
            </Col>
            <Col xs="6">
              <div>
                <div className="apex-charts">
                  <ReactApexChart
                    options={report.options}
                    series={report.series}
                    type="area"
                    height={40}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  ));
};

export default MiniWidget;
