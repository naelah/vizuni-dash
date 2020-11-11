import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Media, Table } from "reactstrap";
import { Link } from "react-router-dom";

//import Charts
import StackedColumnChart from "./StackedColumnChart";

import modalimage1 from "../../assets/images/product/img-7.png";
import modalimage2 from "../../assets/images/product/img-4.png";

// Pages Components
import WelcomeComp from "./WelcomeComp";
import MonthlyEarning from "./MonthlyEarning";
import SocialSource from "./SocialSource";
import ActivityComp from "./ActivityComp";
import TopCities from "./TopCities";
import TopPIs from "./TopPIs";
import TopPTJs from "./TopPTJs";
import TopKPIs from "./TopKPIs";
import LatestTranaction from "./LatestTranaction";
import MiniWidget from "./mini-widget";
import Earning from "./earning";
import OverView from "./overview";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//i18n
import { withNamespaces } from 'react-i18next';

//Bitcoin Chart
const series1 = [{name:"BTC",data:[12,14,2,47,42,15,47,75,65,19,14]}];
const options1 = {chart:{sparkline:{enabled:!0}},stroke:{curve:"smooth",width:2},colors:["#f1b44c"],fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[25,100,100,100]}},tooltip:{fixed:{enabled:!1},x:{show:!1},marker:{show:!1}}};

//Etherium Chart
const series2 = [{name:"ETH",data:[25,66,41,89,63,25,44,12,36,9,54]}];
const options2 = {chart:{sparkline:{enabled:!0}},stroke:{curve:"smooth",width:2},colors:["#3452e1"],fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[25,100,100,100]}},tooltip:{fixed:{enabled:!1},x:{show:!1},marker:{show:!1}}};
        
//LiteCoin Chart
const series3 = [{name:"LTC",data:[35,53,93,47,54,24,47,75,65,19,14]}];
const options3 = {chart:{sparkline:{enabled:!0}},stroke:{curve:"smooth",width:2},colors:["#50a5f1"],fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[25,100,100,100]}},tooltip:{fixed:{enabled:!1},x:{show:!1},marker:{show:!1}}};

const MainDash = (props) => {
    const [modal, setmodal] = useState(false);

    const reports = [
        { title : "Quality Education", icon : "mdi mdi-school", color : "warning", value : "$ 9134.39", desc : "+ 0.0012 ( 0.2 % )", series : series1, options : options1 },
        { title : "Global Excellence", icon : "mdi mdi-earth", color : "primary", value : "$ 9134.39", desc : "- 4.102 ( 0.1 % )", series : series2, options : options2 },
        { title : "Value-driven Products", icon : "mdi mdi-package-variant", color : "info", value : "$ 245.44", desc : "+ 1.792 ( 0.1 % )", series : series3, options : options3 },
    ];
    // const reports = [
    //       { title: "Orders", iconClass: "bx-copy-alt", description: "1,235" },
    //       { title: "Revenue", iconClass: "bx-archive-in", description: "$35, 723" },
    //       { title: "Average Price", iconClass: "bx-purchase-tag-alt", description: "$16.2" }
    //   ];
   const email = [
          { title: "Week", linkto: "#", isActive: false },
          { title: "Month", linkto: "#", isActive: false },
          { title: "Year", linkto: "#", isActive: true }
      ];

    return (
        <React.Fragment>
          <div className="page-content">
              <Container fluid>

                  {/* Render Breadcrumb */}
                  <Breadcrumbs title={props.t('Dashboard')} breadcrumbItem={props.t('Dashboard')} />

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
                      <Col xl="4">
                        <TopPIs />
                      </Col>
                      <Col xl="4">
                            <TopKPIs />
                      </Col>

                      <Col xl="4">
                          <TopPTJs />
                      </Col>
                  </Row>
              </Container>
          </div>
          <Modal isOpen={modal} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabindex="-1" toggle={() => { setmodal(!modal); }}>
              <div className="modal-content">
                  <ModalHeader toggle={() => { setmodal(!modal); }}>
                      Order Details
                  </ModalHeader >
                  <ModalBody>
                      <p className="mb-2">Product id: <span className="text-primary">#SK2540</span></p>
                      <p className="mb-4">Billing Name: <span className="text-primary">Neal Matthews</span></p>

                      <div className="table-responsive">
                          <Table className="table table-centered table-nowrap">
                              <thead>
                                  <tr>
                                      <th scope="col">Product</th>
                                      <th scope="col">Product Name</th>
                                      <th scope="col">Price</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <th scope="row">
                                          <div>
                                              <img src={modalimage1} alt="" className="avatar-sm" />
                                          </div>
                                      </th>
                                      <td>
                                          <div>
                                              <h5 className="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                                              <p className="text-muted mb-0">$ 225 x 1</p>
                                          </div>
                                      </td>
                                      <td>$ 255</td>
                                  </tr>
                                  <tr>
                                      <th scope="row">
                                          <div>
                                              <img src={modalimage2} alt="" className="avatar-sm" />
                                          </div>
                                      </th>
                                      <td>
                                          <div>
                                              <h5 className="text-truncate font-size-14">Hoodie (Blue)</h5>
                                              <p className="text-muted mb-0">$ 145 x 1</p>
                                          </div>
                                      </td>
                                      <td>$ 145</td>
                                  </tr>
                                  <tr>
                                      <td colspan="2">
                                          <h6 className="m-0 text-right">Sub Total:</h6>
                                      </td>
                                      <td>$ 400</td>
                                  </tr>
                                  <tr>
                                      <td colspan="2">
                                          <h6 className="m-0 text-right">Shipping:</h6>
                                      </td>
                                      <td>Free</td>
                                  </tr>
                                  <tr>
                                      <td colspan="2">
                                          <h6 className="m-0 text-right">Total:</h6>
                                      </td>
                                      <td>$ 400</td>
                                  </tr>
                              </tbody>
                          </Table>
                      </div>
                  </ModalBody>
                  <ModalFooter>
                      <Button type="button" color="secondary" onClick={() => { setmodal(!modal); }}>Close</Button>
                  </ModalFooter>
              </div>
          </Modal>
      </React.Fragment>
    );
  }

export default withNamespaces()(MainDash);

// Step 1: Buat file ni. tengok nama folder. Uitm/index.js. tekan next tab
