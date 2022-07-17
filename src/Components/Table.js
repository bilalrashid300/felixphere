import { Col, Row, Space, Image, Tabs, Button } from 'antd';
import img from '../assets/13t.png';
import line from '../assets/Line16.png';




// const { TabPane } = Tabs;

const Table = () => {


    return (
        <div className="for--bg mainScreen" >
            <Row >
                <Col className="row-1" span={24}>
                    <Image src={img} preview={false} />
                </Col>

            </Row>

            <Row >
                <Col className="row-1 jst_mob" span={24}>
                    <div className="row-1 mrg-t ">

                        <h4 className="site-page-header ">Presale Stages</h4>
                    </div>

                </Col>

            </Row>



            <Space
                size="large"

            ></Space>

            <Row className="ttoke" align="center" style={{ width: "100%", justifyContent: "center" }}>


                <div style={{
                    display: "flex",
                    width: "70%",
                    color: "white",
                    position: "relative",
                    top: "15px",
                    justifyContent: "center"

                }}>

                    <Col className=" gutter-row br-right" xs={24} sm={24} md={6} >
                        <p className="test1"></p>
                        <br></br>

                        <div style={{ display: "flex" }}>
                            <h2 className="testing" style={{ width: "100%", border: "none", color: "#FFCC00", fontWeight: "bolder" }}>ROUND 1</h2>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>



                    </Col>


                    <Col className=" gutter-row br-right" xs={24} sm={24} md={6} >
                        <p className="test1"></p>
                        <br></br>

                        <div style={{ display: "flex" }}>
                            <h2 className="testing" style={{ width: "100%", border: "none", color: "#FFCC00", fontWeight: "bolder" }}>ROUND 2</h2>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>



                    </Col>


                    <Col className=" gutter-row br-right" xs={24} sm={24} md={6} >
                        <p className="test1"></p>
                        <br></br>

                        <div style={{ display: "flex" }}>
                            <h2 className="testing" style={{ width: "100%", border: "none", color: "#FFCC00", fontWeight: "bolder" }}>ROUND 3</h2>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>



                    </Col>
                    <Col className=" gutter-row br-right" xs={24} sm={24} md={6} >
                        <p className="test1"></p>
                        <br></br>

                        <div style={{ display: "flex" }}>
                            <h2 className="testing" style={{ width: "100%", border: "none", color: "#FFCC00", fontWeight: "bolder" }}>ROUND 4</h2>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>



                    </Col>
                </div>

            </Row>

            <Row align="center" className="tken" style={{ marginBottom: "150px" }}>
                <div className="tab1 box1" style={{
                    display: "flex",
                    width: "80%",
                    color: "white",
                    //    padding: "0px 50px 0px 50px"
                }}>

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    {/* <div class="content"> */}
                    <Col className=" gutter-row br-right" xs={24} sm={24} md={6} >
                        <p className="test1"></p>
                        <br></br>

                        <div style={{ display: "flex" }}>
                            <p className="testing" style={{ width: "100%", fontSize: "16px" }}>JUL 10TH - AUG 20TH</p>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>

                        <div style={{ display: "flex" }}>
                            <p className="testing" style={{ width: "100%", fontSize: "16px" }}>Upto  <span style={{ color: "#FFCC00", fontWeight: "bolder" }}>25%</span> in
                                Bonuses</p>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>

                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button size="large" style={{ borderRadius: "5px", border: "none", fontWeight: "bold", background: "#FFCC00", color: "black" }}> Buy Tokens</Button>

                        </div>


                    </Col>
                    <Col className=" gutter-row br-right" xs={24} sm={24} md={6} >
                        <p className="test1"></p>
                        <br></br>

                        <div style={{ display: "flex" }}>
                            <p className="testing" style={{ width: "100%", fontSize: "16px" }}>AUG 21ST - SEP 30TH</p>

                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>

                        <div style={{ display: "flex" }}>
                            <p className="testing" style={{ width: "100%", fontSize: "16px" }}>Upto  <span style={{ color: "#FFCC00", fontWeight: "bolder" }}>25%</span> in
                                Bonuses</p>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button size="large" style={{ borderRadius: "5px", border: "none", fontWeight: "bold", background: "#FFCC00", color: "black" }}> Buy Tokens</Button>

                        </div>



                    </Col>
                    <Col className=" gutter-row br-right" xs={24} sm={24} md={6} >
                        <p className="test1"></p>
                        <br></br>

                        <div style={{ display: "flex" }}>
                            <p className="testing" style={{ width: "100%", fontSize: "16px" }}>AUG 21ST - SEP 30TH</p>

                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>

                        <div style={{ display: "flex" }}>
                            <p className="testing" style={{ width: "100%", fontSize: "16px" }}>Upto  <span style={{ color: "#FFCC00", fontWeight: "bolder" }}>25%</span> in
                                Bonuses</p>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button size="large" style={{ borderRadius: "5px", border: "none", fontWeight: "bold", background: "#FFCC00", color: "black" }}> Buy Tokens</Button>

                        </div>


                    </Col>
                    <Col className="gutter-row" xs={24} sm={24} md={6} >
                        <p className="test1"></p>
                        <br></br>
                        <div style={{ display: "flex" }}>
                            <p className="testing" style={{ width: "100%", fontSize: "16px" }}>AUG 21ST - SEP 30TH</p>

                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>

                        <div style={{ display: "flex" }}>
                            <p className="testing" style={{ width: "100%", fontSize: "16px" }}>Upto  <span style={{ color: "#FFCC00", fontWeight: "bolder" }}>25%</span> in
                                Bonuses</p>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button size="large" style={{ borderRadius: "5px", border: "none", fontWeight: "bold", background: "#FFCC00", color: "black" }}> Buy Tokens</Button>

                        </div>

                    </Col>
                </div>
                {/* </div> */}

            </Row>









            <Row className="mobile" style={{ display: "none" }}>
                <Col className="gutter-row" xs={24} sm={24} style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    border: "2px solid #FFCC00",
                    padding: "50px",
                    marginBottom: "20px"


                }} >

                    <h2 className="" style={{ textAlign: "center", width: "100%", border: "none", color: "#FFCC00", fontWeight: "bolder" }}>ROUND 1</h2>
                    <p className="" style={{ textAlign: "center", color: "white", width: "100%", fontSize: "16px" }}>JUL 10TH - AUG 20TH</p>

                    <p className="" style={{ textAlign: "center", color: "white", width: "100%", fontSize: "16px" }}>Upto  <span style={{ fontSize: "20px", color: "#FFCC00", fontWeight: "bolder" }}>25%</span> in
                        Bonuses</p>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button size="large" style={{ borderRadius: "5px", border: "none", fontWeight: "bold", background: "#FFCC00", color: "black" }}> Buy Tokens</Button>
                    </div>

                </Col>

                <Col className="gutter-row" xs={24} sm={24} style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    border: "2px solid #FFCC00",
                    padding: "50px",
                    marginBottom: "20px"


                }} >

                    <h2 className="" style={{ textAlign: "center", width: "100%", border: "none", color: "#FFCC00", fontWeight: "bolder" }}>ROUND 2</h2>
                    <p className="" style={{ textAlign: "center", color: "white", width: "100%", fontSize: "16px" }}>AUG 21ST - SEP 30TH</p>

                    <p className="" style={{ textAlign: "center", color: "white", width: "100%", fontSize: "16px" }}>Upto  <span style={{ fontSize: "20px", color: "#FFCC00", fontWeight: "bolder" }}>25%</span> in
                        Bonuses</p>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button size="large" style={{ borderRadius: "5px", border: "none", fontWeight: "bold", background: "#FFCC00", color: "black" }}> Buy Tokens</Button>
                    </div>

                </Col>

                <Col className="gutter-row" xs={24} sm={24} style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    border: "2px solid #FFCC00",
                    padding: "50px",
                    marginBottom: "20px"


                }} >

                    <h2 className="" style={{ textAlign: "center", width: "100%", border: "none", color: "#FFCC00", fontWeight: "bolder" }}>ROUND 3</h2>
                    <p className="" style={{ textAlign: "center", color: "white", width: "100%", fontSize: "16px" }}>OCT 1ST - OCT 31ST</p>

                    <p className="" style={{ textAlign: "center", color: "white", width: "100%", fontSize: "16px" }}>Upto  <span style={{ fontSize: "20px", color: "#FFCC00", fontWeight: "bolder" }}>25%</span> in
                        Bonuses</p>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button size="large" style={{ borderRadius: "5px", border: "none", fontWeight: "bold", background: "#FFCC00", color: "black" }}> Buy Tokens</Button>
                    </div>

                </Col>

                <Col className="gutter-row" xs={24} sm={24} style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    border: "2px solid #FFCC00",
                    padding: "50px",
                    marginBottom: "20px"

                }} >

                    <h2 className="" style={{ textAlign: "center", width: "100%", border: "none", color: "#FFCC00", fontWeight: "bolder" }}>ROUND 4</h2>
                    <p className="" style={{ textAlign: "center", color: "white", width: "100%", fontSize: "16px" }}>NOV 1ST - NOV 14TH</p>

                    <p className="" style={{ textAlign: "center", color: "white", width: "100%", fontSize: "16px" }}>Upto  <span style={{ fontSize: "20px", color: "#FFCC00", fontWeight: "bolder" }}>25%</span> in
                        Bonuses</p>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button size="large" style={{ borderRadius: "5px", border: "none", fontWeight: "bold", background: "#FFCC00", color: "black" }}> Buy Tokens</Button>
                    </div>

                </Col>



            </Row>

        </div>
    )
}

export default Table




