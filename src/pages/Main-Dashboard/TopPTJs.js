import React from 'react';
import { Card, CardBody, CardTitle, Progress } from "reactstrap";

 const TopPTJs = (props) => {
          return (
              <React.Fragment>
                <Card>
                    <CardBody>
                        <CardTitle className="mb-4">
                            Top Performing PTJ
                        </CardTitle>
                        <div className="text-center">
                            <div className="mb-4">
                                <i className="bx bx-bxs-buildings text-primary display-4"></i>
                            </div>
                            <h3>94%</h3>
                            <p>FSKM</p>
                        </div>

                        <div className="table-responsive mt-4">
                            <table className="table table-centered table-nowrap mb-2">
                                <tbody>
                                    <tr>
                                        <td style={{ width: "30%" }} >
                                            <p className="mb-0">FBM</p>
                                        </td>
                                        <td style={{ width: "25%" }} >
                                            <h5 className="mb-0">92%</h5></td>
                                        <td>
                                            <Progress value="94" color="primary" className="bg-transparent" size="sm" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="mb-0">Puncak Alam</p>
                                        </td>
                                        <td>
                                            <h5 className="mb-0">89%</h5>
                                        </td>
                                        <td>
                                            <Progress value="82" color="success" className="bg-transparent" size="sm" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="mb-0">Melaka</p>
                                        </td>
                                        <td>
                                            <h5 className="mb-0">70%</h5>
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

export default TopPTJs;