import React from "react";
import { css } from "emotion";

const input1 = () => {
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
        <span className="hl-attribute">{`div`}</span>
        <span
          style={{ marginLeft: "10px" }}
          className="hl-class"
        >{`class=`}</span>
        <span className="hl-property">{`"input-container"`}</span>
        <span className="hl-bracket">{`/`}</span>
        <span className="hl-bracket">{`>`}</span>

        <br />

        <div style={{ marginLeft: "20px" }}>
          <span className="hl-bracket">{`<`}</span>
          <span className="hl-attribute">{`input `}</span>
          <span className="hl-class">{`class=`}</span>
          <span className="hl-property">{`"effect-1" `}</span>
          <span className="hl-class">{`type=`}</span>
          <span className="hl-property">{`"text"`}</span>
          <span
            style={{ marginLeft: "10px" }}
            className="hl-class"
          >{` placeholder=`}</span>
          <span className="hl-property">{`"Placeholder here"`}</span>
          <span className="hl-bracket">{`/`}</span>
          <span className="hl-bracket">{`>`}</span>
          <br />
          <span className="hl-bracket">{`<`}</span>
          <span className="hl-attribute">{`span `}</span>
          <span className="hl-class">{`class=`}</span>
          <span className="hl-property">{`"focus-border"`}</span>
          <span className="hl-bracket">{`>`}</span>

          <span className="hl-bracket">{`<`}</span>
          <span className="hl-bracket">{`/`}</span>
          <span className="hl-attribute">{`span`}</span>
          <span className="hl-bracket">{`>`}</span>
        </div>
        <span className="hl-bracket">{`<`}</span>
        <span className="hl-bracket">{`/`}</span>
        <span className="hl-attribute">{`div`}</span>
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
        {/* focus start */}
        <span className="hl-attribute">{`:focus`}</span>
        <span className="hl-bracket">{`{`}</span> <br />
        <div style={{ marginLeft: "20px" }}>
          <span className="hl hl-property"> outline:</span>
          <span className="hl hl-value"> none;</span>
        </div>
        <span className="hl-bracket">{`}`}</span>
        {/* focus end */}
        <br />
        <span className="hl-attribute">{`.input-container`}</span>
        <span className="hl-bracket">{`{`}</span> <br />
        <div style={{ marginLeft: "20px" }}>
          <span className="hl hl-property"> float: </span>
          <span className="hl hl-value">left;</span>
          <br />
          <span className="hl hl-property"> width:</span>
          <span className="hl hl-value"> 27.33%;</span>
          <br />
          <span className="hl hl-property"> margin: </span>
          <span className="hl hl-value"> 42px 3%;</span>
          <br />
          <span className="hl hl-property"> position:</span>
          <span className="hl hl-value"> relative;</span>
        </div>
        <span className="hl-bracket">{`}`}</span>
        {/* focus start */}
        <br />
        <span className="hl-attribute">{`input[type="text"]`}</span>
        <span className="hl-bracket">{`{`}</span> <br />
        <div style={{ marginLeft: "20px" }}>
          <span className="hl hl-property"> color: </span>
          <span className="hl hl-value"> #1d9af2;</span>
          <br />
          <span className="hl hl-property"> width: </span>
          <span className="hl hl-value"> 70%;</span>
          <br />
          <span className="hl hl-property"> box-sizing: </span>
          <span className="hl hl-value"> border-box;</span>
          <br />
          <span className="hl hl-property"> letter-spacing: </span>
          <span className="hl hl-value"> 1px;</span>
          <br />
          <span className="hl hl-property"> background-color: </span>
          <span className="hl hl-value">rgb(19, 23, 44);</span>
          <br />
          <span className="hl hl-property"> border: </span>
          <span className="hl hl-value">none;</span>
        </div>
        <span className="hl-bracket">{`}`}</span>
        {/* focus end */}
        <br />
        {/* focus start */}
        <span className="hl-attribute">{`.effect-1~.focus-border`}</span>
        <span className="hl-bracket">{`{`}</span> <br />
        <div style={{ marginLeft: "20px" }}>
          <span className="hl hl-property"> position: </span>
          <span className="hl hl-value"> absolute;</span>
          <br />
          <span className="hl hl-property"> bottom: </span>
          <span className="hl hl-value">0;</span>
          <br />
          <span className="hl hl-property"> left: </span>
          <span className="hl hl-value">0;</span>
          <br />
          <span className="hl hl-property"> width: </span>
          <span className="hl hl-value"> 0;</span>
          <br />
          <span className="hl hl-property"> height: </span>
          <span className="hl hl-value"> 2px;</span>
          <br />
          <span className="hl hl-property"> background-color: </span>
          <span className="hl hl-value"> #3399FF;</span>
          <br />
          <span className="hl hl-property"> transition: </span>
          <span className="hl hl-value"> 0.4s;</span>
        </div>
        <span className="hl-bracket">{`}`}</span>
        {/* focus end */}
        <br />
        {/* focus start */}
        <span className="hl-attribute">{`.effect-1:focus~.focus-border `}</span>
        <span className="hl-bracket">{`{`}</span> <br />
        <div style={{ marginLeft: "20px" }}>
          <span className="hl hl-property"> width: </span>
          <span className="hl hl-value"> 70%;</span>
          <br />
          <span className="hl hl-property"> transition: </span>
          <span className="hl hl-value"> 0.4s;</span>
        </div>
        <span className="hl-bracket">{`}`}</span>
        {/* focus end */}
      </div>
    </div>
  );
};

const input1HtmlVariable = `
<div class="input-container">
  <input class="effect-1" type="text" placeholder="Placeholder here">
  <span class="focus-border"></span>
</div>`;

const input1CssVariable = `
:focus{outline: none;}

.input-container{float: left; width: 27.33%; margin: 42px 3%; position: relative;} 

input[type="text"] {
  font: 15px/24px "Lato", Arial, sans-serif;
  color: #1d9af2;
  width: 70%;
  box-sizing: border-box;
  letter-spacing: 1px;
  background-color: rgb(19, 23, 44);
  border: none;
}

.effect-1~.focus-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #3399FF;
  transition: 0.4s;
}

.effect-1:focus~.focus-border {
  width: 70%;
  transition: 0.4s;
}
`;
export { input1, input1HtmlVariable, input1CssVariable };
