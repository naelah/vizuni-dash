import React from 'react';
import PortfolioTemplate from 'components/Common/PortfolioTemplate';
import TNC_HEP_DATA from 'data/portfolio/tnchep';

const TNCHEP = () => (
  <PortfolioTemplate
    data={TNC_HEP_DATA}
    title="Timbalan Naib Canselor HEP"
    shortTitle="TNCHEP"
  />
);

export default TNCHEP;
