import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import Breadcrumbs from 'components/Common/Breadcrumb';
import LatestAchievements from 'components/Common/LatestAchievements';
import PerformanceIndicator from 'components/Common/PerformanceIndicator';
import TotalScore from 'components/Common/TotalScore';
import AverageScore from 'components/Common/AverageScore';
import WelcomeHeader from 'components/Common/WelcomeHeader';
import { processPortfolioData } from 'utils';

const PortfolioTemplate = ({ data, title, shortTitle }) => {
  const { kpiScore, piScore, pi: piData, kpi: kpiData } = processPortfolioData(
    data
  );
  const [selectedPi, setSelectedPi] = useState(piData[0]);

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs title={title} shortTitle={shortTitle} />
        <Row>
          <Col xl="8">
            <WelcomeHeader />
          </Col>

          <Col xl="4">
            <TotalScore data={{ kpiScore, piScore }} />
          </Col>
        </Row>
        <Row>
          <AverageScore data={{ kpiScore, piScore }} />
        </Row>
        <Row>
          <Col sm={12} md={12}>
            <Card>
              <CardBody>
                <CardTitle className="mb-4">Performance Indicator</CardTitle>
                <div className="form-group row">
                  <div className="col-md-10">
                    <select
                      className="form-control"
                      id="select-pi"
                      onChange={(e) =>
                        setSelectedPi(
                          piData.find((item) => item.pi_name === e.target.value)
                        )
                      }
                    >
                      {piData.map(({ pi_name: piName, pi_id: piId }) => (
                        <option key={piId}>{piName}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="text-center">
                  <PerformanceIndicator data={selectedPi} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <LatestAchievements pi={piData} kpi={kpiData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

PortfolioTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  shortTitle: PropTypes.string.isRequired,
};

export default PortfolioTemplate;
