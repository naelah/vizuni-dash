import React from 'react';

import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import avatar1 from "../../assets/images/users/avatar-1.jpg";
import profileImg from "../../assets/images/profile-img.png";

const WelcomeComp = (props) => {
          return (
           <React.Fragment>
                <Card className="overflow-hidden">
                    <div className="bg-soft-primary">
                        <Row>
                            <Col xs="7">
                                <div className="text-primary p-3">
                                    <h5 className="text-primary">Welcome Back !</h5>
                                    <p>UiTM Dashboard</p>
                                </div>
                            </Col>
                            <Col xs="5" className="align-self-end">
                                <img src={profileImg} alt="" className="img-fluid" />
                            </Col>
                        </Row>
                    </div>
                    <CardBody className="pt-0">
                        <Row>

                            
                                <div className="pt-4">
                                    <Row>
                                        
                                        <Col xs="4">
                                            <center><h5 className="font-size-15">125</h5>
                                            <p className="text-muted mb-0">Total KPI/PI</p></center>
                                        </Col>
                                        <Col xs="4">
                                            <center><h5 className="font-size-15">5</h5>
                                            <p className="text-muted mb-0">Total target achieved</p></center>
                                        </Col>
                                        <Col xs="4">
                                            <center><h5 className="font-size-15">70%</h5>
                                            <p className="text-muted mb-0">Total % of target achieved</p></center>
                                        </Col>
                                    </Row>
                                    <div className="mt-4">
                                        <Row>
                                        <Col xs="5">
                                        <Link to="" className="btn btn-primary waves-effect waves-light btn-sm">Update Dashboard <i className="mdi mdi-arrow-right ml-1"></i></Link>
                                        </Col>
                                        <Col xs="7">
                                        <br/><p className="text-muted mb-0 text-truncate">Last update on 14th November 2020</p>
                                        </Col>
                                        </Row>
                                    </div>
                                </div>
                        </Row>
                    </CardBody>
                </Card>
            </React.Fragment>
          );
        }
export default WelcomeComp;
 