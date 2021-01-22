import React from 'react';
// import PropTypes from 'prop-types';
import SCORE_DATA from 'data/main/main';
import { Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { getAvg } from 'utils';
import StrategyReport from './StrategyReport';

const Dashboard = () => {
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
      <Row>
        <StrategyReport data={data} />
      </Row>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
