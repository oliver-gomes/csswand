import React from "react";

import { Row, Col, Icon } from "antd";
import logo from "../../logo.svg";
import { css } from "emotion";

import "antd/dist/antd.css";
import cssWand from "../../css-wand.png";

import { TwitterShareButton } from "react-twitter-embed";

const Header = () => {
  return (
    <div>
      <Row
        type="flex"
        align="middle"
        style={{ padding: "100px 0px", paddingBottom: "100px" }}
      >
        <Col xs={24} md={12}>
          <img src={cssWand} height="100" alt="logo" />
        </Col>
        <Col xs={24} md={12}>
          <Row type="flex" align="middle">
            <Col md={10} />
            <Col
              xs={24}
              md={2}
              className={css`
                @media (max-width: 768px) {
                   {
                    margin-top: 20px;
                    margin-bottom: 10px;
                  }
                }
              `}
            >
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
            <Col xs={24} md={2}>
              <TwitterShareButton
                url={"https://github.com/oliver-gomes"}
                options={{ text: "#reactjs is awesome" }}
              />
            </Col>
            <Col md={10} />
          </Row>
        </Col>
      </Row>
      <Row style={{ padding: "2px 0px", paddingBottom: "100px" }}>
        <Col
          className={css`
            /* font-weight: bold; */
            font-size: 18px;
            letter-spacing: 2px;
          `}
        >
          Welcome to awesome CSSWAND!
        </Col>
      </Row>
    </div>
  );
};

export default Header;
