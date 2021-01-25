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
  const thrust1 = getThrustScores(
    data.filter(({ st_thrust: thrust }) => thrust === 'THRUST1')
  );
  const thrust2 = getThrustScores(
    data.filter(({ st_thrust: thrust }) => thrust === 'THRUST2')
  );
  const thrust3 = getThrustScores(
    data.filter(({ st_thrust: thrust }) => thrust === 'THRUST3')
  );
  const [month, setMonth] = useState(thrust1);

  return (
    <Col xl="12">
      <Card>
        <CardBody>
          <div className="clearfix">
            <div className="float-right">
              <div className="input-group input-group-sm">
                <select
                  className="custom-select custom-select-sm"
                  onChange={(e) =>
                    setMonth(
                      e.target.value.split(',').map((item) => Number(item))
                    )
                  }
                >
                  <option defaultValue value={thrust1}>
                    Quality Education
                  </option>
                  <option value={thrust2}>Global Excellence</option>
                  <option value={thrust3}>Value-driven Products</option>
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
                  <h4>{getAvg(month)}%</h4>
                </div>
              </div>
            </Col>

            <Col lg="8">
              <div id="line-chart" className="apex-charts" dir="ltr">
                <ReactApexChart
                  series={[
                    {
                      name: '',
                      data: month,
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
