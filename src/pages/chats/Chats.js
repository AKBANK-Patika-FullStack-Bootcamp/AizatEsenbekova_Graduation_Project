import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import MsgContainer from "../../components/chats/msg-container/MsgContainer";
import TenantContainer from "../../components/chats/tenant-container/TenantContainer";
import "./chats.css";

const Chats = () => {
  return (
    <div >
      <Container>
        <div className="content-wrapper">
          <Row className="row gutters">
            <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <Card className="card m-0">
                <Row className="row no-gutters">
                  <Col className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                   <TenantContainer/>
                  </Col>
                  <Col className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                    <MsgContainer/>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Chats;
