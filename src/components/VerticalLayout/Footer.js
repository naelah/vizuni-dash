import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Footer = (props) => {
  return (
   <React.Fragment>
            <footer className="footer">
                <Container fluid={true}>
                    <Row>
                        <Col md={6}>
                            {new Date().getFullYear()} © Naelah.
                        </Col>
                        <Col md={6}>
                            <div className="text-sm-right d-none d-sm-block">
                                Design & Developed by Naelah Nordin as part of thesis for MSc Data Science
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
  );
}

export default Footer;