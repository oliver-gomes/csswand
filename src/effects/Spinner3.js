import React from "react";
import { css } from "emotion";

const spinner3 = () => {
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
          <span className="hl hl-property"> height:</span>
          <span className="hl hl-value"> 40px;</span>
          <br />
          <span className="hl hl-property"> width:</span>
          <span className="hl hl-value"> 40px;</span>
          <br />
          <span className="hl hl-property">background: </span>
          <span className="hl hl-value"> rgba(0, 0, 0, 0.2);</span>
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
          <span className="hl hl-property"> border-bottom-color:</span>
          <span className="hl hl-value"> #fff;</span>
          <br />
          <span className="hl hl-property">animation: </span>
          <span className="hl hl-value">spinner3 800ms ease infinite;</span>
          <br />
          <span className="hl-bracket">{`}`}</span> <br />
        </div>
        <span className="hl-attribute">{`@keyframes spinner3 `}</span>
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

const spinner3Style = css`
  height: 40px;
  width: 40px;
  background: rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  border-bottom-color: #fff;
  border-top-color: #fff;
  animation: spinner3 800ms ease infinite;
}
@keyframes spinner3 {
	to {
		transform: rotate(360deg);
	}
 }
`;

const spinner3HtmlVariable = `<button></button>`;

const spinner3CssVariable = `
button {
  height: 40px;
  width: 40px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.4);
  border-top-color: #fff;
  border-bottom-color: #fff;
  animation: spinner3 800ms ease infinite;
}

@keyframes spinner3 {
    to {
      transform: rotate(360deg);
    }
}
`;

export { spinner3, spinner3Style, spinner3HtmlVariable, spinner3CssVariable };
