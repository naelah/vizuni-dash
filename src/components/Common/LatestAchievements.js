/* eslint-disable react/prop-types */
import React from 'react';
import { Card, CardBody, CardTitle, Badge } from 'reactstrap';

const formatter = (value) =>
  new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);

const LatestAchievements = ({ pi, kpi }) => {
  const getBadge = (percentage) => {
    let status = 'Failed';
    let badgeClass = 'danger';

    if (percentage >= 1) {
      status = 'Reached';
      badgeClass = 'success';
    }
    if (percentage >= 0.7 && percentage < 1) {
      status = 'Close';
      badgeClass = 'warning';
    }

    return (
      <Badge
        className={`font-size-12 badge-soft-${badgeClass}`}
        color={badgeClass}
        pill
      >
        {status}
      </Badge>
    );
  };

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle className="mb-4">Current KPI Achievements</CardTitle>
          <div className="table-responsive">
            <table className="table table-centered table-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th>KPI No</th>
                  <th>KPI</th>
                  {/* <th>
                    Previous
                    <br />
                    Year
                  </th> */}
                  <th>Target</th>
                  <th>Current</th>
                  <th>%</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {kpi.map((item) => (
                  <tr key={item.kpi_id}>
                    <td>{item.kpi_id_kpi_order}</td>
                    <td className="text-wrap">{item.kpi_name} </td>
                    {/* <td>{item.prev_Year || '-'}</td> */}
                    <td>{formatter(item.kpi_by_ptj.target)}</td>
                    <td>{formatter(item.kpi_by_ptj.achievementLatest)}</td>
                    <td>
                      {formatter(item.kpi_by_ptj.achievementPLatest * 100)}%
                    </td>
                    <td>{getBadge(item.kpi_by_ptj.achievementPLatest)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle className="mb-4">Current PI Achievements</CardTitle>
          <div className="table-responsive">
            <table className="table table-centered table-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th>KPI No</th>
                  <th>PI</th>
                  {/* <th>
                    Previous
                    <br />
                    Year
                  </th> */}
                  <th>Target</th>
                  <th>Current</th>
                  <th>%</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {pi.map((item) => {
                  const percentage =
                    item.piByPtjLatestAchivementAvg / item.piByPtjTargetAvg;
                  return (
                    <tr key={item.pi_id}>
                      <td>{item.kpi_id_kpi_order}</td>
                      <td className="text-wrap">{item.pi_name} </td>
                      {/* <td>{item.prev_Year || '-'}</td> */}
                      <td>{formatter(item.piByPtjTargetAvg)}</td>
                      <td>{formatter(item.piByPtjLatestAchivementAvg)}</td>
                      <td>{formatter(percentage * 100)}%</td>
                      <td>{getBadge(percentage)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default LatestAchievements;
