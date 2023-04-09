import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SingleQRCodePage from "./pages/SingleQRCode/SingleQRCodePage";
import SingleQrCodePrintPage from "./pages/SingleQRCode/SingleQRCodePrintPage";

const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route  exact path="/" render={(props) => <HomePage  {...props} key={Date.now()} />}/>
                    <Route  exact path="/SingleQR" render={(props) => <SingleQRCodePage {...props} key={Date.now()} />}/>
                    <Route  exact path="/SingleQRPrint" render={(props) => <SingleQrCodePrintPage {...props} key={Date.now()} />}/>
                </Switch>
            </BrowserRouter>

        </Fragment>
    );
};
export default App;