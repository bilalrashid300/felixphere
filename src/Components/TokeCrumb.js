import React from 'react';
import AppHeader from './header';
import { Col, Row, } from 'antd';



function TokeCrumb() {
    return (

        <div id="hero" className="heroBlock head-mob" style={{ height: "500px" }}>

            <div className="container-fluid">
                <AppHeader />

                <Row style={{ padding: "0px 70px 0px 70px" }}>
                    <Col xs={24} sm={24} md={16} style={{ position: "relative" }}>
                        <div style={{ display: 'flex', marginTop: "100px" }}>
                            <p style={{ color: "white" }}>HOME.<span style={{ color: "#FFCC00" }}>TOKENOMICS</span></p>
                        </div>

                        <h5 style={{ fontFamily: "SpaceGrotesk-Bold" }}>TOKENOMICS</h5>

                    </Col>
                    <Col className="noo-mob" xs={24} sm={24} md={8}>
                    </Col>
                </Row>

                <div className="content homeSlide" >



                </div>
            </div>
        </div>
    );
}

export default TokeCrumb;