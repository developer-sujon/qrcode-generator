import React from 'react';
import loader from './../../assets/images/loader.svg'
const FullScreenLoader = (props) => {
    return (
        <div className={props.isLoading+ "  ProcessingDiv"}>
            <div className="row p-0 m-0 d-flex justify-content-center">
                <div className="col-md-12 m-0 p-0 center-screen">
                    <img className="loader-size animated zoomIn " alt="loader" src={loader} />
                </div>
            </div>
        </div>
    );
};

export default FullScreenLoader;