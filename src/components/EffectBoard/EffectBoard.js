import React, { Component } from "react";

import { Row, Col } from "antd";
import "antd/dist/antd.css";

export default class EffectBoard extends Component {
  render() {
    return (
      <>
        {/* Row 1 */}
        <Row type="flex" align="middle">
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
