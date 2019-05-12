import React, { Component } from "react";

import { Row, Col } from "antd";
import "antd/dist/antd.css";
import SingleEffect from "../SingleEffect/SingleEffect";

import {
  growBtn,
  growBtnStyle,
  growHtmlVariable,
  growCssVariable
} from "../../effects/GrowBtn";

export default class EffectBoard extends Component {
  render() {
    return (
      <>
        {/* Row 1 */}
        <Row type="flex" align="middle">
          <Col xs={0} sm={0} md={6} />
          <Col xs={24} sm={24} md={2} className="column-space">
            <SingleEffect
              cssVariable={growCssVariable}
              htmlVariable={growHtmlVariable}
              Style={growBtnStyle}
              Code={growBtn()}
              Title="Grow"
            />
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            asdf
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            asdf
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            asdf
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            asdf
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            asdf
          </Col>
          <Col xs={0} sm={0} md={6} />
        </Row>

        {/* Row 2 */}
        <Row style={{ marginTop: "50px", marginBottom: "20px" }}>
          <Col xs={0} sm={0} md={6} />
          <Col xs={24} sm={24} md={2} className="column-space">
            asdf
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            asdf
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            asdf
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            asdf
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            asdf
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            asdf
          </Col>
          <Col xs={0} sm={0} md={6} />
        </Row>
      </>
    );
  }
}
