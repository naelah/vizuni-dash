import React from 'react';
import PortfolioTemplate from 'components/Common/PortfolioTemplate';
import TNC_AA_DATA from 'data/portfolio/tncaa';

const TNCAA = () => (
  <PortfolioTemplate
    data={TNC_AA_DATA}
    title="Timbalan Naib Canselor AA"
    shortTitle="TNCAA"
  />
);

export default TNCAA;
