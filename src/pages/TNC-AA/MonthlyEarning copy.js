import React from 'react';

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

import ApexRadial from "./ApexRadial";
import ReactApexChart from 'react-apexcharts';

const  series  = [76,67,61];
const walletOptions = {
                plotOptions: {
                    radialBar: {
                        offsetY:0,
                        startAngle:0,
                        endAngle:270,
                        hollow: {
                            margin:5,
                            size:"35%",
                            background:"transparent",
                            image:void 0},
                            track: {
                                show:!0,
                                startAngle:void 0,
                                endAngle:void 0,
                                background:"#f2f2f2",
                                strokeWidth:"97%",
                                opacity:1,
                                margin:12,
                                dropShadow: {
                                    enabled:!1,
                                    top:0,
                                    left:0,
                                    blur:3,
                                    opacity:.5
                                }
                            },
                            dataLabels: {
                                name: {
                                    show:!0,
                                    fontSize:"16px",
                                    fontWeight:600,
                                    offsetY:-10
                                },
                                value: {
                                    show:!0,
                                    fontSize:"14px",
                                    offsetY:4,
                                    formatter: function(e){return e+"%"}
                                },
                                total: {
                                    show:!0,
                                    label:"Total",
                                    color:"#373d3f",
                                    fontSize:"16px",
                                    fontFamily:void 0,
                                    fontWeight:600,
                                    formatter:function(e){return e.globals.seriesTotals.reduce(function(e,t){return e+t},0)+"%"}
                                }
                            }
                        }
                    },
                    stroke: {
                        lineCap:"round"
                    },
                    colors:["#3452e1","#f1b44c","#50a5f1"],
                    labels:["Ethereum","Bitcoin","Ethereum"],
                    legend:{show:!1}
                };

        const MonthlyEarning = (props) => {
          return (
           <React.Fragment> <Card>
                <CardBody>
                    <CardTitle className="mb-4">
                        UITM OVERALL SCORE
                    </CardTitle>
                    <Row>
                            <div id="wallet-balance-chart" className="apex-charts">
                                <center><ReactApexChart options={walletOptions} series={series} type="radialBar" height={220} />  
                                </center>
                            </div>
                    </Row>
                </CardBody>
            </Card>
            </React.Fragment>
          );
        }

export default MonthlyEarning;