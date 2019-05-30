import React from "react";
import { css } from "emotion";

const spinner4 = () => {
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
          <span className="hl hl-value"> rgba(0, 0, 0, 0.8);</span>
          <br />
          <span className="hl hl-property"> border-radius:</span>
          <span className="hl hl-value"> 50%;</span>
          <br />
          <span className="hl hl-property">border: </span>
          <span className="hl hl-value"> 1px solid #1D9AF2;</span>
          <br />
          <span className="hl hl-property"> opacity:</span>
          <span className="hl hl-value"> 1;</span>
          <br />
          <span className="hl hl-property">animation: </span>
          <span className="hl hl-value">spinner4 800ms linear infinite;</span>
          <br />
          <span className="hl-bracket">{`}`}</span> <br />
        </div>
        <span className="hl-attribute">{`@keyframes spinner4 `}</span>
        <span className="hl-bracket">{`{`}</span> <br />
        <div style={{ marginLeft: "20px" }}>
          <span className="hl hl-property"> to </span>
          <span className="hl-bracket">{`{`}</span> <br />
          <div style={{ marginLeft: "20px" }}>
            <span className="hl hl-value"> transform: scale(1.5);</span>
            <br />
            <span className="hl hl-value"> opacity: 0;</span>
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

const spinner4Style = css`
height: 40px;
width: 40px;
transform: scale(0);
background: rgba(0, 0, 0, .8);
opacity: 1;
animation: spinner4 800ms linear infinite;
border-radius: 50%;
}
@keyframes spinner4 {
	to {
		transform: scale(1.5);
		opacity: 0;
	}
}
`;

const spinner4HtmlVariable = `<button></button>`;

const spinner4CssVariable = `
button {
  height: 40px;
  width: 40px;
  background: rgba(0, 0, 0, .8);
  border-radius: 50%;
  border: 1px solid #1D9AF2;
  opacity: 1;
  animation: spinner4 800ms linear infinite;
  transform: scale(0);
}

@keyframes spinner4 {
    to {
      transform: scale(1.5);
		  opacity: 0;
    }
}
`;

export { spinner4, spinner4Style, spinner4HtmlVariable, spinner4CssVariable };
