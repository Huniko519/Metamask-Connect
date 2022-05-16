import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/main.css";
import useMetaMask from "./metamask";

function Main() {
  const { connect, disconnect, isActive, account, shouldDisable } =
    useMetaMask();
  return (
    <>
      <Container>
        <Row>
          <Col sm={4} md={4} lg={4}></Col>
          <Col sm={4} md={4} lg={4}>
            <div className="container">
              <div className="header">
                <div>TEXT&nbsp;&nbsp; TEXT&nbsp;&nbsp; TEXT</div>
              </div>
              <div>TEXT&nbsp;&nbsp; TEXT&nbsp;&nbsp; TEXT</div>
              <div>USDT -... </div>
              <div>BUSDT -... </div>
              <div>BNB -... </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <input placeholder="AMOUNT" />
                </div>
                <div>
                  <select>
                    <option>USDT </option>
                    <option>BUSDT </option>
                    <option>BNB </option>
                  </select>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button onClick={connect} disabled={shouldDisable}>
                  <img
                    src="images/metamask.svg"
                    alt="MetaMask"
                    width="50"
                    height="50"
                  />{" "}
                  {isActive ? account : "Connect to MetaMask"}
                </button>
                <button variant="danger" onClick={disconnect}>
                  Disconnect MetaMask
                  <img
                    src="images/noun_waving_3666509.svg"
                    alt="meta"
                    width="50"
                    height="50"
                  />
                </button>
              </div>
              <div className="footer">TEXT TEXT TEXT</div>
            </div>
          </Col>
          <Col sm={4} md={4} lg={4}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Main;
