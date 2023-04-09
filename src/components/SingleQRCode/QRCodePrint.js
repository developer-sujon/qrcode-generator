import React, { Fragment, useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import QRCode from "qrcode.react";
import { getSingleQRInfo } from "../../helper/sessionHelper";
import * as htmlToImage from "html-to-image";
import printJS from "print-js";

const QrCodePrint = (props) => {
  let [QRList, SetQRList] = useState(props.QRList);
  let [ColumnNo, SetColumnNo] = useState(props.ColumnNo);
  let [QRNumber, SetQRNumber] = useState(props.QRNumber);
  let [FgColor, SetFgColor] = useState(props.FgColor);

  let PrintPreviewDiv = useRef();

  const QRNumberOnChange = (e) => {
    let QRNo = parseInt(e.target.value, 10);
    SetQRNumber(QRNo);
    let i = 1;
    let MyQRList = [{ QRName: 1 }];
    for (i = 1; i < QRNo; i++) {
      MyQRList.push({ QRName: i + 1 });
    }
    SetQRList(MyQRList);
  };

  let PrintPreview = QRList.map((list, i) => {
    return (
      <Col className=" grid-col text-center" md={ColumnNo} lg={ColumnNo}>
        <QRCode
          fgColor={FgColor}
          className="w-100 h-auto"
          renderAs={"svg"}
          size={128}
          value={getSingleQRInfo()}
        />
      </Col>
    );
  });

  const GoPrint = () => {
    htmlToImage.toPng(PrintPreviewDiv, { quality: 3 }).then(function (dataUrl) {
      printJS({
        printable: dataUrl,
        type: "image",
        base64: true,
        showModal: true,
        modalMessage: "Loading..."
      });
    });
  };
  return (
    <Fragment>
      <Container d-flex h-100>
        <Row className="align-items-center h-100">
          <Col md={2} lg={2}>
            <label className="form-label">Number of column</label>
            <select
              value={ColumnNo}
              onChange={(e) => {
                SetColumnNo(e.target.value);
              }}
              className="form-control form-select"
            >
              <option value="4">3 Column</option>
              <option value="3">4 Column</option>
              <option value="2">6 Column</option>
              <option value="1">12 Column</option>
            </select>
          </Col>

          <Col md={2} lg={2}>
            <label className="form-label">QR Color</label>
            <input
              value={FgColor}
              onChange={(e) => {
                SetFgColor(e.target.value);
              }}
              className="form-control p-0"
              type="color"
            />
          </Col>

          <Col md={2} lg={2}>
            <label className="form-label">Number of QR</label>
            <input
              value={QRNumber}
              min={1}
              max={100}
              onChange={QRNumberOnChange}
              className="form-control"
              type="number"
            />
          </Col>

          <Col md={2} lg={2}>
            <br />
            <Button className="btn btn-success" onClick={GoPrint}>
              Print
            </Button>
          </Col>
        </Row>
      </Container>

      <Container
        ref={(div) => {
          PrintPreviewDiv = div;
        }}
        className="container"
      >
        <Row className="row grid-div">{PrintPreview}</Row>
      </Container>
    </Fragment>
  );
};

export default QrCodePrint;
