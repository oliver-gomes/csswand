import React from "react";
import { css } from "emotion";

const spinner5 = () => {
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
          <span className="hl hl-value"> rgba(0, 0, 0, 0.4);</span>
          <br />
          <span className="hl hl-property"> border-radius:</span>
          <span className="hl hl-value"> 50%;</span>
          <br />
          <span className="hl hl-property">border-top: </span>
          <span className="hl hl-value"> 2px solid #1D9AF2;</span>
          <br />
          <span className="hl hl-property"> border-right:</span>
          <span className="hl hl-value"> 2px solid transparent;</span>
          <br />
          <span className="hl hl-property">border-bottom:</span>
          <span className="hl hl-value">none;</span>
          <br />
          <span className="hl hl-property">border-left:</span>
          <span className="hl hl-value">none;</span>
          <br />
          <span className="hl hl-property">animation: </span>
          <span className="hl hl-value">spinner5 700ms linear infinite;</span>
          <br />
          <span className="hl-bracket">{`}`}</span> <br />
        </div>
        <span className="hl-attribute">{`@keyframes spinner5 `}</span>
        <span className="hl-bracket">{`{`}</span> <br />
        <div style={{ marginLeft: "20px" }}>
          <span className="hl hl-property"> to </span>
          <span className="hl-bracket">{`{`}</span> <br />
          <div style={{ marginLeft: "20px" }}>
            <span className="hl hl-value">transform: rotate(360deg);</span>
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

const spinner5Style = css`
height: 40px;
width: 40px;
background: rgba(0, 0, 0, .4);
border-top: 2px solid #1D9AF2;
border-radius: 50%;
border-left:none;
border-bottom:none;
border-right: 2px solid transparent;
animation: spinner5 700ms linear infinite;
}
@keyframes spinner5 {
	to {
		transform: rotate(360deg);
	}
}
`;

const spinner5HtmlVariable = `<button></button>`;

const spinner5CssVariable = `
button {
  height: 40px;
  width: 40px;
  background: rgba(0, 0, 0, .4);
  border-radius: 50%;
  border-top: 2px solid #1D9AF2;
  border-right: 2px solid transparent;
  border-bottom:none;
  border-left:none;
  animation: spinner5 700ms linear infinite;
}

@keyframes spinner5 {
    to {
      transform: rotate(360deg);
    }
}
`;

export { spinner5, spinner5Style, spinner5HtmlVariable, spinner5CssVariable };
