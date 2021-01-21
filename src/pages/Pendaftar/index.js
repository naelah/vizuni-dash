import React from 'react';
import PortfolioTemplate from 'components/Common/PortfolioTemplate';
import PENDAFTAR_DATA from 'data/portfolio/pendaftar';

const PENDAFTAR = () => (
  <PortfolioTemplate
    data={PENDAFTAR_DATA}
    title="Pendaftar PI"
    shortTitle="PENDAFTAR"
  />
);

export default PENDAFTAR;
