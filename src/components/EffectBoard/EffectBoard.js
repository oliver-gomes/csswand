import React, { Component } from "react";

import { Row, Col } from "antd";
import "antd/dist/antd.css";
import SingleEffect from "../SingleEffect/SingleEffect";
import "./EffectBoard.css";

import { css } from "emotion";
import { Radio } from "antd";

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
import {
  rotate,
  rotateStyle,
  rotateHtmlVariable,
  rotateCssVariable
} from "../../effects/Rotate30";
import {
  squarecircle,
  squarecircleStyle,
  squarecircleHtmlVariable,
  squarecircleCssVariable
} from "../../effects/SquaretoCircle";
import {
  tdshadow,
  tdshadowStyle,
  tdshadowHtmlVariable,
  tdshadowCssVariable
} from "../../effects/3DShadow";
import {
  swing,
  swingStyle,
  swingHtmlVariable,
  swingCssVariable
} from "../../effects/Swing";
import {
  spinner1,
  spinner1Style,
  spinner1HtmlVariable,
  spinner1CssVariable
} from "../../effects/Spinner1";
import {
  spinner2,
  spinner2Style,
  spinner2HtmlVariable,
  spinner2CssVariable
} from "../../effects/Spinner2";
import { spinner3, spinner3Style } from "../../effects/Spinner3";
import { spinner4, spinner4Style } from "../../effects/Spinner4";
import { spinner5, spinner5Style } from "../../effects/Spinner5";

const RadioGroup = Radio.Group;

export default class EffectBoard extends Component {
  state = {
    value: 1
  };
  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <>
        <Row
          type="flex"
          align="middle"
          className={css`
            margin-bottom: 50px;
          `}
        >
          <Col xs={24} sm={24} md={24}>
            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio
                value={1}
                className={css`
                  color: #fff;
                `}
              >
                All
              </Radio>
              <Radio
                value={2}
                className={css`
                  color: #fff;
                `}
              >
                Hover
              </Radio>
              <Radio
                value={3}
                className={css`
                  color: #fff;
                `}
              >
                Loading
              </Radio>
              {/* <Radio
                value={4}
                className={css`
                  color: #fff;
                `}
              >
                D
              </Radio> */}
            </RadioGroup>
          </Col>
        </Row>
        {/* Row 1 */}
        <Row
          type="flex"
          align="middle"
          className={
            this.state.value === 3
              ? css`
                  display: none;
                `
              : null
          }
        >
          <Col xs={0} sm={0} md={6} />
          <Col
            xs={24}
            sm={24}
            md={2}
            className={`column-space ${
              this.state.value === 3
                ? css`
                    display: none;
                  `
                : null
            }`}
          >
            <SingleEffect
              cssVariable={growCssVariable}
              htmlVariable={growHtmlVariable}
              Style={growBtnStyle}
              Code={growBtn()}
              Title="Grow"
              className={
                this.state.filter
                  ? css`
                      display: none;
                    `
                  : null
              }
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={2}
            className={`column-space ${
              this.state.value === 3
                ? css`
                    display: none;
                  `
                : null
            }`}
          >
            <SingleEffect
              cssVariable={shrinkCssVariable}
              htmlVariable={shrinkHtmlVariable}
              Style={shrinkStyle}
              Code={shrink()}
              Title="Shrink"
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={2}
            className={`column-space ${
              this.state.value === 3
                ? css`
                    display: none;
                  `
                : null
            }`}
          >
            <SingleEffect
              cssVariable={opacityCssVariable}
              htmlVariable={opacityHtmlVariable}
              Style={opacityStyle}
              Code={opacity()}
              Title="Opacity"
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={2}
            className={`column-space ${
              this.state.value === 3
                ? css`
                    display: none;
                  `
                : null
            }`}
          >
            <SingleEffect
              cssVariable={rotateCssVariable}
              htmlVariable={rotateHtmlVariable}
              Style={rotateStyle}
              Code={rotate()}
              Title="Rotate"
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={2}
            className={`column-space ${
              this.state.value === 3
                ? css`
                    display: none;
                  `
                : null
            }`}
          >
            <SingleEffect
              cssVariable={squarecircleCssVariable}
              htmlVariable={squarecircleHtmlVariable}
              Style={squarecircleStyle}
              Code={squarecircle()}
              className="squaretocircle"
              Title="Square to Circle"
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={2}
            className={`column-space ${
              this.state.value === 3
                ? css`
                    display: none;
                  `
                : null
            }`}
          >
            <SingleEffect
              cssVariable={tdshadowCssVariable}
              htmlVariable={tdshadowHtmlVariable}
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
          <Col
            xs={24}
            sm={24}
            md={2}
            className={`column-space ${
              this.state.value === 3
                ? css`
                    display: none;
                  `
                : null
            }`}
          >
            <SingleEffect
              cssVariable={swingCssVariable}
              htmlVariable={swingHtmlVariable}
              Style={swingStyle}
              Code={swing()}
              Title="Swing"
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={2}
            className={`column-space ${
              this.state.value === 2
                ? css`
                    display: none;
                  `
                : null
            }`}
          >
            <SingleEffect
              cssVariable={spinner1CssVariable}
              htmlVariable={spinner1HtmlVariable}
              Style={spinner1Style}
              Code={spinner1()}
              Title="Spinner"
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={2}
            className={`column-space ${
              this.state.value === 2
                ? css`
                    display: none;
                  `
                : null
            }`}
          >
            <SingleEffect
              cssVariable={spinner2CssVariable}
              htmlVariable={spinner2HtmlVariable}
              Style={spinner2Style}
              Code={spinner2()}
              Title="Spinner"
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={2}
            className={`column-space ${
              this.state.value === 2
                ? css`
                    display: none;
                  `
                : null
            }`}
          >
            <SingleEffect Style={spinner3Style} Code={spinner3()} />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={2}
            className={`column-space ${
              this.state.value === 2
                ? css`
                    display: none;
                  `
                : css`
                    display: inline-block;
                  `
            }`}
          >
            <SingleEffect Style={spinner4Style} Code={spinner4()} />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={2}
            className={`column-space ${
              this.state.value === 2
                ? css`
                    display: none;
                  `
                : null
            }`}
          >
            <SingleEffect Style={spinner5Style} Code={spinner5()} />
          </Col>
          <Col xs={0} sm={0} md={6} />
        </Row>
      </>
    );
  }
}
