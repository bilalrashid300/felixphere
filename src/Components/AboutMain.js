import React, { useState } from 'react';
import { Col, Row, Image, Collapse } from 'antd';
import soc1 from '../assets/soc1.png';
import soc2 from '../assets/soc2.png';
import soc3 from '../assets/soc3.png';
import soc4 from '../assets/soc4.png';
import soc5 from '../assets/soc5.png';


const { Panel } = Collapse;

function AboutMain() {

    const [expandIconPosition, setExpandIconPosition] = useState('start');

    const onPositionChange = (newExpandIconPosition) => {
        setExpandIconPosition(newExpandIconPosition);
    };

    const onChange = (key) => {
        console.log(key);
    };



    return (

        <div className="aboutMain mainScreen" >
            <Row style={{ padding: "20px" }}>
                <Col xs={24} sm={24} md={24} className="pad-mob" style={{ marginTop: "100px", textAlign: "center", }}>
                    <p className="imu" style={{ width: "60%", textAlign: "center", marginLeft: "auto", marginRight: "auto", color: "white" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mauris non consequat non quam malesuada aliquam ut.
                    </p>

                </Col>
            </Row>


            <Row className="faq-mob" style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
                <Col xs={24} sm={24} md={24} className="pad-mob" style={{ textAlign: "center", marginBottom: "80px", fontSize: "24px" }}>


                    <Collapse
                        defaultActiveKey={['1']}
                        onChange={onChange}
                        expandIconPosition={expandIconPosition}
                    >
                        <Panel header="How Can I Participate In A Game?" key="1" >
                            <p>Click on the game that you are interested in and follow the prompts that show up.</p>
                        </Panel>
                        <Panel header="How Can I Purchase $FELIX?" key="2" >
                            <p>For now, you can purchase the $FELIX token through our presale website. </p>
                        </Panel>
                        <Panel header="How Often Will There Be A Lottery Draw?" key="3" >
                            <p>Every day at 16:00 BST, lotto draws on the Felixphere ecosystem will take place. </p>
                        </Panel>

                        <Panel header="How Many Tokens Are Available During The Presale Phase?" key="4" >
                            <p>No. There will be two month vesting period for the tokens purchased during the presale phase. </p>
                        </Panel>



                        <Panel header="How Many Tokens Are Available During The Presale Phase?" key="5" >
                            <p>There will be 500,000,000,000 tokens available in the presale phase but a fixed total supply of
                                2,000,000,000,000 $FELIX tokens. </p>
                        </Panel>
                    </Collapse>
                </Col>


            </Row>

            <Row style={{ padding: "20px" }}>
                <Col xs={24} sm={24} md={24} className="pad-mob" style={{ marginTop: "100px", textAlign: "center", }}>
                    <p className="imu" style={{ width: "60%", textAlign: "center", marginLeft: "auto", marginRight: "auto", color: "white" }}>
                        FIND US ON SOCIAL
                    </p>

                </Col>

                <Col xs={24} sm={24} md={24} style={{ marginBottom: "100px", textAlign: "center", }}>
                    <Image src={soc1} preview={false} />
                    <Image src={soc2} preview={false} />
                    <Image src={soc3} preview={false} />
                    <Image src={soc4} preview={false} />
                    <Image src={soc5} preview={false} />
                </Col>
            </Row>
        </div>
    );
}

export default AboutMain;