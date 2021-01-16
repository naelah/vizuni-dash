import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import TNC_AA_DATA from 'data/portfolio/tncaa';

// Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import LatestAchievements from './LatestAchievements';
import ComboChartToast from './ComboChartToast';
import WelcomeComp from './WelcomeComp';
import Score from './MonthlyEarning';
import Average from './mini-widget';
import ColumnChartToast from './ColumnChartToast';
import Overview from './earning';

const getAvg = (item, selection) =>
  Number(
    (
      item.reduce(
        (total, next) => total + (!selection ? next : next[selection]),
        0
      ) / item.length
    ).toFixed(2)
  );

const processPortfolioData = (data) => {
  const kpi = data.kpi.map((item) => {
    const achievementPAvg = getAvg(
      item.kpi_by_ptj.achievement,
      'achievement_p'
    );
    const achievementAvg = getAvg(item.kpi_by_ptj.achievement, 'achievement');
    return {
      ...item,
      kpi_by_ptj: { ...item.kpi_by_ptj, achievementAvg, achievementPAvg },
    };
  });

  const kpiScore = {
    kpiAchivementP: kpi.map((item) => item.kpi_by_ptj.achievementPAvg),
    kpiAchivementPAvg: getAvg(
      kpi.map((item) => item.kpi_by_ptj.achievementPAvg)
    ),
    kpiAchivement: kpi.map((item) => item.kpi_by_ptj.achievementAvg),
    kpiAchivementAvg: getAvg(kpi.map((item) => item.kpi_by_ptj.achievementAvg)),
    kpiTarget: kpi.map((item) => item.kpi_by_ptj.target),
    kpiTargetAvg: getAvg(kpi.map((item) => item.kpi_by_ptj.target)),
  };

  const pi = data.pi.map((item) => {
    const piByPtj = item.pi_by_ptj.map((piItem) => {
      const achievementPAvg = getAvg(piItem.achievement, 'achievement_p');
      const achievementAvg = getAvg(piItem.achievement, 'achievement');
      const achievementLatest =
        piItem.achievement[piItem.achievement.length - 1].achievement;
      return { ...piItem, achievementPAvg, achievementAvg, achievementLatest };
    });

    const piByPtjAchivementP = piByPtj.map(
      ({ achievementPAvg }) => achievementPAvg
    );
    const piByPtjAchivementPAvg = getAvg(piByPtjAchivementP);
    const piByPtjAchivement = piByPtj.map(
      ({ achievementAvg }) => achievementAvg
    );
    const piByPtjAchivementAvg = getAvg(piByPtjAchivement);
    const piByPtjTarget = piByPtj.map(({ target }) => target);
    const piByPtjTargetAvg = getAvg(piByPtjTarget);

    return {
      ...item,
      pi_by_ptj: piByPtj,
      piByPtjAchivement,
      piByPtjAchivementAvg,
      piByPtjAchivementP,
      piByPtjAchivementPAvg,
      piByPtjTarget,
      piByPtjTargetAvg,
    };
  });

  const piScore = {
    piAchivement: pi.map(({ piByPtjAchivementAvg }) => piByPtjAchivementAvg),
    piAchivementAvg: getAvg(
      pi.map(({ piByPtjAchivementAvg }) => piByPtjAchivementAvg)
    ),
    piAchivementP: pi.map(({ piByPtjAchivementPAvg }) => piByPtjAchivementPAvg),
    piAchivementPAvg: getAvg(
      pi.map(({ piByPtjAchivementPAvg }) => piByPtjAchivementPAvg)
    ),
    piTarget: pi.map(({ piByPtjTargetAvg }) => piByPtjTargetAvg),
    piTargetAvg: getAvg(pi.map(({ piByPtjTargetAvg }) => piByPtjTargetAvg)),
  };

  return {
    ...data,
    kpi,
    kpiScore,
    pi,
    piScore,
  };
};

const TNCAA = () => {
  const { kpiScore, piScore, pi: piData } = processPortfolioData(TNC_AA_DATA);
  const [selectedPi, setSelectedPi] = useState(piData[0]);

  // console.log(TNC_AA_DATA);
  // console.log(processPortfolioData(TNC_AA_DATA));

  const chartWidth =
    window.innerWidth > 991
      ? Number(window.innerWidth - 420)
      : Number(window.innerWidth - 100);

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="TNC A&A" breadcrumbItem="Finale" />
          <Row>
            <Col xl="8"><WelcomeComp /></Col>
            
            <Col xl="4">
              <Score data={{ kpiScore, piScore }} />
            </Col>
          </Row>
          <Row>
              <Average data={{ kpiScore, piScore }} />
            </Row>
          {/* <Row>
            <Col sm={12} md={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Column charts</CardTitle>
                  <div className="text-center">
                    <ColumnChartToast chartWidth={chartWidth} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
          <Row>
            <Col sm={12} md={12}>
              <Card>
                <CardBody>
                  {/* <CardTitle className="mb-4">Column charts</CardTitle> */}
                  <div className="form-group row">
                    <div className="col-md-10">
                      <select
                        className="form-control"
                        id="select-pi"
                        onChange={(e) =>
                          setSelectedPi(
                            piData.find(
                              (item) => item.pi_name === e.target.value
                            )
                          )
                        }
                      >
                        {piData.map(({ pi_name: piName }) => (
                          <option>{piName}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="text-center">
                    <ComboChartToast
                      chartWidth={chartWidth}
                      data={selectedPi}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <LatestAchievements data={processPortfolioData(TNC_AA_DATA)} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TNCAA;

// Step 1: Buat file ni. tengok nama folder. Uitm/index.js. tekan next tab
