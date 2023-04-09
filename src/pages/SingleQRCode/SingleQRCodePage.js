import React, {Fragment} from 'react';
import MasterLayout from "../../components/masterLayout/masterLayout";
import QRCodeCreate from "../../components/SingleQRCode/QRCodeCreate";
import {Col, Container, Row} from "react-bootstrap";

const SingleQRCodePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                    <Container  fluid={true} className="content-body" >
                        <Row className="content-card animated fadeIn">
                            <h1 className="content-title"> Single QR Code</h1>
                            <hr className="content-title-hr"/>
                            <QRCodeCreate/>
                        </Row>
                    </Container>
            </MasterLayout>
        </Fragment>
    );
};

export default SingleQRCodePage;