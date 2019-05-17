import React from "react";
import { css } from "emotion";

const spinner1 = () => {
  return (
    <div className="hl">
      <p style={{ color: "#fff", fontSize: "26px;" }}>HTML </p>
      <div style={{ backgroundColor: "#262A39" }}>
        <span className="hl-bracket">{`<`}</span>
        <span className="hl-attribute">{`button`}</span>
        <span className="hl-bracket">{`>`}</span>

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
          <span className="hl hl-property"> height:</span>
          <span className="hl hl-value"> 40px;</span>
          <br />
          <span className="hl hl-property"> width:</span>
          <span className="hl hl-value"> 40px;</span>
          <br />
          <span className="hl hl-property">background: </span>
          <span className="hl hl-value"> #151825;</span>
          <br />
          <span className="hl hl-property"> border-radius:</span>
          <span className="hl hl-value"> 50%;</span>
          <br />
          <span className="hl hl-property">border: </span>
          <span className="hl hl-value"> 1px solid #1D9AF2;</span>
          <br />
          <span className="hl hl-property">border-top:</span>
          <span className="hl hl-value"> 2px solid #fff;</span>
          <br />
          <span className="hl hl-property">animation: </span>
          <span className="hl hl-value">spinner1 600ms linear infinite;</span>
          <br />
          <span className="hl-bracket">{`}`}</span> <br />
        </div>
        <span className="hl-attribute">{`@keyframes spinner1 `}</span>
        <span className="hl-bracket">{`{`}</span> <br />
        <div style={{ marginLeft: "20px" }}>
          <span className="hl hl-property"> to </span>
          <span className="hl-bracket">{`{`}</span> <br />
          <div style={{ marginLeft: "20px" }}>
            <span className="hl hl-value"> transform: rotate(360deg);</span>
          </div>
          <span
            className="hl-bracket"
            style={{ marginLeft: "8px" }}
          >{`}`}</span>{" "}
          <br />
          <span className="hl-bracket">{`}`}</span> <br />
        </div>
      </div>
    </div>
  );
};

const spinner1Style = css`
  height: 40px;
  width: 40px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border-top: 2px solid #fff;
  animation: spinner1 600ms linear infinite;
  @keyframes spinner1 {
    to {
      transform: rotate(360deg);
    }
  }
`;

const spinner1CssVariable = `
button {
  height: 40px;
  width: 40px;
  background: #151825;
  border-radius: 50%;
   border: 1px solid #1D9AF2;
  border-top: 2px solid #fff;
  animation: spinner1 600ms linear infinite;
}

@keyframes spinner1 {
    to {
      transform: rotate(360deg);
    }
}
`;

const spinner1HtmlVariable = `
<button></button>
`;
export { spinner1, spinner1Style, spinner1CssVariable, spinner1HtmlVariable };
