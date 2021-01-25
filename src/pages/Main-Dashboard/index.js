import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// import Charts
import { withNamespaces } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAvg } from 'utils';
import SCORE_DATA from 'data/main/main';

// Pages Components
import WelcomeComp from './WelcomeComp';
import OverallScore from './MonthlyEarning';
import TopPIs from './TopPIs';
import TopPTJs from './TopPTJs';
import TopKPIs from './TopKPIs';
import Overview from './earning';
import StrategyReport from '../Test/StrategyReport';

// Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

// eslint-disable-next-line react/prop-types
const MainDash = ({ t }) => {
  const params = useSelector(({ Params }) => Params);

  const data = SCORE_DATA.map((item) => ({
    ...item,
    score: item.score.map((scoreItem) => ({
      ...scoreItem,
      weight: params[item.st_id],
    })),
    avgScore: getAvg(item.score, 'score'),
  }));

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs title={t('Dashboard')} breadcrumbItem={t('Dashboard')} />

        <Row>
          <Col xl="4">
            <WelcomeComp />
            <OverallScore data={data} />
          </Col>
          <Col xl="8">
            <Row>
              <StrategyReport data={data} />
            </Row>
            <Row>
              <Overview data={data} />
            </Row>
          </Col>
        </Row>

        <Row>
          <Col xl="4">
            <TopPIs />
          </Col>
          <Col xl="4">
            <TopKPIs />
          </Col>

          <Col xl="4">
            <TopPTJs />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withNamespaces()(MainDash);
