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
import {
  shrink,
  shrinkStyle,
  shrinkHtmlVariable,
  shrinkCssVariable
} from "../../effects/Shrink";
import {
  opacity,
  opacityStyle,
  opacityHtmlVariable,
  opacityCssVariable
} from "../../effects/Opacity";
import { rotate, rotateStyle } from "../../effects/Rotate30";
import { squarecircle, squarecircleStyle } from "../../effects/SquaretoCircle";
import { tdshadow, tdshadowStyle } from "../../effects/3DShadow";
import { swing, swingStyle } from "../../effects/Swing";

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
            <SingleEffect
              cssVariable={shrinkCssVariable}
              htmlVariable={shrinkHtmlVariable}
              Style={shrinkStyle}
              Code={shrink()}
              Title="Shrink"
            />
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            <SingleEffect
              cssVariable={opacityCssVariable}
              htmlVariable={opacityHtmlVariable}
              Style={opacityStyle}
              Code={opacity()}
              Title="Opacity"
            />
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            <SingleEffect Style={rotateStyle} Code={rotate()} Title="Rotate" />
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            <SingleEffect
              Style={squarecircleStyle}
              Code={squarecircle()}
              Title="Square to Circle"
            />
          </Col>
          <Col xs={24} sm={24} md={2} className="column-space">
            <SingleEffect
              Style={tdshadowStyle}
              Code={tdshadow()}
              Title="Shadow"
            />
          </Col>
          <Col xs={0} sm={0} md={6} />
        </Row>

        {/* Row 2 */}
        <Row style={{ marginTop: "50px", marginBottom: "20px" }}>
          <Col xs={0} sm={0} md={6} />
          <Col xs={24} sm={24} md={2} className="column-space">
            <SingleEffect Style={swingStyle} Code={swing()} Title="Swing" />
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
