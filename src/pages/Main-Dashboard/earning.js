/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component, useState } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getAvg, getThrustScores } from 'utils';

import ReactApexChart from 'react-apexcharts';

const DATA = {
  options: {
    chart: {
      toolbar: 'false',
      dropShadow: {
        enabled: !0,
        color: '#000',
        top: 18,
        left: 7,
        blur: 8,
        opacity: 0.2,
      },
    },
    dataLabels: {
      enabled: !1,
    },
    colors: ['#556ee6'],
    stroke: {
      curve: 'smooth',
      width: 3,
    },
  },
};
const Earning = ({ data }) => {
  const [thrustId, setThrust] = useState(0);
  const THRUST = ['THRUST1', 'THRUST2', 'THRUST3'];
  const thrustSores = [];

  THRUST.forEach((element) => {
    const scores = getThrustScores(
      data.filter(({ st_thrust: thrust }) => thrust === element)
    );
    thrustSores.push({
      avgScore: getAvg(scores),
      scores,
    });
  });

  return (
    <Col xl="12">
      <Card>
        <CardBody>
          <div className="clearfix">
            <div className="float-right">
              <div className="input-group input-group-sm">
                <select
                  className="custom-select custom-select-sm"
                  onChange={(e) => setThrust(e)}
                >
                  <option defaultValue value={0}>
                    Quality Education
                  </option>
                  <option value={1}>Global Excellence</option>
                  <option value={2}>Value-driven Products</option>
                </select>
                {/* <div className="input-group-append">
                  <label className="input-group-text">Month</label>
                </div> */}
              </div>
            </div>
            <h4 className="card-title mb-4">Overview of UITM Score</h4>
          </div>

          <Row>
            <Col lg="4">
              <div className="text-muted">
                <div className="mb-4">
                  <p>Selected Strategy</p>
                  <h4>{thrustSores[thrustId].avgScore}%</h4>
                </div>
              </div>
            </Col>

            <Col lg="8">
              <div id="line-chart" className="apex-charts" dir="ltr">
                <ReactApexChart
                  series={[
                    {
                      name: '',
                      data: thrustSores[thrustId].scores,
                    },
                  ]}
                  options={DATA.options}
                  type="line"
                  height={320}
                />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Earning;
