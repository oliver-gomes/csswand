import React from "react";
import { css } from "emotion";

const swing = () => {
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
        <span>{`Square to Circle`}</span>
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
          <span className="hl hl-property"> animation: </span>
          <span className="hl hl-value"> swing 1s ease;</span>
          <br />
          <span className="hl hl-property"> animation-iteration-count:</span>
          <span className="hl hl-value"> 1;</span>
        </div>
        <span className="hl-bracket">{`}`}</span>
        <br />
        <span className="hl-attribute">{`@keyframes swing `}</span>
        <span className="hl-bracket">{`{`}</span> <br />
        <div style={{ marginLeft: "20px" }}>
          <span className="hl hl-property"> 15% </span>
          <span className="hl-bracket">{`{`}</span> <br />
          <div style={{ marginLeft: "20px" }}>
            <span className="hl hl-value"> transform: translateX(5px);</span>
          </div>
          <span className="hl-bracket">{`}`}</span> <br />
          <span className="hl hl-property">30% </span>
          <span className="hl-bracket">{`{`}</span> <br />
          <div style={{ marginLeft: "20px" }}>
            <span className="hl hl-value"> transform: translateX(-5px);</span>
          </div>
          <span className="hl-bracket">{`}`}</span> <br />
          <span className="hl hl-property">50% </span>
          <span className="hl-bracket">{`{`}</span> <br />
          <div style={{ marginLeft: "20px" }}>
            <span className="hl hl-value"> transform: translateX(3px);</span>
          </div>
          <span className="hl-bracket">{`}`}</span> <br />
          <span className="hl hl-property">65% </span>
          <span className="hl-bracket">{`{`}</span> <br />
          <div style={{ marginLeft: "20px" }}>
            <span className="hl hl-value">transform: translateX(-3px);</span>
          </div>
          <span className="hl-bracket">{`}`}</span> <br />
          <span className="hl hl-property">80% </span>
          <span className="hl-bracket">{`{`}</span> <br />
          <div style={{ marginLeft: "20px" }}>
            <span className="hl hl-value"> transform: translateX(2px);</span>
          </div>
          <span className="hl-bracket">{`}`}</span> <br />
          <span className="hl hl-property">100% </span>
          <span className="hl-bracket">{`{`}</span> <br />
          <div style={{ marginLeft: "20px" }}>
            <span className="hl hl-value"> transform: translateX(0);</span>
          </div>
          <span className="hl-bracket">{`}`}</span> <br />
        </div>
      </div>
    </div>
  );
};

const swingStyle = css`
  @keyframes swing {
    15% {
      -webkit-transform: translateX(5px);
      transform: translateX(5px);
    }
    30% {
      -webkit-transform: translateX(-5px);
      transform: translateX(-5px);
    }
    50% {
      -webkit-transform: translateX(3px);
      transform: translateX(3px);
    }
    65% {
      -webkit-transform: translateX(-3px);
      transform: translateX(-3px);
    }
    80% {
      -webkit-transform: translateX(2px);
      transform: translateX(2px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  transition: all 0.2s ease-in-out !important;

  &:hover {
    animation: swing 1s ease;
    animation-iteration-count: 1;
  }
`;

const swingHtmlVariable = `<button>Swing</button>`;

const swingCssVariable = `
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
 animation: swing 1s ease;
 animation-iteration-count: 1;
}

@keyframes swing {
  15% {
    -webkit-transform: translateX(5px);
    transform: translateX(5px);
  }
  30% {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
  }
  50% {
    -webkit-transform: translateX(3px);
    transform: translateX(3px);
  }
  65% {
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
  }
  80% {
    -webkit-transform: translateX(2px);
    transform: translateX(2px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
`;
export { swing, swingStyle, swingHtmlVariable, swingCssVariable };
