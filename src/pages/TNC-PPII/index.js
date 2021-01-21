import React from 'react';
import PortfolioTemplate from 'components/Common/PortfolioTemplate';
import TNC_PPII_DATA from 'data/portfolio/tncppii';

const TNCPPII = () => (
  <PortfolioTemplate
    data={TNC_PPII_DATA}
    title="Timbalan Naib Canselor PPII"
    shortTitle="TNCPPII"
  />
);

export default TNCPPII;
