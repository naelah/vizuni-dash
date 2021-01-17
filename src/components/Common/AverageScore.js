/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

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
};

const MiniWidget = ({ data }) => {
  const { kpiScore, piScore } = data;

  return (
    <>
      <Col sm="6">
        <Card>
          <CardBody>
            <p className="text-muted mb-4">
              <i className="mdi mdi-school h2 text-primary align-middle mb-0 mr-3" />
              KPI TOTAL {kpiScore.kpiAchivementPs.length}
            </p>

            <Row>
              <Col xs="6">
                <div>
                  <h5>AVERAGE</h5>
                  <p className="text-muted text-truncate mb-0">
                    {kpiScore.kpiAchivementPsAvg}
                    <i className="mdi mdi-arrow-up ml-1 text-success" />
                  </p>
                </div>
              </Col>
              <Col xs="6">
                <div>
                  <div className="apex-charts">
                    <ReactApexChart
                      options={{
                        ...options,
                        colors: ['#3452e1'],
                        xaxis: {
                          categories: kpiScore.kpiIds,
                        },
                        tooltip: {
                          fixed: { enabled: !1 },
                          x: { show: true },
                          marker: { show: !1 },
                        },
                      }}
                      series={[
                        {
                          name: 'KPI',
                          data: kpiScore.kpiAchivementPs,
                          label: kpiScore.kpiIds,
                        },
                      ]}
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

      <Col sm="6">
        <Card>
          <CardBody>
            <p className="text-muted mb-4">
              <i className="mdi mdi-school h2 text-warning align-middle mb-0 mr-3" />
              PI TOTAL {piScore.piAchivementP.length}
            </p>

            <Row>
              <Col xs="6">
                <div>
                  <h5>AVERAGE</h5>
                  <p className="text-muted text-truncate mb-0">
                    {piScore.piAchivementPAvg}
                    <i className="mdi mdi-arrow-up ml-1 text-success" />
                  </p>
                </div>
              </Col>
              <Col xs="6">
                <div>
                  <div className="apex-charts">
                    <ReactApexChart
                      options={{
                        ...options,
                        colors: ['#f1b44c'],
                        tooltip: {
                          fixed: { enabled: !1 },
                          x: { show: !1 },
                          marker: { show: !1 },
                        },
                      }}
                      series={[
                        {
                          name: 'PI',
                          data: piScore.piAchivementP,
                        },
                      ]}
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
    </>
  );
};

export default MiniWidget;
