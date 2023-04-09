import React, {Fragment, useRef} from 'react';
import MasterLayout from "../../components/masterLayout/masterLayout";
import { Container, Row} from "react-bootstrap";
import QrCodePrint from "../../components/SingleQRCode/QRCodePrint";
const SingleQrCodePrintPage = () => {
    let QRList=[{QRName:1}]
    let ColumnNo=2;
    let QRNumber=1;

    return (
        <Fragment>
            <MasterLayout>
                <Container  fluid={true} className="content-body" >
                    <Row className="content-card animated fadeIn">
                        <h1 className="content-title"> Single QR Code Print</h1>
                        <hr className="content-title-hr"/>
                        <QrCodePrint QRNumber={QRNumber}  ColumnNo={ColumnNo}  QRList={QRList}/>
                    </Row>
                </Container>
            </MasterLayout>
        </Fragment>
    );
};

export default SingleQrCodePrintPage;