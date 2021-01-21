import React from 'react';
import PortfolioTemplate from 'components/Common/PortfolioTemplate';
import PNC_MASMED_DATA from 'data/portfolio/pncmasmed';

const PNC_MASMED = () => (
  <PortfolioTemplate
    data={PNC_MASMED_DATA}
    title="PNC MASMED"
    shortTitle="PNC MASMED"
  />
);

export default PNC_MASMED;
