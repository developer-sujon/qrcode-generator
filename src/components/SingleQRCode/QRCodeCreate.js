import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import QRFormContact from "../QRForm/QRFormContact";
import QrFormUrl from "../QRForm/QRFormURL";

const QRCodeCreate = () => {
  let [QRType, SetQRType] = useState("");

  let QRFormComponent;
  if (QRType === "URLType") {
    QRFormComponent = <QrFormUrl />;
  } else if (QRType === "Contact") {
    QRFormComponent = <QRFormContact />;
  } else {
    QRFormComponent = <span></span>;
  }

  return (
    <Container>
      <Row>
        <Col md={3} lg={3}>
          <label className="form-label">QR Code Type</label>
          <select
            onChange={(e) => {
              SetQRType(e.target.value);
            }}
            className="form-control form-select"
          >
            <option value="">Choose</option>
            <option value="URLType">URL</option>
            <option value="Contact">Contact</option>
            <option value="Email">Email</option>
            <option value="Call">Call</option>
            <option value="SMS">SMS</option>
            <option value="WiFi">WiFi</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Text">Text</option>
            <option value="Paypal">Paypal</option>
            <option value="Bitcoin">Bitcoin</option>
          </select>
        </Col>
      </Row>
      <hr className="content-title-hr my-2" />

      <Row>
        <Col md={12} lg={12}>
          {QRFormComponent}
        </Col>
      </Row>
    </Container>
  );
};

export default QRCodeCreate;
