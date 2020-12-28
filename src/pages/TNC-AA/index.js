import React from "react";
import { Container,Row, Col, Card, CardBody, CardTitle } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import LatestAchievements from "./LatestAchievements";
import ColumnChartToast from "./ColumnChartToast";
import WelcomeComp from "./WelcomeComp";
import MonthlyEarning from "./MonthlyEarning";
import MiniWidget from "./mini-widget";
import Earning from "./earning";
//Bitcoin Chart
const series1 = [{name:"BTC",data:[12,14,2,47,42,15,47,75,65,19,14]}];
const options1 = {chart:{sparkline:{enabled:!0}},stroke:{curve:"smooth",width:2},colors:["#f1b44c"],fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[25,100,100,100]}},tooltip:{fixed:{enabled:!1},x:{show:!1},marker:{show:!1}}};

//Etherium Chart
const series2 = [{name:"ETH",data:[25,66,41,89,63,25,44,12,36,9,54]}];
const options2 = {chart:{sparkline:{enabled:!0}},stroke:{curve:"smooth",width:2},colors:["#3452e1"],fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[25,100,100,100]}},tooltip:{fixed:{enabled:!1},x:{show:!1},marker:{show:!1}}};
        
//LiteCoin Chart
const series3 = [{name:"LTC",data:[35,53,93,47,54,24,47,75,65,19,14]}];
const options3 = {chart:{sparkline:{enabled:!0}},stroke:{curve:"smooth",width:2},colors:["#50a5f1"],fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[25,100,100,100]}},tooltip:{fixed:{enabled:!1},x:{show:!1},marker:{show:!1}}};

const TNCAA = (props) => {
  const chartWidth = (window.innerWidth > 991) ? parseInt((window.innerWidth - 420) ) : parseInt(window.innerWidth - 100);
	
    const reports = [
        { title : "KPI TOTAL 8", icon : "mdi mdi-school", color : "warning", value : "$ 9134.39", desc : "+ 0.0012 ( 0.2 % )", series : series1, options : options1 },
        { title : "PI TOTAL 38", icon : "mdi mdi-earth", color : "primary", value : "$ 9134.39", desc : "- 4.102 ( 0.1 % )", series : series2, options : options2 },
    ];
  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="TNC A&A" breadcrumbItem="Finale" />
          <Row>
                      <Col xl="4">
                          <WelcomeComp />
                          <MonthlyEarning />
                      </Col>
                      <Col xl="8">
                          <Row>
                          <MiniWidget reports={reports}/>
                            
                          </Row>
                          <Row>
                              <Earning/>
                          </Row>
                      </Col>
                  </Row>
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
