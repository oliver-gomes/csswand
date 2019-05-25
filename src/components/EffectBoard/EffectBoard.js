import React, { Component } from "react";

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
import {
  spinner3,
  spinner3Style,
  spinner3HtmlVariable,
  spinner3CssVariable
} from "../../effects/Spinner3";
import {
  spinner4,
  spinner4Style,
  spinner4HtmlVariable,
  spinner4CssVariable
} from "../../effects/Spinner4";
import {
  spinner5,
  spinner5Style,
  spinner5HtmlVariable,
  spinner5CssVariable
} from "../../effects/Spinner5";

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
        <div className="grid-radio">
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
        </div>
        {/* Row 1 */}
        <div className={`grid`}>
          <div
            className={`column-space ${
              this.state.value === 3
                ? css`
                    display: none !important;
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
                      display: none !important;
                    `
                  : null
              }
            />
          </div>
          <div
            className={`column-space ${
              this.state.value === 3
                ? css`
                    display: none !important;
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
          </div>
          <div
            className={`column-space ${
              this.state.value === 3
                ? css`
                    display: none !important;
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
          </div>
          <div
            className={`column-space ${
              this.state.value === 3
                ? css`
                    display: none !important;
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
          </div>
          <div
            className={`column-space ${
              this.state.value === 3
                ? css`
                    display: none !important;
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
              Title="Shape"
            />
          </div>
          <div
            className={`column-space ${
              this.state.value === 3
                ? css`
                    display: none !important;
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
          </div>

          {/* Row 2 */}
          {/* <div className="grid mt-5"> */}
          <div
            className={`column-space ${
              this.state.value === 3
                ? css`
                    display: none !important ;
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
          </div>
          <div
            className={`column-space ${
              this.state.value === 2
                ? css`
                    display: none !important;
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
          </div>
          <div
            className={`column-space ${
              this.state.value === 2
                ? css`
                    display: none !important;
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
          </div>
          <div
            className={`column-space ${
              this.state.value === 2
                ? css`
                    display: none !important;
                  `
                : null
            }`}
          >
            <SingleEffect
              cssVariable={spinner3CssVariable}
              htmlVariable={spinner3HtmlVariable}
              Style={spinner3Style}
              Code={spinner3()}
              Title="Spinner"
            />
          </div>
          <div
            className={`column-space ${
              this.state.value === 2
                ? css`
                    display: none !important;
                  `
                : css`
                    display: inline-block;
                  `
            }`}
          >
            <SingleEffect
              cssVariable={spinner4CssVariable}
              htmlVariable={spinner4HtmlVariable}
              Style={spinner4Style}
              Code={spinner4()}
              Title="Spinner"
            />
          </div>
          <div
            className={`column-space ${
              this.state.value === 2
                ? css`
                    display: none !important;
                  `
                : null
            }`}
          >
            <SingleEffect
              cssVariable={spinner5CssVariable}
              htmlVariable={spinner5HtmlVariable}
              Style={spinner5Style}
              Code={spinner5()}
              Title="Spinner"
            />
          </div>
        </div>
      </>
    );
  }
}
