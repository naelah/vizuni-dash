import React from "react";
import { Container,Row, Col, Card, CardBody, CardTitle } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import LatestAchievements from "./LatestAchievements";
import ColumnChartToast from "./ColumnChartToast";

const TNCAA = (props) => {
  const chartWidth = (window.innerWidth > 991) ? parseInt((window.innerWidth - 420) ) : parseInt(window.innerWidth - 100);
	
  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="TNC A&A" breadcrumbItem="Finale" />
          <Row>
          <Col sm={12} md={12}>
							<Card>
								<CardBody>
										<CardTitle className="mb-4">Column charts</CardTitle>
										<div className="text-center"><ColumnChartToast chartWidth={chartWidth} /></div>
									</CardBody>
								</Card>
							</Col>
            </Row>
          <Row>
            <Col lg="12">
              <LatestAchievements />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TNCAA;

// Step 1: Buat file ni. tengok nama folder. Uitm/index.js. tekan next tab
