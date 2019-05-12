import React from "react";

import { css } from "emotion";

const growBtn = () => {
  return (
    <div className="hl">
      <p style={{ color: "#fff", fontSize: "26px;" }}>HTML </p>
      <div style={{ backgroundColor: "#262A39" }}>
        <span className="hl-bracket">{`<`}</span>
        <span className="hl-attribute">{`button`}</span>
        <span className="hl-bracket">{`>`}</span>
        <span>{`Grow`}</span>
        <span className="hl-bracket">{`<`}</span>
        <span className="hl-bracket">{`/`}</span>
        <span className="hl-attribute">{`button `}</span>
        <span className="hl-bracket">{`>`}</span>
      </div>
      <br />
      <br />
      <p style={{ color: "#fff", fontSize: "26px;" }}>CSS</p>
      <div style={{ backgroundColor: "#262A39" }}>
        <span className="hl-attribute">{`button `}</span>
        <span className="hl-bracket">{`{`}</span> <br />
        <div style={{ marginLeft: "20px" }}>
          <span className="hl hl-property"> color:</span>
          <span className="hl hl-value"> #1D9AF2;</span>
          <br />
          <span className="hl hl-property"> background-color:</span>
          <span className="hl hl-value"> #292D3E;</span>
          <br />
          <span className="hl hl-property">border-color:</span>
          <span className="hl hl-value"> #1D9AF2;</span>
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
          <span className="hl hl-property">border: </span>
          <span className="hl hl-value"> 1px solid transparent;</span>
          <br />
          <span className="hl hl-property"> transition:</span>
          <span className="hl hl-value"> all 0.2s ease-in-out;</span>
          <br />
          <span className="hl hl-property">{`&:hover`} </span>
          <span style={{ color: "#ae81ff" }}>{`{`}</span> <br />
          <span className="hl hl-property"> {`transform:`}</span>
          <span className="hl hl-value"> scale(1.1);</span>
          <br />
          <span style={{ color: "#ae81ff" }}>{`}`}</span>
          <br />
        </div>
        <span className="hl-bracket">{`}`}</span>
      </div>
    </div>
  );
};

const growBtnStyle = css`
  transition: all 0.2s ease-in-out !important;
  &:hover {
    transform: scale(1.1) !important;
  }
`;

const growHtmlVariable = `<button>Grow</button>`;

const growCssVariable = `
button {
  border: 1px solid transparent;
  cursor: pointer;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  background-color: #292D3E;
  border-color: #1D9AF2;
  color: #1D9AF2;
  transition: all 0.2s ease-in-out;
}
button:hover {
  transform: scale(1.1);
}
`;

export { growBtn, growBtnStyle, growHtmlVariable, growCssVariable };
