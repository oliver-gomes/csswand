import React, { Component } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
export default class EffectBoard extends Component {
  render() {
    return (
      <>
        <Row>
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
