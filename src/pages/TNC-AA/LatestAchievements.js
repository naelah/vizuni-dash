import React from 'react';
import { Card, CardBody, CardTitle, Badge, Button } from "reactstrap";
import { Link } from "react-router-dom";

const LatestAchievements = (props) => {

            const kpi = [
                { no: "1", kpi_details:"Number of programmes accredited by professional standard at national or international level.", prevYear: "60", target:"83",current:"70", percentage: "84%" ,badgeClass: "warning", status: "Close"}, 
                { no: "2", kpi_details:"Number of programmes made available online to learners nationally and globally.", prevYear: "0", target:"2",current:"2", percentage: "100%",badgeClass: "success", status: "Reach Target" },
                { no: "3", kpi_details:"Number of broad-based programmes with differentiated tracks and pathways.", prevYear: "60", target:"83",current:"70", percentage: "0%",badgeClass: "danger", status: "failed" },
                { no: "7a", kpi_details:"Number of student enrolment (full time).", prevYear: "161934", target:"162000",current:"145297", percentage: "90%",badgeClass: "warning", status: "Close" },
                { no: "7b", kpi_details:"Number of student enrolment (part time).", prevYear: "10519", target:"11800",current:"10394", percentage: "88%",badgeClass: "warning", status: "Close" },
                { no: "7c", kpi_details:"Number of student enrolment (franchise)", prevYear: "1498", target:"2040",current:"1291", percentage: "63%",badgeClass: "danger", status: "Failed" },
                { no: "7d", kpi_details:"Number of student enrolment (postgraduate students)", prevYear: "8105", target:"10000",current:"10221", percentage: "100%",badgeClass: "success", status: "Reach Target" }, { no: "7e", kpi_details:"Number of student enrolment (international postgraduate students)", prevYear: "276", target:"400",current:"312", percentage: "78%",badgeClass: "warning", status: "Close" }
            ]

            const  transactions = [
                { id: "customCheck2", orderId: "#SK2540", billingName: "Neal Matthews", Date: "07 Oct, 2019", total: "$400", badgeClass: "success", status: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard", link: "#" },
                { id: "customCheck3", orderId: "#SK2541", billingName: "Jamal Burnett", Date: "07 Oct, 2019", total: "$380", badgeClass: "danger", status: "Chargeback", methodIcon: "fa-cc-visa", paymentMethod: "Visa", link: "#" },
                { id: "customCheck4", orderId: "#SK2542", billingName: "Juan Mitchell", Date: "06 Oct, 2019", total: "$384", badgeClass: "success", status: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal", link: "#" },
                { id: "customCheck5", orderId: "#SK2543", billingName: "Barry Dick", Date: "05 Oct, 2019", total: "$412", badgeClass: "success", status: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard", link: "#" },
                { id: "customCheck6", orderId: "#SK2544", billingName: "Ronald Taylor", Date: "04 Oct, 2019", total: "$404", badgeClass: "warning", status: "Refund", methodIcon: "fa-cc-visa", paymentMethod: "Visa", link: "#" },
                { id: "customCheck7", orderId: "#SK2545", billingName: "Jacob Hunter", Date: "04 Oct, 2019", total: "$392", badgeClass: "success", status: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal", link: "#" }
            ]; 

          return (
              <React.Fragment>
                <Card>
                    <CardBody>
                        <CardTitle className="mb-4">
                            Current KPI Achievements
                        </CardTitle>
                        <div className="table-responsive">
                            <table className="table table-centered table-nowrap mb-0">
                                <thead className="thead-light">
                                    <tr>
                                        <th>KPI No</th>
                                        <th>KPI</th>
                                        <th>Previous Year</th>
                                        <th>Target</th>
                                        <th>Current</th>
                                        <th>%</th>
                                        <th>status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        kpi.map((kpi, key) =>
                                            <tr key={"_tr_" + key}>
                                                <td>
                                                {kpi.no}
                                                </td>
                                                <td>{kpi.kpi_details}  </td>
                                                <td>{kpi.prevYear}</td>
                                                <td>
                                                    {kpi.target}
                                                </td>
                                                <td>
                                                    {kpi.current}
                                                </td>
                                                <td>
                                                    {kpi.percentage}
                                                </td>
                                                <td>
                                                    <Badge className={"font-size-12 badge-soft-" + kpi.badgeClass} color={kpi.badgeClass} pill>{kpi.status}</Badge>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <CardTitle className="mb-4">
                            Current PI Achievements
                        </CardTitle>
                        <div className="table-responsive">
                            <table className="table table-centered table-nowrap mb-0">
                                <thead className="thead-light">
                                    <tr>
                                        <th>KPI No</th>
                                        <th>KPI</th>
                                        <th>Previous Year</th>
                                        <th>Target</th>
                                        <th>Current</th>
                                        <th>%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        kpi.map((kpi, key) =>
                                            <tr key={"_tr_" + key}>
                                                <td>
                                                {kpi.no}
                                                </td>
                                                <td>{kpi.kpi_details}  </td>
                                                <td>{kpi.prevYear}</td>
                                                <td>
                                                    {kpi.target}
                                                </td>
                                                <td>
                                                    {kpi.current}
                                                </td>
                                                <td>
                                                    {kpi.percentage}
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </React.Fragment>
          );
        }

export default LatestAchievements;