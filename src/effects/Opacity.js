import React from "react";
import { css, cx } from "emotion";

const opacity = () => {
  return (
    <div className="hl">
      <p style={{ color: "#fff", fontSize: "26px;" }}>HTML </p>
      <div style={{ backgroundColor: "#262A39" }}>
        <span className="hl-bracket">{`<`}</span>
        <span className="hl-attribute">{`button`}</span>
        <span className="hl-bracket">{`>`}</span>
        <span>{`Opacity`}</span>
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
          <span className="hl hl-property"> opacity:</span>
          <span className="hl hl-value"> 0.5;</span>
          <br />
          <span className="hl hl-property">{`&:hover`} </span>
          <span style={{ color: "#ae81ff" }}>{`{`}</span> <br />
          <span className="hl hl-property"> {`opacity:`}</span>
          <span className="hl hl-value"> 1;</span>
          <br />
          <span style={{ color: "#ae81ff" }}>{`}`}</span>
          <br />
        </div>
        <span className="hl-bracket">{`}`}</span>
      </div>
    </div>
  );
};

const opacityStyle = css`
  transition: all 0.2s ease-in-out;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const opacityHtmlVariable = `<button>Opacity</button>`;

const opacityCssVariable = `
 button {
  transition: all 0.2s ease-in-out;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
}`;

export { opacity, opacityStyle, opacityHtmlVariable, opacityCssVariable };
