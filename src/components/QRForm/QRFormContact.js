import React, { Fragment, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { setSingleQRInfo } from "../../helper/sessionHelper";
import {
  ErrorToast,
  ErrorFocus,
  IsEmpty,
  IsEmail
} from "../../helper/FormHelper";

const QrFormContact = (props) => {
  let NameInput,
    AddressInput,
    PhnInput,
    EmailInput = useRef();

  const GoGenerate = () => {
    let NameValue = NameInput.value;
    let AddressValue = AddressInput.value;
    let PhnValue = PhnInput.value;
    let EmailValue = EmailInput.value;

    if (IsEmpty(NameValue)) {
      ErrorToast("Name Required!");
      ErrorFocus(NameInput);
    } else if (IsEmpty(AddressValue)) {
      ErrorToast("Address Required!");
      ErrorFocus(AddressInput);
    } else if (IsEmpty(PhnValue)) {
      ErrorToast("Phone Number Required!");
      ErrorFocus(PhnInput);
    } else if (IsEmail(EmailValue)) {
      ErrorToast("Valid Email Address Required!");
      ErrorFocus(EmailInput);
    } else {
      let ContactString =
        "MECARD:N:" +
        NameValue +
        " ;ADR:" +
        AddressValue +
        ";TEL:" +
        PhnValue +
        ";EMAIL:" +
        EmailValue +
        ";;";

      setSingleQRInfo(ContactString);
      props.history.push("/SingleQRPrint");
    }
  };

  return (
    <Fragment>
      <Container className="p-0 m-0" fluid={true}>
        <Row>
          <Col md={3} lg={3}>
            <label className="form-label">Name</label>
            <input
              ref={(input) => {
                NameInput = input;
              }}
              className="form-control"
              type="text"
            />
          </Col>

          <Col md={3} lg={3}>
            <label className="form-label">Address</label>
            <input
              ref={(input) => {
                AddressInput = input;
              }}
              className="form-control"
              type="text"
            />
          </Col>

          <Col md={3} lg={3}>
            <label className="form-label">Phone</label>
            <input
              ref={(input) => {
                PhnInput = input;
              }}
              className="form-control"
              type="text"
            />
          </Col>

          <Col md={3} lg={3}>
            <label className="form-label">Email</label>
            <input
              ref={(input) => {
                EmailInput = input;
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

export default withRouter(QrFormContact);
