import React from 'react';
import { Col, Row, Image, Button } from 'antd';
import AppHeader from './header';
import illus from '../assets/illus.png';
import MobileTimer from './MobileTimer'
import { useTranslation } from "react-i18next";

const  MainScreen = () => {
  const { t } = useTranslation();
    
    return (

        <div id="hero" className="heroBlock">

            <div className="container-fluid">
                <AppHeader />
                <div className="content homeSlide" >
                    <Row className="paa" style={{ padding: "100px 50px 0px 100px" }} >

                        <MobileTimer />

                        <Col xs={24} sm={24} md={15} style={{ display: 'block', justifyContent: "left" }}>
                            <h3 className="rider" style={{
                                fontStyle: "normal", fontWeight: 900, fontSize: "72px",
                                lineHeight: "81px", textAlign: "left", fontFamily: "SpaceGrotesk-bold"
                            }}>{t('hero_text_1')}</h3>
                            <p style={{ textAlign: "left", width: "60%", fontSize: "24px", padding: "0px 20px" }}>{t('hero_text_2')}</p>

                            <div className="btnHolder" style={{ display: "flex", justifyContent: "left", padding: "0px 20px" }}>
                                <Button style={{ borderRadius: "5px", background: "transparent", border: "1px solid #FFCC00", color: "#FFCC00" }} size="large">{t('audit')}</Button>
                                <Button size="large" style={{ borderRadius: "5px", border: "none", background: "#FFCC00", color: "black" }}> {t('whitepaper')}</Button>
                                <Button className="not_mob" style={{ borderRadius: "5px", background: "transparent", border: "1px solid #FFCC00", color: "#FFCC00", margin: "0px 20px 0px 0px" }} size="large">{t('join_presale')}</Button>
                            </div>
                        </Col>



                        <Col xs={24} sm={24} md={9} style={{ display: 'flex', justifyContent: "center" }}>
                            <Image className="no--mob" src={illus} preview={false} />
                        </Col>

                        <Col xs={24} sm={24}>
                            <Button className="not_mob2" style={{ display: "none", borderRadius: "5px", background: "transparent", border: "1px solid #FFCC00", color: "#FFCC00", margin: "0px 20px 0px 0px" }} size="large">{t('join_presale')}</Button>
                        </Col>

                    </Row>

                </div>
            </div>
        </div>
    );
}

export default MainScreen;