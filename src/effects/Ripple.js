import React from "react";
import { css } from "emotion";

const ripple = () => {
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
        <span>{`Ripple`}</span>
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
          <span className="hl hl-value"> 15px 18px 30px 15px</span>
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
          <span className="hl hl-property"> box-shadow:</span>
          <span className="hl hl-value"> 0 0 4px #999;</span>
          <br />
          <span className="hl hl-property"> background-position:</span>
          <span className="hl hl-value"> center;</span>
          <br />
          <span className="hl hl-property"> transition:</span>
          <span className="hl hl-value"> background 0.8s;</span>
          <br />
        </div>
        <span className="hl-bracket">{`}`}</span>
        <br />
        <span className="hl-attribute">{`button:hover `}</span>
        <span className="hl-bracket">{`{`}</span> <br />
        <div style={{ marginLeft: "20px" }}>
          <span className="hl hl-property"> background:</span>
          <span className="hl hl-value">
            #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)
            center/15000%;
          </span>
          <br />
          <span className="hl hl-property"> color: </span>
          <span className="hl hl-value">white;</span>
        </div>
        <span className="hl-bracket">{`}`}</span>
        <br />
        <span className="hl-attribute">{`button:active`}</span>
        <span className="hl-bracket">{`{`}</span> <br />
        <div style={{ marginLeft: "20px" }}>
          <span className="hl hl-property"> background-color:</span>
          <span className="hl hl-value">#292d3e;</span>
          <br />
          <span className="hl hl-property"> background-size: </span>
          <span className="hl hl-value"> 100%;</span>
          <br />
          <span className="hl hl-property"> transition:</span>
          <span className="hl hl-value"> background 0s;</span>
        </div>
        <span className="hl-bracket">{`}`}</span>
      </div>
    </div>
  );
};

const rippleStyle = css`
  padding: 15px 18px 30px 15px;
  box-shadow: 0 0 4px #999;
  outline: none;
  background-position: center;
  transition: background 0.8s;

  &:hover {
    background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)
      center/15000%;
    color: white;
  }
  &:active {
    background-color: #292d3e;
    background-size: 100%;
    transition: background 0s;
  }
`;

const rippleHtmlVariable = `<button>Ripple</button>`;

const rippleCssVariable = `
 button {
  color: #1D9AF2;
  background-color: #292D3E;
  border: 1px solid #1D9AF2;
  border-radius: 4px;
  padding: 15px 18px 30px 15px;
  cursor: pointer;
  height: 32px;
  font-size: 14px;

  box-shadow: 0 0 4px #999;
  outline: none;
  background-position: center;
  transition: background 0.8s;
}
button:hover{
  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)
   center/15000%;
  color: white;
}

button:active{
  background-color: #292d3e;
  background-size: 100%;
  transition: background 0s;
}
`;
export { ripple, rippleStyle, rippleHtmlVariable, rippleCssVariable };
