import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from 'reactstrap';

// import Charts
import { withNamespaces } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAvg } from 'utils';
import SCORE_DATA from 'data/main/main';

import modalimage1 from '../../assets/images/product/img-7.png';
import modalimage2 from '../../assets/images/product/img-4.png';

// Pages Components
import WelcomeComp from './WelcomeComp';
import MonthlyEarning from './MonthlyEarning';
import TopPIs from './TopPIs';
import TopPTJs from './TopPTJs';
import TopKPIs from './TopKPIs';
import Earning from './earning';
import StrategyReport from '../Test/StrategyReport';

// Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

// eslint-disable-next-line react/prop-types
const MainDash = ({ t }) => {
  const [modal, setmodal] = useState(false);
  const params = useSelector(({ Params }) => Params);

  const data = SCORE_DATA.map((item) => ({
    ...item,
    score: item.score.map((scoreItem) => ({
      ...scoreItem,
      weight: params[item.st_id],
    })),
    avgScore: getAvg(item.score, 'score'),
  }));

  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title={t('Dashboard')} breadcrumbItem={t('Dashboard')} />

          <Row>
            <Col xl="4">
              <WelcomeComp />
              <MonthlyEarning />
            </Col>
            <Col xl="8">
              <Row>
                <StrategyReport data={data} />
              </Row>
              <Row>
                <Earning />
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
      <Modal
        isOpen={modal}
        role="dialog"
        autoFocus
        centered
        className="exampleModal"
        tabindex="-1"
        toggle={() => {
          setmodal(!modal);
        }}
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => {
              setmodal(!modal);
            }}
          >
            Order Details
          </ModalHeader>
          <ModalBody>
            <p className="mb-2">
              Product id: <span className="text-primary">#SK2540</span>
            </p>
            <p className="mb-4">
              Billing Name: <span className="text-primary">Neal Matthews</span>
            </p>

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
                        <h5 className="text-truncate font-size-14">
                          Wireless Headphone (Black)
                        </h5>
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
                        <h5 className="text-truncate font-size-14">
                          Hoodie (Blue)
                        </h5>
                        <p className="text-muted mb-0">$ 145 x 1</p>
                      </div>
                    </td>
                    <td>$ 145</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <h6 className="m-0 text-right">Sub Total:</h6>
                    </td>
                    <td>$ 400</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <h6 className="m-0 text-right">Shipping:</h6>
                    </td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <h6 className="m-0 text-right">Total:</h6>
                    </td>
                    <td>$ 400</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="secondary"
              onClick={() => {
                setmodal(!modal);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  );
};

export default withNamespaces()(MainDash);
