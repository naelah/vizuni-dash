import React from 'react';
import PortfolioTemplate from 'components/Common/PortfolioTemplate';
import TNC_ICAN_DATA from 'data/portfolio/tncican';

const TNCICAN = () => (
  <PortfolioTemplate
    data={TNC_ICAN_DATA}
    title="Timbalan Naib Canselor ICAN"
    shortTitle="TNCICAN"
  />
);

export default TNCICAN;
