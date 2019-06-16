import React from "react";
import { css } from "emotion";

const pressDown = () => {
  return (
    <div className="hl">
      <p style={{ color: "#fff", fontSize: "26px;" }}>HTML </p>
      <div
        style={{
          backgroundColor: "rgb(12, 17, 39)",
          padding: "10px",
          borderRadius: "10px"
        }}
      >
        <span className="hl-bracket">{`<`}</span>
        <span className="hl-attribute">{`button`}</span>
        <span className="hl-bracket">{`>`}</span>
        <span>{`Rotate`}</span>
        <span className="hl-bracket">{`<`}</span>
        <span className="hl-bracket">{`/`}</span>
        <span className="hl-attribute">{`button `}</span>
        <span className="hl-bracket">{`>`}</span>
      </div>
      <br />
      <br />
      <p style={{ color: "#fff", fontSize: "26px;" }}>CSS</p>
      <div
        style={{
          backgroundColor: "rgb(12, 17, 39)",
          padding: "10px",
          borderRadius: "10px"
        }}
      >
        <span className="hl-attribute">{`button `}</span>
        <span className="hl-bracket">{`{`}</span> <br />
        <div style={{ marginLeft: "20px" }}>
          <span className="hl hl-property"> color:</span>
          <span className="hl hl-value"> #1D9AF2;</span>
          <br />
          <span className="hl hl-property"> background-color:</span>
          <span className="hl hl-value"> #292D3E;</span>
          <br />
          <span className="hl hl-property">border: </span>
          <span className="hl hl-value"> 1px solid #1D9AF2;</span>
          <br />
          <span className="hl hl-property"> border-radius:</span>
          <span className="hl hl-value"> 4px;</span>
          <br />
          <span className="hl hl-property">padding: </span>
          <span className="hl hl-value"> 0 15px;</span>
          <br />
          <span className="hl hl-property">cursor:</span>
          <span className="hl hl-value"> pointer;</span>
          <br />
          <span className="hl hl-property">height:</span>
          <span className="hl hl-value">32px;</span>
          <br />
          <span className="hl hl-property">font-size:</span>
          <span className="hl hl-value">14px;</span>
          <br />

          <span className="hl hl-property"> background-position:</span>
          <span className="hl hl-value"> center;</span>
          <br />
          <span className="hl hl-property"> transition:</span>
          <span className="hl hl-value"> background 0.8s;</span>
          <br />
        </div>
        <span className="hl-bracket">{`}`}</span>
        <br />
        <span className="hl-attribute">{`button:active `}</span>
        <span className="hl-bracket">{`{`}</span> <br />
        <div style={{ marginLeft: "20px" }}>
          <span className="hl hl-property"> box-shadow:</span>
          <span className="hl hl-value"> 0 3px 0 #00823f;</span>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <span className="hl hl-property">top:</span>
          <span className="hl hl-value"> 3px;</span>
        </div>
        <span className="hl-bracket">{`}`}</span>
      </div>
    </div>
  );
};

const pressDownStyle = css`
  &:active {
    box-shadow: 0 3px 0 #1d9af2 !important;
    top: 3px;
  }
`;

const pressDownHtmlVariable = `<button>Press Down</button>`;

const pressDownCssVariable = `
 button {
  display: inline-block;
  position: relative;
  color: #1D9AF2;
  background-color: #292D3E;
  border: 1px solid #1D9AF2;
  border-radius: 4px;
  padding: 0 15px;
  cursor: pointer;
  height: 32px;
  font-size: 14px;

}
button:active {
  box-shadow: 0 3px 0 #1D9AF2;
  top: 3px;
}
`;
export {
  pressDown,
  pressDownStyle,
  pressDownHtmlVariable,
  pressDownCssVariable
};
