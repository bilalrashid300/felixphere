import React from "react";
import { Col, Row, Image, Button } from "antd";

import dice from "../assets/dice.png";
import two from "../assets/two.png";

import illus1 from "../assets/42.png";
import illus7 from "../assets/52.png";

import image0 from "../assets/image0.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import rect from "../assets/Rect.png";

import AppFooter from "./AppFooter";
import { useTranslation } from "react-i18next";

const MainBody = () => {
  const { t } = useTranslation();

  return (
    <div className="mainScreen">
      <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <Row
          className="spon_mob"
          style={{ padding: "20px", justifyContent: "space-between" }}
        >
          <Col
            xs={24}
            sm={24}
            md={11}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="contents">
              <p
                className="pto pto1"
                style={{
                  color: "white",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(269.71deg, #010101 2.61%, #CC9900 102.7%)",
                }}
              >
                {t("card_1")}
              </p>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={11}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="contents">
              <p
                className="pto"
                style={{
                  color: "white",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(269.71deg, #CC9900 7.03%, #010101 102.15%)",
                }}
              >
                {t("card_2")}
              </p>
            </div>
          </Col>
        </Row>

        <Row
          className="spon_mob"
          style={{ padding: "20px", justifyContent: "space-between" }}
        >
          <Col
            xs={24}
            sm={24}
            md={11}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="contents">
              <p
                className="pto"
                style={{
                  color: "white",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(269.71deg, #010101 2.61%, #CC9900 102.7%)",
                }}
              >
                {t("card_3")}
              </p>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={11}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="contents">
              <p
                className="pto"
                style={{
                  color: "white",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(269.71deg, #CC9900 7.03%, #010101 102.15%)",
                }}
              >
                {t("card_4")}
              </p>
            </div>
          </Col>
        </Row>

        <Row
          className="spon_mob"
          style={{ padding: "20px", justifyContent: "space-between" }}
        >
          <Col
            xs={24}
            sm={24}
            md={11}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="contents">
              <p
                className="pto"
                style={{
                  color: "white",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(269.71deg, #010101 2.61%, #CC9900 102.7%)",
                }}
              >
                {t("card_5")}
              </p>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={11}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="contents">
              <p
                className="pto"
                style={{
                  color: "white",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(269.71deg, #CC9900 7.03%, #010101 102.15%)",
                }}
              >
                {t("card_6")}
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col
            xs={24}
            sm={24}
            md={24}
            className="pad-mob"
            style={{ marginTop: "120px" }}
          >
            <h3
              style={{ color: "white", fontSize: "40px", textAlign: "center" }}
            >
              {t("our_games")}
            </h3>
          </Col>
        </Row>

        <Row style={{ padding: "20px" }}>
          <Col xs={24} sm={24} md={10} lg={12} className="">
            <div className="shape">
              <Image
                className="kk-image"
                style={{ width: "30%" }}
                src={two}
                preview={false}
              />
              <h3
                className="all-mob"
                style={{ color: "#FFCC00", textAlign: "center" }}
              >
                {t("game_card_h1")}
              </h3>
              <p className="kk" style={{ color: "white", width: "60%" }}>
                {t("game_card_d1")}
              </p>
              <div
                className="btn-mo"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  top: "-20px",
                }}
              >
                <Button
                  style={{
                    background: "#FFCC00",
                    border: "none",
                    color: "white",
                  }}
                  size="large"
                >
                  {t("play_game")}
                </Button>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={24} md={10} lg={12} className="">
            <div className="shapes">
              <Image
                className="kk-image"
                style={{ width: "30%" }}
                src={dice}
                preview={false}
              />
              <h3
                className="all-mob"
                style={{ color: "#FFCC00", textAlign: "center" }}
              >
                {t("game_card_h2")}
              </h3>

              <p className="kk" style={{ color: "white", width: "60%" }}>
                {t("game_card_d2")}
              </p>
              <div
                className="btn-mo"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  style={{
                    background: "#FFCC00",
                    border: "none",
                    color: "white",
                  }}
                  size="large"
                >
                  {t("play_game")}
                </Button>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={24} md={10} lg={12} className="">
            <div className="shapes3">
              <Image
                className="kk-image"
                style={{ width: "30%" }}
                src={illus1}
                preview={false}
              />
              <h3
                className="all-mob"
                style={{ color: "#FFCC00", textAlign: "center" }}
              >
                {t("game_card_h3")}
              </h3>

              <p className="kk" style={{ color: "white", width: "60%" }}>
                {t("game_card_d3")}
              </p>
              <div
                className="btn-mo"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  style={{
                    background: "#FFCC00",
                    border: "none",
                    color: "white",
                  }}
                  size="large"
                >
                  {t("play_game")}
                </Button>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={24} md={10} lg={12} className="">
            <div className="shapes4">
              <Image
                className="kk-image"
                style={{ width: "30%" }}
                src={illus7}
                preview={false}
              />
              <h3
                className="all-mob"
                style={{ color: "#FFCC00", textAlign: "center" }}
              >
                {t("game_card_h4")}
              </h3>

              <p className="kk" style={{ color: "white", width: "60%" }}>
                {t("game_card_d4")}
              </p>
              <div
                className="btn-mo"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  style={{
                    background: "#FFCC00",
                    border: "none",
                    color: "white",
                  }}
                  size="large"
                >
                  {t("play_game")}
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row style={{ padding: "20px", marginBottom: "30px" }}>
          <Col xs={24} sm={24} md={12} className="pad-mob">
            <Image src={image0} preview={false} />
          </Col>

          <Col
            xs={24}
            sm={24}
            md={12}
            className="pad-mob"
            style={{ marginTop: "60px" }}
          >
            <h3
              className="h-mob"
              style={{ color: "#FFCC00", textAlign: "left" }}
            >
              {t("row_h1")}
            </h3>

            <p style={{ color: "white" }}>
              {t("row1_item_1")}

              <br />
              <br />
              {t("row1_item_2")}

              <br />
              <br />
              {t("row1_item_3")}
            </p>
          </Col>
        </Row>

        <Row
          className="spon_mob_1"
          style={{ padding: "20px", marginBottom: "30px" }}
        >
          <Col
            xs={24}
            sm={24}
            md={12}
            className="pad-mob"
            style={{ marginTop: "60px" }}
          >
            <h3
              className="h-mob"
              style={{ color: "#FFCC00", textAlign: "left" }}
            >
              {t("row_h2")}
            </h3>

            <p style={{ color: "white" }}>{t("row2_item_1")}</p>

            <p style={{ color: "white" }}>
              <Image src={rect} />
              {t("row2_item_2")}
            </p>
            <p style={{ color: "white" }}>
              <Image src={rect} />
              {t("row2_item_3")}
            </p>
            <p style={{ color: "white" }}>
              <Image src={rect} />
              {t("row2_item_4")}
            </p>
            <p style={{ color: "white" }}>
              <Image src={rect} />
              {t("row2_item_5")}
            </p>
            <p style={{ color: "white" }}>{t("row2_item_6")}</p>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            className="pad-mob"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Image src={image1} preview={false} />
          </Col>
        </Row>

        <Row style={{ padding: "20px", marginBottom: "30px" }}>
          <Col
            xs={24}
            sm={24}
            md={12}
            className="pad-mob"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src={image2}
              preview={false}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            />
          </Col>

          <Col
            xs={24}
            sm={24}
            md={12}
            className="pad-mob"
            style={{ marginTop: "60px" }}
          >
            <h3
              className="h-mob"
              style={{ color: "#FFCC00", textAlign: "left" }}
            >
              {t("row_h3")}{" "}
            </h3>

            <p style={{ color: "white" }}>{t("row3_item_1")}</p>

            <Row style={{ justifyContent: "space-between" }}>
              <Col
                xs={24}
                sm={24}
                md={12}
                className="pad-mob"
                style={{ marginTop: "60px" }}
              >
                <h4 style={{ color: "#FFCC00", padding: "20px" }}>
                  {t("row3_item_h1")}
                </h4>

                <p style={{ color: "white", padding: "20px" }}>
                  <Image src={rect} /> 
                  {t("row3_item_d1")}
                </p>
                <p style={{ color: "white", padding: "20px" }}>
                  <Image src={rect} />
                  {t("row3_item_d2")}
                </p>
              </Col>

              <Col
                xs={24}
                sm={24}
                md={12}
                className="pad-mob"
                style={{ marginTop: "60px" }}
              >
                <h4 style={{ color: "#FFCC00", padding: "20px" }}>
                  {t("row3_item_h2")}
                </h4>

                <p style={{ color: "white", padding: "20px" }}>
                  <Image src={rect} />
                  {t("row3_item_d3")}
                </p>
                <p style={{ color: "white", padding: "20px" }}>
                  <Image src={rect} />
                  {t("row3_item_d4")}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row
          className="spon_mob_1"
          style={{ padding: "20px", marginBottom: "30px" }}
        >
          <Col
            xs={24}
            sm={24}
            md={12}
            className="pad-mob"
            style={{ marginTop: "60px" }}
          >
            <h3
              className="h-mob"
              style={{ color: "#FFCC00", textAlign: "left" }}
            >
              {t("row4_h4")}{" "}
            </h3>

            <p style={{ color: "white" }}>
              <Image src={rect} />
              {t('row4_item_1')}
            </p>
            <p style={{ color: "white" }}>
              <Image src={rect} /> 
              {t('row4_item_2')}
            </p>

            <p style={{ color: "white" }}>
              <Image src={rect} /> 
              {t('row4_item_3')}
              DAO;
            </p>
            <p style={{ color: "white" }}>
              <Image src={rect} /> 
              {t('row4_item_4')}
            </p>

            <p style={{ color: "white" }}>
              <Image src={rect} /> 
              {t('row4_item_5')}
            </p>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            className="pad-mob"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Image src={image3} preview={false} />
          </Col>
        </Row>

        <Row style={{ padding: "20px", marginBottom: "30px" }}>
          <Col xs={24} sm={24} md={12} className="pad-mob">
            <Image src={image4} preview={false} />
          </Col>

          <Col
            xs={24}
            sm={24}
            md={12}
            className="pad-mob"
            style={{ marginTop: "60px" }}
          >
            <h3
              className="h-mob"
              style={{ color: "#FFCC00", textAlign: "left" }}
            >
              {t("row_h5")}
            </h3>

            <p style={{ color: "white" }}>
              <Image src={rect} />
              {t('row5_item_1')}
            </p>
            <p style={{ color: "white" }}>
              <Image src={rect} /> 
              {t('row5_item_2')}
            </p>
          </Col>
        </Row>

        <div></div>
      </div>
      <AppFooter />
    </div>
  );
};

export default MainBody;
