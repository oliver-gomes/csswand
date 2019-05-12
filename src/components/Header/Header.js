import React from "react";
import { Row, Col, Icon } from "antd";
import logo from "../../logo.svg";

import { css } from "emotion";

import "antd/dist/antd.css";
const Header = () => {
  return (
    <div>
      <Row
        type="flex"
        align="middle"
        style={{ padding: "100px 0px", paddingBottom: "200px" }}
      >
        <Col md={12}>
          <img src={logo} height="100" />
        </Col>
        <Col md={12}>
          <a
            href="https://github.com/ant-design/ant-design"
            className={css`
              color: #fff;
              opacity: 0.8;
              transition: all 0.2s ease-in-out !important;
              &:hover {
                opacity: 1;
                color: #fff;
              }
            `}
          >
            <Icon type="github" style={{ fontSize: "28px" }} />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
