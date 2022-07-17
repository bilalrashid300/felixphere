import React, { useState } from "react";

import { Anchor, Drawer, Button, Image, Select } from "antd";

import { MenuOutlined } from "@ant-design/icons";

import sed from "../assets/logo.png";
import Timer from "./timer";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const { Option } = Select;

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const { t } = useTranslation();
  const [selected, setSelected] = useState("en");

  const handleLocaleChange = (lang) => {
    setSelected(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div
      className="head-mob"
      style={{
        background: "black",
        width: "100%",
        paddingLeft: "100px",
        paddingRight: "100px",
      }}
    >
      <div className="header">
        <div className="logo" style={{ zIndex: 99 }}>
          <Image src={sed} preview={false} />
        </div>

        <div>
          <Timer />
        </div>
        <div className="mobileHidden" style={{ zIndex: 99, color: "white" }}>
          <Anchor targetOffset="65">
            <Link href="/" title={t("nav_home")} />
            <Link href="/faq" title={t("nav_faqs")} />
            <Link href="/tokenomics" title={t("nav_tokenomics")} />

            <Select
              defaultValue={selected}
              onChange={handleLocaleChange}
              style={{
                padding: "10px",
              }}
            >
              <Option value="en">{t("lang_english")}</Option>
              <Option value="de">{t("lang_german")}</Option>
              <Option value="fr">{t("lang_french")}</Option>
              <Option value="tr">{t("lang_turkish")}</Option>
              <Option value="es">{t("lang_spanish")}</Option>
            </Select>
          </Anchor>
        </div>

        <div className="mobileVisible" style={{ zIndex: 99 }}>
          <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer
            placement="right"
            closable={true}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="/" title={t("nav_home")} />
              <span className="ant-drawer-header ant-drawer-header-close-only"></span>
              <Link href="/faq" title={t("nav_faqs")} />
              <Link href="/tokenomics" title={t("nav_tokenomics")} />

              <Select
                defaultValue={selected}
                onChange={handleLocaleChange}
                style={{
                  padding: "10px",
                  marginLeft: "20px",
                }}
              >
                <Option value="en">{t("lang_english")}</Option>
                <Option value="de">{t("lang_german")}</Option>
                <Option value="fr">{t("lang_french")}</Option>
                <Option value="tr">{t("lang_turkish")}</Option>
                <Option value="es">{t("lang_spanish")}</Option>
              </Select>
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
