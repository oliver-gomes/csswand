import React from "react";
import { css, cx } from "emotion";

const squarecircle = () => {
  return (
    <div className="hl">
      <p style={{ color: "#fff", fontSize: "26px;" }}>HTML </p>
      <div style={{ backgroundColor: "#262A39" }}>
        <span className="hl-bracket">{`<`}</span>
        <span className="hl-attribute">{`button`}</span>
        <span className="hl-bracket">{`>`}</span>
        <span>{`Square to Circle`}</span>
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
          <span className="hl hl-property"> transition:</span>
          <span className="hl hl-value"> all 0.2s ease-in-out;</span>
          <br />
        </div>
        <span className="hl-bracket">{`}`}</span>
        <br />
        <span className="hl-attribute">{`button:hover `}</span>
        <span className="hl-bracket">{`{`}</span> <br />
        <div style={{ marginLeft: "20px" }}>
          <span className="hl hl-property"> border-radius:</span>
          <span className="hl hl-value"> 50%;</span>
        </div>
        <span className="hl-bracket">{`}`}</span>
      </div>
    </div>
  );
};

const squarecircleStyle = css`
  transition: all 0.2s ease-in-out !important;
  &:hover {
    border-radius: 50%;
  }
`;

const squarecircleHtmlVariable = `<button>Square to Circle</button>`;

const squarecircleCssVariable = `
button {
   color: #1D9AF2;
   background-color: #292D3E;
   border: 1px solid #1D9AF2;
   border-radius: 4px;
   padding: 0 15px;
   cursor: pointer;
   height: 32px;
   font-size: 14px;
   transition: all 0.2s ease-in-out;
}
button:hover {
  border-radius: 50%;
}
`;

export {
  squarecircle,
  squarecircleStyle,
  squarecircleHtmlVariable,
  squarecircleCssVariable
};
