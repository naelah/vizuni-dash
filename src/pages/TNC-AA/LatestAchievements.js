/* eslint-disable react/prop-types */
import React from 'react';
import { Card, CardBody, CardTitle, Badge, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const LatestAchievements = ({ data }) => {
  const kpi = [
    {
      no: '1',
      kpi_details:
        'Number of programmes accredited by professional standard at national or international level.',
      prevYear: '60',
      target: '83',
      current: '70',
      percentage: '84%',
      badgeClass: 'warning',
      status: 'Close',
    },
    {
      no: '2',
      kpi_details:
        'Number of programmes made available online to learners nationally and globally.',
      prevYear: '0',
      target: '2',
      current: '2',
      percentage: '100%',
      badgeClass: 'success',
      status: 'Reach Target',
    },
    {
      no: '3',
      kpi_details:
        'Number of broad-based programmes with differentiated tracks and pathways.',
      prevYear: '60',
      target: '83',
      current: '70',
      percentage: '0%',
      badgeClass: 'danger',
      status: 'failed',
    },
    {
      no: '7a',
      kpi_details: 'Number of student enrolment (full time).',
      prevYear: '161934',
      target: '162000',
      current: '145297',
      percentage: '90%',
      badgeClass: 'warning',
      status: 'Close',
    },
    {
      no: '7b',
      kpi_details: 'Number of student enrolment (part time).',
      prevYear: '10519',
      target: '11800',
      current: '10394',
      percentage: '88%',
      badgeClass: 'warning',
      status: 'Close',
    },
    {
      no: '7c',
      kpi_details: 'Number of student enrolment (franchise)',
      prevYear: '1498',
      target: '2040',
      current: '1291',
      percentage: '63%',
      badgeClass: 'danger',
      status: 'Failed',
    },
    {
      no: '7d',
      kpi_details: 'Number of student enrolment (postgraduate students)',
      prevYear: '8105',
      target: '10000',
      current: '10221',
      percentage: '100%',
      badgeClass: 'success',
      status: 'Reach Target',
    },
    {
      no: '7e',
      kpi_details:
        'Number of student enrolment (international postgraduate students)',
      prevYear: '276',
      target: '400',
      current: '312',
      percentage: '78%',
      badgeClass: 'warning',
      status: 'Close',
    },
  ];

  const getBadge = (percentage) => {
    let status = 'Failed';
    let badgeClass = 'danger';

    if (percentage > 1) {
      status = 'Reach Target';
      badgeClass = 'success';
    }
    if (percentage > 0.7 && percentage < 1) {
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
                  <th>
                    Previous
                    <br />
                    Year
                  </th>
                  <th>Target</th>
                  <th>Current</th>
                  <th>%</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {data.kpi.map((item) => (
                  <tr key={item.kpi_id}>
                    <td>{item.kpi_id_kpi_order}</td>
                    <td>{item.kpi_name} </td>
                    <td>{item.prev_Year || '-'}</td>
                    <td>{item.kpi_by_ptj.target}</td>
                    <td>{item.kpi_by_ptj.achievementAvg.toFixed(0)}</td>
                    <td>
                      {(item.kpi_by_ptj.achievementPAvg * 100).toFixed(0)}%
                    </td>
                    <td>{getBadge(item.kpi_by_ptj.achievementPAvg)}</td>
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
                  <th>
                    Previous
                    <br />
                    Year
                  </th>
                  <th>Target</th>
                  <th>Current</th>
                  <th>%</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {data.pi.map((item) => (
                  <tr key={item.pi_id}>
                    <td>{item.kpi_id_kpi_order}</td>
                    <td>{item.pi_name} </td>
                    <td>{item.prev_Year || '-'}</td>
                    <td>{item.piByPtjTargetAvg}</td>
                    <td>{item.piByPtjAchivementAvg.toFixed(0)}</td>
                    <td>{(item.piByPtjAchivementAvg * 100).toFixed(0)}%</td>
                    <td>{getBadge(item.piByPtjAchivementAvg)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default LatestAchievements;
