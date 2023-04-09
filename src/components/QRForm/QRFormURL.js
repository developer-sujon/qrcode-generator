import React, { Fragment, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { setSingleQRInfo } from "../../helper/sessionHelper";
import { ErrorToast, ErrorFocus, IsURL } from "../../helper/FormHelper";

const QrFormUrl = (props) => {
  let URLInput = useRef();

  const GoGenerate = () => {
    let URLValue = URLInput.value;
    if (IsURL(URLValue)) {
      ErrorToast("Enter Valid URL");
      ErrorFocus(URLInput);
    } else {
      setSingleQRInfo(URLValue);
      props.history.push("/SingleQRPrint");
    }
  };

  return (
    <Fragment>
      <Container className="p-0 m-0" fluid={true}>
        <Row>
          <Col md={3} lg={3}>
            <label className="form-label">Enter any url</label>
            <input
              ref={(input) => {
                URLInput = input;
              }}
              className="form-control"
              type="text"
            />
          </Col>
        </Row>

        <Row className="my-3">
          <Col md={3} lg={3}>
            <button onClick={GoGenerate} className="btn btn-success">
              Generate
            </button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default withRouter(QrFormUrl);
