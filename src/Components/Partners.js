import React from 'react';

import { Col, Row, Button } from 'antd';




const Partners = () => {
    return (
        <div style={{ background: "black" }}>
            <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                <div >
                    <Row className="spon_mob" style={{ padding: "20px" }}>

                    </Row>

                </div>

                <div>
                    <Row style={{ padding: "20px" }}>



                        <Col xs={24} sm={24} md={12} className="pad-mob">
                            {/* <Image className="img-1" src={wave} preview={false} /> */}
                        </Col>

                        <Col xs={24} sm={24} md={12} className="pad-mob" style={{ marginTop: "120px" }}>
                            <p style={{ color: "white", fontWeight: "bold", margin: "0px" }}>TOKENS</p>
                            <h3 style={{ color: "white", fontSize: "40px" }}>Immunicorn <span style={{ color: "#68A7AD" }}>Token</span></h3>
                            <p style={{ color: "white" }}>
                                The native token of the Immunicorn ecosystem, $IMU is a BEP20 token that has been built on the BNB smart chain and can be used to pay transaction fees.
                                <br />
                                <br />

                                Holders of the token have access to several advantages, including being allowed voting and governance rights on the platform’s ecosystem.
                            </p>

                            <div className="btnHolder" style={{ display: "flex", marginBottom: "30px" }}>
                                <Button style={{ background: "#68A7AD", border: "none", color: "white", margin: "0px 20px 0px 0px" }} size="large">Find Out More</Button>

                            </div>
                        </Col>

                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Partners
