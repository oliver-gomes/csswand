import React from "react";
import { css } from "emotion";

const spinner2 = () => {
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
          <span className="hl hl-value"> 2px solid rgba(0, 0, 0, 0.4);</span>
          <br />
          <span className="hl hl-property"> border-top-color:</span>
          <span className="hl hl-value"> #fff;</span>
          <br />
          <span className="hl hl-property">animation: </span>
          <span className="hl hl-value">spinner1 600ms linear infinite;</span>
          <br />
          <span className="hl-bracket">{`}`}</span> <br />
        </div>
        <span className="hl-attribute">{`@keyframes spinner2 `}</span>
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

const spinner2Style = css`
  height: 40px;
  width: 40px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.4);
  border-top-color: #fff;
  animation: spinner2 600ms linear infinite;
}
@keyframes spinner2 {
  to {
      transform: rotate(360deg);
  }
}
`;

const spinner2HtmlVariable = `<button></button>`;

const spinner2CssVariable = `
button {
  height: 40px;
  width: 40px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.4);
  border-top-color: #fff;
  animation: spinner2 600ms linear infinite;
}

@keyframes spinner2 {
    to {
      transform: rotate(360deg);
    }
}
`;
export { spinner2, spinner2Style, spinner2HtmlVariable, spinner2CssVariable };
