import React from 'react';
import PortfolioTemplate from 'components/Common/PortfolioTemplate';
import BENDAHARI_DATA from 'data/portfolio/bendahari';

const BENDAHARI = () => (
  <PortfolioTemplate
    data={BENDAHARI_DATA}
    title="Bendahari"
    shortTitle="Bendahari"
  />
);

export default BENDAHARI;
