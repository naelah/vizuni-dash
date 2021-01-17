import React from 'react';
import PortfolioTemplate from 'components/Common/PortfolioTemplate';
import TNC_PI_DATA from 'data/portfolio/tncpi';

const TNCPI = () => (
  <PortfolioTemplate
    data={TNC_PI_DATA}
    title="Timbalan Naib Canselor PI"
    shortTitle="TNCAA"
  />
);

export default TNCPI;
