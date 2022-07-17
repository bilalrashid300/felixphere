import React from 'react';

import { Col, Row, Image, Layout } from 'antd';

import log from '../assets/FELIXTEXT.png';
import { useTranslation } from 'react-i18next';



const { Footer } = Layout;



const AppFooter = () => {
  const { t } = useTranslation();
  return (
    <Footer>
      <Row>
        <div className="myfoot" style={{ width: "100%", textAlign: "Left", display: "flex", justifyContent: "space-between" }}>

          <Col xs={24} sm={24} md={12}>
            <Image src={log} />
          </Col>


          <Col xs={24} sm={24} md={12} style={{ textAlign: "right" }}>
            <p className="reserved" style={{ textAlign: "right", color: "black" }}>{t('copyright')} © 2022. {t('rights')} FELIXPHERE</p>
          </Col>


        </div>
      </Row>


    </Footer>


  );
}

export default AppFooter;