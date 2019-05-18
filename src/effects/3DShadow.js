import React from "react";
import { css } from "emotion";

const tdshadow = () => {
  return (
    <div className="hl">
      <p style={{ color: "#fff", fontSize: "26px;" }}>HTML </p>
      <div style={{ backgroundColor: "#262A39" }}>
        <span className="hl-bracket">{`<`}</span>
        <span className="hl-attribute">{`button`}</span>
        <span className="hl-bracket">{`>`}</span>
        <span>{`Shadow`}</span>
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
          <span className="hl hl-property"> box-shadow: </span>
          <span className="hl hl-value">
            1px 1px #53a7ea, 2px 2px #53a7ea, 3px 3px #53a7ea;
          </span>
          <br />
          <span className="hl hl-property">transform: </span>
          <span className="hl hl-value">translateX(-3px);</span>
        </div>
        <span className="hl-bracket">{`}`}</span>
      </div>
    </div>
  );
};

const tdshadowStyle = css`
  transition: all 0.2s ease-in-out !important;

  &:hover {
    box-shadow: 1px 1px #53a7ea, 2px 2px #53a7ea, 3px 3px #53a7ea;
    transform: translateX(-3px);
  }
`;

const tdshadowHtmlVariable = `<button>Shadow</button >`;

const tdshadowCssVariable = `
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
  box-shadow: 1px 1px #53a7ea, 2px 2px #53a7ea, 3px 3px #53a7ea;
  transform: translateX(-3px);
}
`;

export { tdshadow, tdshadowStyle, tdshadowHtmlVariable, tdshadowCssVariable };
