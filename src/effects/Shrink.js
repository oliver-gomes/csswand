import React from "react";
import { css, cx } from "emotion";

const shrink = () => {
  return (
    <div className="hl">
      <p style={{ color: "#fff", fontSize: "26px;" }}>HTML </p>
      <div style={{ backgroundColor: "#262A39" }}>
        <span className="hl-bracket">{`<`}</span>
        <span className="hl-attribute">{`button`}</span>
        <span className="hl-bracket">{`>`}</span>
        <span>{`Shrink`}</span>
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
          <span className="hl hl-property"> transition:</span>
          <span className="hl hl-value"> all 0.2s ease-in-out;</span>
          <br />
          <span className="hl hl-property">{`&:hover`} </span>
          <span style={{ color: "#ae81ff" }}>{`{`}</span> <br />
          <span className="hl hl-property"> {`transform:`}</span>
          <span className="hl hl-value"> scale(0.8);</span>
          <br />
          <span style={{ color: "#ae81ff" }}>{`}`}</span>
          <br />
        </div>
        <span className="hl-bracket">{`}`}</span>
      </div>
    </div>
  );
};

const shrinkStyle = css`
  transition: all 0.2s ease-in-out !important;
  &:hover {
    transform: scale(0.8);
  }
`;

const shrinkHtmlVariable = `<button>Shrink</button>`;

const shrinkCssVariable = `
 button {
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(0.8);
  }
}
`;

export { shrink, shrinkStyle, shrinkHtmlVariable, shrinkCssVariable };
