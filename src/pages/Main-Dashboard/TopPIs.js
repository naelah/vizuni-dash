import React from 'react';
import { Card, CardBody, CardTitle, Progress } from "reactstrap";

 const TopPIs = (props) => {
          return (
              <React.Fragment>
                <Card>
                    <CardBody>
                        <CardTitle className="mb-4">
                            Top PI Performance
                        </CardTitle>
                        <div className="text-center">
                            <div className="mb-4">
                                <i className="bx bx-bar-chart text-primary display-4"></i>
                            </div>
                            <h3>1,456</h3>
                            <p>Academic Performance</p>
                        </div>

                        <div className="table-responsive mt-4">
                            <table className="table table-centered table-nowrap mb-2">
                                <tbody>
                                    <tr>
                                        <td style={{ width: "30%" }} >
                                            <p className="mb-0">Total Number of PhD students</p>
                                        </td>
                                        <td style={{ width: "25%" }} >
                                            <h5 className="mb-0">1,456</h5></td>
                                        <td>
                                            <Progress value="94" color="primary" className="bg-transparent" size="sm" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="mb-0">Total number of Students <br/>participating in International Events</p>
                                        </td>
                                        <td>
                                            <h5 className="mb-0">1,123</h5>
                                        </td>
                                        <td>
                                            <Progress value="82" color="success" className="bg-transparent" size="sm" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="mb-0">Total Number of Papers Presented</p>
                                        </td>
                                        <td>
                                            <h5 className="mb-0">1,026</h5>
                                        </td>
                                        <td>
                                            <Progress value="70" color="warning" className="bg-transparent" size="sm" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </React.Fragment>
          );
        }

export default TopPIs;